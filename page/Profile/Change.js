import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity, Image, TextInput} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import MyButton from "../../components/MyButton"


export default function Change({navigation}) {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={styles.title}>
        <View style={styles.img}>
          <Image
            style={{height:'90%',width:'90%', borderRadius: '100%',}}
            source={require('../../assets/profile.jpg')}/>
        </View>
        <TouchableOpacity style={styles.camera}>
          <Entypo name="camera" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.menu}>
        <View style={styles.formfirst}>
          <Text style={styles.name}>Name</Text>
          <TextInput style={styles.textForm} value='leedaeun'/>
        </View>
        <View style={styles.form}>
          <Text style={styles.name}>Id</Text>
          <TextInput style={styles.textForm} value='delee2008'/>
        </View>
        <View style={styles.form}>
          <Text style={styles.name}>Password</Text>
          <TextInput style={styles.textForm} value='**************'/>
        </View>
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
      title: {
        flex: 2,
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "center",
      },
      menu: {
        flex: 3,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent: "flex-start",
      },
      footer: {
        flex: 1,
        marginBottom: 40,
        justifyContent: "flex-end",
        alignItems:"center",
        backgroundColor:"#fff",
      },
      
      img: {
        position:"relative",
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
        paddingLeft: 5,
        fontSize:15,
        fontWeight: "bold",
      },
      form: {
        marginTop: 15,
      },
      textForm: {
        backgroundColor:"#FFF",
        width: 350,
        height: 45,
        borderRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        marginTop: 5,
        borderWidth: 1,
        borderBlockColor:"black",
      },
      camera: {
        position:"absolute",
        top:165,
        right:135,
      },
});
