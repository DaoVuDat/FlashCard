import React, { Component } from 'react'
import {View, Text, TouchableOpacity , StyleSheet, Dimensions,TextInput, ScrollView, Alert} from 'react-native'
import Modal from "react-native-modal";
import Button from 'apsl-react-native-button'

var screen = Dimensions.get('window')
class ModalEdit extends Component {
    constructor(props){
        super(props)
        this.state = {
            word: "",
            type:"",
            meaning:"",
            examples:""
        }
    }

    alert(){
        Alert.alert(
            'Delete !!!',
            'Do you want to delete this card?',
            [
              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
              {text: 'OK', onPress: () => {
                this.props.hide(); 
                this.props.deleteItem(this.props.index);
                }},
            ],
            { cancelable: false }
          )

    }

    save(){
        this.props.saveItem(this.state, this.props.item.key);
        this.props.hide();
    }

    componentWillMount(){

        this.setState({
            word: this.props.item.en,
            type: this.props.item.meaning[0].type,
            meaning: this.props.item.meaning[0].vn,
            examples: this.props.item.meaning[0].sentence
        })
    }


    render(){
        return(
            <Modal 
                isVisible={this.props.isVisible}
                onBackButtonPress={this.props.hide}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        
                        <View style={styles.content}>
                            <View style={{margin:15}}>
                                <Text style={{fontFamily:'Ubuntu-Bold', fontSize:20}}>Word</Text>
                                <TextInput
                                    maxLength={20}
                                    onChangeText={ (word) => this.setState({word})}
                                    value={this.state.word}
                                    placeholder="hello"
                                />
                            </View>

                            <View style={{margin:15}}>
                                <Text style={{fontFamily:'Ubuntu-Bold', fontSize:20}}>Type</Text>
                                <TextInput
                                    maxLength={15}
                                    onChangeText={ (type) => this.setState({type})}
                                    value={this.state.type}
                                    placeholder="verb"
                                    
                                />
                            </View>

                            <View style={{margin:15}}>
                                <Text style={{fontFamily:'Ubuntu-Bold', fontSize:20}}>Meaning</Text>
                                <TextInput
                                    multiline={true}
                                    onChangeText={ (meaning) => this.setState({meaning})}
                                    value={this.state.meaning}
                                    placeholder="xin chào"
                                    
                                />
                            </View>

                            <View style={{margin:15}}>
                                <Text style={{fontFamily:'Ubuntu-Bold', fontSize:20}}>Examples</Text>
                                <TextInput
                                    multiline={true}
                                    onChangeText={ (examples) => this.setState({examples})}
                                    value={this.state.examples}
                                    placeholder="Hello. How are you?, Hello..."
                                    
                                />
                            </View>
                        </View>
                        <Button 
                            style={styles.button1} 
                            onPress={()=> this.save()}
                        >
                            <Text style ={{fontFamily:'Ubuntu-Bold', color:'#FFF'}}> Save </Text>
                        </Button>
                        <Button 
                            style={styles.button2} 
                            onPress={()=> this.alert()}
                        >
                            <Text style ={{fontFamily:'Ubuntu-Bold', color:'#FFF'}}> Delete </Text>
                        </Button>
                    </View>
                </ScrollView>
            </Modal>
        )
    }
}

export default ModalEdit;

const styles = StyleSheet.create({
    container:{ 
        backgroundColor:'#F6F8FA', 
        padding:10,
        borderRadius:5,
    },
    button1:{
        borderColor: '#1CC4A6',
        backgroundColor: '#1CC4A6',
        borderRadius:0,
        margin:10
    },
    button2:{
        borderColor: 'red',
        backgroundColor: 'red',
        borderRadius:0,
        margin:10
    },
    content:{
        padding:5
    }
})