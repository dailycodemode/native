import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from '../components/ImageDetail';


const ImageScreen = ({ navigation }) => {

  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail title="Forest" imageSource={require('../../assets/forest.jpg')} score='8' />
      <ImageDetail title="Beach" imageSource={require('../../assets/beach.jpg')} score='6'/>
      <ImageDetail title="Mountain" imageSource={require('../../assets/mountain.jpg')} score='5'/>
    </View>
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default ImageScreen;
