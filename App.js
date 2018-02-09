import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import List from './src/List';
import DetailList from './src/DetailList';
import AddCard from './src/AddCard';

export default class FlashCard extends Component {

  render(){
    return (
      <Router>
        <Stack key="root">
          <Scene key="list" component={List} hideNavBar = {true}/>
          <Scene key="detailList" component={DetailList} hideNavBar = {true}/>
          <Scene key="addCard" component={AddCard} hideNavBar={true}/>
        </Stack>
      </Router>
    );
  };
}
