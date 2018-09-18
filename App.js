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

} from 'react-native';
import ColorButton from './components/colorButton'

//-- import img
import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'
//-- End import img

export default class App extends Component {
    constructor(props) {
        super(props);
        // define variable for sample large data
        let ds = [
            {color: 'red'},
            {color: 'blue'},
            {color: 'green'},
            {color: 'salmon'},
            {color: 'red'},
            {color: '#00ff00'},
            {color: 'green'},
            {color: 'salmon'}
        ];

        /// state
        this.state = {
            backgroundColor: "blue",
            data : ds
        };

        /// binding
        this.onChangeColor = this.onChangeColor.bind(this)

    }

    onChangeColor(backgroundColor){
        this.setState({
            backgroundColor,
        });
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
                    <Text style={style.header}>Color List</Text>
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
