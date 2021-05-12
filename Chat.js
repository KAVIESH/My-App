import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';

  export default class Chat extends React.Component{
      
      render(){
          return(
      <Text style ={styles.text}>
Chat
      </Text>)
  }
}

const styles = StyleSheet.create({
    text: {
        fontWeigth: '200',
        color: '#ffff',
        fontSize: 20
        
    }})