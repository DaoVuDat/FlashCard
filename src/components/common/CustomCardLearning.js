import React, { Component } from 'react'
import {View, Text, StyleSheet, ScrollView, TouchableWithoutFeedback, Animated, Easing, LayoutAnimation , UIManager} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import ButtonMark from './ButtonMark'
import DetailCard from './DetailCard'
export default class CustomCardLearning extends Component {
    constructor(props){
        super(props);
        this.animatedValue = new Animated.Value(0)
        this.state = {
            expanded:false,
            click:false
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
    
    // Render Arrow Icon - Up or Down depending on state expanded
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
        let arr = this.stringToArray(this.props.data.meaning[0].sentence)
        return(
            arr.map( (item,index) => {
                return (
                    <View key ={index} style={{flexDirection:'row', marginTop:5}}>
                        <View style={{paddingTop:5}}>
                            <Icon name="circle" size={8} color="orange" backgroundColor="transparent"/>                     
                        </View>
                        <Text style={{fontFamily:'Ubuntu-Italic', fontSize:15, marginLeft:5}}>{item} </Text>
                    </View>
                )
            })
        )
    }

    // Render Button Mark
    renderButtonMark(){
        return (
            <ButtonMark onPress={()=>this.setState({click: !this.state.click})} click={this.state.click}>Mark Learn</ButtonMark>
        )
    }

    // Render The Detail of Flash Card
    renderDetail() {
        if(this.state.expanded){
            return (
                this.props.data.meaning.map( (item, index)=>{
                    if(index === 0){
                        return (
                            <View key={index} style={{margin:5,marginBottom:20 ,padding:10, backgroundColor:'#4577BF', justifyContent:'center', alignItems:'center'}}>
                                <Text style={{color:'#FFFFFF', fontSize:18}}>{item.vn}</Text>
                            </View>
                        )
                    }
                    else {
                        return (
                            <DetailCard key={index} item={item} in={index} en={this.props.data.en}/>
                        )
                    }
                })
            );
        }
    }

    stringToArray(str){
        let arr = str.split("\n");
    
        return arr;
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
                            <View style={{flex:2, alignItems:'flex-start', justifyContent:'center'}}>
                                <Text style={styles.textEN}>{this.props.data.en}</Text>                            
                            </View>
                            <View style={{flex:1, alignItems:'flex-start',justifyContent:'center', paddingLeft:10}}>
                                <Text style={styles.textVN}>{this.props.data.meaning[0].type} </Text>                           
                            </View>
                        </View>

                        {/* Render Example - MID */}
                        <View style ={styles.containerMid}>
                            {this.renderMid()}
                        </View>

                        {/* Render Button Mark as learned - BOTTOM */}
                        <View style ={styles.containerBot}>
                            {this.renderButtonMark()}
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
    },
    textEN:{
        fontSize: 26,
        fontFamily:'Ubuntu-Bold',
        color: '#4D91BE'
    },
    textVN:{
        fontSize: 12,
        fontFamily:'Ubuntu-BoldItalic',
    },
    containerMid:{
        flex:1,
        flexDirection:'column', 
        padding:10
    },
    example:{

    },
    containerBot:{
        flex:1, 
        flexDirection:'row', 
        justifyContent:'center', 
        alignItems:'center', 
        padding:5
    }
})