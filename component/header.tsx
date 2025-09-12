import { COLORS, SIZES } from "@/constants/theme";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";


interface HeaderProp {
    title : string,
    icon ?: React.ReactNode, 
    renderIcon?: boolean,
    text?: string

}


const Header = ({title, icon, renderIcon, text}: HeaderProp)=>{
    return(
        <View style={styles.container}>


            {
                renderIcon ? <Pressable hitSlop={20} onPress={()=> router.back()} style={{marginBottom:20}}>
                    {icon}
                </Pressable> : null
            }

            <Text style={styles.heading}>{title}</Text>
            <Text style={styles.text}>{text}</Text>


        </View>
    )
}


export default Header;


const styles = StyleSheet.create({
    container:{
        marginTop: 20

    }, 

    heading : {
        fontFamily : 'bold',
        fontSize : SIZES.heading,
        color : COLORS.primary,
    },

    text:{
        fontFamily:'regular',
        color: COLORS.lightGrey,
        fontSize:SIZES.normal,
        marginTop:10
        

    }

})