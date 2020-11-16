/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { SafeAreaView, StyleSheet, Image, ScrollView, View, Text, StatusBar, } from 'react-native';
import { Header, LearnMoreLinks, Colors, DebugInstructions, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

import login from './App/UI/login';
import HomeScreen from './App/UI/homescreen';
import LocationUpdate from './App/UI/LocationUpdate';
import APICall from './App/UI/APICall';
import Imagepicker from './App/UI/Imagepicker';
import GoogleMaps from './App/UI/GoogleMaps';
import FlatListModel from './App/UI/FlatListModel';




const Stack = createStackNavigator();




const App = () => {

  return (
    // <View style={styles.sectionContainer}>
    //   <Text style={styles.sectionTitle}>Hi Harris</Text>
    // </View>

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={login} options={{ headerShown: false }} />

        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: 'My home',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

        <Stack.Screen name="Location" component={LocationUpdate} options={{ title: 'Location Update' }} />

        <Stack.Screen name="API" component={APICall} options={{ title: 'API' }} />

        <Stack.Screen name="Imagepick" component={Imagepicker} options={{ title: 'Picker' }} />

        <Stack.Screen name="Maps" component={GoogleMaps} options={{ title: 'Google Maps' }} />
        <Stack.Screen name="Flatlist" component={FlatListModel} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  );

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },

  canvas: {
    resizeMode: "center",
    height: 80

  }


});


export default App;
