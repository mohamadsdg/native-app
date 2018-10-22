import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native'

import ColorTools from 'color'

const ColorDetail = ({navigation}) => {
    // console.log(navigation);
    let Color = ColorTools(navigation.state.params.color);
    // console.log(Color);
    return (
        <View style={[styles.container, {backgroundColor: Color}]}>
            <Text style={[styles.text, {color: Color.negate()}]}>
                {Color.hex()}
            </Text>
            <Text style={[styles.text, {color: Color.negate()}]}>
                {Color.rgb().string()}
            </Text>
            <Text style={[styles.text, {color: Color.negate()}]}>
                {Color.hsl().string()}
            </Text>
        </View>
    )
};


ColorDetail.navigationOptions = ({navigation}) => ({
    title: `Detail ${navigation.state.params.color}`
    // title: `Detail`
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        margin: 10
    }
});

export default ColorDetail
