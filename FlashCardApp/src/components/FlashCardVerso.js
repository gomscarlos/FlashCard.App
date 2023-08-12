/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function FlashCard(props){
    const {frente, verso} = props.flashcards;

    return(
        <View style={styles.container}>
            <Text style={styles.rotFrente}>Frente</Text>
            <Text style={styles.rotulo}>{frente}</Text>
            <Text style={styles.line}>. . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . .  . . . . .</Text>
            <Text style={styles.rotVerso}>Verso</Text>
            <Text style={styles.rotulo}>{verso}</Text>
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
        justifyContent: 'space-between',
        paddingVertical: 80
    },
    rotulo:{
        fontFamily: 'helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
        color: 'black'
    },
    line:{
        textAlign: 'center',
        fontSize: 15
    },
    rotFrente:{
        position: 'absolute',
        zIndex: 1,
        color: '#777777',
        fontFamily: 'helvetica',
        fontSize: 18,
        left: 20,
        top: 25
    },
    rotVerso:{
        position: 'absolute',
        zIndex: 1,
        color: '#777777',
        fontFamily: 'helvetica',
        fontSize: 18,
        left: 20,
        top: 230
    }
})