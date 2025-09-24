import { COLORS, SIZES } from "@/constants/theme";
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

type KeyboardType = 'default' | 'numeric' | 'email-address' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'number-pad' | 'phone-pad' | 'name-phone-pad' | 'decimal-pad' | 'twitter' | 'web-search' | 'visible-password';


interface Input{

    label? : string,
    renderIconLeft? : boolean,
    renderIconRight? : boolean,
    icon ?: React.ReactNode,
    keyboardType?: KeyboardType,
    placeHolder ?: string,
    error?: string,
    value : string,
    onChangeText: (value:string)=> void;
    onBlur : ()=> void;
   
    inputType ?: string,
    textVisible?: boolean,
    togglePasswordVisibility ?: ()=> void,
    style?: {}

}




const InputComponent = ({label , renderIconLeft, renderIconRight, icon, keyboardType='default', placeHolder, error, value, onChangeText, onBlur,  inputType,textVisible=false, togglePasswordVisibility, style}: Input)=>{

    const [focused, setFocused] = useState(false)
    


    return(
        <View style={styles.container}>

            {
                label && <Text style={styles.label}>{label}</Text>
            }
            

            <View  style={[styles.input, {borderColor: focused ? COLORS.primary : COLORS.input}, {borderColor:error ?'red':COLORS.input}]} >

          

                <View style={{flexDirection:'row', alignItems:"center"}}>
                    {
                    renderIconLeft && icon
                }
                    <TextInput hitSlop={30} autoCorrect={false}  style={[style, {fontFamily:'medium', color:COLORS.primary}]}  secureTextEntry={textVisible} value={value} onChangeText={onChangeText} placeholder={placeHolder} keyboardType={keyboardType}  onBlur={()=> {setFocused(false); onBlur() }} onFocus={()=>  setFocused(true)} />

                </View>
     

                    {
                        inputType == 'password' ? 


                        <TouchableOpacity onPress={togglePasswordVisibility}>

                            {
                               textVisible ? <Feather name="eye" size={24} color="black" /> : <Feather name="eye-off" size={24} color="black" />
                            }

                        

                        </TouchableOpacity>
                        

                        :

                        null
                    }


                    {
                    renderIconRight && icon
                    }




            </View>
          
            {
                error && <Text style={styles.error}>{error}</Text>
            }    
        </View>

    )
}


export default InputComponent


const styles = StyleSheet.create({

    container:{

        marginVertical:10

    },


    label:{
        color : COLORS.primary,
        fontSize: SIZES.normal,
        fontFamily: 'medium',
        marginBottom:10
    },
    input:{
        borderWidth:1,
        backgroundColor:COLORS.white,
        borderRadius:8,
        height:50,
        padding:10,
        color: COLORS.primary,
        fontFamily:'regular',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingRight:20,
        alignItems:'center'

    },
    error:{
        color:'red',
        fontFamily:'regular',
        fontSize:SIZES.small
    }

})