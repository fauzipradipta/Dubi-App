import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tools from './page/Tools';
import Home from './page/Home';
const Stack = createNativeStackNavigator();

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
    </View>
  );
}

function TrackersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trackers Screen</Text>
    </View>
  );
}

function FlowChartScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Flow Chart Screen</Text>
    </View>
  );
}

function GoalsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Goals Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Trackers" component={TrackersScreen} />
        <Stack.Screen name="Flow Chart" component={FlowChartScreen} />
        <Stack.Screen name="Goals" component={GoalsScreen} />
        <Stack.Screen name="Tools" component={Tools} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});