import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Welcome from './screens/Welcome';
import Post from './screens/Post';
import ViewJobs from './screens/ViewJobs';
import ViewDetails from './screens/ViewDetails';

const Navigator = createStackNavigator(
  {
    Welcome: Welcome,
    Post: Post,
    ViewJobs: ViewJobs,
    ViewDetails: ViewDetails
  },
  {
    initialRouteName: 'Welcome'
  }
);

const App = createAppContainer(Navigator);

export default App;
