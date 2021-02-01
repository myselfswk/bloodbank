import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from "react-native";
import { CheckBox } from 'react-native-elements'
import * as Animatable from 'react-native-animatable';
import { TouchableOpacity } from "react-native-gesture-handler";
import auth from '@react-native-firebase/auth';

export default class ActionSignIn extends React.Component {
    state = {
        checked: true,
        number: '',
        password: ''
    }
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.props.navigationProp.navigate('Dashboard');
            }
        })
    }
    signInFunc = () => {
        if (this.state.email === "" || this.state.email === " " || this.state.email === undefined) {
            alert("email can't be empty!")
        } else if (this.state.password === "" || this.state.password === " " || this.state.password === undefined) {
            alert("passwod can't be empty!")
        } else {
            auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    alert('User signed in!');
                    this.props.navigationProp.navigate('Dashboard');
                })
                .catch(error => {
                    alert(error);
                });
        }
    }
    render() {
        return (
            <Animatable.View
                animation="bounceInRight"
                style={styles.container}>
                <View style={styles.section}>
                    <View style={styles.icon}>
                    </View>
                    <View style={styles.input}>
                        <TextInput
                            autoCapitalize='none'
                            placeholder="Your Email..."
                            style={styles.textInput}
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
                            secureTextEntry={true}
                            placeholder="Your password..."
                            style={styles.textInput}
                            onChangeText={text => this.setState({
                                password: text
                            })}
                        />
                    </View>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.checkBox}>
                        <CheckBox
                            title="Remember me"
                            checkedColor="yellow"
                            uncheckedColor="#DE1F26"
                            checked={this.state.checked}
                            textStyle={{ color: '#DE1F26' }}
                            containerStyle={{
                                width: 200,
                                backgroundColor: 'rgba(0,0,0,0)',
                                borderColor: 'rgba(0,0,0,0)'
                            }}
                            onPress={() => {
                                this.setState({
                                    checked: !this.state.checked
                                });
                            }}
                        />
                    </View>
                    <View style={styles.button_container}>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={() => this.signInFunc()}>
                                <Text style={styles.text}>Sign In</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </Animatable.View >
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
        alignItems: 'flex-end'
    },
    button: {
        width: 100,
        height: 40,
        backgroundColor: '#DE1F26', //EC6848
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