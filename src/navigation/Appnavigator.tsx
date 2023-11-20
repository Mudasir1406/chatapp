import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamsApp} from '../types/NavigationTypes';
import {Calls, Chat, Chats, Contacts, Settings} from '../screens';

const Stack = createNativeStackNavigator<RootStackParamsApp>();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Chats"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}>
      <Stack.Screen name="Chats" component={Chats} />
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Calls" component={Calls} />
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Chat" component={Chat} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
