import React from 'react';
import Main from '../page/First/Main';
import Profile from "../page/Profile/Profile"
import Change from '../page/Profile/Change';
import History from '../page/Profile/History';
import Alarm from '../page/Profile/Alarm';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const ProfileStackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="Home"component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="프로필" component={Profile} options={{headerShown: false}}/>
          <Stack.Screen name="프로필 수정" component={Change}options={{headerBackTitleVisible: false,headerTintColor: '#000'}}/>
          <Stack.Screen name="알람 기록" component={History} options={{headerBackTitleVisible: false,headerTintColor: '#000'}}/>
          <Stack.Screen name="My 알람" component={Alarm} options={{ headerBackTitleVisible: false, headerTintColor: '#000'}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default ProfileStackNavigation;
