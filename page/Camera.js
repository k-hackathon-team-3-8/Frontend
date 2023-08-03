import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';


export default function Main() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>

      </View>
      <View style={styles.footer}>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>종료</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>작게</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 7,
    alignItems:"center",
    justifyContent: "center",
  },
  footer: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#71a4d9",
    alignItems: "center",
    justifyContent: "center",
    width: '40%',
    height: '35%',
    borderRadius: "100%",
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "bold",
    color:"#fff",
  },
});
