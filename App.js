// import 'react-native-gesture-handler';
import React from 'react';
// import Animated from 'react-native-reanimated';

//navigators
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackView } from '@react-navigation/native-stack';

//screens
import DetailsScreen from './src/Views/screens/DetailsScreen';
import HomeScreen from './src/Views/screens/HomeScreen';

import DrawerNavigator from './src/Views/navigators/DrawerNavigator';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions = {{headerShown: false }}>
        <Stack.Screen name = "HomeScreen" component = {DrawerNavigator}/>
        <Stack.Screen name = "DetailsScreen" component = {DetailsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

