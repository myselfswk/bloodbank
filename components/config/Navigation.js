
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './../screens/Splash';
import Login from './../screens/Login';
import Dashboard from './../screens/Dashboard'
import ActionSignIn from '../../src/ActionSignIn';
import ActionSignUp from '../../src/ActionSignUp';
import App from '../../src/App';
import Profile from '../screens/Profile';
import Donors from '../screens/Donors';
import Donate from '../screens/Donate';
import AboutUs from '../screens/AboutUs';

const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: null}} />
        <Stack.Screen name="Splash" component={Splash} options={{headerShown: null}} />
        <Stack.Screen name="Dashboard" component={Dashboard} options={{headerShown: null}} />
        <Stack.Screen name="ASI" component={ActionSignIn} />
        <Stack.Screen name="ASU" component={ActionSignUp} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="App" component={App} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="Donors" component={Donors} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;