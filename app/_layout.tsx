import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
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

      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        marginVertical: 24,
      }}>
        <View style={{ 
          flex: 1,
          height: 1,
          backgroundColor: '#e0e0e0',
        }}/>

        <Text style={{  marginHorizontal: 16,
          fontSize: 14,
          color: '#666666',
          fontWeight: '500',}}> Or</Text>

        <View style={{ 
          flex: 1,
          height: 1,
          backgroundColor: '#e0e0e0',
        }}/>

      </View>
      
      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: '#EEEEEE',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          // Handle continue action
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
              source={require('../assets/images/google-icon.png')} 
              style={{ width: 24, height: 24, marginRight: 12 }} 
            />
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>
              Continue with Google
            </Text>
        </View>
       
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          width: '80%',
          height: 50,
          backgroundColor: '#EEEEEE',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 16,
        }}
        onPress={() => {
          // Handle continue action
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image 
              source={require('../assets/images/apple-icon.png')} 
              style={{ width: 24, height: 24, marginRight: 12 }} 
            />
            <Text style={{ color: 'black', fontSize: 16, fontWeight: '600' }}>
              Continue with Apple
            </Text>
        </View>
       
      </TouchableOpacity>
      
      <View>
        <Text style={{ 
          fontSize: 14, 
          marginTop: 40,
          color: '#000000',
          fontWeight:'400'
        }}>
          By clicking continue, you agree to our Terms & Conditions
        </Text>
        
      </View>
      <View>
         <Text style={{ 
          fontSize: 14, 
          // marginTop: 40,
          color: '#000000',
          justifyContent:'center',
          alignItems:'center',
          fontWeight:'400'
        }}>
          and Privacy Policy
        </Text>
      </View>

    </View>
  );
}
