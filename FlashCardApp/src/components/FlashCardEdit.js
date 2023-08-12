import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from  'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { set_field_flashcard } from '../reducers/flashcardSlice';

import Formulario from '../components/Formulario';

const FlashCardEdit = (props) => {
    const dispatch = useDispatch();
    const flashcard = useSelector((state) => state.flashcard);

    return(
        <View style={styles.flashcard}>
            <Text style={styles.rotFrente}>Frente</Text>
            <Formulario>
                <TextInput 
                    style={styles.inputText}
                    value={flashcard.frente}
                    onChangeText={valor => {
                        dispatch(set_field_flashcard({field: "frente", value: valor}));
                    }}
                />
            </Formulario>
            <Text style={styles.line}>. . . . . . . . . . . . . . . . . . . . . . . . . . .  . . . . .  . . . . .</Text>
            <Text style={styles.rotVerso}>Verso</Text>
            <Formulario>
                <TextInput 
                    style={styles.inputText}
                    value={flashcard.verso}
                    onChangeText={valor => {
                        dispatch(set_field_flashcard({field: "verso", value: valor}));
                    }}
                />
            </Formulario>
        </View>
    );
}

const styles = StyleSheet.create({
    flashcard:{
        display: 'flex',
        justifyContent: 'space-between',
        height: 290,
        backgroundColor: 'white',
        borderRadius: 15,
        paddingVertical: 50
    },
    inputText:{
        fontFamily: 'helvetica',
        fontSize: 28,
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
    line:{
        textAlign: 'center',
        fontSize: 15
    },
    rotFrente: {
        position: 'absolute',
        zIndex: 1,
        color: '#777777',
        fontFamily: 'helvetica',
        fontSize: 18,
        left: 15,
        top: 10
    },
    rotVerso:{
        position: 'absolute',
        zIndex: 1,
        color: '#777777',
        fontFamily: 'helvetica',
        fontSize: 18,
        top: 160,
        left: 15
    },
})

export default FlashCardEdit;