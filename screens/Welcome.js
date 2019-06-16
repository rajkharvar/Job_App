import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'native-base';

class Welcome extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={{ fontSize: 30 }}>Who are You?</Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center'
          }}
        >
          <Button
            full
            style={{ backgroundColor: '#ccc' }}
            onPress={() => this.props.navigation.navigate('Post')}
          >
            <Text style={styles.buttonText}>I am Recruiter</Text>
          </Button>
          <Button
            full
            style={{ backgroundColor: '#ccc' }}
            onPress={() => this.props.navigation.navigate('ViewJobs')}
          >
            <Text style={styles.buttonText}>I am Job Seeker</Text>
          </Button>
        </View>
      </View>
    );
  }
}
export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 24,
    paddingVertical: 5,
    color: '#111',
    paddingHorizontal: 10
  }
});
