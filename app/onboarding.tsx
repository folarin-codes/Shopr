import Button from "@/component/button";
import SafeView from "@/component/safeview";
import { SIZES } from "@/constants/theme";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from "expo-router";

const Onboarding = ()=>{

    const {width , height} = Dimensions.get('screen');

    return(
        <SafeView>

            <View style={styles.container}>
                <Text style={styles.heading}>Define {'\n'}yourself in {'\n'}your unique{'\n'}way.</Text>


            </View>


                <Image style={{height:height*.7, width:width*.8, alignItems:'flex-end',position:'absolute', left:width*.2,top:100 , zIndex:1}} resizeMode="cover" source={require('../assets/images/onboard.png')}/>


            <View style={{flex:1, position:'relative', top:height*.53}}>
                <Button renderRightIcon icon={<AntDesign name="arrowright" size={24} color="white" />}  text="Get Started" onpress={()=> router.push('/sign-up')}/>
            </View>



        </SafeView>
    )
    
}


export default Onboarding;


const styles = StyleSheet.create({
    container:{
        // backgroundColor:'red',
        paddingTop:20,
        paddingLeft:20
        // height:500
      
        
        
    },
    heading :{

        fontSize:SIZES.large,
        fontFamily:'bold',
        // lineHeight:
    },
   


})

