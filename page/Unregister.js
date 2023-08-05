import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import MyButton from '../components/MyButton';
import CheckBox from "../components/CheckBox";


export default function Unregister({navigation}) {

const [unregister, setUnregister] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <View style={styles.form}>
            <Text style={styles.btnText}>- 탈퇴 시 모든 데이터가 삭제되며, 복구가 불가능 합니다.</Text>
        </View>
        <View style={styles.btn}>
            <CheckBox
                onPress={() => setUnregister(!unregister)}
                title="탈퇴 시 주의사항을 모두 확인 했습니다."
                isChecked={unregister}
            />
            <MyButton
              text="확인"
              onPress={() => {
                if (unregister) {
                  navigation.navigate('First');
                }
              }}
              disabled={!unregister}
            />
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
    flex: 1,
    alignItems:"center",
    justifyContent: "flex-start",
  },
  btnText:{
    fontSize: 16,
  },

  btn: {
    flex: 1,
    marginBottom: 40,
    justifyContent: "flex-end",
    alignItems:"center",
  },
  form: {
    flex: 1,
    paddingTop: 40,
    marginRight: 40,
    justifyContent: "flex-start",
    alignItems:"flex-start",
  },
});
