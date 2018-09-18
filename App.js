import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    TouchableHighlight,
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
                <TouchableHighlight
                    style={style.button}
                    onPress={()=>this.onChangeColor('yellow')}
                    underlayColor='orange'>
                    <View style={style.row}>
                        <View style={[
                            style.sample,
                            {backgroundColor:'yellow'}
                        ]}></View>
                        <Text style={style.texts}>Yellow</Text>
                    </View>
                </TouchableHighlight>
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
        padding:15,
        margin:15,
        borderWidth:2,
        borderColor:"#000",
        alignSelf:'stretch',
        borderRadius:10,
        backgroundColor:'rgba(255,255,255,0.4)',
    },
    row:{
        alignItems:'center',
        flexDirection:'row',
        alignSelf:'stretch',

    },
    sample:{
        width:20,
        height:20,
        backgroundColor:'#fff',
        borderRadius:50,
        marginRight: 7
    },
    texts:{
        fontSize:25,
        fontWeight:"bold",
        alignSelf:'stretch',
        textAlign:'center',
    }
});
