import React, { Component } from "react";
import Svg, { Rect } from "react-native-svg";
import { View, StyleSheet, TouchableOpacity,Button } from "react-native";
function TouchTest({ i, size = 80 }) {
  return (
    <TouchableOpacity
      style={styles.touch}
      onPress={() => {
        console.log(i);
       
      }}
    >
      
      <Svg height="100%" width="100%" viewBox="0 0 100 100">
          
          <Rect
            x="5"
            y="0"
            width="90"
            height="90"
            stroke="red"
            strokeWidth="1"
            fill="grey"
          />
          
          
          </Svg>
          
           <Svg height="100%" width="100%" viewBox="0 0 100 100">
           <Rect
            x="20"
            y="30"
            width="70"
            height="60"
            stroke="red"
            strokeWidth="2"
            fill="green"
          />
          </Svg> 
              
    </TouchableOpacity>
  );
}

export default class Home extends Component {
  render() {
    return (
      <View style={[styles.touch, styles.Button, { flexDirection: "row" }]}>
        {Array.from({ length: 3}).map((_, i) => <TouchTest key={1} i={1} />)}
      </View>
      
      
    );
  }
}
const styles = StyleSheet.create({
  touch: {
    flex: 9,
    alignItems: "center",
    justifyContent: "center",
  },
});