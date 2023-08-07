import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import MyButton from "../../components/MyButton"
import { Divider} from 'react-native-paper';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function Alarm ({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>기본설정</Text>
          <BouncyCheckbox
            size={25}
            fillColor="black"
            iconStyle={{ borderColor: "black" }}
            onPress={(isChecked) => {}}
          />
        </TouchableOpacity>      
        
        <Divider />
            
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>음성1</Text>
          <BouncyCheckbox
            size={25}
            fillColor="black"
            iconStyle={{ borderColor: "black" }}
            onPress={(isChecked) => {}}
          />
        </TouchableOpacity>

        <Divider />
            
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>음성2</Text>
          <BouncyCheckbox
            size={25}
            fillColor="black"
            iconStyle={{ borderColor: "black" }}
            onPress={(isChecked) => {}}
          />
        </TouchableOpacity>

        <Divider />
            
        <TouchableOpacity style={styles.titleview}>
          <Text style={styles.subText}>음성3</Text>
          <BouncyCheckbox
            size={25}
            fillColor="black"
            iconStyle={{ borderColor: "black" }}
            onPress={(isChecked) => {}}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.footer}>
        <MyButton text="알람 추가" onPress={() => navigation.navigate('알람 추가')}/>
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
    flex: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  footer: {
    flex: 1,
    marginBottom: 40,
    justifyContent: "flex-end",
    alignItems:"center",
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
