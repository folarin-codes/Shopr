import { Stack } from "expo-router";



const AuthLayout = ()=>{

    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="sign-in"/>
            <Stack.Screen name="sign-up"/>
            <Stack.Screen name="forgot-password"/>
            <Stack.Screen name="verification-code"/>
            <Stack.Screen name="reset-password"/>

        </Stack>
    )

}

export default AuthLayout;