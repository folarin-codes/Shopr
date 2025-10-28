import Button from "@/component/button";
import Header from "@/component/header";
import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import signInSchema from "@/validations/auth/sign-in.validation";
import { Link, router } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useMemo, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import * as z from "zod";

import Loader from "@/component/loader";
import { auth } from "@/firebaseConfig";
import userStore from "@/store/user.store";
import { SaveItem } from "@/utils/secureStore";
import Toast from "react-native-toast-message";




const SignIn = ()=>{

  type SignInFormData = z.infer<typeof signInSchema>

  const {setUserInfo} = userStore();

  const [loading , setLoading] = useState(false)


  const[signInForm , setSignInForm] = useState<SignInFormData>({
    email:'',
    password:""
    })


  const [errors, setErrors] = useState<Partial<Record<keyof SignInFormData, string>>>({});
  const [passwordVisible, setPasswordVisible] = useState(false)


  const validateField = (field: keyof SignInFormData, value: string) => {
    try {
      // Validate single field
      signInSchema.shape[field].parse(value);
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

  const handleInputChange = (field: keyof SignInFormData, value: string) => {
    setSignInForm(prev => ({ ...prev, [field]: value }));
    
   
  };

  const onBlur = (field: keyof SignInFormData,value:string)=>{

    if (value.trim()) {
      validateField(field, value);
    }


  }


    const isFormValid = useMemo(() => {
    try {
      signInSchema.parse(signInForm);
      return true;
    } catch (error) {
      return false;
    }
  }, [signInForm]);


  const handleSignIn = async (email:string , password:string)=>{

    try{

      setLoading(true)

  signInWithEmailAndPassword(auth, email, password).then(result=>{

    SaveItem('user', JSON.stringify(result.user))

    setUserInfo({displayName:result.user.displayName, email:result.user.email})


    router.navigate('/home')


  }).catch(e=>{
    Toast.show({type:'error',text1: e?.message})
   
  })


}

  

  catch(e){
    Toast.show({type:'error',text1: e?.message})

  }

  finally{
    setLoading(false)
  }



  }


    return(
        <SafeView testID="main-view">
            <Header title="Login to your account" text="It's great to see you again."/>

            <ScrollView>

       

            <KeyboardAvoidingView style={{marginTop:20}} behavior={Platform.OS == 'android'? 'height':'padding'}>

          

                <InputComponent keyboardType="email-address"  onBlur={()=> onBlur('email', signInForm.email)} error={errors.email} value={signInForm.email} onChangeText={(email:string)=> handleInputChange('email',email)} placeHolder="Enter your email address" label="Email"/>

                <InputComponent togglePasswordVisibility={()=> setPasswordVisible(!passwordVisible)} inputType="password" textVisible={passwordVisible} onBlur={()=> onBlur('password', signInForm.password)} error={errors.password} value={signInForm.password} onChangeText={(password:string)=> handleInputChange("password",password )} placeHolder="Enter Password" label="Password"/>

            </KeyboardAvoidingView>

            <View style={styles.secondaryContainer}>
                <Text style={styles.policy}>Forgot your password? <Link href={'./forgot-password'} style={styles.bold}>Reset your password</Link> </Text>

                <Button testId="login" text="Login" inactive={!isFormValid}  disabled={!isFormValid} onpress={()=> handleSignIn(signInForm.email, signInForm.password)}/>

                <View style={styles.cont}>

                    <View style={styles.dash}/>
                    <Text>OR</Text>
                    <View style={styles.dash}/>
                </View> 

                <Button renderLeftIcon icon={<Image style={{height:24, width:24}} source={require('../../assets/images/google8.png')}/>} text="Login with Google" onpress={()=> router.push('/')} style={{backgroundColor:'white',borderColor:COLORS.inactive, borderWidth:1 }} textColor={COLORS.primary} />   


                <Button renderLeftIcon icon={<Image style={{height:24, width:24}} source={require('../../assets/images/facebook.png')}/>} text="Login with Facebook" style={{backgroundColor:'#1877F2'}} onpress={()=> router.push('/')} /> 


                
                <Link href={'./sign-up'} style={{alignSelf:'center'}}>
                  <Text style={styles.policy}>Don't have an account? <Text style={styles.bold} >Join</Text></Text>    
                
                </Link> 
            </View>


            <Loader loading={loading}/>

            </ScrollView>


          

        </SafeView>
    )
}


export default  SignIn;


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