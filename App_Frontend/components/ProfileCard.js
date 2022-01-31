import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import RoundButton from './RoundButton';
import ProfilePicture from './ProfilePicture';
import coverpic from "./../Assets/TestPictures/testLogo.jpg"
import { useFonts, Poppins_400Regular} from '@expo-google-fonts/poppins';
export default function ProfileCard() {
    let [fontsLoaded] = useFonts({
        Poppins_400Regular,
      });
  return (
    <View style={{
        backgroundColor:"black",
        height:210,
        marginHorizontal:10,
        borderRadius:8,
        padding:0,
        position:"relative",
        marginBottom:60,
    }}>
        <ImageBackground source={coverpic} resizeMode="cover" imageStyle={{ borderRadius: 8}} style={{width:"100%", height:"100%"}}>
            <Text style={{marginHorizontal:20,marginVertical:10, color:"white",fontSize:27,fontFamily:'Poppins_400Regular'}}>Diae Hajib</Text>
            <View style={{flexDirection:"row",position:"absolute", bottom:0-27,right:10}}>
                <RoundButton name="sharealt"/>
            </View>     
            <View style={{flexDirection:"row",position:"absolute", bottom:0-52.5,left:5, justifyContent:"center", alignItems:"center"}}>
                <ProfilePicture/>
                <RoundButton name="idcard"/>
                <RoundButton name="heart"/>
            </View>
        </ImageBackground>
    </View>
  );
}


var ProfileCardStyle={
    backgroundColor:"black",
}