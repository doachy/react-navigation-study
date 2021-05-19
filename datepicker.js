import React, { Component } from 'react';
import { Container, Header, Content, DatePicker, Text } from 'native-base';
import {
    SafeAreaView,
    ScrollView,
} from 'react-native';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
	  const { chosenDate } = this.state;
    return (
      <Container>
        <Header />
        <Content>
			<ScrollView>
          <DatePicker
            defaultDate={new Date('2018-04-05')}
            minimumDate={new Date('2014-01-01')}
            maximumDate={new Date('2022-12-31')}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"spinner"}
			value = {chosenDate}
            textStyle={{ color: "green" }}
            placeHolderTextStyle={{ color: "#d3d3d3" }}
            onDateChange={this.setDate}
            disabled={false}
            />
            <Text>
              Date: {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
				</ScrollView>
        </Content>
      </Container>
    );
  }
}