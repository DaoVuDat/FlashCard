import React, {Component} from 'react';
import {View, Text ,StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from './components/common/Button'
import CustomCard from './components/common/CustomCard'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'

class EditCard extends Component {


    _keyExtractor = (item, index) => item.key;

    _renderListItem = ({item}) =>{
        return (
        <CustomCard item={item} />
        
        )
    }

    
    render(){
        return (
            <View style={{flex:1, backgroundColor:"#D8D8D8"}}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:20, paddingRight: 20}}>
                    <View />
                    <Text style ={styles.midText}> Information Technology </Text>
                    <TouchableOpacity onPress= {this.editCard}> 
                        <Icon name="plus" size={20} color="#444444" backgroundColor="transparent" />                                                   
                    </TouchableOpacity>
                </View> 
                <View style ={{flex:10}}>
                    <FlatList
                        data={dataSource}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderListItem}
                    />
                </View>
                <View style={{flex:1}}>
                    <Button
                        onPress={()=>Actions.list()}
                    > 
                    SAVE 
                    </Button>
                </View>
            </View>
        );
    };
}

export default EditCard;

const styles = StyleSheet.create({
    midText:{
        fontFamily:'Ubuntu-BoldItalic',
        fontSize: 21,
        color: '#444444'
    }
  });

  const dataSource =[
    {
      key:"1",
      en:"abetalipoproteinemia",
      sentence:"Hello. How are you?",
      vn:"Xin chào",
      type:"verb"
    },
    {
      key:"2",
      en:"hi",
      sentence:"Hi. How are you?",
      vn:"Xin chào",
      type:"verb"
    },
    {
      key:"3",
      en:"fine",
      sentence:"I am fine",
      vn:"Tốt",
      type:"adjective"
    },
    {
      key:"4",
      en:"state-of-the-art",
      sentence:"I am good",
      vn:"Giỏi",
      type:"adjective"
    },
    {
      key:"5",
      en:"telecommunications",
      sentence:"I am bad",
      vn:"Xấu",
      type:"adjective"
    },
    {
      key:"6",
      en:"go",
      sentence:"I go to school",
      vn:"Đi",
      type:"verb"
    },
    {
      key:"7",
      en:"fastest",
      sentence:"I am the fastest man alive. I am the flash. I am the fastest man alive. I am the flash",
      vn:"Nhanh nhất",
      type:"adjective"
    },
    {
      key:"8",
      en:"gun",
      sentence:"I have a really big gun in my pocket",
      vn:"Súng",
      type:"noun"
    },
  ]