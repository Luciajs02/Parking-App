import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import WelcomeScreen from './src/screens/WelcomeScreen';
import LogInScreen from './src/screens/LogInScreen';
import MapScreen from './src/screens/MapScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import Securitycreen from './src/screens/SecurityScreen';
import ReservedScreen from './src/screens/ListRentScreen';
import PaymentScreen from './src/screens/PaymentScreen';
import NotificationScreen from './src/screens/NotificationScreen';
import SubscriptionScreen from './src/screens/SubscriptionScreen';
import SuportScreen from './src/screens/SuportScreen';
import PoliciesScreen from './src/screens/PoliciesScreen';
import LogOutScreen from './src/screens/LogOutScreen';
import RentScreen from './src/screens/RentScreen';
import RentPayScreen from './src/screens/RentPayScreen';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        name="Home"
        component={AuthNavigator}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-home' : 'ios-home-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-map' : 'ios-map-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="List Rent"
        component={ReservedScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-calendar' : 'ios-calendar-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Rent"
        component={RentScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-cash' : 'ios-cash-outline'} size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          drawerIcon: ({ focused, color, size }) => (
            <Icon name={focused ? 'ios-settings' : 'ios-settings-outline'} size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
    
  );
};

const AuthNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Log In" component={LogInScreen} />
      <Stack.Screen name="Security" component={Securitycreen} />
      <Stack.Screen name="Notifications" component={NotificationScreen} />
      <Stack.Screen name="Payment configurations" component={PaymentScreen} />
      <Stack.Screen name="My Subscription" component={SubscriptionScreen} />
      <Stack.Screen name="Help & Support" component={SuportScreen} />
      <Stack.Screen name="Terms & Policies" component={PoliciesScreen} />
      <Stack.Screen name="Log Out" component={LogOutScreen} />
      <Stack.Screen name="Rent Pay" component={RentPayScreen} />
    </Stack.Navigator>
  );
};


const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
