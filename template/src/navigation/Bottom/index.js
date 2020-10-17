import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { Home, Notify, Profile, Ticket } from '../../screens/Main';

const BottomTabBar = ({ navigation, state }) => {
  const HomeIcon = (props) => <Icon {...props} name="home-outline" />;
  const Ticket = (props) => <Icon {...props} name="layers-outline" />;
  const Bell = (props) => <Icon {...props} name="bell-outline" />;
  const Person = (props) => <Icon {...props} name="person-outline" />;

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab icon={HomeIcon} />
      <BottomNavigationTab icon={Ticket} />
      <BottomNavigationTab icon={Bell} />
      <BottomNavigationTab icon={Person} />
    </BottomNavigation>
  );
};

export const BottomTabNavigator = () => {
  const { Screen, Navigator } = createBottomTabNavigator();

  return (
    <Navigator
      headerMode="none"
      tabBar={(props) => <BottomTabBar {...props} />}>
      <Screen name="Home" component={Home} />
      <Screen name="Ticket" component={Ticket} />
      <Screen name="Notify" component={Notify} />
      <Screen name="Profile" component={Profile} />
    </Navigator>
  );
};
