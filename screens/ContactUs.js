import { StatusBar } from 'expo-status-bar';
import React from 'react';
import ReactNative, { StyleSheet, Text, View, Image, Dimensions, SafeAreaView, ScrollView, ActivityIndicator, ImageBackground } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { Font } from 'expo-font'


const {width : WIDTH } = Dimensions.get('window')

export default class App extends React.Component {

  render (){
      return(
        <View style={styles.container}>
        <StatusBar style="auto" />
            <ScrollView style={styles.scrollView}>
                <ReactNative.Text style={styles.title}>CONTACT US</ReactNative.Text>
                
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
      width: WIDTH,
      minHeight: 200,
      maxHeight: 200
  }
});
