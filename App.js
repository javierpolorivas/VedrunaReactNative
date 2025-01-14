// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/paginas/LoginScreen';
import RegisterScreen from './src/paginas/RegisterScreen';
import TabScreen from './src/paginas/TabScreen';  // Asegúrate de que esta ruta sea correcta
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }} // Oculta las cabeceras de todas las pantallas
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="TabScreen" component={TabScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
