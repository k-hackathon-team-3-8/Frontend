import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Menu from '../../components/Menu';

export default function Profile({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.header}>
        <Ionicons style={styles.setting} name="ios-settings-sharp" size={30} color="black" onPress={() => navigation.navigate('설정')} />
      </View>

      <View style={styles.title}>
        <View style={styles.img}>
          <Image
            style={{height:'90%',width:'90%', borderRadius: '100%'}}
            source={require('../../assets/profile.jpg')}/>
        </View>
        <TouchableOpacity style={styles.name} onPress={() => navigation.navigate('프로필 수정')}>
          <Text style={styles.nameText}>leedaeun</Text>
          <MaterialCommunityIcons name="pencil" size={24} color="black"/>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
       
        <TouchableOpacity style={styles.history} onPress={() => navigation.navigate('알람 기록')}>
          <Text style={styles.menuText}>알람 기록</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.alarm} onPress={() => navigation.navigate('My 알람')}>
          <Text style={styles.menuText}>My 알람</Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Menu/>
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
  backgroundColor:"#71a4d9",
  alignItems:"flex-end",
  justifyContent: "flex-end",
  },

  setting: {
    marginRight: 10,
  },
  title: {
    flex: 3,
    backgroundColor:"#71a4d9",
    alignItems:"center",
    justifyContent: "center",
  },
  menu: {
    flex: 5,
    marginTop: 30,
    alignItems:"center",
    justifyContent: "flex-start",
  },
  menuText:{
    paddingLeft:10,
    fontSize:24,
    fontWeight: "bold",
  },
  history: {
    width:350,
    height:70,
    borderRadius: 5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
    backgroundColor:"#F2F2F2",
    marginBottom:20,
  },
  alarm: {
    width:350,
    height:70,
    backgroundColor:"#F2F2F2",
    borderRadius: 5,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "space-between",
  },
  footer: {
    flex: 1,
    justifyContent:"center",
    backgroundColor:"#fff",
  },
  
  img: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: 120,
    height: 120,
    borderRadius: "100%",
  },
  name: {
    marginLeft:15,
    flexDirection:"row",
    alignItems:"center",
    justifyContent: "center",
  },
  nameText: {
    fontSize:24,
    fontWeight: "bold",
  },
});
