
import { create } from 'zustand';


type UserStoreType = {
   userInfo:{
    displayName: string | null,
    email:string | null,

   } ,

   setUserInfo: (user: UserStoreType['userInfo']) => void;

}

const initialUserInfo= {
    displayName:'',
    email:''
}


const userStore = create<UserStoreType>((set)=>({
    userInfo : initialUserInfo,
    setUserInfo : (user)=>  set({
        userInfo :user
    })
   
}))


export default userStore;