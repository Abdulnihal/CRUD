
import React, {Component,useState} from 'react';
import {Platform, StyleSheet, Text, TextInput, View, Dimensions,TouchableOpacity,Title,
Button,Alert,Image,ImageBackground,StatusBar} from 'react-native';
import Create from './Create';
import App from '../App';
const Profile= (props,{navigation})=>{
const {_id,title,description} = props.route.params.item

const deleteBook = ()=>{
  fetch("http://192.168.43.42:4000/delete",{
      method:"post",
      headers:{
       'Content-Type': 'application/json'
      },
      body:JSON.stringify({
          id:_id
      })
  })
  .then(res=>res.json())
  .then(deletedEmp=>{
      Alert.alert(`${title} deleted`)

  })
  .catch(err=>{
   Alert.alert("someting went wrong")
  })
}



    return(
        <View style={{alignItems:"center",margin:15}}>
          <Text style={{fontSize:15}}>Title:{title}</Text>
        <Text style={{fontSize:15}}>Description:{description}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",padding:10}}>
        <Button
        title="edit"
        color="#f194ff"
        onPress={()=>props.navigation.navigate('Update',{_id,title,description})}></Button>
      
        <Button
        title="delete"
        color="red"
        onPress={()=>deleteBook()}></Button>

         </View>
         <Button
        title="Add New Book"
        color="#f194ff"
        onPress={()=>props.navigation.navigate('Create')}></Button>
        <Button
        title="VIEW ALL BOOKS"
        color="#f194ff"
        onPress={()=>props.navigation.navigate('Home')}></Button></View>
        
    )
}

export default Profile