import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Alert } from 'react-native';
import MyButton from '../components/MyButton';


export default function LogIn() {
    const handleButtonPress = () => {
        Alert.alert("페이지 이동!");
      };
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Text style={styles.headerText}>회원가입</Text>
      </View>

      <View style={styles.title}>

      </View>
      
      <View style={styles.footer}>
        <MyButton text="Sign Up" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
  header: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    backgroundColor:"green",
  },
  title: {
    flex: 3,
    alignItems:"center",
    justifyContent: "center",
  },
  footer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems:"center",
    marginBottom: 40,
  },
  headerText: {
    fontSize: "60",
    fontWeight: "bold",
  },
});
