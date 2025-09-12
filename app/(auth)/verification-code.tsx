import Button from "@/component/button";
import ConfirmationCode from "@/component/confirmation-code";
import Header from "@/component/header";
import SafeView from "@/component/safeview";
import { COLORS } from "@/constants/theme";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";



const VerificationCode = ()=>{
    return(
        <SafeView>

            <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}>

         
            <View style={{flex:1}}>

                <Header renderIcon icon={<AntDesign name="arrowleft" size={24} color="black" />} title="Enter 4 Digit Code" text="Enter 4 digit code that your receive on your email (cody.fisher45@example.com)."/>

                <View style={{flex:1, marginTop:20}} >
                    <ConfirmationCode/>

                    <Text style={styles.text}>Email not received? <Text style={styles.bold}>Resend code</Text></Text>

                </View>

                <View style={{flex:.1, }}>

                    <View style={{marginBottom:40}}>

                    <Button text="Continue" onpress={()=> router.push('./reset-password')}/>

                    </View>
                </View>

            </View>

            </KeyboardAvoidingView>

        
        </SafeView>
    )
}

export default VerificationCode;


const styles = StyleSheet.create({
    text:{
        textAlign:'center',
        color: COLORS.lightGrey,
        fontFamily:'light',
        marginTop:30
    },
    bold:{
        fontFamily:'semibold',
        textDecorationLine:'underline',
        color:COLORS.primary

    }
})