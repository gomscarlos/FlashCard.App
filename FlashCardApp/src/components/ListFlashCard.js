/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ItemFlashCard from './ItemFlashCard';

import { useSelector, useDispatch } from 'react-redux';
import {collection, initializeFirestore, query, onSnapshot, doc, where} from "firebase/firestore";
import app from "../util/firebaseconfig";
import { set_flashcards } from '../reducers/listFlashcard';

const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const flashcardColection = collection(db, "flashcards");

const ListFlashCard = props => {
    const {onPressEdit, titulo, id} = props;
    const dispatch = useDispatch();
    const flashcards = useSelector((state) => state.listaFlashcard)
    const filtro = useSelector((state) => state.filtro)
    const [originalData, setOriginalData] = useState([]);
        
    const q = query(flashcardColection, where("idColecao", "==",id))

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const flashcard = []
            snapshot.forEach((doc) => {
                flashcard.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(set_flashcards(flashcard));
            setOriginalData(flashcard);
        })
    }, [id])

    useEffect(() => {
        var data = JSON.parse(JSON.stringify(originalData));
        dispatch(set_flashcards(data.filter(d => 
            d.frente.toLowerCase().includes(filtro.pesquisa.toLowerCase())
            ||
            d.verso.toLowerCase().includes(filtro.pesquisa.toLowerCase())
            )
        ));
    },[filtro.pesquisa])

    return(
        <FlatList
            style={styles.container}
            data={flashcards}
            renderItem={({item}) => (
                <ItemFlashCard flashcards={item} titulo={titulo}onPressEdit={onPressEdit}/>
            )}
            keyExtractor={(item) => item.id}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20
    }
})

export default ListFlashCard;