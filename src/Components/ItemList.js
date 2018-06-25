import React, { Component } from 'react';
import { FlatList, View, Text, ActivityIndicator, ScrollView } from 'react-native';
import ItemDetail from './ItemDetail'


import axios from 'axios';

class ItemList extends Component {

    state = { 
        isLoading: true,
        dataSource: []
     }

    //https://facebook.github.io/react-native/movies.json
    
    componentDidMount() {
        console.log("AlbumList componentDidMount")
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            //use .data to extract data from the response
            console.log(response)
            this.setState({
                isLoading: false,
                dataSource: response.data
            })
        }).catch( error => {
            console.log(error)
        })
              
    }

    renderItems =() => {
        console.log("AlbumList renderItems")
        return this.state.dataSource.map( (item) => 
         <ItemDetail key={item.title} item={item} />
        )
    
    }

    render() {        
        console.log("AlbumList render")
        console.log(this.state)
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, padding: 20}}> 
                    <ActivityIndicator />
                </View>
            )
        }

        return (
       
        // it's root View should have flex: 1 if not scrollable
        <ScrollView > 
            {this.renderItems()}
            {/* <ItemDetail data={this.state.dataSource} info={"test"}/> */}
            
            {/* <FlatList
            data={this.state.dataSource}
            // renderItem={({item,index}) => <Text>[{index}] {item.title}, {item.url}</Text>}
            renderItem={({item,index}) =>  <ItemDetail item={item} />}
            keyExtractor={(item, index) => index.toString()}
            /> */}
        </ScrollView>
            
        
        );
    }
}

export default ItemList;

// using default fetch
// fetchAlbumData = () => {
//     fetch('https://rallycoding.herokuapp.com/api/music_albums') 
//     .then((response) => response.json())
//     .then((responseJson) => {
//         this.setState({
//             isLoading: false,
//             dataSource: responseJson,
//           }, function(){
//             console.log("function inside state")
//           });
//          
//     })
//     .catch((error) => {
//       console.error(error);
//     })
// }