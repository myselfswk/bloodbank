import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native'; //, Alert
import database from '@react-native-firebase/database';
import { Container, Spinner } from 'native-base'; //, Content, Card, Body , CardItem, Button

export default class Donors extends Component {

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
                            ...this.state,
                            donors: [data.val()[key], ...this.state.donors],
                        })
                    }
                    this.setState({
                        isData: true
                    })
                }, 1000);
            })
            this.setState({});
    }

    list = () => {
        const { donors, isData } = this.state;
        // console.log(donors);
        return (
            isData ? donors.map((donor, id) => {
                return (
                    <View style={styles.cardView} key={id}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontWeight: '700'}}>Name: </Text>
                            <Text>{donor.name} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontWeight: '700'}}>Age: </Text>
                            <Text>{donor.age} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontWeight: '700'}}>Blood Group: </Text>
                            <Text>{donor.bloodGroup} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontWeight: '700'}}>Location: </Text>
                            <Text>{donor.location} </Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{fontWeight: '700'}}>Contact: </Text>
                            <Text>{donor.contact} </Text>
                        </View>
                    </View>
                );
            })
                :
                (<View style={styles.donorSpinner}>
                    <Spinner color='#DE1F26' />
                </View>)
        );
    };

    render() {
        return (
            <Container>
                <View style={styles.donorView}>
                    <Text style={styles.heading}>Find A Donor</Text>
                    <ScrollView style={{width:'80%',height:'79%'}} >
                        {this.list()}
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
        color: '#DE1F26',
        width:'100%',
        textAlign:'center',
        fontWeight:'700',
        textTransform:'uppercase',
        marginTop:'8%',
        marginBottom:'5%'
    },
    cardView: {
        marginTop:'2%',
        alignItems:'flex-start',
        width: '100%',
        padding: 15,
        borderColor: '#DE1F26',
        borderWidth: 2,
    },
    textView: {
        paddingBottom: 40
    },
})