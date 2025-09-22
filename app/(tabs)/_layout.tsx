import { COLORS } from "@/constants/theme";
import { Tabs } from "expo-router";
import React from "react";
import { Dimensions, Text, View } from "react-native";
import Home from '../../assets/images/svg/Home.svg';
import AccountFocused from '../../assets/images/svg/account-focused.svg';
import Account from '../../assets/images/svg/account.svg';
import CartFocused from '../../assets/images/svg/cart-focused.svg';
import Cart from '../../assets/images/svg/cart.svg';
import HomeFocused from '../../assets/images/svg/home-focused.svg';
import SavedFocused from '../../assets/images/svg/saved-focused.svg';
import Saved from '../../assets/images/svg/saved.svg';
import Search from '../../assets/images/svg/search.svg';


const TabIcon= ({focused, iconActive, iconInactive, iconName} )=>{

    return(
        <View style={{alignItems:"center", paddingVertical:20, width:Dimensions.get('screen').width*.15, gap:5}}>
            {
                focused ? iconActive : iconInactive
            }

            <Text style={{fontFamily:'medium', color: focused ? COLORS.primary: COLORS.inactive}}>{iconName}</Text>


        </View>
    )


}


const TabLayOut = ()=>{
    return (
        <Tabs screenOptions={{headerShown:false, tabBarStyle:{paddingTop:10,  alignContent:'center',height:88, paddingHorizontal:20 }}}>
            <Tabs.Screen options={{
                title:'',
          
             tabBarIcon:({focused, color})=> <TabIcon

             iconName={'Home'}
             iconActive={<HomeFocused/>}
             iconInactive={<Home/>}
             focused={focused}
                         
             />
            }} name="home"/>

            <Tabs.Screen options={{
                title:'',
          
             tabBarIcon:({focused, color})=> <TabIcon

             iconName={'Search'}
             iconActive={<Search/>}
             iconInactive={<Search/>}
             focused={focused}
                         
             />
             
            
             
               
             
            }} name="search"/>     
             <Tabs.Screen options={{
                title:'',
          
             tabBarIcon:({focused, color})=> <TabIcon

             iconName={'Saved'}
             iconActive={<SavedFocused/>}
             iconInactive={<Saved/>}
             focused={focused}
                         
             />
             
            
             
               
             
            }} name="saved"/>    

            <Tabs.Screen options={{
                title:'',
          
             tabBarIcon:({focused, color})=> <TabIcon

             iconName={'Cart'}
             iconActive={<CartFocused/>}
             iconInactive={<Cart/>}
             focused={focused}
                         
             />
             
            
             
               
             
            }} name="cart"/>      

            <Tabs.Screen options={{
            title:'',
             tabBarIcon:({focused, color})=> <TabIcon

             iconName={'Account'}
             iconActive={<AccountFocused/>}
             iconInactive={<Account/>}
             focused={focused}
                         
             />
             
            
             
               
             
            }} name="account"/>

        </Tabs>
    )
}

export default TabLayOut;