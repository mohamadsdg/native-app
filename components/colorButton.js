import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight
} from 'react-native';

const ColorButton = ({backgroundColor, onSelect = f => f}) => (
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

export default ColorButton;
