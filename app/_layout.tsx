import { NotificationProvider } from '@/context/NotificationContext';
import { auth } from '@/firebaseConfig';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { Stack } from 'expo-router';
import { onAuthStateChanged } from 'firebase/auth';
// import { StatusBar } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Splash from "./splash";

export default function RootLayout() {





Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: false,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});


 

  onAuthStateChanged(auth, (user)=>{

    // console.log('my user ', user)

  })


  const [loaded , error] = useFonts({
    regular : require('../assets/fonts/Montserrat/static/Montserrat-Regular.ttf'),
    medium : require('../assets/fonts/Montserrat/static/Montserrat-Medium.ttf'),
    semibold : require('../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf'),
    bold : require('../assets/fonts/Montserrat/static/Montserrat-Bold.ttf'),
    light : require('../assets/fonts/Montserrat/static/Montserrat-Light.ttf')


  })


  if(error || !loaded) return <Splash/>


  return (

    <NotificationProvider>
      <StatusBar backgroundColor='black'/>
       <SafeAreaProvider style={{ backgroundColor:'white', }}>
            <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name='index'/>
            <Stack.Screen name='(auth)'/>
            <Stack.Screen name='(tabs)'/>
            <Stack.Screen name='(home)'/>
          </Stack>
          <Toast/>
        </SafeAreaProvider>
     </NotificationProvider>
 
  )




}
