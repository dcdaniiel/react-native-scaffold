import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './Login';

export const Auth = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <Navigator headerMode="none">
      <Screen name="Login" component={Login} />
    </Navigator>
  );
};
