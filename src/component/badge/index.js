import React, {Component} from "react";
import {
    Container,
    Header, Footer,
    Left, Right, Body,
    Button, Icon, Title,
    Text, FooterTab,
    Drawer,Content,Badge
} from 'native-base'

import SideBar from '../partial/sideBar'

class BadgeCmp extends Component {

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
        const {navigation} = this.props;
        const {navigate} = navigation;
        console.log(navigation);
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
                        <Badge>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Text>2</Text>
                        </Badge>
                        <Badge success>
                            <Text>2</Text>
                        </Badge>
                        <Badge info>
                            <Text>2</Text>
                        </Badge>
                        <Badge warning>
                            <Text>2</Text>
                        </Badge>
                        <Badge danger>
                            <Text>2</Text>
                        </Badge>
                        <Badge primary>
                            <Icon name="star" style={{fontSize: 15, color: "#fff", lineHeight: 20}}/>
                        </Badge>
                        <Badge style={{backgroundColor: 'black'}}>
                            <Text style={{color: 'white'}}>1866</Text>
                        </Badge>
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

export default BadgeCmp;