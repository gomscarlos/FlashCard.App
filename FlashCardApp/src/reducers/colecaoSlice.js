import { createSlice } from "@reduxjs/toolkit";
import {collection, initializeFirestore, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import app from "../util/firebaseconfig";

const initialState = {
    titulo: '',
    descricao: '',
    imagem: '',
}

const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const colecoes = collection(db, "colecoes");

const colecaoSlice = createSlice({
    name: 'colecao',
    initialState: initialState,
    reducers:{
        set_field(state, action){
            const cloneState = {...state}
            const {field, value} = action.payload;

            cloneState[field] = value;
            return cloneState;
        },
        set_all_fields(state, action){
            const {colecao} = action.payload

            return colecao;
        },
        save_colecao(state, action){
            const {colecao} = action.payload

            addDoc(colecoes, colecao)
            .then((docRef) => {
            })
            .catch((erro) => {
                throw new Error(erro);
            })
        },
        colecao_saved(state,action){
            return initialState;
        },
        editar_colecao(state, action){
            const {id, colecao} = action.payload
            const colecaoRef = doc(db, "colecoes", id);

            updateDoc(colecaoRef, colecao)
            .then(() => {
                alert("Coleção alterada com sucesso!!")
            })
            .catch((erro) =>{
                alert("Erro: ", erro.message)
            })
        },
        delete_colecao(state, action){
            const {id} = action.payload

            deleteDoc(doc(db, "colecoes", id))
            .then(() => {
                alert("Coleção excluída com sucesso!!")
            })
            .catch((erro) =>{
                alert("Erro: ", erro.message)
            })
        }
    }
})

export const {set_field, save_colecao, colecao_saved, delete_colecao, set_all_fields, editar_colecao} = colecaoSlice.actions

export default colecaoSlice.reducer