// In App.js in a new project

import * as React from 'react';
import { View, Text, StatusBar } from 'react-native';

import HomeScreen from './src/pages/HomeScreen';
import DetailScreen from './src/pages/DetailScreen';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <StatusBar barStyle="light-content"></StatusBar>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator>
        
        
          <Stack.Screen name="Netflix" component={HomeScreen} />
          <Stack.Screen
            options={({ route }) => ({ title: route.params.movie.title })}
            name="Detail"
            component={DetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;