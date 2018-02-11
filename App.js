import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import List from './src/List';
import CustomLearning from './src/CustomLearning';
import EditCard from './src/EditCard';

import CustomCard from './src/components/common/CustomCard'
import {Text, FlatList, View} from 'react-native'

const dataSource =[
  {
    key:"1",
    en:"Hello",
    sentence:"Hello. How are you?",
    vn:"Xin chao",
  },
  {
    key:"2",
    en:"Hi",
    sentence:"Hi. How are you?",
    vn:"Xin chao",
  },
  {
    key:"3",
    en:"Fine",
    sentence:"I am fine",
    vn:"Tot",
  },
  {
    key:"4",
    en:"Good",
    sentence:"I am good",
    vn:"Gioi",
  },
  {
    key:"5",
    en:"Bad",
    sentence:"I am bad",
    vn:"Te",
  },
  {
    key:"6",
    en:"Go",
    sentence:"I go to school",
    vn:"Di",
  },
  {
    key:"7",
    en:"Fastest",
    sentence:"I am the fastest man alive. I am the flash. I am the fastest man alive. I am the flash",
    vn:"Nhanh nhat",
  },
  {
    key:"8",
    en:"Gun",
    sentence:"I have a really big gun in my pocket",
    vn:"Sung",
  },
]



export default class FlashCard extends Component {

  _keyExtractor = (item, index) => item.key;

  _renderListItem = ({item}) =>{
    return (
       <CustomCard item={item} />
      
    )
  }

  render(){
    return (
      // <Router>
      //   <Stack key="root">
      //     <Scene key="list" component={List} hideNavBar = {true}/>
      //     <Scene key="editCard" component={EditCard} hideNavBar = {true}/>
      //     <Scene key="customLearning" component={CustomLearning} hideNavBar={true}/>
      //   </Stack>
      // </Router>
      <View style ={{flex:1, marginTop:22}}>
        <FlatList
          data={dataSource}
          
          keyExtractor={this._keyExtractor}
          renderItem={this._renderListItem}
        />
      </View>
    );
  };
}
