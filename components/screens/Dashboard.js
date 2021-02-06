import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet, BackHandler, Alert, StatusBar } from "react-native";

import Donors from './Donors';
import Donate from './Donate';
import AboutUs from './AboutUs';
import Profile from './Profile';

export default class Dashboard extends Component {

  backAction = () => {
    Alert.alert("Cancel App!", "Are you sure you want to Close App?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);
    return true;
  };

  componentDidMount() {
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  render() {
    return (
      <>
        <StatusBar hidden = {false} backgroundColor = "#DE1F26" translucent = {true}/>
        <Container >
          <Tabs style={styles.tabStatusBar}>
            <Tab tabStyle={false} heading={<TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Donors</Text></TabHeading>}>
              <Donors />
            </Tab>
            <Tab tabStyle={false} heading={<TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Donate</Text></TabHeading>}>
              <Donate />
            </Tab>
            <Tab tabStyle={false} heading={<TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>About US</Text></TabHeading>}>
              <AboutUs />
            </Tab>
            <Tab tabStyle={{shadowColor:'grey'}} heading={<TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Profile</Text></TabHeading>}>
              <Profile />
            </Tab>
          </Tabs>
        </Container>

      </>
    );
  }
}

var styles = StyleSheet.create({
  tabStatusBar: {
    paddingTop: 25,
  },
  tabDashboard: {
    backgroundColor: '#DE1F26',
  },
  tabText: {
    color: '#fff',
    textTransform: 'uppercase',
  }
})