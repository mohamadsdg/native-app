import React, {Component} from 'react'
import {
    ScrollView,
    FlatList,
    ActivityIndicator,
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from 'react-native'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productImages: [],
            fetching: false,
        }
    }
    componentDidMount() {
        // console.log('test');
        this.setState({fetching: true});
        // this.setState({fetching:false});
        fetch('https://hplussport.com/api/products.php')
            .then(response => response.json())
            .then(products => products.map(x => x.image))
            .then(productImages => this.setState({productImages, fetching: false}))
            .catch(exception => console.log(exception))
    }
    render() {
        const {fetching, productImages} = this.state;
        return (
            <View style={style.container}>
                <ActivityIndicator
                    size="large"
                    style={style.spinner}
                    animating={fetching}/>
                <ScrollView style={style.container} horizontal={true}>
                    {
                        productImages.length !== 0 ?
                            productImages.map((uri, i) => (
                                <Image source={{uri: uri}} key={i} style={style.thumb}/>
                            ))
                            :
                            null
                    }
                </ScrollView>
            </View>
        );
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    spinner: {
        position: 'absolute',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    thumb: {
        width: 375,
        resizeMode: 'cover'
    }
});

export default App;