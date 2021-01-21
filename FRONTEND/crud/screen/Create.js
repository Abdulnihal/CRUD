import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  const Create= ({navigation,route})=>{

  




    const [title,setTitle] = useState("")
    const [description,setDes] = useState("")
   const submitData = ()=>{
    
    fetch("http://192.168.43.42:4000/send",{
        method:"post",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({
          
            title,
            description
        })
    })
    .then(res=>res.json())
    .then(data=>{
        Alert.alert(`${title} is saved successfuly`)
        navigation.navigate("Home")
    })
    .catch(err=>{
      Alert.alert("someting went wrong")
  })
   }

   





  return (
    <View style={styles.container}>

 

   <View >

   <Text style={styles.input}>Registeration New Book</Text>

   <View style={styles.inputContainer}>
   <TextInput 
    value={title}
    placeholder="title"
    keyboardType="email-address"
    underlineColorAndroid='transparent'
    onChangeText={text => setTitle(text)}/>
   </View>

   <View style={styles.inputContainer}>
    <TextInput 
    value={description}
     placeholder="description"
     keyboardType="email-address"
     underlineColorAndroid='transparent'
     onChangeText={text => setDes(text)}/>
   </View>

   

   <TouchableOpacity    onPress={() => submitData()}>
     <Text >SUBMIT</Text>
   </TouchableOpacity>
  
   <Button
        title="VIEW ALL BOOKS"
        color="#f194ff"
        onPress={()=>navigation.navigate('Home')}></Button>

  </View>
  
  </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
  },
  inputs:{
    height:45,
    marginLeft:16,
    borderBottomColor: '#FFFFFF',
    flex:1,
   },
   inputContainer: {
    borderBottomColor: '#05C203',
    backgroundColor: '#FFFFFF',
    borderRadius:5,
    borderBottomWidth: 1,
    width:350,
    height:45,
    marginBottom:20,
    flexDirection: 'row',
    alignItems:'center'
  },
})
export default Create