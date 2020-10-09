import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import task1screen from '../screens/task1screen'; 
import task2screen from '../screens/task2screen';
import task3screen from '../screens/task3screen';
import task4screen from '../screens/task4screen';

const Stack = createStackNavigator();

function StackNav() {
  return (
      <Stack.Navigator initialRouteName="task1">
        <Stack.Screen name="task1" component={task1screen} />
        <Stack.Screen name="task2" component={task2screen} />
        <Stack.Screen name="task3" component={task3screen} />
        <Stack.Screen name="task4" component={task4screen} />
      </Stack.Navigator>
  );
}

export default StackNav;
