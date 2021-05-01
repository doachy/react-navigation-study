import * as React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
 
import AnalogClock from 'idea-native-clock';
 
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
       
       //automatic time
          <AnalogClock
            size={100}
          />
          <View style={{ marginBottom: 5 }} />
 
          //if you want to set time manually 
          <AnalogClock
            colorClock="#2196F3"
            colorNumber="#000000"
            colorCenter="#00BCD4"
            colorHour="#FF8F00"
            colorMinutes="#FFC400"
            hour="2"
            minutes={55}
            seconds={60}
          />
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