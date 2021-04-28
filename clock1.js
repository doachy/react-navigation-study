import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AnalogClock from 'react-native-analog-clock';
//https://www.npmjs.com/package/react-native-analog-clock

function App() {
    return (
        <View>
            <Text>hello world!!!!!!!!!</Text>
            <AnalogClock
                style={{
                    width: 150,
                    height: 150,
                }}
                onTimeChange={({ hours, minutes, seconds }) =>
                    console.log(`time is now : ${hours}:${minutes}:${seconds}`)
                }
            />
        </View>
    );
}

export default App;