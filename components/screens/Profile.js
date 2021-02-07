import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import {Item, Input} from 'native-base';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends React.Component {

  state = {
    user: {},
    isData: false,
    loggedInUser: {},
  }
  constructor(props){
    super(props);
  }

  signOutFunc = () => {
    auth()
      .signOut()
      .then(() => {
        alert('User signed out!');
      });
    this.props.navigation.navigate('Login');
    }


  componentDidMount() {

    auth().onAuthStateChanged((user) => {
      if (user) {
        database().ref('users').once('value', (data) => {
          setTimeout(() => {
            for (var key in data.val()) {
              if (data.val()[key].email === user.email) {
                this.setState({
                  loggedInUser: data.val()[key],
                  isData: true
                })
              }
            }
          }, 1000);
        })
      }
    })
  }


  details = () => {
    const { user, isData, loggedInUser } = this.state;
    return (
      isData ?
        <View>
          <Text style={styles.profileD}>Name: {loggedInUser.name}</Text>
          <Text style={styles.profileD}>Email: {loggedInUser.email}</Text>
          <Text style={styles.profileD}>Password: {loggedInUser.password}</Text>
        </View>
        : null
    )
  }

  render() {
    const { isData, loggedInUser } = this.state;
    return (
      <View style={{width:'100%',alignItems:'center'}}>
        <Text style={styles.profileH}>Profile</Text>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/DemoProfile.jpg')}
          />
        </View>
        <View >
          {isData ?
            <View style={styles.profileBody}>
              <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15,borderColor: '#DE1F26', borderWidth: 5 }}>
                <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.name}  />
              </Item>
              <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15,borderColor: '#DE1F26', borderWidth: 5 }}>
                <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.email}  />
              </Item>
              <Item rounded style={{ marginTop: 20, borderRadius: 10, borderRadius: 15,borderColor: '#DE1F26', borderWidth: 5 }}>
                <Input style={{ color: 'red', backgroundColor: 'white', fontWeight: 'bold', fontSize: 20 }} value={loggedInUser.password}  />
              </Item>
             <TouchableOpacity style={styles.btnView} onPress={() => this.signOutFunc()}>
                <Text style={{color:'#fff',fontWeight:'bold',fontSize:20}}>
                  SIGN OUT
                </Text>
              </TouchableOpacity>
            </View>
            : null}
        </View>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  profileH: {
    fontSize: 35,
    color: '#DE1F26',
    padding: 7,
    margin: 7,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginTop: 20,
    fontWeight:'bold',
  },
  profileBody:{
    width: '80%',
    alignItems:'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 100,
    marginTop: 10,
    marginBottom: 10,
    borderColor:'#DE1F26',
    borderWidth:5,
  },
  profileD: {
    color: '#DE1F26',
    padding: 10,
    margin: 10,
    fontSize: 20,
    borderColor: '#DE1F26',
    borderBottomWidth: 1,
  },
  btnView: {
    width:'100%',
    borderRadius:10,
    padding: 10,
    marginTop: 20,
    backgroundColor: '#DE1F26',
    alignItems: 'center',
  },
})