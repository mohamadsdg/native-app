import React, {Component} from 'react';
import {
    Content,
    Header,
    Container,
    Text,
    View,
    List,ListItem,
    Left,Right,Body,
    Button,Icon
} from 'native-base'

import {
    StyleSheet,
    Image
} from 'react-native'

class SideBar extends Component {
    render() {
        return (
            <Container style={styles.SideBar_style}>
                <Image source={require('../../assets/pic/head-150.jpg')}/>
                <Content>
                    <List>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                                <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem >
                            <Left>
                                <Text>Native Base</Text>
                            </Left>
                            <Body/>
                            <Right>
                                <Button primary rounded style={{width:87,height:30}}>
                                    <Text style={{fontSize:12}}>Primary</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='alert' style={{color:'green',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Badge</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Icon name='train' style={{color:'red',fontSize:23}}/>
                            </Left>
                            <Body>
                            <Text>Button</Text>
                            </Body>
                            <Right>
                                <Button primary style={{width:75,height:25}}>
                                    <Text style={{fontSize:12}}>8 Type</Text>
                                </Button>
                            </Right>
                        </ListItem>
                    </List>
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