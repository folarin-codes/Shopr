import { COLORS, SIZES } from "@/constants/theme";
import React from "react";
import { StyleSheet, Text, View } from "react-native";


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
                renderIcon ? <View style={{marginBottom:20}}>
                    {icon}
                </View> : null
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
        color : COLORS.primary
    },

    text:{
        fontFamily:'light',
        color: COLORS.lightGrey,
        fontSize:SIZES.small
        

    }

})