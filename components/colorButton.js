import React from 'react';
import PropTypes from 'prop-types'
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

const ColorButton = ({backgroundColor, onSelect}) => (
    <TouchableHighlight
        style={style.button}
        onPress={() => onSelect(backgroundColor)}
        underlayColor='orange'>
        <View style={style.row}>
            <View style={[style.sample, {backgroundColor}]}></View>
            <Text style={style.texts}>{backgroundColor}</Text>
        </View>
    </TouchableHighlight>
);

const style = StyleSheet.create({
    button: {
        padding: 15,
        margin: 15,
        borderWidth: 2,
        borderColor: "#000",
        alignSelf: 'stretch',
        borderRadius: 10,
        backgroundColor: 'rgba(255,255,255,0.4)',
    },
    row: {
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'stretch',

    },
    sample: {
        width: 20,
        height: 20,
        backgroundColor: '#fff',
        borderRadius: 50,
        marginRight: 7
    },
    texts: {
        fontSize: 25,
        fontWeight: "bold",
        alignSelf: 'stretch',
        textAlign: 'center',
    }
});

ColorButton.defualtProps = {
    onSelect: f => f,
    backgroundColor: ''
};
ColorButton.propTypes = {
    onSelect: PropTypes.func,
    backgroundColor: PropTypes.string
};

export default ColorButton;
