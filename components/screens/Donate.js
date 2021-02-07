import React, { Component } from 'react';
import { StyleSheet, Alert } from "react-native";
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import database from '@react-native-firebase/database';

export default class Donate extends Component {
    state = {
        name: '',
        age: '',
        bloodGroup: '',
        contact: '',
        location: ''
    }

    donate = () => {

        if (this.state.name === "" || this.state.name === " " || this.state.name === undefined) {
            Alert.alert("Please, Fill Your Name")
        } else if (this.state.age === "" || this.state.age === " " || this.state.age === undefined) {
            Alert.alert("Please, Fill Your Age")
        } else if (this.state.bloodGroup === "" || this.state.bloodGroup === " " || this.state.bloodGroup === undefined) {
            Alert.alert("Please, Fill Your Blood Group")
        } else if (this.state.contact === "" || this.state.contact === " " || this.state.contact === undefined) {
            Alert.alert("Please, Fill Your Contact Number")
        } else if (this.state.location === "" || this.state.location === " " || this.state.location === undefined) {
            Alert.alert("Please, Fill Your Location")
        }
        else {
            database()
                .ref('/donors')
                .push({
                    name: this.state.name,
                    age: this.state.age,
                    bloodGroup: this.state.bloodGroup,
                    contact: this.state.contact,
                    location: this.state.location,
                })
                .then(() => {
                    alert('Your Info has been collected')
                    // this.props.navigation.navigate('Donors')
                    this.setState({
                        name: '',
                        age: '',
                        bloodGroup: '',
                        contact: '',
                        location: '',
                            
                    })
                });
        }
        // console.log("This is Navigation  Props: ", this.props.navigation)
    }


    render() {
        return (
            <Container >
                <Text style={styles.donorH}>Become a Donor</Text>
                <Content >
                    <Form style={{ padding: 10, width:'100%',alignItems:'center',justifyContent:'center' }}>
                        <Item floatingLabel style={styles.input}>
                            <Label>Full Name</Label>
                            <Input value={this.state.name} autoCapitalize={'sentences'} onChangeText={text => this.setState({
                                name: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Age</Label>
                            <Input value={this.state.age} onChangeText={text => this.setState({
                                age: text
                            })} keyboardType={'numeric'} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Blood Group</Label>
                            <Input value={this.state.bloodGroup} autoCapitalize={'characters'} onChangeText={text => this.setState({
                                bloodGroup: text
                            })} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Contact No.</Label>
                            <Input value={this.state.contact} onChangeText={text => this.setState({
                                contact: text
                            })} keyboardType={'numeric'} />
                        </Item>
                        <Item floatingLabel style={styles.input}>
                            <Label>Location</Label>
                            <Input value={this.state.location} onChangeText={text => this.setState({
                                location: text
                            })} />
                        </Item>
                    </Form>
                    <Button onPress={() => this.donate()} full style={styles.donorB}>
                        <Text style={styles.btnText}>Donate</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    donorH: {
        marginTop: '10%',
        width:'100%',
        fontSize: 30,
        fontWeight:'700',
        color: '#DE1F26',
        textAlign:'center',
        width:'100%',
        textTransform:'uppercase'

    },
    donorB: {
        backgroundColor: '#DE1F26',
        marginTop: 15,
        marginHorizontal: 10,
        borderRadius:10,
        },
    btnText:{
        fontWeight:'bold',
        fontSize:22
    },
    input:{
        marginTop:'5%',
    }

})