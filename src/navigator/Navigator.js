import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../screens/MapScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import LogInScreen from '../screens/LogInScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import ReservedScreen from '../screens/ReservedScreen';
import RentScreen from '../screens/RentScreen';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen name="Welcome" component={WelcomeScreen} />
    <Stack.Screen name="Log In" component={LogInScreen} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={AuthStack} />
    <Drawer.Screen name="Map" component={MapScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Reserved parkings" component={ReservedScreen} />
    <Drawer.Screen name="Rent" component={RentScreen} />
  </Drawer.Navigator>
);

const AppContainer = () => (
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>
);

export default AppContainer;
