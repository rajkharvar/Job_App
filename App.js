import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Welcome from './screens/Welcome';
import Post from './screens/Post';
import ViewJobs from './screens/ViewJobs';

const Navigator = createStackNavigator(
  {
    Welcome: Welcome,
    Post: Post,
    ViewJobs: ViewJobs
  },
  {
    initialRouteName: 'Welcome'
  }
);

const App = createAppContainer(Navigator);

export default App;
