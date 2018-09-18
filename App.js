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
    StatusBar,
    FlatList

} from 'react-native'

import ColorButton from './components/colorButton'
import ColorForm from './components/colorForm'

//-- import img
import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'
//-- End import img

export default class App extends Component {
    constructor(props) {
        super(props);
        // define variable for sample large data
        let ds = [
            {color: 'blue'},
            {color: 'green'},
        ];

        /// state
        this.state = {
            backgroundColor: "blue",
            data : ds
        };

        /// binding
        this.onChangeColor = this.onChangeColor.bind(this);
        this.newColor = this.newColor.bind(this)

    }

    onChangeColor(backgroundColor){
        this.setState({
            backgroundColor,
        });
    }
    newColor(newColor){
        this.setState({
            data: [...this.state.data, {color: newColor}]
        })
    }

    render() {
        const {backgroundColor,data} = this.state;
        // console.log(data);
        return (
            <FlatList
                style={[
                    {backgroundColor: backgroundColor},
                    style.container
                ]}
                data={data}
                ListHeaderComponent={
                    <ColorForm
                        onNewColor={this.newColor}/>
                }
                renderItem={
                    eachBtn =>{
                        // console.log(eachBtn);
                        return (
                            <ColorButton
                                backgroundColor={eachBtn.item.color}
                                onSelect={this.onChangeColor}/>
                        )
                    }
                }
                keyExtractor={(item, index) => index.toString()}/>
        );
    }
}

const style = StyleSheet.create({
    container:{
        flex:1,
    },
    header: {
        backgroundColor: 'lightgrey',
        padding: 10,
        paddingTop: 20,
        fontSize: 30,
        textAlign: 'center'
    }
});
