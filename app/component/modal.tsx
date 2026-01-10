import { router } from 'expo-router';
import { Dimensions, Pressable, Text, View } from 'react-native';
import WheelofEmotions from './wheelofemotions';

const { width } = Dimensions.get('window');

export default function Modal(){
    
    const borderWidthPercentage = 1.0;
    
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
                width: width * borderWidthPercentage, 
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingHorizontal: 16, 
                borderBottomWidth: 2,
                borderColor: '#e0e0e0',
                borderBottomColor: '#e0e0e0',
                shadowColor: '#ffffff',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.2,
           }}>
                <Text style={{
                    fontSize: 18, 
                    fontWeight: '600'
                }}> Wheel of Emotions</Text>

                <Pressable 
                    onPress={() => router.back()}
                    style={{ padding: 8 }} // Add padding for better touch target
                >
                    <Text style={{
                        fontSize: 24, 
                        color: '#000000',
                        fontWeight: '600',
                        lineHeight: 24,
                    }}>×</Text>
                </Pressable>
           </View>
            <WheelofEmotions />
        </View>
    );
}