import React, {Component} from 'react';
import { TouchableHighlight, Text , TouchableOpacity, StyleSheet} from 'react-native';

const Button = (props) => {
    return(
        <TouchableHighlight
        activeOpacity={1}
        style={styles.buttonStyle}
        underlayColor = "#535353"
        onPress={props.onPress} 
        >
            <Text style={styles.textStyle}>
                {props.children}
            </Text>
        </TouchableHighlight>
    );
}

export default Button;


const styles = StyleSheet.create({
    textStyle: {
      alignSelf: 'center',
      color: '#FFF',
      fontSize: 18,
      paddingTop: 5,
      paddingBottom: 5,
      fontFamily:'sofiapro-light'
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#444444',
      justifyContent:'center',
      alignItems: 'center',
    }
});
  