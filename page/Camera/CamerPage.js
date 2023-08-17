import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text,TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraPage({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Camera style={{ flex: 1 }} type={cameraType}/>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>종료</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>작게</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    flex: 9,
  },
  footer: {
    flex: 1.5,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#71a4d9",
    alignItems: "center",
    justifyContent: "center",
    width: '40%',
    height: '50%',
    borderRadius: "100%",
  },
  buttonText: {
    fontSize: 35,
    fontWeight: "bold",
    color:"#fff",
  },
});
