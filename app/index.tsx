import { getItem } from "@/utils/secureStore";
import { Redirect } from "expo-router";
import { useEffect, useState } from "react";
import Onboarding from "./onboarding";

export default function Index() {


  const [user, setUser] = useState()


  useEffect(()=>{

    const checkUser = async ()=>{

      const result =  await getItem('user')

      const user = JSON.parse(result)


      if (user) {

        setUser(user)
      
      }
    }

    checkUser()
  }, [])


    

   if(user) {
    return <Redirect href={'/sign-in'}/>
   }

  
  return (

    <Onboarding/>
   
  );
}
