import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';

export default function History({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
 
      </View>

      <View style={styles.main}>

      </View>

      <View style={styles.footer}>

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
    backgroundColor:"red",
  },

  main: {
    flex: 1,
    backgroundColor:"yellow",
  },
  footer: {
    flex: 1,
    backgroundColor:"skyblue",
  },
});
