import { Drawer } from 'expo-router/drawer';
export default function DrawerLayout() {
    return (
        <Drawer screenOptions={{
            headerTitle: '',
        }}>
            <Drawer.Screen name="(tabs)" options={{ drawerLabel: 'Home', title: ' ', }} />
            <Drawer.Screen name="profile"
                options={{
                    drawerLabel: 'Profile',
                    title: ' '
                }}
            />
            <Drawer.Screen name="trackers" options={{ drawerLabel: 'Trackers', title: ' ', }} />

        </Drawer>
    );
}