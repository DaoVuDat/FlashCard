import React, {Component} from 'react';
import {Text, TouchableOpacity, View ,StyleSheet, FlatList} from 'react-native';
import {Actions} from 'react-native-router-flux';

class List extends Component{
    render(){
        return (
            <View style = {styles.container}>
                {/*Header*/}
                <View style = {styles.header}>
                    {/*Header Text Left*/}
                    <View style = {styles.headerText}>
                    <Text style={styles.textHeader}> Custom List Flash Card </Text>
                    <Text style={styles.textHeader}> Cards: 10 </Text>
                    </View>

                    {/*Header Button Right*/}  
                    <View style = {styles.headerBtn}>          
                    <TouchableOpacity
                        onPress={()=> Actions.detailList()}
                    >
                        <Text style ={styles.textHeader}>
                        Learn
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={()=> Actions.addCard()}
                    >
                        <Text style ={styles.textHeader}>
                        Add Card
                        </Text>
                    </TouchableOpacity>
                    </View>
                </View>
                
                {/*Header*/}
                <View style = {styles.list}>
                    <FlatList
                    data={[
                        {key: 'Devin'},
                        {key: 'Jackson'},
                        {key: 'James'},
                        {key: 'Joel'},
                        {key: 'John'},
                        {key: 'Jillian'},
                        {key: 'Jimmy'},
                        {key: 'Julie'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
                    />
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
      flex:1,
      backgroundColor: '#000',
      padding: 10,
      flexDirection: 'row',
    },
    headerText:{
      flex:3,
      margin:5,
      justifyContent:'center',
    },
    headerBtn:{
      flex:1,
      margin: 5,
      justifyContent:'center',
      alignItems: 'flex-end',
    },
    list:{
      flex:4,
      backgroundColor:'#FFF',
    },
    textHeader:{
      fontSize: 20,
      color:'#FFF'
    }
  })
  