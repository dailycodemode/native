import React, {useState} from "react";
import { Text, StyleSheet, View } from "react-native";
import ColorCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  // console.log(props);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const setColor = (color, change) => {

        switch (color){
            case 'red':
                red + change > 255 || red + change < 0 ? null :  setRed(red + change);
                return;
            case 'green':
                green + change > 255 || green + change < 0 ? null :  setGreen(green + change);
                return;
            case 'blue':
                blue + change > 255 || blue + change < 0 ? null :  setBlue(blue + change);
                return;
        }
    }
    return <View>
                <Text style={styles.text}>Square Screen</Text>
                <ColorCounter   
                    onIncrease={() => setColor('red', COLOR_INCREMENT)} 
                    onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
                    color='Red'/>
                <ColorCounter 
                    onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
                    onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
                    color='Blue'/>
                <ColorCounter 
                    onIncrease={() => setColor('green', COLOR_INCREMENT)} 
                    onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
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
