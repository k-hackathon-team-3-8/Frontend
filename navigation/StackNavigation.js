import React from 'react';
import First from '../page/First/First';
import LogIn from '../page/First/LogIn';
import SignUp from '../page/First/SignUp';
import CameraPage from '../page/Camera/CamerPage';
import Profile from "../page/Profile/Profile"
import Change from '../page/Profile/Change';
import History from '../page/Profile/History';
import Alarm from '../page/Profile/Alarm';
import Main from '../page/First/Main';
import Setting from '../page/Setting/Setting';
import Unregister from '../page/Setting/Unregister';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const StackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="First">
          <Stack.Screen name="First" component={First} options={{headerShown: false}}/>
          <Stack.Screen name="로그인"component={LogIn} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
          <Stack.Screen name="회원가입"component={SignUp} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
          <Stack.Screen name="Home"component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="Camera"component={CameraPage} options={{headerShown: false}}/>
          <Stack.Screen name="프로필" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="프로필 수정" component={Change}options={{headerBackTitleVisible: false,headerTintColor: '#000'}}/>
          <Stack.Screen name="알람 기록" component={History} options={{headerBackTitleVisible: false,headerTintColor: '#000'}}/>
          <Stack.Screen name="My 알람" component={Alarm} options={{ headerBackTitleVisible: false, headerTintColor: '#000'}}/>
          <Stack.Screen name="설정"component={Setting} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
          <Stack.Screen name="회원탈퇴"component={Unregister} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default StackNavigation;
