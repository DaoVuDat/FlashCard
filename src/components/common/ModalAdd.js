import React, { Component } from 'react'
import {View, Text, TouchableOpacity , StyleSheet, Dimensions,TextInput, ScrollView} from 'react-native'
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


    addItem(){
        this.props.addItem(this.state);
        this.props.hide();
        this.setState({
            word: "",
            type:"",
            meaning:"",
            examples:""
        })
    }

    render(){
        return(
            <Modal 
                isVisible={this.props.isVisible}
                onBackdropPress={this.props.hide}
                onBackButtonPress={this.props.hide}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.container}>
                        
                        <View style={styles.content}>
                            <View style={{margin:15}}>
                                <Text style={{fontFamily:'Ubuntu-Bold', fontSize:20}}>Word</Text>
                                <TextInput
                                    maxLength={15}
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
                                    maxLength={15}
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
                            style={styles.button} 
                            onPress={() => this.addItem()}
                        >
                            <Text style ={{fontFamily:'Ubuntu-Bold', color:'#FFF'}}> Add this card to list </Text>
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
    button:{
        borderColor: '#1CC4A6',
        backgroundColor: '#1CC4A6',
        borderRadius:0,
        margin:10
    },
    content:{
        padding:5
    }
})