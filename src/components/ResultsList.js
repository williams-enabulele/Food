import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtrator={ result => result.id}
            renderItem={({item}) => {
                return <>
                <TouchableOpacity onPress={()=> navigation.navigate('Result')}>
                <ResultsDetail result ={item}/>
                </TouchableOpacity>
                </>
            }}
        />
    </View>
}


const styles = StyleSheet.create({

    container: {
        marginTop: 15,
        marginLeft: 50
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 15,
        backgroundColor: 'red',
        width: 150,
        padding: 10,
        borderTopRightRadius: 15,
        color: "#fff"
    }

 
});


export default withNavigation(ResultsList)