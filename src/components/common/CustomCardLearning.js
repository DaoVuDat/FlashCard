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

    // Render The Detail of Flash Card
    renderDetail() {
        if(this.state.expanded){
          return (
              <Text> {blahBlah2} </Text>
          );
        }
    }
    
    // Render Arrow Icon - Up or Down depending on state expanded
    renderIcon(){
        if(!this.state.expanded){
            return (
                <Icon name="arrow-down" size={22} color="#343434" backgroundColor="transparent"/>
            );
          }
        else {
            return (
                <Icon name="arrow-up" size={22} color="#343434" backgroundColor="transparent"/>
            );
        }
    }

    // Setting Animate for Arrow Icon - translate 10 pixel in 1 second
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

    // Render sentence - example of that word
    renderMid(){
        return(
            this.props.data.meaning[0].sentence.map( (item,index) => {
                return (
                    <Text key ={index}>{index +1}. <Text>{item}</Text></Text>
                )
            })
        )
    }

    render(){
        //Animate translate
        const movingMargin = this.animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 10, 0]
          })

        return(
            <View style={{flex:1}}>
                <ScrollView style ={styles.container} showsVerticalScrollIndicator={false}>
                    {/* Render the Flash Card */}
                    <View style ={styles.card}>
                        {/* Render En + Type of the Word - TOP*/}
                        <View style ={styles.containerTop}>
                            <View style={{flex:10, alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={styles.textEN}>{this.props.data.en}</Text>                            
                            </View>
                            <View style={{flex:1, alignItems:'flex-end',justifyContent:'center'}}>
                                <Text style={styles.textVN}>.{this.props.data.meaning[0].type}</Text>                           
                            </View>
                        </View>

                        {/* Render Example - MID */}
                        <View style ={styles.containerMid}>
                            <Text>Example: </Text>
                            {this.renderMid()}
                        </View>

                        {/* Render Button Mark as learned - BOTTOM */}
                        <View style ={{flex:1, flexDirection:'row'}}>

                        </View>
                        
                        {/* Render more example and VN meaning */}
                        {this.renderDetail()}

                        {/* {Render Arrow with Animation} */}
                        <View style ={{flex:1, height:30, marginTop:10}}>
                            <TouchableWithoutFeedback
                                style={{flex:1, backgroundColor:'red'}}
                                onPress={()=>this.setState({expanded: !this.state.expanded})}
                            >
                                <Animated.View
                                    style={{
                                        justifyContent:'center',
                                        alignItems:'center',
                                        height:30,
                                        marginTop: movingMargin,
                                    }}
                                >   
                                    {this.renderIcon()} 
                                </Animated.View>
                            </TouchableWithoutFeedback>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    card:{
        flex:1,
        marginLeft:30,
        marginRight:30,
        marginBottom:30,
        borderRadius:5,
        backgroundColor:"#FFF",
        shadowColor: '#343434',
        elevation:3,
        shadowOpacity:0.5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 20,
    },
    containerTop:{
        flex:2,
        flexDirection:'row'
    },
    textEN:{
        fontSize: 24,
        fontFamily:'Ubuntu-Bold',
        color: '#4D91BE'
    },
    textVN:{
        fontSize: 12,
        fontFamily:'Ubuntu-Bold',
    },
    containerMid:{
        flex:1,
        flexDirection:'column', 
        padding:10
    }
})