import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './Appnavigator';

const AppContanier = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
};

export default AppContanier;
