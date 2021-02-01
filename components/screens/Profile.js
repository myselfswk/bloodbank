import React from 'react';
import { StyleSheet, Text, View, Image, Button } from "react-native";
import auth from '@react-native-firebase/auth';

export default class Profile extends React.Component {

  signOut = () => {
    auth()
      .signOut()
      .then(() => {
        alert('User signed out!')
        this.props.navigationProp.navigate('Login')
      });
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
          <Text style={styles.profileD}>Name:</Text>
          <Text style={styles.profileD}>Email:</Text>
          <Text style={styles.profileD}>Blood Group:</Text>
          <Text style={styles.profileD}>Password:</Text>
        </View>
        <View>
          <Button
            color='#DE1F26'
            title="Sign Out"
            onPress={() => this.signOut()}
          />
        </View>
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
})