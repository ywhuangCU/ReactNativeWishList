import React from 'react';
import { Text, View, Image, StyleSheet ,FlatList, Linking } from 'react-native';

import Card from './Card'
import CardSection from './CardSection'
import CustomizedButton from './CustomizedButton'

//functional component
const ItemDetail = ({ item }) => { //destructure props to {item}  =>  using item instead o props.item
    console.log("render ItemDetail")
    
    //Destructure Styles
    const {
        infoContainer, 
        thumbnailContainer,
        thumbnailImage,
        headerContainer, 
        headerText, 
        buttonContainer} = styles

    return (        
        <Card> 
            <CardSection style={infoContainer}>
                <View style={thumbnailContainer}>
                    <Image
                        style={{width: 50, height: 50}}
                        source={{uri: item.thumbnail_image}}
                    />
                </View>
                <View style={headerContainer}>
                    <Text style={headerText}> {item.title} </Text>
                    <Text > {item.artist} </Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={{flex:1, height: 300, resizeMode: "contain"}}
                    source={{uri: item.image}}
                />
            </CardSection>
            <CardSection style={buttonContainer}>
                <CustomizedButton onPress={()=> Linking.openURL(item.url)}> 
                    {/* Here being passed as props.children */}
                    Buy Now  
                </CustomizedButton>
            </CardSection>
            {/* <FlatList
                data={data}  //{[{"title": "testTitle", "url": "testURL"} ]}
                renderItem={({item,index}) =>( <Text>[{index}] {item.title}, {item.url}</Text>}
                )
                keyExtractor={(item, index) => index}
            /> */}
        </Card>
    );
}

const styles = StyleSheet.create({
    infoContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    thumbnailContainer: {
        marginLeft: 6,
        marginRight: 6,
        justifyContent:"center",
        alignItems: "center"
    },
    thumbnailImage: {
        width:50,
        height: 50
    },
    headerContainer: {
        justifyContent: "space-around",
        alignItems: "flex-start"
    },
    headerText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",           
    }
})


export default ItemDetail ;