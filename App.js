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
import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'

export default class App extends Component<Props> {
    render() {
        return (
            <View style={style.container}>
                <StatusBar hidden={true}/>
                <ImageBackground style={style.pic} source={picSierra}>
                    <Text style={style.userName}>Sierra</Text>
                </ImageBackground>
                <ImageBackground style={style.pic} source={picTanner}>
                    <Text style={style.userName}>Tanner</Text>
                </ImageBackground>
                {/*<Text style={style.defaultText}>Sierra</Text>
                <Text style={[style.defaultText,style.selectedText]}>Tanner</Text>
                <Text style={style.defaultText}>Travis</Text>*/}
            </View>
        );
    }
}

const style = StyleSheet.create({
    container:{
        backgroundColor:'#DDD',
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    defaultText: {
        flex:1,
        textAlign:'center',
        fontSize: 22,
        padding: 10,
        margin:5,
        borderWidth:StyleSheet.hairlineWidth,
        color:'#000'
    },
    selectedText: {
        flex:2,
        backgroundColor:'yellow',
        color:'blue',
        fontWeight:'bold'
    },
    pic:{
        flex:1,
        width:Dimensions.get('window').width,
    },
    userName: {
        backgroundColor: 'rgba(0,0,0,.8)',
        fontSize: 30,
        padding: 10,
        color: '#fff',
        position:'absolute',
        bottom: 0,
        right:0
    }
});
