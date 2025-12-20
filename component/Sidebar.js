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

import MenuItem from '../data/MenuItem';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.5;
const HEADER_HEIGHT = 140;
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 0;

const Sidebar = () => {
  const navigation = useNavigation();

  const [isOpen, setIsOpen] = useState(false);
  const translateX = useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOpen ? 0 : -SIDEBAR_WIDTH,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [isOpen]);

  const openSidebar = () => {
    console.log('Opening sidebar...');
    setIsOpen(true);
  };

  const closeSidebar = () => {
    console.log('Closing sidebar...');
    setIsOpen(false);
  };

  const handleMenuItemPress = (screenName) => {
    navigation.navigate(screenName);
    closeSidebar();
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />

      {!isOpen && (
        <View style={styles.header}>
          <TouchableOpacity
            onPress={openSidebar}
            style={styles.menuButton}
            activeOpacity={0.7}
          >
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
      )}


      {isOpen && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={closeSidebar}
          activeOpacity={1}
        />
      )}

      <Animated.View
        style={[
          styles.sidebar,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <View style={[styles.sidebarHeader, { height: HEADER_HEIGHT, paddingTop: STATUS_BAR_HEIGHT }]}>
          <TouchableOpacity
            onPress={closeSidebar}
            style={styles.menuButton}
            activeOpacity={0.7}
          >
            <Text style={styles.menuIcon}>☰</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sidebarContent}>
        {MenuItem && MenuItem.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => handleMenuItemPress(item.title)}
          >
            <View style={styles.iconContainer}>
              {item.icon}
            </View>
            <Text style={styles.menuText}>{item.title}</Text>
          </TouchableOpacity>
        ))}
        </View>
      </Animated.View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  
 
  header: {
    height: 140,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    zIndex: 1001,
  },
  
  menuButton: {
    padding: 10,
    top: 30,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  
  menuIcon: {
    fontSize: 28,
    color: '#333',
    fontWeight: 'bold',
  },
  
 
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 20,
    zIndex: 1002,
  },
  
  sidebarContent: {
    flex: 1,
  },
  
  sidebarHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

   iconContainer:{
    width:24,
    height:24,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginRight:15,

  },

  menuItem: {
    marginTop:10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal:15,
  },
  
  menuText: {
    fontSize: 18,
    color: '#000',
    flex: 1,
  },
  
  overlay: {
    position: 'absolute',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    zIndex: 1001, 
  },
});

export default Sidebar;