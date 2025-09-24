import HomeHeader from "@/component/home-header";
import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useState } from "react";
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import SearchIcon from '../../assets/images/svg/searchicon.svg';

const Search = ()=>{


    const [searchString, setSearchString] = useState('')

    return(
        <SafeView>
            <HomeHeader text="Search"/>

            <View style={styles.filterView}>
                <InputComponent style={{width:'90%',}} value={searchString} label="" onChangeText={(text)=> setSearchString(text)} onBlur={()=> console.log('')} icon={<EvilIcons name="search" size={30} color={COLORS.inactive} />} renderIconLeft  placeHolder="Search for clothes...."/>
            </View>


            <View style={styles.view}>
                <SearchIcon/>

                <Text style={styles.mainText}>No Results Found!</Text>
                <Text style={styles.subText}>Try a similar word or something{'\n'}more general</Text>
            </View>

        </SafeView>

    )
}


export default Search;


const styles = StyleSheet.create({
     filterView:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
     },
    view:{alignSelf:"center", justifyContent:'center', alignContent:'center', alignItems:'center', marginTop:Dimensions.get('screen').height*.24, gap:10},
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