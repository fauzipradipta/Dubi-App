import { Link, Stack } from 'expo-router';
import { StyleSheet, View } from 'react-native';


export default function NotFoundScreen() {
    return(
        <>
            <Stack.Screen options={{ title: 'Oops! Not Found' }} />
                <View style={styles.container}>
                    <Link href="/"style={styles.Button}>
                    Go back to Home screen! wrong page
                    </Link>
                </View>
            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
    },
    Button:{
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        color: '#0f0f0fff',
        fontSize: 16,
    }
})