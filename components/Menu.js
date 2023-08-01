import React from "react";
import { TouchableOpacity, Text, StyleSheet, View, Alert} from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
 const handleButtonPress = () => {
   Alert.alert("페이지 이동!");
 };

  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={handleButtonPress}>
            <AntDesign name="home" size={30} color="black" />
            <Text style={styles.buttonText}>home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleButtonPress}>
            <Ionicons name="md-person-outline" size={30} color="black" />
            <Text style={styles.buttonText}>profile</Text>
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
});