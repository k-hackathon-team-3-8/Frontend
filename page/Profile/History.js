import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function History({navigation}) {
  const year = new Date().getFullYear() + ".";
  const month = new Date().getMonth() + 1 + ".";
  const day = new Date().getDate() + " ";
  const today = [year, month, day];

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <TouchableOpacity><AntDesign name="left" size={25} color="black" /></TouchableOpacity>
        <Text style={styles.date}>{today}</Text>
        <TouchableOpacity><AntDesign name="right" size={25} color="black" /></TouchableOpacity>
      </View>

      <View style={styles.main}>
        <View style={styles.box}>
          <View style={styles.subboxfirst}>
            <Text style={styles.mainText}>알람횟수</Text>
            <Text style={styles.subText}>3</Text>
          </View>
          <View style={styles.subboxsecond}>
            <Text style={styles.mainText}>총 운전시간</Text>
            <Text style={styles.subText}>22: 34</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.alarmbox}>
          <View style={styles.alarmname}>
            <View style={styles.dot}></View>
            <Text style={styles.Text}>알람1</Text>
          </View>
          <Text style={styles.Text}>08:34</Text>
        </View>
        <View style={styles.alarmbox}>
          <View style={styles.alarmname}>
            <View style={styles.dot}></View>
            <Text style={styles.Text}>알람2</Text>
          </View>
          <Text style={styles.Text}>09:34</Text>
        </View>
        <View style={styles.alarmbox}>
          <View style={styles.alarmname}>
            <View style={styles.dot}></View>
            <Text style={styles.Text}>알람3</Text>
          </View>
          <Text style={styles.Text}>09:54</Text>
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
  header: {
    flex: 1,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center",
  },

  main: {
    flex: 2,
    alignItems:"center",
    justifyContent: "center",
  },
  content: {
    flex: 8,
    alignItems:"center",
    justifyContent: "flex-start",
  },
  Text:{
    paddingLeft:10,
  },
  box: {
    width:350,
    height:80,
    borderRadius: 3,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor:"#F9F9F9",
  },
  subboxfirst: {
    flex:1,
    paddingLeft:30,
  },
  subboxsecond: {
    flex:1,
  },
  alarmbox: {
    width:350,
    height:50,
    borderRadius: 3,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor:"#F9F9F9",
    marginBottom:20,
    paddingRight:20,
    paddingLeft:20,
  },
  dot: {
    width:10,
    height:10,
    borderRadius: 100,
    backgroundColor:"#71A4D9",
  },
  alarmname: {
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor:"#F9F9F9",
  },
  subText: {
    fontSize:35,
    fontWeight: "bold",
  },
  date: {
    fontSize:25,
    fontWeight: "bold",
    marginLeft:20,
    marginRight:20,
  },
  mainText: {
    fontSize:15,
    fontWeight: "bold",
  },
});
