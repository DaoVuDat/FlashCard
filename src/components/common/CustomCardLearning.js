import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Animated, Easing, LayoutAnimation , UIManager} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

const blahBlah = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
const blahBlah2 = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'

export default class CustomCardLearning extends Component {
    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0)
        this.state = {
            expanded:false
        }
    }

    componentWillUpdate(){
        //UIManager for Android
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
       
        LayoutAnimation.spring();
      }

    componentDidMount(){
        this.animate();
    }

    renderDescription() {
        if(this.state.expanded){
          return (
              <Text> {blahBlah} </Text>
          );
        }
    }
    
    renderIcon(){
        if(!this.state.expanded){
            return (
                <Icon name="arrow-down" size={20} color="#343434" backgroundColor="transparent"/>
            );
          }
        else {
            return (
                <Icon name="arrow-up" size={20} color="#343434" backgroundColor="transparent"/>
            );
        }
    }

    animate(){
        this.animatedValue.setValue(0)
        Animated.timing(
            this.animatedValue,
            {
            toValue: 1,
            duration: 1000,
            easing: Easing.linear
            }
        ).start(() => this.animate())
    }

    render(){
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 10, 0]
          })

        return(
            <ScrollView style ={styles.container} showsVerticalScrollIndicator={false}>
                <View style ={styles.card}>
                    <Text>{this.props.data.en}</Text>
                    <Text>{this.props.data.vn}</Text>
                    <Text>{this.props.data.type}</Text>
                    <Text>{this.props.data.sentence}</Text>
                    {this.renderDescription()}
                    <View style ={{justifyContent:'center', height:20, marginTop:10}}>
                        <TouchableWithoutFeedback
                            onPress={()=>this.setState({expanded: !this.state.expanded})}
                        >
                            <Animated.View
                                style={{
                                    marginTop: movingMargin,
                                }}
                            >   
                                {this.renderIcon()} 
                            </Animated.View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#D8D8D8"
    },
    card:{
        flex:1,
        margin:30,
        borderRadius:5,
        backgroundColor:"#FFF",
        shadowColor: '#343434',
        elevation:3,
        shadowOpacity:0.5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
        alignItems:"center",
        justifyContent:"center",
    }
})