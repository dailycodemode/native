import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";



const ImageDetail = (props) => {

  return (
  <View>
      <Image source={props.imageSource}></Image>
      <Text style={styles.text}>{props.title}</Text>
      <Text style={styles.text}>Image score - {props.score}</Text>
  </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15
  }
});

export default ImageDetail;
