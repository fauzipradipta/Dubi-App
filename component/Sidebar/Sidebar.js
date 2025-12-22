import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
  StatusBar,
} from 'react-native';

import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MenuItem } from '../../data/MenuItem';

export default function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <View>
        <Text>John Doe </Text>
      </View>

      {MenuItem.map((item) => (
        <TouchableOpacity
          key={item.id}
          onPress={() => props.navigation.navigate(item.title)}
        >
          <View>
            {item.icon}
          </View>
          <Text>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },


//   header: {
//     height: 140,
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 20,
//     backgroundColor: 'white',
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     elevation: 3,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 3,
//     zIndex: 1001,
//   },

//   menuButton: {
//     padding: 10,
//     top: 30,
//     borderRadius: 5,
//     backgroundColor: 'transparent',
//   },

//   menuIcon: {
//     fontSize: 28,
//     color: '#333',
//     fontWeight: 'bold',
//   },


//   sidebar: {
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     bottom: 0,
//     width: SIDEBAR_WIDTH,
//     backgroundColor: 'white',
//     paddingTop: 60,
//     shadowColor: '#000',
//     shadowOffset: { width: 2, height: 0 },
//     shadowOpacity: 0.25,
//     shadowRadius: 10,
//     elevation: 20,
//     zIndex: 1000,
//   },


//   iconContainer: {
//     width: 24,
//     height: 24,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginRight: 15,

//   },

//   menuItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingVertical: 18,
//     paddingHorizontal: 15,
//     top: 150
//   },

//   menuText: {
//     fontSize: 18,
//     color: '#000',
//     flex: 1,
//   },

//   overlay: {
//     position: 'absolute',
//     paddingTop: 90,
//     top: 90,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     backgroundColor: 'transparent',
//     zIndex: 999,
//   },
// });

// export default Sidebar;