import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import { StyleSheet } from "react-native";

import Donors from './Donors';
import Donate from './Donate';
import AboutUs from './AboutUs';
import Profile from './Profile';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Donors</Text></TabHeading>}>
            <Donors />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Donate</Text></TabHeading>}>
            <Donate />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>About US</Text></TabHeading>}>
            <AboutUs />
          </Tab>
          <Tab heading={ <TabHeading style={styles.tabDashboard}><Text style={styles.tabText}>Profile</Text></TabHeading>}>
            <Profile />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  tabDashboard: {
    backgroundColor: '#DE1F26',
  },
  tabText: {
    color: 'black'
  }
})