import React from 'react';
import Main from '../page/First/Main';
import Camera from '../page/Camera/Camera';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';



/** 
 * StackNavigator를 이용하여서 앱에 대한 페이지 이동을 관리합니다.
 */
const CameraStackNavigation = () => {

    const Stack = createStackNavigator();
 
    return (
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
          <Stack.Screen name="Home"component={Main} options={{headerShown: false}}/>
          <Stack.Screen name="Camera"component={Camera} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default CameraStackNavigation;
