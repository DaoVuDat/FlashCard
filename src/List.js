import React, {Component} from 'react';
import {Text, TouchableOpacity, View ,StyleSheet, FlatList , ImageBackground, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from './components/common/Button'
var background1 = require('./images/background_1_fixed.jpg')
import Icon from 'react-native-vector-icons/FontAwesome';

class List extends Component{

    editCard = () => {
        Actions.editCard();
    }

    render(){
        return (
            <View style={styles.container}>
                {/*Body*/}
                <View style={styles.body}>
                    <ImageBackground style={{flex:1}} source={background1} imageStyle={{resizeMode:'cover'}}>
                        <View style = {{flex:1}}>
                             
                            {/*Title Section*/}
                            <View style = {styles.titlePart}>
                                <Text style={styles.bodyText}> Topic Vocabularies </Text>
                                <Text style={styles.bodySubText}> English </Text>
                            </View>    


                            <View style={{flex:3 }}>
                                <TouchableOpacity  style ={{flex: 1, flexDirection:'row', justifyContent:'flex-end', marginRight: 18, alignItems:'center'}} onPress= {this.editCard}>
                                    <Text style={{fontFamily:'Ubuntu-Regular', fontSize:15, color:'#FFF'}}>Edit list card   </Text>
                                    <Icon name="cog" size={30} color="#FFF" backgroundColor="transparent" />                                   
                                </TouchableOpacity>

                                <TouchableOpacity  style ={{flex: 1, flexDirection:'row', justifyContent:'flex-end', marginRight: 18, alignItems:'center'}} onPress= {()=>console.log('a')}>
                                    <Text style={{fontFamily:'Ubuntu-Regular', fontSize:15, color:'#FFF'}}>Set a plan   </Text>
                                    <Icon name="calendar" size={30} color="#FFF" backgroundColor="transparent" />
                                </TouchableOpacity>
                            </View>   

                            {/*Detail Section*/}
                            <View style = {styles.detailPart}>
                                <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{color:'#FFF', fontSize:30, fontFamily:'Ubuntu-Bold'}}>10</Text>
                                    <Text style={{color:'#FFF', fontSize:15, fontFamily:'Ubuntu-Light'}}>Cards</Text>
                                </View>
                                <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{color:'#FFF', fontSize:30, fontFamily:'Ubuntu-Bold'}}>10</Text>
                                    <Text style={{color:'#FFF', fontSize:15, fontFamily:'Ubuntu-Light'}}>Learned</Text>
                                </View>
                                <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                                    <Text style={{color:'#FFF', fontSize:30, fontFamily:'Ubuntu-Bold'}}>0</Text>
                                    <Text style={{color:'#FFF', fontSize:15, fontFamily:'Ubuntu-Light'}}>Remain</Text>
                                </View>
                            </View>    
                        </View>
                    </ImageBackground>
                </View>
                
                {/*Footer-Button*/}
                <View style={styles.footer_btn}>
                    <Button
                        onPress={()=>Actions.customLearning()}
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
    body:{
        flex: 11,
    },
    footer_btn:{
        flex:1,
    },
    bodyText:{
        fontFamily:'Ubuntu-Bold',
        fontSize: 35,
        color: '#FFF'
    },
    bodySubText:{
        fontFamily:'Ubuntu-Light',
        fontSize: 18,
        color: '#FFF'
    },
    titlePart:{
        flex:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailPart:{
        flex:2,
        flexDirection:'row',
        justifyContent:'center',
    },
  })
  