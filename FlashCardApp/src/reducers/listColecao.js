import { createSlice } from '@reduxjs/toolkit';

const listColecao = createSlice({
    name: "listaColecao",
    initialState: [],
    reducers: {
        set_colecao(state,action){
            const colecao = action.payload;
            return colecao;
        }
    }
})

export const {set_colecao} = listColecao.actions

export default listColecao.reducer