import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const MyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#71a4d9",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 350,
    height: 60,
    borderRadius: 10,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default MyButton;
