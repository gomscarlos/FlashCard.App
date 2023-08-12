/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import FlashCard from '../components/FlashCard';
import FlashCardVerso from '../components/FlashCardVerso';
import { useSelector } from 'react-redux';

export default function TelaJogar(props) {
    const flashcards = useSelector((state) => state.listaFlashcard)
    const [position, setPosition] = useState(0);
    const [frente, setFrente] = useState(true);
    var contador = 0;

    flashcards.map(() => {
        contador += 1;
    });

    function aumentarPosition() {
        setPosition(position + 1);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerItems}>
                <View style={styles.containerRotulo}>
                    <Text style={styles.rotulo}>Cartão </Text>
                    {contador == 0 ? <Text style={styles.rotulo}>{position}</Text>
                        : <Text style={styles.rotulo}>{position + 1}</Text>}
                    <Text style={styles.rotulo}>/{contador}</Text>
                </View>
                {contador == 0 ?
                    <View style={styles.containerErro}>
                        <Text style={styles.mensagemErro}>{'Coleção Vazia 😢 \n Cadastre um FlashCard para Jogar!!'}</Text>
                    </View>
                    :
                    frente ? (<FlashCard flashcards={flashcards[position]} />)
                        :
                        <FlashCardVerso flashcards={flashcards[position]} />}
                <View style={{ marginTop: 24 }}>
                    {contador == 0 ? <TouchableOpacity onPress={() => props.navigation.pop()}>
                        <View style={[styles.buttonVirar, { backgroundColor: '#61A170' }]}>
                            <Text style={styles.rotButtonVirar}>VOLTAR</Text>
                        </View>
                    </TouchableOpacity>
                        : frente ? (<TouchableOpacity onPress={() => { setFrente(false) }}>
                            <View style={styles.buttonVirar}>
                                <Text style={styles.rotButtonVirar}>VIRAR</Text>
                            </View>
                        </TouchableOpacity>)
                            : position < contador - 1 ? (<TouchableOpacity onPress={() => {
                                setFrente(true)
                                aumentarPosition();
                            }}>
                                <View style={styles.buttonVirar}>
                                    <Text style={styles.rotButtonVirar}>PRÓXIMO</Text>
                                </View>
                            </TouchableOpacity>)
                                : <TouchableOpacity onPress={() => props.navigation.pop()}>
                                    <View style={[styles.buttonVirar, { backgroundColor: '#61A170' }]}>
                                        <Text style={styles.rotButtonVirar}>FINALIZAR</Text>
                                    </View>
                                </TouchableOpacity>}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#332E56',
        flex: 1,
    },
    containerItems: {
        paddingHorizontal: 44
    },
    containerRotulo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 54,
        marginBottom: 22
    },
    rotulo: {
        fontFamily: 'tahoma-bold',
        fontSize: 18,
        color: 'white'
    },
    buttonVirar: {
        display: 'flex',
        borderWidth: 1,
        alignItems: 'center',
        backgroundColor: '#6A61A1',
        borderColor: '#707070',
        height: 46,
        justifyContent: 'center',
        borderRadius: 5
    },
    rotButtonVirar: {
        color: 'white',
        fontFamily: 'Roboto-Medium',
        fontSize: 14,
        fontWeight: 'bold'
    },
    containerErro:{
        display: 'flex',
        alignItems: 'center'
    },
    mensagemErro:{
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Roboto-Medium',
        color: 'white'
    }
})


