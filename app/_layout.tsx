import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Splash from "./splash";


export default function RootLayout() {


  const [loaded , error] = useFonts({
    regular : require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    medium : require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    semibold : require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    bold : require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    light : require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf')


  })


  if(error || !loaded) return <Splash/>


  return (

    <SafeAreaProvider style={{ backgroundColor:'white'}}>
        <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index'/>
        <Stack.Screen name='(auth)'/>
        <Stack.Screen name='(tabs)'/>
        </Stack>

    </SafeAreaProvider>
 
  )




}
