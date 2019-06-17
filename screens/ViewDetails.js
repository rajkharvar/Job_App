import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Title, Button } from 'native-base';

class ViewDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: '',
      job: '',
      description: '',
      numberOfVacancy: 0
    };
  }
  componentDidMount() {
    let key = this.props.navigation.getParam('key', '');
    let job = this.props.navigation.getParam('job', '');
    let description = this.props.navigation.getParam('description', '');
    let numberOfVacancy = this.props.navigation.getParam('numberOfVacancy', '');
    this.setState({ _id: key, job, description, numberOfVacancy });
  }
  render() {
    return (
      <View style={styles.container}>
        <Title style={{ fontSize: 24 }}>{this.state.job}</Title>
        <Text>{this.state.description}</Text>
        <Text style={{ color: '#999' }}>
          Number Of Vacancy: {this.state.numberOfVacancy}
        </Text>
        <Button>
          <Text>Apply Now</Text>
        </Button>
      </View>
    );
  }
}
export default ViewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  }
});
