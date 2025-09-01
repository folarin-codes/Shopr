import { ActivityIndicator, Dimensions, Image, StyleSheet, View } from "react-native";





const Splash = ()=>{

    return(
        <View style={styles.conatiner}> 
            <View>
                <Image style={styles.image} source={require('../assets/images/ivon.png')} />
                
            </View>

            <View>
                <ActivityIndicator style={styles.loader} size={'large'} color={'white'} />

            </View>

        </View>
    )

}

export default Splash;

const styles = StyleSheet.create({
    conatiner:{
        flex:1,
        backgroundColor:'#1A1A1A',
        justifyContent:'center'
    },
    image:{
        alignSelf:'center',
        resizeMode:'contain',
        height:133,
        width:134
    },
    loader:{
        bottom:-50,
        position:'absolute',

        top:Dimensions.get('screen').height*.3,
        alignSelf:'center'
     
    }
}) 