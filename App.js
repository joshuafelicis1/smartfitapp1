import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import WaterIntakeScreen from './screens/WaterIntakeScreen';
import CalorieIntakeScreen from './screens/CalorieIntakeScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (focused, routeName) => {
  let iconName;

  switch (routeName) {
    case 'Home':
      iconName = focused ? require('./assets/home_active.png') : require('./assets/home_active.png');
      break;
    case 'WaterIntake':
      iconName = focused ? require('./assets/water_active.png') : require('./assets/water_active.png');
      break;
    case 'CalorieIntake':
      iconName = focused ? require('./assets/calorie_active.png') : require('./assets/calorie_active.png');
      break;
    case 'Settings':
      iconName = focused ? require('./assets/settings_active.png') : require('./assets/settings_active.png');
      break;
    default:
      iconName = null;
  }

  return <Image source={iconName} style={{ width: 24, height: 24 }} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            const { name } = route;
            return getTabBarIcon(focused, name);
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="WaterIntake" component={WaterIntakeScreen} />
        <Tab.Screen name="CalorieIntake" component={CalorieIntakeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
