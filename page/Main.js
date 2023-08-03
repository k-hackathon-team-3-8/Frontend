import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Menu from '../components/Menu';


export default function Main({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Ionicons style={styles.setting} name="ios-settings-sharp" size={30} color="black" onPress={() => navigation.navigate('설정')} />
      </View>
      <View style={styles.title}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
            <Text style={styles.buttonText}>시작</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <Menu/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#71a4d9",
  },
  header: {
    flex: 1,
    alignItems:"flex-end",
    justifyContent: "flex-end",
  },
  setting: {
    marginRight: 10,
  },
  title: {
    flex: 8,
    alignItems:"center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  button: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: '45%',
    height: '25%',
    borderRadius: "100%",
    borderWidth: 2,
    borderBlockColor:"black",
  },
  buttonText: {
    fontSize: 60,
    fontWeight: "bold",
  },
});
