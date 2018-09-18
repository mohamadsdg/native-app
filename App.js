import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ScrollView,
    StatusBar
} from 'react-native';
import ColorButton from './components/colorButton'

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
            <ScrollView style={
                [
                    {backgroundColor:backgroundColor},
                    style.container
                ]}>
                <StatusBar hidden={false}/>
                <ColorButton
                    backgroundColor="yellow"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="red"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="green"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="salmon"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="#00ff00"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="rgb(255,0,255)"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="yellow"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="red"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="green"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="salmon"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="#00ff00"
                    onSelect={this.onChangeColor}/>
                <ColorButton
                    backgroundColor="rgb(255,0,255)"
                    onSelect={this.onChangeColor}/>
            </ScrollView>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
});
