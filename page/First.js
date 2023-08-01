import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Image, Alert } from 'react-native';
import MyButton from '../components/MyButton';

export default function First() {
  const handleButtonPress = () => {
    Alert.alert("페이지 이동!");
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header} />
      <View style={styles.title}>
        <Image
          style={{height:'100%',width:'50%',resizeMode:'contain'}}
          source={require('../assets/KakaoTalk_20230701_060052335.jpg')}/>
      </View>
      <View style={styles.footer}>
        <MyButton text="Log In" onPress={handleButtonPress} />
        <MyButton text="Sign Up" onPress={handleButtonPress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
