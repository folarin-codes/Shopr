import * as SecureStore from 'expo-secure-store';


const SaveItem = async (key:string, value:string)=>{

    await SecureStore.setItemAsync(key, value)

}


const getItem = async (key:string)=>{
    let result = await SecureStore.getItemAsync(key) 

    if(result){
        return result
    }
    
    return 'no item exist'
}



export { getItem, SaveItem };
