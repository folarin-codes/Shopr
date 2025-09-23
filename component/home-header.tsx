

import { COLORS, SIZES } from "@/constants/theme";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import Arrow from '../assets/images/svg/arrow.svg';
import Bell from '../assets/images/svg/bell.svg';

const HomeHeader = (props: {text:string})=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>

            <Pressable hitSlop={20} onPress={()=> router.back()}>
                <Arrow/>

            </Pressable>
     

            <Text style={{color:COLORS.primary, fontFamily:'bold', fontSize:SIZES.header}}>{props.text}</Text>

            <Bell/>


        </View>
    )
} 


export default HomeHeader;