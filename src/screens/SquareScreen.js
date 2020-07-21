import React, {useReducer} from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 40;

const reducer = (state, action) => {
    // state
    // action
    switch (action.type){
        case 'change_red':
            return state.red + action.payload > 255 || state.red + action.payload < 0 
            ? state 
            : { ...state, red: state.red + action.payload};
        case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 
            ? state 
            : { ...state, green: state.green + action.payload};
        case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 
            ? state 
            : { ...state, blue: state.blue + action.payload};
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(reducer, {red:0,green:0,blue:0}); // ££££££££££££££££££££

    const { red, green, blue} = state;
    return <View>
                <Text style={styles.text}>Square Screen</Text>
                <ColorCounter   
                    onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT})} 
                    onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT})}
                    color='Red'/>
                <ColorCounter 
                    onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT})} 
                    onDecrease={() => dispatch({ type: 'blue', payload: -1 * COLOR_INCREMENT})}
                    color='Blue'/>
                <ColorCounter 
                    onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT})} 
                    onDecrease={() => dispatch({ type: 'change_green', payload:-1 *  COLOR_INCREMENT})}
                    color='Green'/>
                
                <View style={{ height: 150, width: 300, backgroundColor: `rgb(${red},${green},${blue})`}} />
            </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20
  }
});

export default SquareScreen;
