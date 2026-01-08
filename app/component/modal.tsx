import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';
import WheelofEmotions from './wheelofemotions';
export default function Modal(){
    return(
        <View style={{ 
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center', 
            backgroundColor:"#FFFFFF",
            height:'50%',
        }}>
           <View style={{
                height: 56,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 120,
                borderBottomWidth: 2,
                borderBottomColor: '#e0e0e0',
                
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
           }}>
                <Text style={{
                    fontSize: 18, 
                    fontWeight: '600'
                }}> Wheel of Emotions</Text>


                <Pressable onPress={() => router.back()}>
                    <Text style={{
                        fontSize: 20, 
                        color: '#000000',
                        start: 90,
                        
                    }}>x</Text>
                </Pressable>
           </View>
            <WheelofEmotions />
        </View>
    );
}