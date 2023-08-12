/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import ItemColection from './ItemColection';

import { useSelector, useDispatch } from 'react-redux';
import {collection, initializeFirestore, query, onSnapshot, doc} from "firebase/firestore";
import app from "../util/firebaseconfig";
import { set_colecao } from '../reducers/listColecao';

const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const colection = collection(db, "colecoes");

const ListColections = props => {
    const {onPressItem, onPressEdit} = props;
    const colecoes = useSelector((state) => state.listacolecao)
    const dispatch = useDispatch();
    const [mudanca, setMudanca] = useState(false);

    const q = query(colection)

    useEffect(() => {
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const colecao = []
            snapshot.forEach((doc) => {
                colecao.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            dispatch(set_colecao(colecao));
        })

        const timer = setTimeout(() => {
            setMudanca(!mudanca)
        }, 1000)
        
        return () => {
            clearTimeout(timer);
          }
    }, [mudanca])

    return(
        <FlatList
            style={styles.container}
            data={colecoes}
            renderItem={({item}) => (
                <ItemColection colecao={item} onPressItem = {onPressItem} onPressEdit={onPressEdit}/>
            )}
            keyExtractor={(item) => item.id}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    }
})

export default ListColections;