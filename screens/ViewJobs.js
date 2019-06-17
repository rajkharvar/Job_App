import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Item, Card } from 'native-base';

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
      <ScrollView style={styles.container}>
        {this.state.allJobs.map(item => {
          return (
            <TouchableOpacity
              key={item._id}
              onPress={() =>
                this.props.navigation.navigate('ViewDetails', {
                  key: item._id,
                  job: item.job,
                  description: item.description,
                  numberOfVacancy: item.numberOfVacancy
                })
              }
            >
              <View>
                <Card>
                  <Text style={{ fontSize: 30 }}>{item.job}</Text>
                  <Text style={{ color: '#555', alignItems: 'center' }}>
                    {item.description}
                  </Text>
                  <Text>Number Of Vacancy:{item.numberOfVacancy}</Text>
                </Card>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}
export default ViewJobs;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
