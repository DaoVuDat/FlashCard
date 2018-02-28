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
    
    _deleteItem = (index, key) => {
        //this.props parentFLatList ... phai chay truoc khi xoa - neu khong se bao loi set State chi duoc khi component do mount hay mounting
        this._refreshFlatList(key)
        dataSource.splice(index,1);
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
                        data={dataSource}
                        //extra Data will make flat list re-render depending on deletedRowKey
                        extraData={this.state.deletedRowKey}
                        keyExtractor={this._keyExtractor}
                        renderItem={({item, index}) =>{
                            return (
                            <CustomCard item={item} in={index} parentFlatList={this} deleteItem={this._deleteItem}/>
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

  