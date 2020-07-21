import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {
  return (
      <View>
        <Text style={styles.text}>Steed2</Text>
        <Text style={styles.secondtext}>This is the secondary</Text>
      </View>
  
  )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  secondtext: {
    fontSize: 15
  }
});

export default ComponentScreen;