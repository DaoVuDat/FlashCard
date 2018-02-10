import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import List from './src/List';
import CustomLearning from './src/CustomLearning';
import EditCard from './src/EditCard';

export default class FlashCard extends Component {

  render(){
    return (
      <Router>
        <Stack key="root">
          <Scene key="list" component={List} hideNavBar = {true}/>
          <Scene key="editCard" component={EditCard} hideNavBar = {true}/>
          <Scene key="customLearning" component={CustomLearning} hideNavBar={true}/>
        </Stack>
      </Router>
    );
  };
}
