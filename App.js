import React,{Component}from 'react'
import {
    YellowBox,
    View,
    Text,
    StyleSheet
} from "react-native"


// disable isMounted because related version react-native
// import {YellowBox} from "react-native";
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class App extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text style={[style.welcome,style.f1]}>hello world</Text>
                <Text style={[style.welcome,style.f2]}>hello world</Text>
                <Text style={[style.welcome,style.f3]}>hello world</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#f5fcff"
    },
    welcome:{
        fontSize:35,
        textAlign:"center",
        margin:8
    },
    f1:{fontFamily:'BlackHanSans'},
    f2:{fontFamily:'Gloria'},
    f3:{fontFamily:'SpaceMono'}
});

export default App;