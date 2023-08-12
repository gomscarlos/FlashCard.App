import { createSlice } from "@reduxjs/toolkit";
import {collection, initializeFirestore, addDoc, deleteDoc, doc, updateDoc} from "firebase/firestore";
import app from "../util/firebaseconfig";

const initialState = {
    idColecao: '',
    frente: '',
    verso: '',
}

const db = initializeFirestore(app, {experimentalForceLongPolling: true});
const flashcards = collection(db, "flashcards");

const flashcardSlice = createSlice({
    name: 'flashcard',
    initialState: initialState,
    reducers:{
        set_field_flashcard(state, action){
            const cloneState = {...state}
            const {field, value} = action.payload;

            cloneState[field] = value;
            return cloneState;
        },
        set_all_fields_flashcard(state, action){
            const {flashcard} = action.payload

            return flashcard;
        },
        reset_state(state,action){
            const cloneState = {...state}

            cloneState.frente = '',
            cloneState.verso = ''
            return cloneState
        },
        save_flashcard(state, action){
            const {flashcard} = action.payload

            addDoc(flashcards, flashcard)
            .then((docRef) => {
            })
            .catch((erro) => {
                throw new Error(erro);
            })
        },
        editar_flashcard(state, action){
            const {id, flashcard} = action.payload
            const flashcardRef = doc(db, "flashcards", id);

            updateDoc(flashcardRef, flashcard)
            .then(() => {
                alert("FlashCard alterado com sucesso!!")
            })
            .catch((erro) =>{
                alert("Erro: ", erro.message)
            })
        },
        delete_flashcard(state, action){
            const {id} = action.payload

            deleteDoc(doc(db, "flashcards", id))
            .then(() => {
                alert("FlashCard excluído com sucesso!!")
            })
            .catch((erro) =>{
                alert("Erro: ", erro.message)
            })
           
        }
    }
})

export const {set_field_flashcard, reset_state, save_flashcard, editar_flashcard, set_all_fields_flashcard, delete_flashcard} = flashcardSlice.actions

export default flashcardSlice.reducer
