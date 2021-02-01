import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ImageBackground,
  Dimensions,
  TouchableOpacity
} from "react-native";
import ActionSignIn from "./ActionSignIn";
import ActionSignUp from "./ActionSignUp";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      enable: true
    }
    console.log("App: ",this.props.navigationProp);
  }

  tab(value){
    if(value=="SignIn"){
      this.setState({
        enable:true
      })
    }
    else{
      this.setState({
        enable:false
      })
    }
  }

  render(){
    return(
      <View style={styles.container}>
          <StatusBar hidden={true} />
          <View style={styles.header}>
              <View style={styles.logo}>
                  <ImageBackground 
                    source={require("./../assets/images/logo2-01.png")}
                    style={{width:'100%', height:'100%'}}
                    resizeMode={"contain"}
                  />
              </View>
              <View style={styles.tabbar}>
                  <View style={styles.box}>
                      <TouchableOpacity
                      onPress={()=>this.tab("SignIn")}
                      style={[styles.item,{
                        backgroundColor: this.state.enable ? '#DE1F26' : 'white', //EC6848
                        borderTopLeftRadius:width/2/2,
                        borderBottomLeftRadius:width/2/2
                      }]}>
                          <Text>Login</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                      onPress={()=>this.tab("SignUp")}
                      style={[styles.item,{
                        backgroundColor: this.state.enable ? 'white' : '#DE1F26', //EC6848
                        borderTopRightRadius:width/2/2,
                        borderBottomRightRadius:width/2/2
                      }]}>
                          <Text>SignUp</Text>
                      </TouchableOpacity>
                  </View>
              </View>
          </View>

          {this.state.enable ?
          <ActionSignIn navigationProp={this.props.navigationProp} />
          :
          <ActionSignUp navigationProp={this.props.navigationProp} />}
      </View>
    )
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff', //EC6848
  },
  header: {
    flex:1.5,
    paddingHorizontal:20
  },
  logo: {
    flex:1,
    width:'100%',
    height:'100%',
  },
  tabbar: {
    position:'absolute',
    bottom:0,
    width:width,
    height:40,
    justifyContent:'center',
    alignItems:'center'
  },
  box: {
    width:width/2,
    height:70,
    borderRadius: width/2/2,
    elevation:10,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'#f2f2f2',
    shadowColor:"#000",
    shadowOffset: {
      width:0,
      height:2
    },
    shadowOpacity:0.7,
    shadowRadius:2.62,
    flexDirection:'row'
  },
  item: {
    width: width/2/2,
    height:70,
    justifyContent:'center',
    alignItems:'center'
  }
})