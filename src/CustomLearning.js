import React, {Component} from 'react';
import { View, Text , StyleSheet } from 'react-native';
import CustomCardLearning from './components/common/CustomCardLearning'
import Swiper from 'react-native-swiper'
import data from './data/Data.json'

const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1}</Text>/{total}
        </Text>
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
                <CustomCardLearning data ={item} key={index}/>
            )
        });
    }

    render(){
        return (
            <Swiper  showsButtons={true} loop={false} renderPagination={renderPagination}>
                {this.renderList()}
            </Swiper>
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
      right: 15, 
      bottom: 15, 
      justifyContent: 'flex-end', 
      alignItems: 'flex-end'
      
    },
    paginationText: {

    }
  })