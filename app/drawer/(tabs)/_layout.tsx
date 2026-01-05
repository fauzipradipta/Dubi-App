import { Tabs } from 'expo-router';
import { CircleUser, Home, SquarePen, Watch } from 'lucide-react-native';
import { Image } from 'react-native';
export default function TabLayout(){
    return(
        <Tabs screenOptions={{
            headerTitle: '',
            headerShown: false,
            tabBarStyle:{
                height: 40,
            }
        }}>
            <Tabs.Screen name="index" options={{
                title:' ',
                tabBarIcon:({ color, size }) => (
                <Home size={size} color={"black"} />),
             }}/>
            <Tabs.Screen name="trackers" options={{
                title: "",
                 tabBarIcon:({ color, size }) => (
                <Watch size={size} color={"black"} />),
             }}/>
            <Tabs.Screen name="post" options={{
                title: " ",
                tabBarIcon:({color,size}) => (
                    <SquarePen size={size} color={"black"} />
                )}}/>
            <Tabs.Screen name="tools" options={{
                title: " ",
                tabBarIcon:({focused, color,size})=>(
                    <Image 
                        source={require('../../../assets/images/tools-icon.png')}
                        style={{
                            width: size,
                            height: size,                           
                    }} />
                )}}/>
            <Tabs.Screen name="profile" options={{title: " ", 
                tabBarIcon:({color,size})=>(
                    <CircleUser size={size} color={"black"} />
                )
            }}/>
        </Tabs>
    );
}