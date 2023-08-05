import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {

  return (
    <View style={styles.container}>
      
        <TouchableOpacity>
          <View style={styles.btn}>
            <AntDesign name="home" size={25} color="black" />
            <Text style={styles.buttonText}>home</Text>
          </View>
        </TouchableOpacity>
      
      
        <TouchableOpacity>
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