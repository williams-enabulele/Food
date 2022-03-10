import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
    const [ term,  setTerm ] =  useState('');
    const [ results, setResults ] = useState([]);
    const [ errorMessage, setErrorMessage ] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const res = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose',
                }
            });
            setResults(res.data.businesses);
        }
        catch (err) {

            setErrorMessage('Oops something went wrong')

        }

    }

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return <View style={styles.container}>
        <SearchBar 
        term={term} 
        onTermChange={(newTerm) => setTerm(newTerm)}
        onTermSubmit={() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null } 
        <Text>We have found {results.length} results</Text>
    </View>
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 50,
    }
});

export default SearchScreen;