import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
 
import AnalogClock from 'react-native-clock-analog';

//https://www.npmjs.com/package/react-native-clock-analog
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={{
            uri:
              'https://i.pinimg.com/originals/62/6f/84/626f84c40696c1308a77fd8331e12b3e.jpg',
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 500,
            width: 500,
          }}>
          <AnalogClock
            size={100}
          />
          <View style={{ marginBottom: 5 }} />
          <AnalogClock
            colorClock="#2196F3"
            colorNumber="#000000"
            colorCenter="#00BCD4"
            colorHour="#FF8F00"
            colorMinutes="#FFC400"
            hour="2"
            minutes={55}
          />
        </ImageBackground>
      </View>
    );
  }
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