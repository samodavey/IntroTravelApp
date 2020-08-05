import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialCommunityIcons, Fontisto, Entypo } from '@expo/vector-icons'

import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/Home'
import ContactUsScreen from './screens/ContactUs'
import SmallChangeScreen from './screens/SmallChange'
import MeetTheLeaderScreen from './screens/MeetTheLeader'



const AppTabNavigator = createBottomTabNavigator({
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'For Your Trip',
        tabBarIcon: ({tintColor}) => <Fontisto name="holiday-village" size={30} color={tintColor}/>
      }
    },
    SmallChangeScreen: {
      screen: SmallChangeScreen,
      navigationOptions: {
        tabBarLabel: 'Small Change',
        tabBarIcon: ({tintColor}) => <Entypo name="leaf" size={30} color={tintColor}/>
      }
    },
    MeetTheLeaderScreen: {
      screen: MeetTheLeaderScreen,
      navigationOptions: {
        tabBarLabel: 'Meet The Leader',
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="human-greeting" size={30} color={tintColor}/>
      }
    },
    ContactUs: {
      screen: ContactUsScreen,
      navigationOptions: {
        tabBarLabel: 'Contact Us',
        tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="phone-in-talk" size={30} color={tintColor}/>
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: "#62c8ca",
      inactiveTintColor: "#B8BBC4",
      showLabel: true
    }
  }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator
    },
    {
      initialRouteName: "Loading"
    }
  )
)

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
