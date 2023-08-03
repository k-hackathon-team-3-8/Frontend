import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { Divider} from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';


export default function Setting({navigation}) {
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
            
            <TouchableOpacity style={styles.titleview} onPress={() => navigation.navigate('회원탈퇴')}>
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
    flex: 0.6,
  },

  alarm: {
    flex: 1.8,
    margin: 10,
  },
  account: {
    flex: 1,
    margin: 10,
  },

  titleview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  titleText: {
    paddingLeft: 10,
    fontSize: 30,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 20,
  },
});
