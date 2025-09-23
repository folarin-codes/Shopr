

import { COLORS, SIZES } from "@/constants/theme";
import { Text, View } from "react-native";
import Arrow from '../assets/images/svg/arrow.svg';
import Bell from '../assets/images/svg/bell.svg';

const HomeHeader = (props: {text:string})=>{
    return(
        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <Arrow/>

            <Text style={{color:COLORS.primary, fontFamily:'bold', fontSize:SIZES.header}}>{props.text}</Text>

            <Bell/>


        </View>
    )
} 


export default HomeHeader;