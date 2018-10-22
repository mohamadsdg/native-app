import React from 'react';

import {
    WebView,
    StyleSheet
} from  'react-native'

const ColorInfo = ({navigation}) => {
    const {uri} = navigation.state.params;
    return(
        <WebView
            style={style.container}
            source={{uri:uri}}
            contentInset={{ top: -650 }}/>
    )
};

ColorInfo.navigationOptions = () => ({
    title: 'info colors',
});

const style = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default ColorInfo;