import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import { Divider} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import Slider from '@react-native-community/slider';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-simple-modal';
import CustomSwitch from '../components/SwitchComponent';

export default function Setting({navigation}) {
  const [open, setOpen] = useState(false);

  const [drop, setDrop] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
      {label: '1회', value: '1'},
      {label: '3회', value: '2'},
      {label: '5회', value: '3'},
  ]);

  const [myValue, setMyValue] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.title}>
        <View style={styles.alarm}>
            <Text style={styles.titleText}>알람</Text>

            <View style={styles.titleview}>
              <Text style={styles.subText}>알람</Text>
              <CustomSwitch/>
            </View>
            <Slider
                style={{ height: 10, width: 370 }}
                value={myValue}
                onValueChange={(value) => setMyValue(value)} // 슬라이더를 움질일때 출력값 변환
                minimumValue={0} // 최소값 설정
                maximumValue={100} // 최대값 설정
                maximumTrackTintColor='#f2f2f2' // 값이 크면 빨간색
                minimumTrackTintColor='#71A4D9' // 값이 작으면 파란색
                step={1} // 1단위로 값이 변경 
            />
            <Divider />

            <View style={styles.titleview}>
                <Text style={styles.subText}>알람횟수</Text>
                  <DropDownPicker
                    open={drop}
                    value={value}
                    items={items}
                    setOpen={setDrop}
                    setValue={setValue}
                    setItems={setItems}
                    placeholder="횟수"
                    containerStyle = {{
                      width: 75,
                    }}
                    listMode="MODAL"
                    modalProps={{
                      animationType: 'fade',
                    }}
                    modalTitle="선택해주세요."
                  />
            </View>

            <Divider />

            <View style={styles.titleview}>
              <Text style={styles.subText}>진동</Text>
              <CustomSwitch/>
            </View>

            <Divider />

            <View style={styles.titleview}>
              <Text style={styles.subText}>워치연동</Text>
              <CustomSwitch/>
            </View>
        </View>

        <View style={styles.account}>
            <Text style={styles.titleText}>계정</Text>
            <TouchableOpacity style={styles.titleview} onPress={() => setOpen(true)}>
              <Text style={styles.subText}>로그아웃</Text>
              <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>      
            <Divider />
            
            <TouchableOpacity style={styles.titleview} onPress={() => navigation.navigate('회원탈퇴')}>
                <Text style={styles.subText}>회원탈퇴</Text>
                <Ionicons name="chevron-forward" size={24} color="black" />
            </TouchableOpacity>
        </View>
      </View>

      <Modal 
        open={open}
        modalDidClose={() => setOpen(false)}
        modalStyle={{
          borderRadius: 20,
          padding: 0,
          width:280,
          margin: 55,
        }}
        >
          <View>
            <Text style={styles.modalMainText}>로그아웃 하시겠습니까?</Text>
            <View style={styles.modalBtn}>
              <TouchableOpacity style={styles.modalCancel} onPress={() => setOpen(false)}>
                <Text style={{fontSize: 20}}>취소</Text>
              </TouchableOpacity> 
              <TouchableOpacity style={styles.modalLogOut} onPress={() => navigation.navigate('First')}>
                <Text style={{fontSize: 20}}>로그아웃</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
  },
  title: {
    flex: 0.6,
  },

  alarm: {
    flex: 1.8,
    margin: 10,
  },
  account: {
    flex: 1,
    margin: 10,
  },

  titleview: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },

  titleText: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  subText: {
    fontSize: 15,
  },

  modalMainText: {
    fontSize: 20,
    textAlign:"center",
    height:100,
    paddingTop:40,
  },
  modalLogOut: {
    flex:1,
    height:50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#71A4D9",
    borderBottomEndRadius: 20,
  },
  modalCancel: {
    height:50,
    flex:1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#f2f2f2",
    borderBottomStartRadius: 20,
  },
  modalBtn: {
    height:50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
