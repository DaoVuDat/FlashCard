import React, {Component} from 'react';
import { View, Text , StyleSheet } from 'react-native';
import CustomCardLearning from './components/common/CustomCardLearning'
import Swiper from 'react-native-swiper'
import data from './data/Data.js'

const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={styles.paginationText}>{index + 1}/{total}</Text>
      </View>
    )
  }

class CustomLearning extends Component {
    constructor(props){
        super(props);
    }

    renderList(){
        return data.map( (item, index) => {
            return (
                <CustomCardLearning data ={item} key={index} />
            )
        });
    }

    render(){
        return (
            <View style={{flex:1, backgroundColor:"#D8D8D8"}}>
                <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
                    <Text style={{fontFamily:'Ubuntu-BoldItalic', fontSize: 21,color: '#444444'}}> Information Technology </Text>               
                </View>
                <View style={{flex:10}}>
                    <Swiper  showsButtons={true} loop={false} renderPagination={renderPagination}>
                        {this.renderList()}
                    </Swiper>             
                </View>
                
            </View>
        );
    };
}

export default CustomLearning;

const styles = StyleSheet.create({
    wrapper: {
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
    paginationStyle: {
      position: 'absolute',
      top: 0, 
      left: 0, 
      right: 10, 
      bottom: 10, 
      justifyContent: 'flex-end', 
      alignItems: 'flex-end'
      
    },
    paginationText: {
        fontFamily:'Ubuntu-Bold', 
        fontSize: 12
    }
  })