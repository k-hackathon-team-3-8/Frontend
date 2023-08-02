import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Image,} from 'react-native';
import MyButton from '../components/MyButton';

export default function First({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header} />
      <View style={styles.title}>
        <Image
          style={{height:'80%',width:'30%',resizeMode:'contain'}}
          source={require('../assets/KakaoTalk_20230701_060052335.jpg')}/>
      </View>
      <View style={styles.footer}>
        <MyButton text="Log In" onPress={() => navigation.navigate('LogIn')} />
        <MyButton text="Sign Up" onPress={() => navigation.navigate('SignUp')} />
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
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  footer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 40,
  },
});
