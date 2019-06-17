import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Button, Item, Label, Input } from 'native-base';
import axios from 'axios';
const url = 'http://localhost:3000/';

class Post extends Component {
  static navigationOptions = {
    title: 'Post Job'
  };
  constructor(props) {
    super(props);
    this.state = {
      job: '',
      description: '',
      numberOfVacancy: 0
    };
  }

  postJob = (job, description, numberOfVacancy) => {
    if (job !== '' && description !== '' && numberOfVacancy !== 0) {
      const body = {
        job,
        description,
        numberOfVacancy: parseInt(numberOfVacancy)
      };
      axios
        .post(url, body)
        .then(response => {
          alert('Job added to database');
          this.setState({ job: '', description: '', numberOfVacancy: 0 });
        })
        .catch(err => {
          console.log('Error', err);
        });
    } else {
      alert('All fields are mandatory');
    }
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Item floatingLabel style={{ marginVertical: 30 }}>
            <Label>Job</Label>
            <Input onChangeText={job => this.setState({ job })} />
          </Item>
          <Item floatingLabel>
            <Label>Description</Label>
            <Input
              onChangeText={description => this.setState({ description })}
            />
          </Item>
          <Item style={{ marginVertical: 30 }} floatingLabel>
            <Label>Number Of Vacancy</Label>
            <Input
              keyboardType='numeric'
              onChangeText={numberOfVacancy =>
                this.setState({ numberOfVacancy })
              }
            />
          </Item>
          <Button
            style={{ backgroundColor: '#ccc' }}
            onPress={() =>
              this.postJob(
                this.state.job,
                this.state.description,
                this.state.numberOfVacancy
              )
            }
          >
            <Text style={{ fontSize: 24 }}>Post Job</Text>
          </Button>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
export default Post;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
