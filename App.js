// import 'react-native-gesture-handler';
import React from 'react';

//navigators
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//screens
import DetailsScreen from './src/Views/screens/DetailsScreen';
import HomeScreen from './src/Views/screens/HomeScreen';

import {View, Text, StyleSheet} from 'react-native';



export default function App() {
  return (
    <View style={styles.container}>
      <Text>Start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
