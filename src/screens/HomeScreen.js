import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = ({ navigation }) => {
  // console.log(props);


  return <View>
      <Text style={styles.text}>Hi there Sydney</Text>
      <Button 
      onPress={()=> navigation.navigate('Component')}
      title="Are you enjoying your lunch?" />
      <Button 
      onPress={()=> navigation.navigate('List')}
      title="List" />
      <Button 
      onPress={()=> navigation.navigate('Image')}
      title="Image" />
      <Button 
      onPress={()=> navigation.navigate('Counter')}
      title="Counter" />
            <Button 
      onPress={()=> navigation.navigate('Color')}
      title="Colour" />
      <Button 
      onPress={()=> navigation.navigate('Square')}
      title="Square screen" />
      {/* <TouchableOpacity onPress={()=> props.navigation.navigate('List')}>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
        <Text>Go to list demo</Text>
      </TouchableOpacity> */}
  </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
