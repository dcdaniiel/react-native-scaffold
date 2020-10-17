import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '../assets/themes';
import { Auth } from '../screens/Auth';
import { BottomTabNavigator } from './Bottom';

const themeSettings = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: theme.light['color-success-200'],
  },
};

export const Navigation = () => {
  const { Screen, Navigator } = createStackNavigator();

  return (
    <NavigationContainer theme={themeSettings}>
      <Navigator headerMode="none">
        <Screen name="Main" component={BottomTabNavigator} />
        <Screen name="Auth" component={Auth} />
      </Navigator>
    </NavigationContainer>
  );
};
