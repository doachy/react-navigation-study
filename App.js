import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalogClock from 'idea-native-clock';

function App() {
    return (
        <View style={styles.container}>
            <AnalogClock size={100} />
            <View style={{ marginBottom: 5 }} />
            <AnalogClock
                colorClock="#000"
                colorNumber="#000000"
                colorCenter="#00BCD4"
                colorHour="#FF8F00"
                colorMinutes="#FFC400"
                hour="3"
                minutes={55}
                seconds={60}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

export default App;