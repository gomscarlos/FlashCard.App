/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FlashCard(props){
    const {frente} = props.flashcards;

    return(
        <View style={styles.container}>
            <Text style={styles.rotulo}>{frente}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        height: 400,
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rotulo:{
        fontFamily: 'helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: 'black'
    }
})