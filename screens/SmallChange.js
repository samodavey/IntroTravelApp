import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReactNative, { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Font } from 'expo-font'
import { TouchableOpacity } from 'react-native-gesture-handler';


const {width : WIDTH } = Dimensions.get('window')
const images = [
    require('../assets/smallchange/small-change-merch-1.jpg'),
    require('../assets/smallchange/small-change-merch-2.jpg'),
    require('../assets/smallchange/small-change-merch-3.jpg'),
];
const randomImage = images[Math.floor((Math.random() * 2) + 1)]

export default class App extends React.Component {

  render (){
      return(
        <View style={styles.container}>
        <StatusBar style="auto" />
            <ImageBackground source={randomImage} style={styles.backgroundImage}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>OUR MISSION</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.title}>WHAT WE DO</Text>
                </TouchableOpacity>
            </ImageBackground>

        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    alignSelf: 'center',
    fontSize: 40,
    fontFamily: 'Heaters',
    color:'#FFF'
    //62c8ca
  },
  countryName:{
    position: 'absolute',
    alignSelf: 'center',
    marginTop: 75,
    fontSize: 60,
    fontFamily: 'Heaters',
    color: '#FFF',
    backgroundColor: '#ec8a68',
    opacity: .95,
    paddingHorizontal: 45
  },
  backgroundImage: {
      flex: 1,
      width: WIDTH,
      resizeMode:'cover'
  },
  button:{
      width:150,
      height:150,
      backgroundColor: '#62c8ca',
      borderRadius: 75,
      justifyContent:'center',
      alignItems:'center',
      alignSelf:'center',
      marginTop: 125,
      borderWidth: 2.5,
      borderColor: '#ec8a68'
  }
});
