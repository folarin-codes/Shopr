

import HomeHeader from "@/component/home-header";
import SafeView from "@/component/safeview";
// import styles from "@/component/styles";
import { COLORS } from "@/constants/theme";
import { router } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Address from '../../assets/images/svg/address.svg';
import Arrow from '../../assets/images/svg/arrow-right.svg';
import Bell from '../../assets/images/svg/bell.svg';
import Card from '../../assets/images/svg/card.svg';
import Details from '../../assets/images/svg/details.svg';
import Help from '../../assets/images/svg/help.svg';
import Logout from '../../assets/images/svg/logout.svg';
import Order from '../../assets/images/svg/order.svg';
import FAQ from '../../assets/images/svg/question.svg';

const accountOption = [
    {
        id:1,
        name:'My Orders',
        icon: <Order/>,
    },
      {
        id:2,
        name:'My Details',
        icon: <Details/>,
    },
      {
        id:3,
        name:'Address Book',
        icon: <Address/>,
    },
      {
        id:4,
        name:'Payment Methods',
        icon: <Card/>,
    },
      {
        id:5,
        name:'Notifications',
        icon: <Bell/>,
    },
      {
        id:6,
        name:'FAQs',
        icon: <FAQ/>,
    },
      {
        id:7,
        name:'Help Center',
        icon: <Help/>,
    }
]

const Account = ()=>{
    return(
        <SafeView>
          <HomeHeader text="Account"/>
          <View style={{backgroundColor:COLORS.inactive, height:.5, marginTop:20}}/>

          <ScrollView showsVerticalScrollIndicator={false} style={styles.optionContainer}>
            {
                accountOption.map(item=>{
                    return(

                        <Pressable style={styles.option} key={item.id}>
                            <View style={styles.optionSub}>
                                {item.icon}
                            <Text style={styles.optionText}>{item.name}</Text>

                            </View>
                          
                            <Arrow/>
                        </Pressable>

                    )
                })
            }

            <Pressable onPress={()=> router.replace('/sign-in')} style={{marginVertical:20}}>
                <View style={styles.optionSub}>
                    <Logout/>
                    <Text style={[styles.optionText, {color:COLORS.red}]}>Logout</Text>

                </View>
            </Pressable>

          </ScrollView>

        </SafeView>

    )
}


export default Account;


const styles = StyleSheet.create({

    option:{
        flexDirection:'row',
        justifyContent:"space-between",
        marginVertical:20,
        alignItems:"center",
        borderBottomWidth:.2,
        borderColor:COLORS.lightGrey,
        paddingBottom:30
    },
    optionText:{
        fontFamily:'regular',
        color:COLORS.primary,
        fontSize:15
    },
    optionContainer:{

        marginTop:20

    },
    optionSub:{flexDirection:'row', alignItems:'center', gap:15}
})