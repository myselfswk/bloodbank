import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
export default class AboutUs extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text style={styles.AboutUsH}>Blood Bank App</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={styles.bodyText}>
                Blood banking refers to the process of collecting, separating, and storing blood. The first U.S. blood bank was established
                in 1936. Today, blood banks collect blood and separate it into its various components so they can be used most effectively
                according to the needs of the patient. Red blood cells carry oxygen, platelets help the blood clot, and plasma has specific
                proteins that allow proper regulation of coagulation and healing. Although research has yielded drugs that help people's
                bone marrow produce new blood cells more rapidly, the body's response time can still take weeks, thus donated blood remains
                an important and more immediate life-saving resource.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text style={styles.AboutUsF}>By, Muhammad Waleed Khan</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    );
  }
}

var styles = StyleSheet.create({
  AboutUsH: {
    color: '#DE1F26',
    fontSize: 32,
    fontWeight:'700',
    width:'100%',
    textAlign:'center',
    textTransform:'uppercase',
  },
  bodyText:{
    fontSize:16.5,
  },
  AboutUsF: {
    color: '#DE1F26',
    fontSize: 20,
    fontWeight:'700',
    width:'100%',
    textAlign:'center',
    textTransform:'uppercase',
  },
})