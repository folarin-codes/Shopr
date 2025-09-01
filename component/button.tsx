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
    isLoading ?: boolean
}

const Button = ({renderLeftIcon, renderRightIcon, icon, onpress, text, style, inactive, isLoading}: ButtonProps) => {
    return(
        <TouchableOpacity style={[ styles.button, style, {backgroundColor:inactive ? COLORS.inactive :'black' }]} onPress={onpress}>  

            {renderLeftIcon ? icon : null}   

            <Text style={styles.text}>{text}</Text>

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
        fontFamily: 'regular',
        fontSize: SIZES.normal
    }

})

