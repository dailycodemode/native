import React, {useState} from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";



const ColorScreen = () => {
  // console.log(props);
  const [colors, setColors] = useState([]);
// console.log(colors);
  return <View>
            <Button title="Add a colour" onPress={()=>{
                setColors([...colors, randomRgb()])  // this will add the new randoms to the already existing state 'colors;
                }
            }> </Button>
            
            <FlatList
                keyExtractor = {item =>item}
                data={colors}
                renderItem={( { item })=>{
                    return <View style= {{height: 100, width: 100, backgroundColor: item }} />
                }}

            />

        </View>
};
const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red},${green},${blue})`;
}

const styles = StyleSheet.create({
});

export default ColorScreen;
