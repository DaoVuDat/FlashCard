import React, {Component} from 'react';
import { View , Text , StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DetailCard = (props) => {

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style ={{fontFamily:'Ubuntu-Bold', fontSize:14}}> {props.in}.</Text>
                <Text style ={{fontFamily:'Ubuntu-BoldItalic', fontSize:14}}> {props.item.type} </Text>
            </View>
            <Text style ={{color:'#C76E06', margin:5, fontSize: 18, fontWeight: 'bold'}}> {props.item.vn} </Text>  
            {renderMoreExample(props.item)}    
        </View>
    );
    
}

function renderMoreExample(item){
    return (
        item.sentence.map( (item,index) =>{
            return (
                <View key ={index} style={{flexDirection:'row', margin:5, marginLeft:10}}>
                    <View style={{paddingTop:5}}>
                        <Icon name="square" size={8} color="orange" backgroundColor="transparent"/>                     
                    </View>
                    <Text style={{fontFamily:'Ubuntu-Italic', fontSize:15, marginLeft:5}}>{item} </Text>
                </View>
            )
        })
    )
}

export default DetailCard;


const styles = StyleSheet.create({
    container: {
        flex:1, 
        backgroundColor:'#F9F0E6', 
        borderLeftWidth:3, 
        borderColor:'#C76E06', 
        marginLeft:5, 
        marginRight:5
    },
    header: {
      flex: 1,
      padding:5,
      flexDirection:'row',
      backgroundColor: '#EFD6B9',
      alignItems:'center',
    }
});
  