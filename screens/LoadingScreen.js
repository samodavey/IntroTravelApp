import * as React from 'react';
import { Text, View, StyleSheet, ActivityIndicator, Image } from 'react-native';
import * as Font from 'expo-font'
import { Asset } from 'expo-asset'
import { AppLoading } from 'expo';


// function cacheImages(images){
//   return images.map(image => {
//     if(typeof image === 'string'){
//       return Image.prefetch(image);
//     }else{
//       return Asset.fromModule(image).downloadAsync();
//     }
//   });
// }


export default class LoadingScreen extends React.Component{
  
  // async _loadAssetsAsync(){
  //   await Image.loadAsync({
  //     Bali: require('../assets/trips/bali.jpg'),
  //   })
  // }

  async componentDidMount(){
    await Font.loadAsync({
      Heaters: require('../assets/fonts/Heaters.otf')
    });
    this.props.navigation.navigate("App");
  }

  render(){
    return(
      <View style={styles.container}>
        <Text>Loading...</Text>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});