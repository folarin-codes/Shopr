import InputComponent from "@/component/input-component";
import SafeView from "@/component/safeview";
import { COLORS, SIZES } from "@/constants/theme";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from "expo-router";
import { useState } from "react";
import { Dimensions, FlatList, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Bell from '../../assets/images/svg/bell.svg';
import Filter from '../../assets/images/svg/filter.svg';
import SavedFocused from '../../assets/images/svg/saved-focused.svg';

const shopCategories = ['All', 'Tshirt', 'Jeans', 'Shoes', 'Belts'] as const

const tshirtsData = [
    {
        id:1,
        image : require('../../assets/images/products/cloth1.png'),
        name:"Regular Fit Slogan",
        price :'$1.150',
        discount : null
    },
        {
        id:2,
        image : require('../../assets/images/products/cloth2.png'),
        name:"Regular Fit Polo",
        price :'$1.100',
        discount : '52%'
    },
        {
        id:3,
        image : require('../../assets/images/products/cloth3.png'),
        name:"Regular Fit Black",
        price :'$1.690',
        discount : null
    },
        {
        id:4,
        image : require('../../assets/images/products/cloth4.png'),
        name:"Regular Fit V-Neck",
        price :'$1.290',
        discount : null
    },
        {
        id:1,
        image : require('../../assets/images/products/cloth5.png'),
        name:"Regular Fit Shirt",
        price :'$1.000',
        discount : null
    },
        {
        id:1,
        image : require('../../assets/images/products/cloth6.png'),
        name:"Regular Fit Round-Neck",
        price :'$1.190',
        discount : null
    },

]

type categoryType = typeof shopCategories[number]

const Home = ()=>{

   



    const [searchString , setSearchString] = useState('');
    const [category , setCategory] = useState<categoryType>('All')

    



    return(
        <SafeView>
            <View style={styles.heading}>
                <Text style={styles.headingText}>Discover</Text>

                <Pressable hitSlop={20} onPress={()=> router.push('/notification')}>
                    <Bell/>
                </Pressable>
                
        

            </View>

            <View style={styles.filterView}>
                <InputComponent style={{width:'75%'}} value={searchString} label="" onChangeText={(text)=> setSearchString(text)} onBlur={()=> console.log('')} icon={<EvilIcons name="search" size={30} color={COLORS.inactive} />} renderIconLeft  placeHolder="Search for clothes...."/>

                <Pressable style={styles.filter}>

                    <Filter/>

                </Pressable>

            </View>

            <View style={styles.categoryContainer}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} >

                    {
                        shopCategories.map((item)=>{
                            return(
                                <Pressable key={item} style={{backgroundColor: category == item ? COLORS.primary : 'white', paddingHorizontal:25, paddingVertical:10, borderRadius:8, borderWidth:1, borderColor:COLORS.inactive, marginRight:20}} onPress={()=> setCategory(item)}>
                                    <Text style={{fontFamily:'medium',color:category== item ? 'white' :COLORS.primary, fontSize:SIZES.normal }}>{item}</Text>

                                </Pressable>
                            )

                        })
                    }

                </ScrollView>
            </View>


           

                <FlatList
                showsVerticalScrollIndicator={false}
                // keyExtractor={({id})=> id}

                data={tshirtsData}

                renderItem={({item})=>{
                    return(
                        <Pressable style={{marginVertical:10,}}>
                            <Image style={{width:Dimensions.get('screen').width*.40, height:174, borderRadius:8}} source={item.image}/>
                            <Text style={{marginTop:10, fontFamily:'semibold'}}>{item.name}</Text>

                            <View style={{flexDirection:'row', gap:5}}>
                                <Text style={{fontFamily:'light', color:COLORS.lightGrey}}>{item.price}</Text>

                                {item.discount && <Text style={{color:'red'}}>-{item.discount}</Text>}
                                

                            </View>

                            <Pressable style={{backgroundColor:"white", padding:10, borderRadius:10, position:'absolute', top:10, right:10}}>

                                <SavedFocused/>

                            </Pressable>
                        
                        </Pressable>

                    )
                }}

                numColumns={2}

                columnWrapperStyle={{justifyContent:'space-between', flexDirection:'row',gap:30, }}

                style={{marginTop:20,  flex:1, }}

                
                />

          


         

        </SafeView>
    )
}


export default Home;



const styles = StyleSheet.create({
    heading:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    },
    headingText:{
        fontFamily:'bold',
        fontSize:SIZES.heading

    },
    filterView:{
        flexDirection:'row',
        marginTop:10,
        justifyContent:'space-between'
     

    },
    filter:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:COLORS.primary,
        width:50,
        height:50,
        borderRadius:10,
        alignSelf:'center'
    },
    categoryContainer:{
        marginTop:15
    }


})