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
                    <Text>{this.props.item.key}</Text>
                    <Text style={styles.text}>{this.props.item.en}</Text>
                    <Text style={styles.textFocus}>{this.props.item.sentence}</Text>
                </View>

                <View style={{height:1, backgroundColor:'#000'}}/>
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 20,
        borderWidth:1,
        backgroundColor:'gray',
        height: 100
    },
    textFocus:{
        fontSize: 25,
        fontFamily:'Ubuntu-Bold',
    },
    text:{
        fontSize: 20,
        fontFamily:'Ubuntu-Light',
    }
})