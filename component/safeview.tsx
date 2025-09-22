import React from "react";
import { Keyboard, StyleSheet, TouchableWithoutFeedback, ViewStyle } from "react-native";
import { SafeAreaView, SafeAreaViewProps } from "react-native-safe-area-context";

interface SafeViewProps extends SafeAreaViewProps {
    children: React.ReactNode;
    style?: ViewStyle;
}

const SafeView = ({ children, style, ...props }: SafeViewProps) => {
    return (

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView 
            style={[styles.container, style]} 
            {...props}>

            {children}
            
        </SafeAreaView>

        </TouchableWithoutFeedback>
   
    );
};

export default SafeView;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingHorizontal: "20%",
        flex: 1,
        paddingTop:0
    },
});