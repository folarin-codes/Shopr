import Button from "@/component/button";
import Header from "@/component/header";
import InputComponent from "@/component/input-component";
import Loader from "@/component/loader";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import { SaveItem } from "@/util/secureStore";
import signUpSchema from "@/validations/auth/sign-up.validation";
import { Link, router } from "expo-router";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useMemo, useState } from "react";
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from "react-native";
import Toast from "react-native-toast-message";
import * as z from "zod";
import { auth } from '../../firebaseConfig';

const SignUp = ()=>{


    type SignUpFormData = z.infer<typeof signUpSchema>


    const[signUpForm , setSignUpForm] = useState<SignUpFormData>({
        fullName:'',
        email:'',
        password:"",
        confirmPassword:"",
    })

    const [loading , setLoading] = useState(false);


  const [errors, setErrors] = useState<Partial<Record<keyof SignUpFormData, string>>>({});
  const [passwordVisible, setPasswordVisible] = useState(false)




  const validateField = (field: keyof SignUpFormData, value: string) => {
    try {


       if (field === 'confirmPassword') {
      // For confirmPassword, validate against the password field
      if (value !== signUpForm.password) {
        setErrors(prev => ({ 
          ...prev, 
          confirmPassword: 'Passwords do not match' 
        }));
        return;
      }
    }
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

        // console.log('error ', error)
      }
    }
  };

  const handleInputChange = (field: keyof SignUpFormData, value: string) => {
    setSignUpForm(prev => ({ ...prev, [field]: value }));
    
   
  };

  const onBlur = (field: keyof SignUpFormData,value:string)=>{

    if (value.trim()) {
      validateField(field, value);
    }


  }


    const isFormValid = useMemo(() => {
    try {
      signUpSchema.parse(signUpForm);
      return true;
    } catch (error) {
      return false;
    }
  }, [signUpForm]);


  const handleCreateAccount = async (email:string, password:string)=>{

    try{

      setLoading(true)

      await createUserWithEmailAndPassword(auth,email, password).then((userCredentials)=>{

        const user = userCredentials.user;

        return user

      }).then((user)=>{

        SaveItem('user', JSON.stringify(user))

        updateProfile(user, {
          displayName: signUpForm.fullName
        }).then(res =>{

          console.log('result ', res)
          Toast.show({type:'success', text1:"You have ceated an account successfully"})

          router.navigate('/home')

        })

      }).catch(e=> {
        
        console.log('catch error ', e)

        Toast.show({type:'error', text1:e?.message})



      })

    }
    catch(e){

      console.log('error ', e)

    }
    finally{

      setLoading(false)

    }

  }





    return(
        <SafeView>
            <Header title="Create an account" text="Let's create your account."/>

            <ScrollView showsVerticalScrollIndicator={false}>

       

            <KeyboardAvoidingView style={{marginTop:20}} behavior={Platform.OS == 'android'? 'height':'padding'}>

                <InputComponent onBlur={()=> onBlur('fullName',signUpForm.fullName)} error={errors.fullName} value={signUpForm.fullName} onChangeText={(firstName:string)=> handleInputChange('fullName',firstName )} placeHolder="Enter your full name" label="Full name"/>

                <InputComponent keyboardType="email-address"  onBlur={()=> onBlur('email', signUpForm.email)} error={errors.email} value={signUpForm.email} onChangeText={(email:string)=> handleInputChange('email',email)} placeHolder="Enter your email address" label="Email"/>

                <InputComponent togglePasswordVisibility={()=> setPasswordVisible(!passwordVisible)} inputType="password" textVisible={passwordVisible} onBlur={()=> onBlur('password', signUpForm.password)} error={errors.password} value={signUpForm.password} onChangeText={(password:string)=> handleInputChange("password",password )} placeHolder="Enter Password" label="Password"/>

                  <InputComponent togglePasswordVisibility={()=> setPasswordVisible(!passwordVisible)} inputType="password" textVisible={passwordVisible} onBlur={()=> onBlur('confirmPassword', signUpForm.confirmPassword)} error={errors.confirmPassword} value={signUpForm.confirmPassword} onChangeText={(password:string)=> handleInputChange("confirmPassword",password )} placeHolder="Confirm Password" label="Confirm password"/>

            </KeyboardAvoidingView>

            <View style={styles.secondaryContainer}>
                <Text style={styles.policy}>By signing up you agree to our <Text style={styles.bold}>Terms, Privacy Policy, </Text>and <Text style={styles.bold}>Cookie Use</Text> </Text>

                <Button text="Create an account" inactive={!isFormValid} 


onpress={()=> handleCreateAccount(signUpForm.email, signUpForm.confirmPassword)}
                
                
                />

                <View style={styles.cont}>

                    <View style={styles.dash}/>
                    <Text>OR</Text>
                    <View style={styles.dash}/>
                </View> 

                <Button renderLeftIcon icon={<Image style={{height:24, width:24}} source={require('../../assets/images/google8.png')}/>} text="Sign Up with Google" onpress={()=> router.push('/')} style={{backgroundColor:'white',borderColor:COLORS.inactive, borderWidth:1 }} textColor={COLORS.primary} />   


                <Button renderLeftIcon icon={<Image style={{height:24, width:24}} source={require('../../assets/images/facebook.png')}/>} text="Sign Up with Facebook" style={{backgroundColor:'#1877F2'}} onpress={()=> router.push('/')} />  


                    <Link href={'./sign-in'} style={{alignSelf:'center'}}>
                     <Text style={styles.policy}>Already have an account? <Text style={styles.bold} >Login</Text></Text>    

                    </Link>


               

            </View>

            <Loader loading={loading} />



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