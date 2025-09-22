import Button from "@/component/button";
import Header from "@/component/header";
import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import resetPasswordSchema from "@/validations/auth/reset-password.validation";
import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, View } from "react-native";
import z from "zod";


const ResetPassword = ()=>{


    type passwordsSchema = z.infer<typeof resetPasswordSchema>


    const [passwordsVisible, setPasswordsVisible] = useState({
        passwordOneVisible : false,
        passwordTwoVisible : false
    });

    const [passwords, setPasswords] = useState<passwordsSchema>({
        passwordOne: '',
        passwordTwo: ''
    })
    const [errors, setErrors] = useState<Partial<Record<keyof passwordsSchema, string>>>({});


    const validateField = (field: keyof passwordsSchema, value:string)=>{

        try{

            resetPasswordSchema.shape[field].parse(value)
            setErrors((prev)=> ({...prev , [field]:''}))

        }

        catch(error){

            if(error instanceof z.ZodError){
                setErrors((prev) => ({...prev, [field]: error.issues[0].message}))
            }  

        }
    }


    console.log('error ', errors)



  const onBlur = (field: keyof passwordsSchema,value:string)=>{

    if (value.trim()) {
      validateField(field, value);
    }


  }




    return(
        <SafeView>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1 }}
                keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}>

                <View style={{flex:1}}>
                    <Header title="Reset Pasword" renderIcon icon={<AntDesign name="arrowleft" size={24} color="black" />} text="Set the new password for your account so you can login and access all the features."/>


                    <View style={{flex:1}}>

                        <InputComponent onChangeText={(text)=>{

                            setPasswords((prev)=> ({...prev, passwordOne:text}))

                        }} value={passwords.passwordOne} togglePasswordVisibility={()=>

                    {
                         setPasswordsVisible((prev)=>({...prev , passwordOneVisible:!passwordsVisible.passwordOneVisible}))

                    }
                        
                       } inputType="password" textVisible={passwordsVisible.passwordOneVisible}    label="Password"  renderIcon  onBlur={()=>{
                        onBlur('passwordOne', passwords.passwordOne )

                       }} error={errors.passwordOne} />

                    <InputComponent onChangeText={(text)=>{
                          setPasswords((prev)=> ({...prev, passwordTwo:text}))

                    }} value={passwords.passwordTwo} error={errors.passwordTwo} togglePasswordVisibility={()=>

                    {
                        setPasswordsVisible((prev)=>({...prev , passwordTwoVisible:!passwordsVisible.passwordTwoVisible}))

                    }
                        
                       }inputType="password" textVisible={passwordsVisible.passwordTwoVisible}    label="Password"  renderIcon  onBlur={()=>{
                        onBlur('passwordTwo', passwords.passwordTwo )

                       }}  />

                    </View>

                  


                       <View style={{flex:.1}}>

                        <View>
                            <Button text="Continue" onpress={()=> {router.push('/home');
                            }}/>
                        </View>

                       </View>

                </View>

            </KeyboardAvoidingView>
        </SafeView>
    )
}


export default ResetPassword;