import React from "react";
import { TouchableOpacity, Text, StyleSheet, View} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Menu({navigation}) {

  return (
    <View style={styles.container}>
      
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <View style={styles.btn}>
            <AntDesign name="home" size={25} color="black" />
            <Text style={styles.buttonText}>home</Text>
          </View>
        </TouchableOpacity>
      
      
        <TouchableOpacity onPress={() => navigation.navigate('프로필')}>
          <View style={styles.btn}>
            <Ionicons name="md-person-outline" size={25} color="black" />
            <Text style={styles.buttonText}>profile</Text>
          </View>
        </TouchableOpacity>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonText: {
    fontWeight: "bold",
  },
  btn: {
    justifyContent: "center",
    alignItems:"center",
  },
});