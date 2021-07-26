import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../login';
import Sesion from '../sesion';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="sesion" component={Sesion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}