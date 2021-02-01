import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';

var logo = require('../../assets/images/logo2-01.png');

class Splash extends Component {
    constructor(props) {
        super(props);
        setTimeout(() => {
            this.props.navigation.navigate('Login');
        }, 2000);
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={logo} style={styles.logo}></Image>
                <Text style={styles.textLogo}>Blood App</Text>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
    },
    textLogo: {
        color: 'red',
        fontSize: 26,
    }
});

export default Splash;
