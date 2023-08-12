/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from  'react-native';

import FlashCardEdit from '../components/FlashCardEdit';
import { useDispatch, useSelector } from 'react-redux';
import { set_all_fields_flashcard, editar_flashcard, reset_state } from '../reducers/flashcardSlice';

const EditarFlashCard = (props) => {
    const dispatch = useDispatch();
    const flashcard = useSelector((state) => state.flashcard);
    const {flashcardEdit} = props.route.params

    useEffect(() => {
        dispatch(set_all_fields_flashcard({flashcard: flashcardEdit}))
    }, [])

    return(
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.containerRotulo}>
                    <Text style={styles.rotulo}>Preencha os dados da frente e do verso do flashcard</Text>
                </View>
                <FlashCardEdit/>
                <View style={styles.containerButtons}>
                    <TouchableOpacity onPress={()=> {
                        dispatch(editar_flashcard({flashcard: flashcard, id: flashcardEdit.id}))
                        dispatch(reset_state());
                        props.navigation.pop();
                    }}>
                        <View style={styles.buttonCad}>
                            <Text style={styles.rotuloButtonCad}>SALVAR ALTERAÇÕES</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=> {
                        props.navigation.pop()
                        dispatch(reset_state());
                    }}>
                        <View style={styles.buttonCancel}>
                            <Text style={styles.rotuloButtonCad}>CANCELAR</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        backgroundColor: '#332E56',
        flex: 1,
    },
    containerItems:{
        display: 'flex',
        paddingLeft: 42,
        paddingRight: 42,
    },
    containerRotulo:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 34,
        paddingBottom: 50
    },
    rotulo:{
        fontSize: 18,
        fontFamily: 'tahoma-bold',
        color: 'white',
        textAlign: 'center'
    },
    containerButtons:{
        display: 'flex',
        marginTop: 12,
        height: 220,
        justifyContent: 'space-between',
        paddingBottom: 12,
    },
    buttonCad:{
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#6A61A1',
        borderColor: '#707070',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
    },
    rotuloButtonCad:{
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonCancel:{
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor:'#332E56',
        borderColor: 'white',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5,
    }
})

export default EditarFlashCard;