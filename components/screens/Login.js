import React from 'react';
import {
    StyleSheet,
} from 'react-native';
import App from '../../src/App';

const Login = (props) => {
    console.log("Login: ",props);
    return (
        <>
            <App navigationProp={props.navigation} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginText: {
        color: 'red',
        fontSize: 26,
    }
});

export default Login;
