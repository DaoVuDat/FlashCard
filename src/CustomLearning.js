import React, {Component} from 'react';
import { View, Text , StyleSheet } from 'react-native';
import CustomCardLearning from './components/common/CustomCardLearning'
import Swiper from 'react-native-swiper'


const renderPagination = (index, total, context) => {
    return (
      <View style={styles.paginationStyle}>
        <Text style={{ color: 'grey' }}>
          <Text style={styles.paginationText}>{index + 1} </Text>/ {total}
        </Text>
      </View>
    )
  }

class CustomLearning extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <Swiper style={styles.wrapper} showsButtons={true} loop={false} renderPagination={renderPagination}>
                <View style={styles.slide1}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide2}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide3}>
                    <CustomCardLearning/>
                </View>
                <CustomCardLearning/>
                <View style={styles.slide1}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide2}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide3}>
                    <CustomCardLearning/>
                </View>
                <CustomCardLearning/>
                <View style={styles.slide1}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide2}>
                    <CustomCardLearning/>
                </View>
                <View style={styles.slide3}>
                    <CustomCardLearning/>
                </View>
                <CustomCardLearning/>
            </Swiper>
        );
    };
}

export default CustomLearning;

const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB',
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5',
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9',
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
      right: 0, 
      bottom: 0, 
      justifyContent: 'flex-end', 
      alignItems: 'center'
      
    },
    paginationText: {
      color: 'red',
      fontSize: 20
    }
  })