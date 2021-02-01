import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

export default class CardExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Body>
                <Text style={styles.profileH}>
                  Profile:-
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  profileH: {
    fontSize: 35,
    color: '#DE1F26'
  },
})