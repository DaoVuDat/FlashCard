import React from 'react';
import { TouchableHighlight, Text } from 'react-native';

class Button extends Component {
    constructor(props){
        super(props);
        this.state = {
            pressed: false
        }
    }
    

    
    render(){
        const { buttonStyle, textStyle } = styles;
        return(
            <TouchableHighlight
            onPress={props.onPress} 
            style={buttonStyle}
            
            >
                <Text style={textStyle}>
                    {props.children}
                </Text>
            </TouchableHighlight>
        );
    }
}

export default Button;


const styles = {
    textStyle: {
      alignSelf: 'center',
      color: '#007aff',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    },
    textStylePressed:{

    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#fff',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007aff',
      marginLeft: 5,
      marginRight: 5
    },
    buttonStylePressed:{

    }
  };
  