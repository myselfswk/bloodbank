import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import database from '@react-native-firebase/database';
import { Container, Spinner } from 'native-base'; //, Content, Card, CardItem, Body

export default class DonorLs extends Component {

    state = {
        donors: [],
        isData: false,
    }

    componentDidMount() {
        database()
            .ref('donors')
            .on('value', (data) => {
                setTimeout(() => {
                    for (var key in data.val()) {
                        // console.log(data.val()[key]);
                        this.setState({
                            donors: [data.val()[key], ...this.state.donors],
                        })
                    }
                    this.setState({
                        isData: true
                    })
                }, 1000);
            })
    }

    list = () => {
        const { donors, isData } = this.state;
        // console.log(donors);
        return (
            isData ? donors.map((donor, id) => {
                return (
                    <View style={styles.cardView} key={id}>
                        <Text>{donor.name} </Text>
                        <Text>{donor.age}</Text>
                        <Text>{donor.bloodGroup}</Text>
                        <Text>{donor.contact}</Text>
                        <Text>{donor.location}</Text>
                    </View>
                );
            })
                :
                (<View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Spinner color='red' />
                </View>)
        );
    };

    render() {
        return (
            <Container>
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
                    <Text style={styles.heading}>Find A Donor</Text>
                    <Text>{this.list()}</Text>
                </View>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    heading: {
        fontSize: 35,
        color: '#DE1F26'
    },
    cardView: {
        width: 300,
        padding: 15,
        margin: 15,
        borderBottomColor: '#DE1F26',
        borderBottomWidth: 2,
    },
})