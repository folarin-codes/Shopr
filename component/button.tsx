import { COLORS, SIZES } from "@/constants/theme"
import React from "react"
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from "react-native"

interface ButtonProps {
    renderRightIcon?: boolean,
    renderLeftIcon?: boolean,
    text: string,
    icon?: React.ReactNode,  // Changed this
    onpress: () => void,
    style ?: {},
    inactive ?: boolean,
    isLoading ?: boolean,
    textColor?: string,
    testId?: string,
    disabled?: boolean
}

const Button = ({renderLeftIcon, renderRightIcon, icon, onpress, text, style, inactive, isLoading,textColor, testId, disabled}: ButtonProps) => {
    return(
        <TouchableOpacity disabled={disabled} testID={testId} style={[ styles.button,  {backgroundColor:inactive ? COLORS.inactive :'black',  }, style]} onPress={()=>{

            if(!inactive){
                onpress()
            }

        }}>  

            {renderLeftIcon ? icon : null}   

            <Text style={[styles.text, {color:textColor? textColor :'white'}]}>{text}</Text>

            {renderRightIcon ? icon : null}  

            {
                isLoading && <ActivityIndicator size={'large'} color={'white'}/>
            }

        </TouchableOpacity>
    )
}

export default Button;


const styles = StyleSheet.create({
    button:{
        height:56,
        borderRadius : 8,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        flexDirection:'row',
        gap:10
        

    },
    text:{
        color:COLORS.white,
        fontFamily: 'medium',
        fontSize: SIZES.normal
    }

})

