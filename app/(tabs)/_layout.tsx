import { Tabs } from "expo-router";




const TabLayOut = ()=>{
    return (
        <Tabs screenOptions={{headerShown:false}}>
            <Tabs.Screen options={{
             
            }} name="home"/>
            <Tabs.Screen name="profile"/>

        </Tabs>
    )
}

export default TabLayOut;