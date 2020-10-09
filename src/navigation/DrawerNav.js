import * as React from 'react';
import { View, Text, Settings } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MyTabs from "./BottomTabNav";
import SettingsScreen from "../screens/SettingScreen";
import NotificationScreen from "../screens/NotificationScreen";
import MessageScreen from "../screens/MessageScreen";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Notification" component={NotificationScreen} />
      <Drawer.Screen name="Setting" component={SettingsScreen} />
      <Drawer.Screen name="Message" component={MessageScreen} />
    </Drawer.Navigator>
  );
}
export default function DrawerNav() {
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
  }


