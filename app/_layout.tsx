import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from "react-native";
export default function RootLayout() {

  const [text, setText] = React.useState('');
  return (
    //  <GestureHandlerRootView  style={{ flex: 1 }}>      
    //   <Stack screenOptions={{
    //           headerTitle: '',
    //           headerShown: false 
    //       }}>      
    //     <Stack.Screen name="drawer" options={{ headerShown: false }} />      
    //     {/* <View> <Text> Forum</Text></View> */}
    //     <Stack.Screen name="custom" options={{ title: 'Custom', headerShown: true }} />
    //   </Stack>
    // </GestureHandlerRootView>

    <View style={{ 
      flex: 1, 
      justifyContent: 'flex-start', 
      alignItems: 'center', 
      marginTop: 100 }}>

      <Text style={{ 
        fontSize: 24, 
        fontWeight: '600', 
        fontFamily:'inter' }}>
          Dubi App 
      </Text>

      <Text style={{ 
        fontSize: 16, 
        marginTop: 10,
        color:'#000000' }}>
          Anti Social Media
      </Text> 

      <Text style={{
        fontSize: 16, 
        marginTop: 40,
        color: '#000000',
        fontWeight:'600'
      }}>
        Create an account 
      </Text>

      <Text style={{
        fontSize: 14, 
        marginTop: 40,
        color: '#000000',
        fontWeight:'400'
      }}>
        Enter your email to signup for this app
      </Text>

      <TextInput
        style={{
          borderColor:'#E0E0E0',
          borderWidth:1,
          borderRadius:8,
          width: '80%',
          height: 50,
          marginBottom: 20,
          marginTop:20,
          paddingHorizontal: 10,
          fontSize:16
        }}
        placeholder="email@domain.com"
        value={text}
        onChangeText={setText}
      />

      

      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: '#000000',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          // Handle continue action
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}
