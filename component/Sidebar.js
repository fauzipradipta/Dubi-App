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

import  MenuItem  from '../mock/MenuItem';

const { width } = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.7;

const Sidebar = () => {
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
     
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={openSidebar} 
          style={styles.menuButton}
          activeOpacity={0.7}
        >
          <Text style={styles.menuIcon}>☰</Text>
        </TouchableOpacity>
      </View>

      
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
          { transform: [{ translateX }],
        },
        ]}
      >

        {
          MenuItem && MenuItem.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <View style={styles.iconContainer}>
                {item.icon}
              </View>
              <Text style={styles.menuText}>{item.title}</Text>
            </TouchableOpacity>
          ))
        }
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
    shadowOffset: { width: 0, height: 2 },
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
    paddingTop: 60, 
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 20,
    zIndex: 1000,
  },
  
  sidebarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
    paddingTop:50,
  },
  
  menuText: {
    fontSize: 20,
    color: '#000',
  },
  
  
  overlay: {
    position: 'absolute',
    paddingTop: 90,
    top: 90, 
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    zIndex: 999, 
  },
});

export default Sidebar;