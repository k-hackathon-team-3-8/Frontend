import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import MyButton from "../components/MyButton"


export default function Change({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <View style={styles.img}>
          <Image
            style={{height:'90%',width:'90%', borderRadius: '100%'}}
            source={require('../assets/profile.jpg')}/>
        </View>
        <TouchableOpacity style={styles.name} onPress={() => navigation.navigate('프로필 수정')}>
          <Text style={styles.nameText}>leedaeun</Text>
          <MaterialCommunityIcons name="pencil" size={24} color="black"/>
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
       
      </View>

      <View style={styles.footer}>
        <MyButton text="수정하기" onPress={() => navigation.navigate('프로필')}/>
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
        width: 150,
        height: 150,
        borderWidth: 1,
        borderBlockColor:"black",
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
