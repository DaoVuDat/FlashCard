import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import Modal from "react-native-modal";

class ModalEdit extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <Modal 
                isVisible={this.props.isVisible}
                onBackdropPress={() => this.setState({ isVisible: false })}
            >
                <View style={{ flex: 1 }}>
                    <Text>Hello!</Text>
                    <TouchableOpacity onPress={this.props.hide}>
                        <Text>Hide me!</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        )
    }
}

export default ModalEdit;