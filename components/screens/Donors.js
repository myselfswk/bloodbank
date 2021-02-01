import React, { Component } from 'react';
import { Text, View } from 'react-native';
import database from '@react-native-firebase/database';
import { Spinner, Content, Card, CardItem, Body, Container } from 'native-base';

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
        console.log(donors);
        return (
            isData ? donors.map((donor, id) => {
                return (
                    // <Container key={id}>
                    //     <Content padder>
                    //         <Card transparent>
                    //             <CardItem>
                    //                 <Body>
                    //                     <Text>{donor.name}</Text>
                    //                 </Body>
                    //             </CardItem>
                    //         </Card>
                    //     </Content>
                    // </Container>

                    <View style={{ margin: 10 }} key={id}>
                        <Text style={{ width:100 }}>{donor.name} </Text>
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
        return <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>
            <Text>{this.list()}</Text>
        </View>;
    }
}