import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';




const SearchScreen = () => {
    const [ term,  setTerm ] =  useState('');
    const [ searchApi, results, errorMessage ] = useResults();
    

    const filterResultsByPrice = (price) => {
        return results.filter(res => {
            return res.price === price;
        })
    };


    return <View >
        <SearchBar 
            term={term} 
            onTermChange={(newTerm) => setTerm(newTerm)}
            onTermSubmit={() => searchApi(term)}
        />
        { errorMessage ? <Text>{errorMessage}</Text> : null } 
        <ScrollView>
            <ResultsList 
                results = {filterResultsByPrice('$')} 
                title="Cost Effective"
            />
            <ResultsList 
                results = {filterResultsByPrice('$$')} 
                title="Bit Pricier"
            />
            <ResultsList 
                results = {filterResultsByPrice('$$$')} 
                title="Big Spender"
            />
        </ScrollView>
      
       
    </View>
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 50,
    }
});

export default SearchScreen;