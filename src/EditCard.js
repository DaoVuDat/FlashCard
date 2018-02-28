import React, {Component} from 'react';
import {View, Text ,StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Button from './components/common/Button'
import CustomCard from './components/common/CustomCard'
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux'
import dataSource from './data/Data.js'
import ModalAdd from './components/common/ModalAdd'

class EditCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: null,
            deletedRowKey: null,
            isModalVisible: false,
        }
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    _keyExtractor = (item, index) => item.key;


    _refreshFlatList = (deletedKey) => {
        this.setState( (prevState) => {
            return {
                deletedRowKey: deletedKey
            }
        })
    }
    
    _addItem = (item) => {
        let length = this.state.data.length;
        console.log(length);
        let keyGenerate = this.state.data[length-1].key;
        
        let keyGenerateToInt = parseInt(keyGenerate);
        
        let arraySentence = this._stringToArray(item.examples);

        let itemAdding = {
            key: (++keyGenerateToInt).toString(),
            en: item.word,
            mark:"false",
            meaning:[
                {
                    type:item.type,
                    sentence:arraySentence,
                    vn:item.meaning
                }
            ]
        }
        let dataAdded = this.state.data;
        dataAdded.push(itemAdding);
        this.setState({
            data: dataAdded
        })

        this._refreshFlatList(itemAdding.key)
    }

    // string to array function for _addItem func  
    _stringToArray(str){
        let arrayStr = str.split("\n");
        return arrayStr;
    }

    // it wont work when restarting the application
    // more care about when attach with redux
    _deleteItem = (index, key) => {
        this._refreshFlatList(key);
        let dataDeleted = this.state.data;
        dataDeleted.splice(index,1);
    }

    _saveItem = (data, key) => {
        let preData = this.state.data;
        let foundIndex = preData.findIndex(item => key == item.key);
        if(foundIndex < 0 ){
            return
        }

        let arrSentence = this._stringToArray(data.examples);

        preData[foundIndex].en = data.word;
        preData[foundIndex].meaning[0].type = data.type;
        preData[foundIndex].meaning[0].sentence = arrSentence;
        preData[foundIndex].meaning[0].vn = data.meaning;

        this.setState({
            data: preData
        })
    }

    componentWillMount(){
        this.setState({
            data: dataSource
        })
    }


    render(){
        return (
            <View style={{flex:1, backgroundColor:"#D8D8D8"}}>
                <View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingLeft:20, paddingRight: 20}}>
                    <View />
                    <Text style ={styles.midText}> Information Technology </Text>
                    <TouchableOpacity onPress= {this._toggleModal}> 
                        <Icon name="plus" size={20} color="#444444" backgroundColor="transparent" />                                                   
                    </TouchableOpacity>
                </View> 
                <View style ={{flex:10}}>
                    <FlatList
                        data={this.state.data}
                        //extra Data will make flat list re-render
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item, index}) =>{
                            return (
                            <CustomCard item={item} in={index} parentFlatList={this} 
                                        deleteItem={this._deleteItem} saveItem={this._saveItem}
                            />
                            )
                        }}
                    />
                </View>
                <View style={{flex:1}}>
                    <Button
                        onPress={()=>Actions.list()}
                    > 
                    SAVE 
                    </Button>
                </View>
                <ModalAdd 
                    isVisible={this.state.isModalVisible}
                    hide={this._toggleModal}
                    addItem = {this._addItem}
                />
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

  