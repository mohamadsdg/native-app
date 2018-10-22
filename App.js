import React from 'react'
import {
    createStackNavigator,
} from 'react-navigation'
import ColorList from './components/colorList'
import ColorDetail from './components/detailcolor'
import ColorInfo from './components/infocolor'

// disable isMounted because related version react-native
import {YellowBox} from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

const App = createStackNavigator({
    Home: {screen: ColorList},
    Detail: {screen: ColorDetail},
    Info: {screen: ColorInfo}
});

/*class App extends Component {
    render() {
        return (
            <ColorList/>
        );
    }
}*/

export default App;