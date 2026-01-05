import { Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function RootLayout() {

  return (
     <SafeAreaView  style={{ flex: 1, backgroundColor: 'white'}}>      
      <Stack screenOptions={{
              headerTitle: '',
              headerShown: false,
              contentStyle: { backgroundColor: 'white' }
               
          }}>      
        <Stack.Screen name="screen/index" options={{ title: 'Dubi App', headerShown: false}} />
        <Stack.Screen name="drawer" options={{ headerShown: false }} />      
        {/* <Stack.Screen name="drawer/(tabs)/tools" options={{ title: 'Tools', headerShown: true }} /> */}
        <Stack.Screen name="custom" options={{ title: 'Custom', headerShown: true }} />
      </Stack>
    </SafeAreaView>

   
  );
}
