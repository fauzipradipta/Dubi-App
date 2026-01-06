import EmotionWheel from '@/app/component/wheelofemotions';
import { useFocusEffect, useNavigation } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';

export default function ToolsScreen() {

  const navigation = useNavigation(); 

  useFocusEffect(
    useCallback(() => {
      console.log('Tools screen focused - disabling drawer');
      
      // Get the drawer navigation (2 levels up for tabs inside drawer)
      const drawerNavigation = navigation.getParent()?.getParent?.() || navigation.getParent();
      
      if (drawerNavigation) {
        drawerNavigation.setOptions({
          drawerEnabled: false,
          swipeEnabled: false,
          swipeEdgeWidth: 0, // Also disable edge swipe
        });
      }
      
      // Cleanup when screen loses focus
      return () => {
        console.log('Tools screen unfocused - enabling drawer');
        if (drawerNavigation) {
          drawerNavigation.setOptions({
            drawerEnabled: true,
            swipeEnabled: true,
            swipeEdgeWidth: 50, // Default value
          });
        }
      };
    }, [navigation])
  );

  return (
    <View>
      <Text> Tools</Text>

      <EmotionWheel
       
      />
    </View>
  );
}

