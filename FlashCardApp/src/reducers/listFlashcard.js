import { createSlice } from '@reduxjs/toolkit';

const ListFlashCard = createSlice({
    name: 'listFlashCard',
    initialState: [],
    reducers:{
        set_flashcards(state,action){
            const flashcards = action.payload;
            return flashcards;
        }
    }
})

export const {set_flashcards} = ListFlashCard.actions

export default ListFlashCard.reducer;