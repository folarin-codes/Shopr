import HomeHeader from "@/component/home-header";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import NotificationIcon from '../../assets/images/svg/notofication.svg';


const Notification = ()=>{
    return(
        <SafeView>
            <HomeHeader text="Notifications"/>

            <View style={{backgroundColor:COLORS.inactive, height:.5, marginTop:20}}/>

            <View style={styles.cont}>

                <NotificationIcon/>
                <Text style={styles.notifText}>You haven't gotten any{'\n'}notification yet!</Text>

                <Text style={styles.secondtext}>We'll alert you when something{'\n'}cool happens.</Text>

            </View>

        </SafeView>
    )
}


export default Notification;


const styles = StyleSheet.create({

    cont:{alignSelf:"center", justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:Dimensions.get('screen').height*.3, gap:10},
    
    notifText :{
        fontFamily:'bold',
        textAlign:'center',
        color:COLORS.primary,
        fontSize:SIZES.normal,
       
    },
    secondtext:{
        fontFamily:'light',
        textAlign:'center',
        color:COLORS.lightGrey
    }

})