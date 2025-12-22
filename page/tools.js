import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Sidebar from '../component/Sidebar/Sidebar';



const Tools = () => {
    return (
        <View style={styles.container}>
            <Sidebar />
            <View style={styles.content}>
                <Text style={styles.title}>Tools Page</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },

})
export default Tools;