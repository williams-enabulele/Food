import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const ResultsDetail = ({ result }) => {
    return <View style={styles.container}>
        <Image style={styles.imageStyle} source={{uri: result.image_url}}/>
        <Text style={styles.nameStyle}>{result.name}</Text>
        <Text>{result.rating} Stars {result.review_count} Reviews</Text>
    </View>
}


const styles = StyleSheet.create({
    imageStyle: {
        width: 250,
        height: 250,
        borderRadius: 15
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },

    reviewStyle: {
        marginTop: 5,
        opacity: .9
        
    },
    container : {
        marginRight: 15
    }


});


export default ResultsDetail 