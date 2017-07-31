import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Dot = (props) => {
  let currentStyle = props.active ? styles.dotActive : styles.dotInactive;
  return (
    <View style={[styles.dot, currentStyle]}></View>
  );
};

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.dotsContainer}>
          <Dot active={true}/>
          <Dot/>
          <Dot/>
        </View>
        <Image style={styles.calendarImage} source={require('./assets/Calendar.png')} />
        <Text>Keep your work organized and quickly check your reminders with simple calendar.</Text>
        <Text>Next</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  dotsContainer: {
    width: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  dotActive: {
    backgroundColor: '#FC3768',
  },
  dotInactive: {
    backgroundColor: '#D2D2D4',
  },
  calendarImage: {
    width: 180,
    height: 180
  }
});
