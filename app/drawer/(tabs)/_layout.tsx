import { Tabs } from 'expo-router';

export default function TabLayout(){
    return(
        <Tabs screenOptions={{
            headerTitle: '',
            headerShown: false
        }}>
            <Tabs.Screen name="index" options={{title:'Home'}}/>
            <Tabs.Screen name="trackers" options={{title: "Trackers"}}/>
            <Tabs.Screen name="post" options={{title: "Post"}}/>
            <Tabs.Screen name="tools" options={{title: "Tools"}}/>
            <Tabs.Screen name="profile" options={{title: "Profile"}}/>
        </Tabs>
    );
}