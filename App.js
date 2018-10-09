import React, {Component} from 'react'
import {
    createStackNavigator
} from 'react-navigation'
import ColorList from './components/colorList'

const App = createStackNavigator({
    Home:{screen:ColorList}
});

/*class App extends Component {
    render() {
        return (
            <ColorList/>
        );
    }
}*/

export default App;