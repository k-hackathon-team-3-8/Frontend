import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MyButton from '../../components/MyButton';

export default function SignUp({navigation}) {
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <View style={styles.form}>
          <TextInput style={styles.textForm} placeholder={'Name'} />
          <TextInput style={styles.textForm} placeholder={'Id'} />
          <TextInput style={styles.textForm} placeholder={'Password'} />
        </View>
        <View style={styles.btn}>
          <MyButton text="회원가입" onPress={() => navigation.navigate('로그인')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
  title: {
    flex: 0.5,
    alignItems:"center",
    justifyContent: "center",
  },
  btn: {
    flex: 0.5,
    justifyContent: "flex-end",
    alignItems:"center",
  },
  form: {
    justifyContent: "center",
    alignItems:"center",
  },
  btnText: {
    color:"#71a4d9",
  },
  textForm: {
    backgroundColor:"#F2F2F2",
    width: 350,
    height: 45,
    borderRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 10,
  },
});