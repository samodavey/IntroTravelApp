import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReactNative, { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { min } from 'react-native-reanimated'
import { Fontisto } from '@expo/vector-icons';
import { Font } from 'expo-font'


const {width : WIDTH } = Dimensions.get('window')

export default class App extends React.Component {

  render (){
      return(
        <View style={styles.container}>
        <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <ReactNative.Text style={styles.title}>CHOOSE YOUR DESTINATION</ReactNative.Text>

                <ImageBackground source={require('../assets/trips/bali-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>BALI</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/thailand-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>THAILAND</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/vietnam-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>VIETNAM</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/cambodia-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>CAMBODIA</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/srilanka-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>Sri Lanka</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/japan-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>Japan</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/australia-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>Australia</Text>
                </ImageBackground>
                <ImageBackground source={require('../assets/trips/multitrip-min.jpg')} style={styles.bannerImage}>
                    <Text style={styles.countryName}>Multi-Country</Text>
                </ImageBackground>

            </ScrollView>
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
    marginTop: 30,
    marginBottom: 10,
    fontSize: 45,
    fontFamily: 'Heaters',
    color:'#565656'
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
  bannerImage: {
      flex: 1,
      justifyContent: 'center',
      width: WIDTH,
      minHeight: 200,
      maxHeight: 200
  }
});
