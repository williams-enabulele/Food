import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={styles.containerStyle}>
        <Ionicons name="md-search" style={styles.iconStyle} size={30} color="black" />
        <TextInput style={styles.inputStyle}
        autoCapitalize='none'
        autoCorrect={false} 
        placeholder='Search'
        value={term}
        onChangeText= {onTermChange}
        onEndEditing={onTermSubmit}
        />
    </View>
}

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#F0EEEE',
        height: 60,
        borderRadius: 15,
        marginHorizontal: 35,
        flexDirection: 'row',
        marginTop: 15

    },

    inputStyle: {
        flex: 1,
        fontSize: 18

    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
});

export default SearchBar;