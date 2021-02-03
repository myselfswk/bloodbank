import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export default class Profile extends React.Component {

  constructor(props) {
    super(props);
  }
  state = {
    users: [],
    isData: false,
  }



  signOutFunc = () => {
    auth()
      .signOut()
      .then(() => {
        alert('User signed out!')
        setTimeout(() => {
          this.props.navigation.navigate('Login');
      }, 2000);
      });
  }

  componentDidMount() {
    database()
      .ref('users')
      .on('value', (data) => {
        setTimeout(() => {
          for (var key in data.val()) {
            this.setState({
              users: data.val()[key],
            })
          }
          this.setState({
            isData: true
          })
        }, 2000);
      })
    console.log(this.props);
  }

  details = () => {
    const { users, isData } = this.state;

    return (
      isData ?
        <View>
          <Text style={styles.profileD}>Name: {users.name}</Text>
          <Text style={styles.profileD}>Email: {users.email}</Text>
          <Text style={styles.profileD}>Password: {users.password}</Text>
        </View>
        : null
    )
  }

  render() {
    return (
      <View>
        <Text style={styles.profileH}>Profile</Text>
        <View style={styles.container}>
          <Image
            style={styles.tinyLogo}
            source={require('../../assets/images/DemoProfile.jpg')}
          />
        </View>
        <View>
          <Text>{this.details()}</Text>
        </View>
        <View style={styles.btnView}>
          <Button
            color='#DE1F26'
            title="Sign Out"
            onPress={() => this.signOutFunc()}
          />
        </View>
        {/* <View style={styles.btnView}>
          <Button
            color='#DE1F26'
            title="Update"
          />
        </View> */}
      </View>
    );
  }
}

var styles = StyleSheet.create({
  profileH: {
    fontSize: 30,
    color: '#DE1F26',
    padding: 7,
    margin: 7,
    textAlign: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DE1F26',
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderRadius: 100
  },
  tinyLogo: {
    width: 150,
    height: 150,
    borderRadius: 100
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
    flexDirection: 'row',
    padding: 2,
    margin: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
})