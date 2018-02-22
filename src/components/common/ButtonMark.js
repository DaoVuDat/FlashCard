import React, {Component} from 'react';
import { Text , TouchableOpacity, StyleSheet} from 'react-native';

const ButtonMark = (props) => {
    return(
        <TouchableOpacity
        style={props.click ? styles.buttonStyleTrue : styles.buttonStyleFalse}
        onPress={props.onPress} 
        >
            <Text style={props.click ? styles.textStyleTrue : styles.textStyleFalse}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
}

export default ButtonMark;


const styles = StyleSheet.create({
    textStyleFalse: {
      alignSelf: 'center',
      color: 'red',
      fontSize: 12,
      paddingTop: 5,
      paddingBottom: 5,
      fontFamily:'sofiapro-light'
    },
    textStyleTrue: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 12,
    paddingTop: 5,
    paddingBottom: 5,
    fontFamily:'sofiapro-light'
    },
    buttonStyleFalse: {
      backgroundColor: '#FFF',
      justifyContent:'center',
      alignItems: 'center',
      padding:5,
      borderWidth:1,
      borderColor:'red',
      alignSelf:'stretch',
      flex:1
    },
    buttonStyleTrue: {
        backgroundColor: 'green',
        justifyContent:'center',
        alignItems: 'center',
        padding:5,
        borderWidth:1,
        borderColor:'green',
        alignSelf:'stretch',
        flex:1
      }
});
  