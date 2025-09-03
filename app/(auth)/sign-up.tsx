import Button from "@/component/button";
import Header from "@/component/header";
import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import signUpSchema from "@/validations/auth/sign-up.validation";
import { Link, router } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import * as z from "zod";




const SignUp = ()=>{


    type SignUpFormData = z.infer<typeof signUpSchema>


    const[signUpForm , setSignUpForm] = useState<SignUpFormData>({
        fullName:'',
        email:'',
        password:""
    })


  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});
  const [passwordVisible, setPasswordVisible] = useState(false)


  const validateField = (field: keyof SignUpFormData, value: string) => {
    try {
      // Validate single field
      signUpSchema.shape[field].parse(value);
      // Clear error if validation passes
      setErrors(prev => ({ ...prev, [field]: undefined }));
    } catch (error) {
      if (error instanceof z.ZodError) {
        setErrors(prev => ({ 
          ...prev, 
          [field]: error.issues[0]?.message 
        }));
      }
    }
  };

  const handleInputChange = (field: keyof SignUpFormData, value: string) => {
    setSignUpForm(prev => ({ ...prev, [field]: value }));
    
   
  };

  const onBlur = (field: keyof SignUpFormData,value:string)=>{

     // Validate field on change (optional - you can also validate onBlur)
    if (value.trim()) {
      validateField(field, value);
    }


  }


 




    return(
        <SafeView>
            <Header title="Create an account" text="Let's create your account."/>

            <ScrollView>

       

            <KeyboardAvoidingView style={{marginTop:20}} behavior={Platform.OS == 'android'? 'height':'padding'}>

                <InputComponent onBlur={()=> onBlur('fullName',signUpForm.fullName)} error={errors.fullName} value={signUpForm.fullName} onChangeText={(firstName:string)=> handleInputChange('fullName',firstName )} placeHolder="Enter your full name" label="Full name"/>

                <InputComponent keyboardType="email-address"  onBlur={()=> onBlur('email', signUpForm.email)} error={errors.email} value={signUpForm.email} onChangeText={(email:string)=> handleInputChange('email',email)} placeHolder="Enter your email address" label="Email"/>

                <InputComponent togglePasswordVisibility={()=> setPasswordVisible(!passwordVisible)} inputType="password" textVisible={passwordVisible} onBlur={()=> onBlur('password', signUpForm.password)} error={errors.password} value={signUpForm.password} onChangeText={(password:string)=> handleInputChange("password",password )} placeHolder="Enter Password" label="Password"/>

            </KeyboardAvoidingView>

            <View style={styles.secondaryContainer}>
                <Text style={styles.policy}>By signing up you agree to our <Text style={styles.bold}>Terms, Privacy Policy, </Text>and <Text style={styles.bold}>Cookie Use</Text> </Text>

                <Button text="Create an account" inactive onpress={()=> router.push('/')}/>

                <View style={styles.cont}>

                    <View style={styles.dash}/>
                    <Text>OR</Text>
                    <View style={styles.dash}/>
                </View> 

                <Button text="Sign Up with Google" onpress={()=> router.push('/')} style={{backgroundColor:'white',borderColor:COLORS.inactive, borderWidth:1 }} textColor={COLORS.primary} />   


                <Button text="Sign Up with Facebook" style={{backgroundColor:'#1877F2'}} onpress={()=> router.push('/')} />  


                    <Link href={'/'} style={{alignSelf:'center'}}>
                     <Text style={styles.policy}>Already have an account? <Text style={styles.bold} >Login</Text></Text>    

                    </Link>


               

            </View>

            </ScrollView>


          

        </SafeView>
    )
}


export default  SignUp;


const styles = StyleSheet.create({

    policy:{

        fontFamily:'regular',
        fontSize:SIZES.small,
        color:COLORS.primary, 
        marginTop:10


    },
    bold:{
        fontFamily:'semibold',
        textDecorationLine:'underline'
    },
    secondaryContainer:{
        gap:30
    },
    dash:{
        height:1,
        backgroundColor:COLORS.inactive,
        width:'45%'
    },
    cont:{

        flexDirection:'row',
        alignItems:'center',
        gap:10,
        width:'100%'

    },

    foot:{


    }

})