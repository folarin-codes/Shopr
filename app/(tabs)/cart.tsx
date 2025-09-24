import HomeHeader from "@/component/home-header";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import { Dimensions, StyleSheet, Text, View } from "react-native";

import CartIcon from '../../assets/images/svg/cartIcon.svg';

const Cart = ()=>{
    return(
        <SafeView>
            <HomeHeader text="My Cart"/>
            <View style={{backgroundColor:COLORS.inactive, height:.5, marginTop:20}}/>


           <View style={styles.view}>
                <CartIcon/>
            
                <Text style={styles.mainText}>Your Cart is empty!</Text>
                <Text style={styles.subText}>When you add products, they'll{'\n'}appear here.</Text>
                </View>
        
        </SafeView>

    )
}


export default Cart;



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