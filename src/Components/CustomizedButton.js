import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


// buttonClickedHandler = () => {
//     console.log("pressed")
// }

const CustomizedButton = ({onPress, children}) => {
    return (
        
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        //width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        padding: 10,
        borderColor: "#007aff",
        borderWidth:2,
        borderRadius:5, 
        alignSelf: "stretch",
        marginLeft: 5,
        marginRight:5 
      },
      textStyle: {
          alignSelf: "center",
          color: "#007aff",
          fontSize:16,
          fontWeight: "600",
          paddingTop: 10,
          paddingBottom: 10
      }
})

export default CustomizedButton;