import React, { Component } from 'react';
import { Container, Tab, Tabs, TabHeading, Text } from 'native-base';
import Donors from './Donors';
import Donate from './Donate';
import AboutUs from './AboutUs';
import Profile from './Profile';

export default class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Tabs>
          <Tab heading={ <TabHeading><Text>Donors</Text></TabHeading>}>
            <Donors />
          </Tab>
          <Tab heading={ <TabHeading><Text>Donate</Text></TabHeading>}>
            <Donate />
          </Tab>
          <Tab heading={ <TabHeading><Text>About US</Text></TabHeading>}>
            <AboutUs />
          </Tab>
          <Tab heading={ <TabHeading><Text>Profile</Text></TabHeading>}>
            <Profile />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}