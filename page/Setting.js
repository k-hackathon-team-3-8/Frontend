import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Alert } from 'react-native';
import { Divider} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export default function LogIn() {
    const handleButtonPress = () => {
        Alert.alert("페이지 이동!");
      };
    
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <View style={styles.alarm}>
            <Text style={styles.titleText}>알람</Text>
            <View style={styles.titleview}>
                <Text style={styles.subText}>알람</Text>
            </View>

            <Divider />

            <View style={styles.titleview}>
                <Text style={styles.subText}>알람횟수</Text>
            </View>

            <Divider />

            <View style={styles.titleview}>
                <Text style={styles.subText}>진동</Text>
            </View>

            <Divider />

            <View style={styles.titleview}>
                <Text style={styles.subText}>워치연동</Text>
            </View>
        </View>
        <View style={styles.account}>
            <Text style={styles.titleText}>계정</Text>
            <TouchableOpacity style={styles.titleview}>
                <Text style={styles.subText}>로그아웃</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>

            <Divider />
            
            <TouchableOpacity style={styles.titleview}>
                <Text style={styles.subText}>회원탈퇴</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
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
    flex: 5,
  },

  headerText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  headerpart: {
    flex: 1,
    alignItems: "center",
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 20,
  },
});
