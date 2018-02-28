import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import SwipeOut from 'react-native-swipeout'
import ModalEdit from './ModalEdit'
export default class CustomCard extends Component {
    constructor(props){
        super(props);
        this.state={
            isModalVisible: false,
        }
    }

    _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

    deleteItem = (index) => {
        //this.props parentFLatList ... phai chay truoc khi xoa - neu khong se bao loi set State chi duoc khi component do mount hay mounting
        this.props.deleteItem(index, this.props.item.key);
    }

    renderItem(){
        return (
            <View style = {{flex: 6, alignItems:'center', justifyContent:'center',}}>        
                <Text style={styles.textFocus}>{this.props.item.en}</Text>
                <Text style={{fontFamily:"Ubuntu-Italic", marginTop:5}}>({this.props.item.meaning[0].type})</Text>
                <Text style={styles.text}>{this.props.item.meaning[0].vn}</Text>
                {/* {this.renderMeaning()} */}
            </View>
        )
    }

    // renderMeaning(){
    //     return(
    //         this.props.item.meaning.map((item,index)=>{
    //             return (
    //                 <View key={index} style = {{alignItems:'center', justifyContent:'center',}}>
    //                     <Text style={{fontFamily:"Ubuntu-Italic", marginTop:5}}>({item.type})</Text>
    //                     <Text style={styles.text}>{item.vn}</Text>
    //                 </View>
    //             )
    //         })
    //     )
    // }

    render(){
        return(
            <View style ={{flex:1}}>
                <View style = {styles.container}>
                    <TouchableOpacity style ={{flex:1}} onPress= {this._toggleModal}>                           
                        {this.renderItem()}
                        <View style= {{flex: 1, flexDirection:'row', justifyContent:'flex-end', paddingRight:5}}>
                            <Text style ={{fontFamily:'Ubuntu-Light'}}>{this.props.in+1}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <ModalEdit 
                    isVisible={this.state.isModalVisible}
                    hide={this._toggleModal}
                    item = {this.props.item}
                    deleteItem={this.deleteItem}
                    index = {this.props.in}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginRight:20,
        marginBottom: 10,
        height: 130,
        borderRadius:5,
        backgroundColor:"#FFF",
        shadowColor: '#343434',
        elevation:3,
        shadowOpacity:0.5,
        padding: 10
    },
    textFocus:{
        fontSize: 27,
        fontFamily:'Ubuntu-Bold',
        color: '#4D91BE'
    },
    text:{
        fontSize: 16,
        fontFamily:'Ubuntu-Regular',
    }
})