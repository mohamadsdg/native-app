import React, {Component} from "react";
import {
    Container,
    Header, Footer,
    Left, Right, Body,
    Button, Icon, Title,
    Text, FooterTab,
    Drawer,Content
} from 'native-base'

import SideBar from './partial/sideBar'

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
        const {navigate} = this.props.navigation ;
        return (
            <Drawer
                ref={(ref) => this.drawer = ref}
                content={<SideBar navigate={navigate}/>}
                onClose={() => this.closeDrawer()}>
                <Container>
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
                        <Text>This is Main section</Text>
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