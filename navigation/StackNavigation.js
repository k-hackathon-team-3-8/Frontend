import React from 'react';
import First from '../page/First';
import LogIn from '../page/LogIn';
import SignUp from '../page/SignUp';
import Main from '../page/Main';
import Setting from '../page/Setting';
import Camera from '../page/Camera';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const StackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen name="First" component={First} options={{headerShown: false,}}/>
        <Stack.Screen name="LogIn"component={LogIn} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
        <Stack.Screen name="SignUp"component={SignUp} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
        <Stack.Screen name="Home"component={Main} options={{headerShown: false}}/>
        <Stack.Screen name="Camera"component={Camera} options={{headerShown: false}}/>
        <Stack.Screen name="Setting"component={Setting} options={{headerBackTitleVisible: false, headerTintColor: '#000',}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default StackNavigation;
