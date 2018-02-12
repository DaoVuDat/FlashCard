import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class CustomCard extends Component {
    constructor(props){
        super(props);
    }

    render(){
        console.log(this.props.item);
        return(
            <View style ={{flex:1}}>
                <View style = {styles.container}>
                <View style = {{flex: 5, alignItems:'center', justifyContent:'center',}}>
                    <Text style={styles.textFocus}>{this.props.item.en}</Text>
                    <Text style={styles.text}>{this.props.item.vn}</Text>
                </View>
                <View style= {{flex: 1, flexDirection:'row', justifyContent:'flex-end', paddingRight:5}}>
                    <Text style ={{fontFamily:'Ubuntu-Light'}}>{this.props.item.key}</Text>
                </View>
                </View>
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
        height: 150,
        borderRadius:5,
        backgroundColor:"#FFF",
        shadowColor: '#343434',
        elevation:3,
        shadowOpacity:0.5,
        padding: 10
    },
    textFocus:{
        margin: 15,
        fontSize: 35,
        fontFamily:'Ubuntu-Bold',
    },
    text:{
        fontSize: 20,
        fontFamily:'Ubuntu-Regular',
    }
})