import React from "react";
import { View, Text, StyleSheet,FlatList } from "react-native";


const ListScreen = () => {

    const friends = [
        { name: 'F 1', age: '1'},
        { name: 'F 2', age: '2'},
        { name: 'F 3', age: '23'},
        { name: 'F 4', age: '45'},
        { name: 'F 6', age: '27'}
    ];

    return (<FlatList 
        // horizontal
        showsHorizontalScrollIndicator={false}
        data = {friends}
        keyExtractor = {friend => friend.name}
        renderItem = {({ item }) => {
            return <Text>{item.name + ' ' + item.age}</Text>;
        }}
    />
        
    )
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});



export default ListScreen;
