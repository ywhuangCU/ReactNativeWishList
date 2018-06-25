import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.viewStyle}> 
            <Text style={styles.textStyle}> {props.headerText} </Text>
        </View>
    )    
}

const styles = StyleSheet.create({
    viewStyle: {
        width: "100%",
        backgroundColor: "#F8F8F8",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 15,
        shadowColor:"#000",
        shadowOffset: {width: 0, height: 2.0},
        shadowOpacity: 0.2        
    },
    textStyle: {
        fontSize: 20
    }
})

export default Header