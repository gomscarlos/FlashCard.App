import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    pesquisa: ''
}

const filtroSlice = createSlice({
    name: "filtro",
    initialState: initialState,
    reducers: {
        set_pesquisa(state,action){
            const cloneState = {...state}
            const {value} = action.payload;

            cloneState.pesquisa = value;
            return cloneState;
        }
    }
})

export const {set_pesquisa} = filtroSlice.actions

export default filtroSlice.reducer