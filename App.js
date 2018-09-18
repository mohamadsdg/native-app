import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

//-- import img
import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'
//-- End import img

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: "blue"
        };

        this.onChangeColor = this.onChangeColor.bind(this)

    }

    onChangeColor(backgroundColor){

        this.setState({backgroundColor});
    }

    render() {
        const {backgroundColor} = this.state;
        return (
            <View style={
                [
                    {backgroundColor:backgroundColor},
                    style.container
                ]}>
                <StatusBar hidden={false}/>
                <Text
                    style={style.button}
                    onPress={() => this.onChangeColor("green")}>green</Text>
                <Text
                    style={style.button}
                    onPress={() => this.onChangeColor("red")}>red</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems : "center",
    },
    button:{
        fontSize:25,
        padding:15,
        margin:15,
        borderWidth:2,
        borderColor:"#000",
        fontWeight:"bold",
        alignSelf:'stretch',
        textAlign:'center',
        borderRadius:10
    }
});
