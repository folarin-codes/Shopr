import HomeHeader from "@/component/home-header";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import SavedIcon from '../../assets/images/svg/heart.svg';
const Saved = ()=>{
    return(
        <SafeView>
            <HomeHeader text="Saved Items"/>
            <View style={{backgroundColor:COLORS.inactive, height:.5, marginTop:20}}/>


           <View style={styles.view}>
                <SavedIcon/>
            
                <Text style={styles.mainText}>No Results Found!</Text>
                <Text style={styles.subText}>Try a similar word or something{'\n'}more general</Text>
                </View>
        
        </SafeView>

    )
}


export default Saved;



const styles = StyleSheet.create({
     filterView:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
     },
    view:{alignSelf:"center", justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:Dimensions.get('screen').height*.3, gap:10},
    mainText:{
         fontFamily:'bold',
        textAlign:'center',
        color:COLORS.primary,
        fontSize:SIZES.normal,
       

    },
    subText:{
          fontFamily:'light',
        textAlign:'center',
        color:COLORS.lightGrey

    }
     


})