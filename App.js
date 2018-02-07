import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import List from './src/List';
import DetailList from './src/DetailList';
import AddCard from './src/AddCard';
import Button from './src/components/Button'
import {Alert,View} from 'react-native';

export default class FlashCard extends Component {

  onButtonPress(){
    Alert.alert(
      'Alert!!!',
      'Pressed button',
      [{text: "OK", onPress: ()=> console.log("OK, pressed!!!")}],
      {cancelable:false}
    )
  }

  render(){
    return (
      // <Router>
      //   <Stack key="root">
      //     <Scene key="list" component={List} hideNavBar = {true}/>
      //     <Scene key="detailList" component={DetailList} hideNavBar = {true}/>
      //     <Scene key="addCard" component={AddCard} hideNavBar={true}/>
      //   </Stack>
      // </Router>
      <View style ={{margin:50,flexDirection: 'row'}}>
        <Button onPress={this.onButtonPress.bind(this)}>
          AddCard
        </Button>
      </View>
    );
  };
}
