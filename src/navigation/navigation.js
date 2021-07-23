import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ToDoScreen from '../screens/ToDoScreen';
import HomeScreen from '../screens/HomeScreen';
import {useSelector} from 'react-redux';

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="ToDo" component={ToDoScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
//export default createAppContainer(navigator);

/**/
