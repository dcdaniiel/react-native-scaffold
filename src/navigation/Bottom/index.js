import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from '@ui-kitten/components';
import { Home } from '../../screens/Home';

const BottomTabBar = ({ navigation, state }) => {
  const MarketPlaceIcon = (props) => <Icon {...props} name="shopping-bag" />;
  const PositionIcon = (props) => <Icon {...props} name="bar-chart" />;
  const OrderStatusIcon = (props) => <Icon {...props} name="list" />;
  const ProfileIcon = (props) => <Icon {...props} name="person" />;

  return (
    <BottomNavigation
      selectedIndex={state.index}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}>
      <BottomNavigationTab title="Market Place" icon={MarketPlaceIcon} />
      <BottomNavigationTab title="Positions" icon={PositionIcon} />
      <BottomNavigationTab title="Order Status" icon={OrderStatusIcon} />
      <BottomNavigationTab title="Profile" icon={ProfileIcon} />
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
      <Screen name="Home1" component={Home} />
      <Screen name="Home2" component={Home} />
      <Screen name="Home3" component={Home} />
    </Navigator>
  );
};
