/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import { useState, useEffect} from 'react';

import BarraDrawer from '../components/BarraDrawer';
import ListFlashCard from '../components/ListFlashCard';
import { useDispatch, useSelector} from 'react-redux';
import { set_field_flashcard } from '../reducers/flashcardSlice';
import { set_pesquisa } from '../reducers/filtroSlice';
import { set } from 'immer/dist/internal';

const Colection = (props) => {
        const {titulo, id} = props.route.params;
        const dispatch = useDispatch();
        const flashcard = useSelector((state) => state.flashcard)
        const filtro = useSelector((state) => state.filtro)

        useEffect(() =>{
            dispatch(set_field_flashcard({field: "idColecao", value: id}))
        }, [id]);
        
        return(
            <View style={styles.container}>
                 <BarraDrawer title={'Coleção - ' + titulo} navigation={props.navigation}/>
                 <View style={styles.containerItems}>
                    <Text style={styles.rotuloFiltro}>Filtro</Text>
                    <TextInput 
                        style={styles.inputText}
                        value={filtro.pesquisa}
                        onChangeText={(valor) => dispatch(set_pesquisa({value: valor}))}
                    />
                    <View style={styles.containerButton}>
                        <TouchableOpacity onPress={()=> props.navigation.push('TelaJogar', {titulo})}>
                                <View style={styles.button}>
                                    <Text style={styles.rotulo}>Jogar!</Text>
                                </View>
                        </TouchableOpacity>
                    </View>   
                 </View>
                <ListFlashCard
                    titulo={titulo}
                    id={flashcard.idColecao} 
                    onPressEdit={(parametros) => {
                        props.navigation.push('EditarFlashCard', parametros)
                    }}
                />
                <View style={styles.containerButtonAdd}>
                    <TouchableOpacity onPress={()=> props.navigation.push('CadastrarFlashCard')}>
                        <View style={styles.botaoAdd}>
                            <Text style={{color: 'white', fontSize: 30, fontWeight: '300'}}>+</Text>
                        </View>
                    </TouchableOpacity>
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
    containerItems:{
        display: 'flex',
        padding: 18,
        paddingBottom: 25
    },
    inputText:{
        borderBottomWidth: 2,
        borderBottomColor: '#6200EE',
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        height: 56,
        backgroundColor: 'white',
        paddingLeft: 16,
        paddingRight: 16,
        fontSize: 16,
        marginBottom: 24,
        paddingTop: 25
    },
    containerButton:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button:{
        width: 157,
        height: 49,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#57966A',
        borderRadius: 5,
        elevation: 1
    },
    rotulo: {
        fontSize: 24,
        fontFamily: 'helvetica',
        color: 'white',
        fontWeight: 'bold',
    },
    containerButtonAdd: {
        display: 'flex',
        position: 'absolute',
        top: 590,
        left: 340
    },
    botaoAdd:{
        width: 50,
        height: 50,
        backgroundColor: '#7A71AF',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    rotuloFiltro: {
        fontFamily: 'Roboto-Regular',
        fontSize: 12,
        color: '#6200EE',
        position: 'absolute',
        top: 25,
        zIndex: 1,
        left: 33
    }
})

export default Colection;