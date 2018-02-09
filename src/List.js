import React, {Component} from 'react';
import {Text, TouchableOpacity, View ,StyleSheet, FlatList , ImageBackground} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from './components/common/Button'
var background1 = require('./images/background_1_fixed.jpg')
class List extends Component{
    render(){
        return (
            <View style={styles.container}>
                {/*Header*/}
                <View style={styles.header}>
                    <ImageBackground style={styles.headerImage} source={background1} imageStyle={{resizeMode:'cover'}}>
                        <View style = {styles.headerImageContent}>
                            <Text style={styles.headerText}> Topic Vocabularies </Text>
                            <Text style={styles.headerSubText}> 10 cards </Text>    
                        </View>
                    </ImageBackground>
                </View>

                {/*Contents*/}
                <View style={styles.contents}>
                
                </View>
                
                {/*Footer-Button*/}
                <View style={styles.footer_btn}>
                    <Button
                        onPress={()=>console.log("a")}
                    > 
                    LEARN 
                    </Button>
                </View>
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    container:{
      flex: 1, 
      justifyContent: 'center',
    },
    header:{
        flex: 3,
    },
    contents:{
        flex:7,
        backgroundColor: '#393939',
    },
    footer_btn:{
        flex:3/4,
    },
    headerImage:{
        flex:1,
    },
    headerImageContent:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText:{
        fontFamily:'Ubuntu-BoldItalic',
        fontSize: 25,
        color: '#FFF'
    },
    headerSubText:{
        fontFamily:'Ubuntu-Italic',
        fontSize: 15,
        color: '#FFF'
    }
  })
  