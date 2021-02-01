import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import database from '@react-native-firebase/database';

export default class Donate extends Component {
    state = {
        name: '',
        age: '',
        bloodGroup: '',
        contact: '',
    }

    donate = () => {
        database()
            .ref('/donors')
            .push({
                name: this.state.name,
                age: this.state.age,
                bloodGroup: this.state.bloodGroup,
                contact: this.state.contact,
            })
            .then(this.props.navigationProp.navigate('Donors'))
    }


    render() {
        return (
            <Container>
                <Text style={styles.donorH}>Become a Donor</Text>
                <Content>
                    <Form style={{ padding: 10 }}>
                        <Item fixedLabel>
                            <Label>Full Name</Label>
                            <Input onChangeText={text => this.setState({
                                name: text
                            })} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Age</Label>
                            <Input onChangeText={text => this.setState({
                                age: text
                            })} keyboardType={'numeric'} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Blood Group</Label>
                            <Input autoCapitalize={'characters'} onChangeText={text => this.setState({
                                bloodGroup: text
                            })} />
                        </Item>
                        <Item fixedLabel last>
                            <Label>Contact No.</Label>
                            <Input onChangeText={text => this.setState({
                                contact: text
                            })} keyboardType={'numeric'} />
                        </Item>
                    </Form>
                    <Button onPress={() => this.donate()} full style={{ backgroundColor: '#d6004e', marginTop: 15, marginHorizontal: 10 }}>
                        <Text>Donate</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    donorH: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 22
    }
})