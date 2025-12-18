import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';
import Tools from '../pages/Tools';
import Sidebar from './Sidebar';

const stack = createStackNavigator();
const ScreenWithSidebar = ({ children }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <Sidebar />
      <View style={{ flex: 1 }}>
        {children}
      </View>
    </View>
  )
}



const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Tools" component={ToolsPage} />
        {/* <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Settings" component={SettingsPage} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default Navigation;