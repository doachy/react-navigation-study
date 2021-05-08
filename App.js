import * as React from 'react';
import { Button, View, Text, ImageBackground, StyleSheet, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AnalogClock from 'idea-native-clock';
import { LinearGradient } from 'expo-linear-gradient';

function App() {
    return (
        <SafeAreaView style={styles.container}>
			<LinearGradient
                    // Background Linear Gradient
                    colors={['#4c669f', '#3b5998', '#192f6a']}
                    style={styles.background}
                />
            <ScrollView style={styles.scrollView}>
				<Text>hi dsfknsdfkasnlkdfnasldkn</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 1000,
  },
  button: {
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
  },
  text: {
    backgroundColor: 'transparent',
    fontSize: 15,
    color: '#fff',
  },
});

export default App;