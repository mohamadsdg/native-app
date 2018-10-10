import React, {Component} from 'react'
import {
    createStackNavigator
} from 'react-navigation'
import ColorList from './components/colorList'
import ColorInfo from './components/detailcolor'

const App = createStackNavigator({
    Home: {screen: ColorList},
    Detail: {screen: ColorInfo}
});

/*class App extends Component {
    render() {
        return (
            <ColorList/>
        );
    }
}*/

export default App;