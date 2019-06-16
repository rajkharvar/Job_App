import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

class ViewJobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allJobs: [],
      isLoading: true
    };
  }
  componentDidMount() {
    axios
      .get('http://localhost:3000/')
      .then(response => {
        this.setState({ allJobs: response.data, isLoading: false });
        console.log(response.data);
      })
      .catch(err => {
        console.log('Error', err);
      });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.state.allJobs.map(item => {
          return (
            <View key={item._id}>
              <Text style={{ fontSize: 30 }}>{item.job}</Text>
              <Text style={{ color: '#555' }}>{item.description}</Text>
              <Text>Number Of Vacancy:{item.numberOfVacancy}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
export default ViewJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
