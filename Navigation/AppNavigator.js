// navigation/AppNavigator.js - NAVIGATION STRUCTURE
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawerContent from '../component/Sidebar/Sidebar';
import HomeScreen from '../page/Home';
import ToolsScreen from '../page/Tools';

const Drawer = createDrawerNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawerContent {...props} />}
                screenOptions={{
                    drawerStyle: { width: '75%' },
                    headerShown: false,
                }}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Tools" component={ToolsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}