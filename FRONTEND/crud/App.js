import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screen/Profile';
import Home from './screen/Home';
import Create from './screen/Create';
import Update from './screen/Update';
const Stack = createStackNavigator();
export default function App(){
    return(

         <NavigationContainer>
        <Stack.Navigator initialRouteName="Create">
        <Stack.Screen 
         name="Home"
         component={Home}
        
         />
        <Stack.Screen 
         name="Create"
         component={Create}
        
         />
        <Stack.Screen
         name="Profile"
         component={Profile}
        
          />
      <Stack.Screen
         name="Update"
         component={Update}
        
          />

     </Stack.Navigator>
     </NavigationContainer>
    );
  }
 