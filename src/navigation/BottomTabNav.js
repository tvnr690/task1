import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BottomHistory from "../screens/BottomHistory";
import BottomSubscription from "../screens/BottomSubscription";
import BottomTrending from "../screens/BottomTrending";
import BottomIndex from "../screens/BottomIndex";
import StackNav from "./StackNav";


const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="task1" component={StackNav} />
      <Tab.Screen name="History" component={BottomHistory} />
      <Tab.Screen name="Index" component={BottomIndex} />
      <Tab.Screen name="Subscription" component={BottomSubscription} />
      <Tab.Screen name="Trending" component={BottomTrending} />
    </Tab.Navigator>
  );
}

export default MyTabs;
