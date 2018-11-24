import React, {Component} from 'react';
import {
    Content,
    Header,
    Container,
    Text,
    View
} from 'native-base'

import {
    StyleSheet,
    Image
} from 'react-native'

class SideBar extends Component {
    render() {
        return (
            <Container style={styles.SideBar_style}>
                <Content>
                    <Image source={require('../../assets/pic/head-150.jpg')}/>
                    <View>
                        <Text>Hello</Text>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    SideBar_style: {
        backgroundColor: '#f8f8f8',
    }
});


export default SideBar;