import { getItem } from "@/util/secureStore";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import Onboarding from "./onboarding";
import Splash from "./splash";

export default function Index() {


  const [user, setUser] = useState()

  const [loading , setLoading] = useState(true)


  useEffect(()=>{

    const checkUser = async ()=>{


      try{

        // setLoading(true)


        const result =  await getItem('user')

        const user = JSON.parse(result)


        if (user) {

          setUser(user)
        
        }

      }
      catch(e){

      }

      finally{
        setLoading(false)
      }

     
    }

    checkUser()
  }, [])




  if(loading) return <Splash/>
    

   if(user) {
    return <Redirect href={'/sign-in'}/>
   }

  
  return (

    <Onboarding/>
   
  );
}
