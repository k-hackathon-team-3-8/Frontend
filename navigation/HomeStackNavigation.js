import React from 'react';
import First from '../page/First/First';
import LogIn from '../page/First/LogIn';
import SignUp from '../page/First/SignUp';
import Main from '../page/First/Main';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const HomeStackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="First" component={First} options={{headerShown: false}}/>
          <Stack.Screen name="로그인"component={LogIn} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
          <Stack.Screen name="회원가입"component={SignUp} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
          <Stack.Screen name="Home"component={Main} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default HomeStackNavigation;
