import React, {Component} from 'react';
import PropTypes from 'prop-types'
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
    FlatList,
    AsyncStorage,
    Alert,

} from 'react-native'

import ColorButton from './colorButton'
import ColorForm from './colorForm'

//-- import img
/*import picSierra from './assets/Sierra-Spencer.png'
import picTanner from './assets/Tanner-McTab.png'*/
//-- End import img


export default class ColorList extends Component {
    static navigationOptions = {
        title: 'Available Colors'
    };

    constructor(props) {
        super(props);
        // define variable for sample large data
        let ds = [];

        /// state
        this.state = {
            backgroundColor: "#fff",
            data: ds
        };

        /// binding
        this.onChangeColor = this.onChangeColor.bind(this);
        this.newColor = this.newColor.bind(this);
        this.saveColors = this.saveColors.bind(this);
        this.retrieveColors = this.retrieveColors.bind(this);

    }

    componentDidMount() {
        // AsyncStorage.clear();
        this.retrieveColors();
    }

    onChangeColor(backgroundColor) {
        this.setState({
            backgroundColor,
        });
    }

    async saveColors(colors) {
        try {
            await AsyncStorage.setItem(
                '@ColorListStore:Colors',
                JSON.stringify(colors)
            );
        }
        catch (Exception) {
            console.log('from method saveColors', Exception);
        }
    }

    async retrieveColors() {
        try {
            await AsyncStorage.getItem(
                '@ColorListStore:Colors',
                (error, response) => {
                    if (error) {
                        console.error('Error loading colors', error)
                    } else {
                        // console.log('before parse', response);
                        const availableColors = JSON.parse(response);
                        // console.log('after parse', availableColors);
                        if (availableColors !== null) {
                            this.setState({
                                data: availableColors
                            })
                        }
                    }
                }
            );
        }
        catch (Exception) {
            console.log('from method retrieveColors', Exception);
        }
    }

    newColor(newColor) {
        this.setState({
            data: [...this.state.data, {color: newColor}]
        });
        setTimeout(() => {
            this.saveColors(this.state.data);
        }, 10)
    }

    render() {
        const { navigate } = this.props.navigation;
        const {backgroundColor, data} = this.state;
        // console.log(navigate);
        return (
            <FlatList
                style={[
                    {backgroundColor: backgroundColor},
                    style.container
                ]}
                data={data}
                ListHeaderComponent={
                    <ColorForm
                        onNewColor={this.newColor}
                        navigation={this.props.navigation}/>
                }
                renderItem={
                    eachBtn => {
                        // console.log(eachBtn);
                        return (
                            <ColorButton
                                backgroundColor={eachBtn.item.color}
                                /*onSelect={()=>{Alert.alert('do you want to detail color')}}*/
                                onSelect={() => {
                                    navigate('Detail', {color: eachBtn.item.color})
                                }}/>
                        )
                    }
                }
                keyExtractor={(item, index) => index.toString()}/>
        );
    }
}
ColorList.defaultProps = {
    onColorSelected: f => f
};

ColorList.propTypes = {
    onColorSelected: PropTypes.func
};
const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        backgroundColor: 'lightgrey',
        padding: 10,
        paddingTop: 20,
        fontSize: 30,
        textAlign: 'center'
    }
});
