import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


export default function Profile({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>프로필</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#71a4d9",
  },
});
