import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import Profilepic from "./../Assets/TestPictures/testpdp.jpg"
export default function ProfilePicture(props) {
  return (
      <View style={props.style}>
    <View style={{
        height:100,
        width:100,
        backgroundColor:"black",
        borderRadius:100,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 50,
        },
        color:"orange",
        shadowOpacity: 1,
        shadowRadius: 2,
        elevation: 3,
        margin:5,
    }}>
      <ImageBackground source={Profilepic} resizeMode="cover" imageStyle={{ borderRadius: 100}} style={{width:"100%", height:"100%"}}></ImageBackground>
    </View>
    
    </View>
  );
}
