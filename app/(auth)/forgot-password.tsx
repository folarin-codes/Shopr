
import Button from "@/component/button";
import Header from "@/component/header";
import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import forgotPasswordSchema from "@/validations/auth/forgot-password.validation";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, View } from "react-native";
import * as z from "zod";

const ForgotPassword = () => {
    type forgotPasswordData = z.infer<typeof forgotPasswordSchema>;
    const [forgotPassswordData, setForgotPasswordData] = useState<forgotPasswordData>({
        email: ''
    });
    const [error, setError] = useState('');

    const validateField = () => {
        try {
            forgotPasswordSchema.shape['email'].parse(forgotPassswordData.email);
            setError('');
        } catch (error) {
            if (error instanceof z.ZodError) {
                setError(error.issues[0].message);
            }
        }
    };

    return (
        <SafeView>
            <KeyboardAvoidingView 
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
            >
                <View style={{ flex: 1 }}>
                    <Header 
                        renderIcon icon={<AntDesign name="arrowleft" size={24} color="black" />} 
                        title="Forgot Password" 
                        text="Enter your email for the verification process. We will send 4 digits code to your email."
                    />
                    
                    <View style={{ marginTop: 20 }}>
                        <InputComponent 
                            keyboardType={'email-address'} 
                            error={error} 
                            value={forgotPassswordData.email} 
                            onBlur={() => validateField()} 
                            label="Email" 
                            onChangeText={(mail) => {
                                setForgotPasswordData({ email: mail });
                            }}
                        />
                    </View>
             
                    <View style={{ flex: 1 }} />
                    
                
                    <View style={{ marginBottom: 10 }}>
                        <Button 
                            text="Send Code" 
                            onpress={() => {
                                Keyboard.dismiss();
                                router.push('./verification-code');
                            }}
                        />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeView>
    );
};

export default ForgotPassword;