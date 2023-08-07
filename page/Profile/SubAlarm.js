import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { Divider} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export default function SubAlarm ({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.main}>
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>녹음하기</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>      
        
        <Divider />
            
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>파일 추가하기</Text>
          <Ionicons name="chevron-forward" size={24} color="black" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
  main: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  titleview: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 5,
    paddingRight:5,
  },
  subText: {
    fontSize:15,
  },
});
