import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native'


export default class ColorForm extends Component {
    constructor(props) {
        super(props);
        this.state ={
            txtColor : ''
        };
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
        // console.log(this.state.txtColor);
        this.props.onNewColor(this.state.txtColor.toLocaleLowerCase());
        this.setState({txtColor: ''});
    }
    render() {
        const {navigate} = this.props.navigation;
        // console.log(this.props.navigation);
        const uri = 'https://www.w3schools.com/colors/colors_names.asp';
        return (
            <View style={style.container}>
                <TextInput
                    style={style.input}
                    placeholder='write the color'
                    value={this.state.txtColor}
                    onChangeText={(text) => this.setState({txtColor: text})}
                />
                <Text
                    style={style.btn}
                    onPress={this.onSubmit}>Add</Text>
                <Text
                    style={style.btn}
                    onPress={() => {
                        navigate('Info', {uri})
                    }}>Info</Text>
            </View>
        );
    }
}
const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgrey',
        height: 70,
        paddingTop: 20
    },
    input:{
        flex: 1,
        margin: 5,
        padding: 5,
        borderWidth: 2,
        fontSize: 20,
        borderRadius: 5,
        backgroundColor: 'snow'
    },
    btn:{
        backgroundColor: 'darkblue',
        margin: 5,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: 20
    }
});
