import React,{Component}from 'react'

import {
    Container,
    Header, Footer, Content,
    Left, Right, Body,
    Button, Icon, Title,
    Text, FooterTab
} from 'native-base'


// disable isMounted because related version react-native
// import {YellowBox} from "react-native";
// YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


class App extends Component {
    render() {
        return (
            <Container >
                <Header>
                    <Left>
                        <Button transparent>
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
        );
    }
}
export default App;