import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from "react-native-gesture-handler";
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';


export default class ActionSignUp extends React.Component {
    state = {
        checked: true,
        email: '',
        password: ''
    }
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigationProp.navigate('Dashboard');
            }
        })
    }
    signupFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            alert("email can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
            alert("passwod can't be empty!")
        } else {
            auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    console.log('User account created & signed in!');
                    this.props.navigationProp.navigate('Dashboard');
                    database()
                        .ref('/users')
                        .push({
                            email: this.state.email,
                            password: this.state.password
                        })
                        .then((res) => console.log(res))
                })
                .catch(error => {
                    // if (error.code === 'auth/email-already-in-use') {
                    //     console.log('That email address is already in use!');
                    // }

                    // if (error.code === 'auth/invalid-email') {
                    //     console.log('That email address is invalid!');
                    // }

                    alert(error);
                });
        }
    }

    render() {
        console.log(this.state)
        return (
            <Animatable.View
                animation="bounceInRight"
                style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.icon}>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            placeholder="Your Email..."
                            style={styles.textInput}
                            autoCapitalize='none'
                            onChangeText={text => this.setState({
                                email: text
                            })}
                        />
                    </View>
                </View>

                <View style={[styles.section, {
                    marginTop: 15
                }]}>
                    <View style={styles.icon}>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            secureTextEntry
                            placeholder="Your password..."
                            style={styles.textInput}
                            onChangeText={text => this.setState({
                                password: text
                            })}
                        />
                    </View>
                </View>

                <View style={styles.bottom}>

                    <View style={styles.button_container}>
                        <View>
                            <TouchableOpacity onPress={() => this.signupFunc()} style={styles.button}>
                                <Text style={styles.text}>SignUp</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Animatable.View>
        )
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    section: {
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 7
    },
    icon: {
        borderRightWidth: 1,
        borderRightColor: 'gray',
        paddingRight: 10
    },
    input: {
        flex: 1
    },
    textInput: {
        paddingLeft: 10
    },
    bottom: {
        flexDirection: 'row',
        marginTop: 10
    },
    button_container: {
        flex: 1,
        alignItems: 'flex-end' //center
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: '#DE1F26',  //EC6848
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 7,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
    }
})