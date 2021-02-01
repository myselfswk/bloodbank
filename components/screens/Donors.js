import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
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
                        <Text>Name: {donor.name} </Text>
                        <Text>Age: {donor.age}</Text>
                        <Text>Blood Group: {donor.bloodGroup}</Text>
                        <Text>Contact: {donor.contact}</Text>
                        <Text>Location: {donor.location}</Text>
                    </View>
                );
            })
                :
                (<View style={ styles.donorSpinner }>
                    <Spinner color='#DE1F26' />
                </View>)
        );
    };

    render() {
        return (
            <Container>
                <View style={styles.donorView}>
                    <Text style={styles.heading}>Find A Donor</Text>
                    <ScrollView>
                        <Text style={styles.textView}>{this.list()}</Text>
                    </ScrollView>
                </View>
            </Container>
        );
    }
}

var styles = StyleSheet.create({
    donorSpinner: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    donorView: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "column"
    },
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
    textView: {
        paddingBottom: 40
    },
})