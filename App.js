import React, {Component} from 'react'

import {
    Container,
    Header, Footer, Content,
    Left, Right, Body,
    Button, Icon, Title,
    Text, FooterTab,
    Drawer
} from 'native-base'

import SideBar from './src/component/sideBar'


// disable isMounted because related version react-native
// import {YellowBox} from "react-native";
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class App extends Component {
    constructor(props) {
        super(props);

    }

    closeDrawer() {
        this.drawer._root.close();
    }
    openDrawer() {
        this.drawer._root.open();
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={<SideBar/>}
                onClose={() => this.closeDrawer()}>
                <Container >
                    <Header>
                        <Left>
                            <Button
                                transparent
                                onPress={() => this.openDrawer()}>
                                <Icon name="menu"/>
                            </Button>
                        </Left>
                        <Body>
                            <Title>Header</Title>
                        </Body>
                        <Right/>
                    </Header>
                    <Content>
                        <Text>This is content section</Text>
                    </Content>
                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                        <FooterTab>
                            <Button full>
                                <Text>Footer</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </Drawer>
        );
    }
}
export default App;