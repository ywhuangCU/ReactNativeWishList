import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/Components/Header'
import ItemList from './src/Components/ItemList'

export default class App extends React.Component {


  render() {
    return (
      <View style={styles.container}>
        <Header headerText={"WishList"}/>
        <ItemList />
        {/* <Text> Template by create-react-native-app (ejected) </Text>         */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
});
