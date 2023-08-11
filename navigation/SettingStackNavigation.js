import React from 'react';
import {View, Text} from 'react-native';
import First from '../page/First/First';
import LogIn from '../page/First/LogIn';
import SignUp from '../page/First/SignUp';
import Main from '../page/First/Main';
import Setting from '../page/Setting/Setting';
import Camera from '../page/Camera/Camera';
import Unregister from '../page/Setting/Unregister';
import Profile from "../page/Profile/Profile"
import Change from '../page/Profile/Change';
import History from '../page/Profile/History';
import Alarm from '../page/Profile/Alarm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const SettingStackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen name="프로필" component={Profile} options={{headerShown: false}}/>
            <Stack.Screen name="설정"component={Setting} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
            <Stack.Screen name="회원탈퇴"component={Unregister} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default SettingStackNavigation;
