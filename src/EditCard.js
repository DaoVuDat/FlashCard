import React, {Component} from 'react';
import {View, Text ,StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from './components/common/Button'
import CustomCard from './components/common/CustomCard'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
import dataSource from './data/Data.json'
class EditCard extends Component {


    _keyExtractor = (item, index) => item.key;

    _renderListItem = ({item, index}) =>{
        return (
        <CustomCard item={item} in={index}/>
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

  