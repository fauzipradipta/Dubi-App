import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


const {width} = Dimensions.get('window');
const SIDEBAR_WIDTH = width * 0.75;

export default Sidebar = () => { 
    const [isOpen, setIsOpen] = React.useState(false);
    const translateX = React.useRef(new Animated.Value(-SIDEBAR_WIDTH)).current;
    return(
        <GestureHandlerRootView style={{flex: 1}}>
            <View >
                <View>
                    <TouchableOpacity onPress={openSidebar}>
                        <Text>☰</Text>
                    </TouchableOpacity>
                </View>
            </View>

            {isOpen &&(
                <TouchableOpacity
                    style={styles.overlay}
                    onPress={closeSidebar}
                    activeOpacity={1}
                />)
            }

           <PanGestureHandler onGestureEvent={onGestureEvent}>
                 <Animated.View
            style={[
              styles.sidebar,
              {
                transform: [{ translateX }],
              },
            ]}
          >
            <View style={styles.sidebarHeader}>
              <Text style={styles.sidebarTitle}>Menu</Text>
            <TouchableOpacity onPress={closeSidebar}>
                <Text style={styles.closeButton}>✕</Text>
            </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
                <Text>Logout</Text>
            </TouchableOpacity>
            </Animated.View>

           </PanGestureHandler>


        </GestureHandlerRootView>
    
    
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContent: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  menuButton: {
    padding: 10,
  },
  sidebar: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: SIDEBAR_WIDTH,
    backgroundColor: 'white',
    paddingTop: 50,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
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
  sidebarTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
  },
  menuItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
});