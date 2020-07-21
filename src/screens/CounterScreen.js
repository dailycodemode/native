import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";



const CounterScreen = () => {
  // console.log(props);
    const [counter, setCounter] = useState(0);

  return <View>
            <Text>Current Count : {counter}</Text>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1);
            }}></Button>
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1);
            }}></Button>
        </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default CounterScreen;
