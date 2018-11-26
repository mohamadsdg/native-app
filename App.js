import React from 'react'
import {createStackNavigator} from "react-navigation";

//// pages ////
import Index from './src/component';
import BadgeCmp from './src/component/badge';


// disable isMounted because related version react-native
import {YellowBox} from "react-native";
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


const App = createStackNavigator({
        Home: {screen: Index},
        Badge: {screen: BadgeCmp}
    },
    {
        headerMode: 'none',
        mode: 'modal'
    });

export default App;



