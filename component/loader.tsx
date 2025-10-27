import { Image, View } from "react-native";




const Loader = ({loading}:any)=>{
    return(
          <View style={{position:'absolute',left:'30%', top:'30%' }} >
              {/* <ActivityIndicator size={'large'} color={COLORS.primary} animating={loading}/> */}
               {loading && <Image height={100} width={100} source={require('../assets/images/gif/Loader.gif')}/>}

            </View>
    )
}

export default Loader;