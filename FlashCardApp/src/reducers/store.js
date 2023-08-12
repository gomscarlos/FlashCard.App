import { configureStore } from "@reduxjs/toolkit";

import colecaoSlice from "./colecaoSlice";
import listcolecao from "./listColecao";
import flashcardSlice from "./flashcardSlice";
import listFlashcard from "./listFlashcard";
import filtroSlice from "./filtroSlice";

export const store = configureStore({
    reducer: {
        colecao: colecaoSlice,
        listacolecao: listcolecao,
        flashcard: flashcardSlice,
        listaFlashcard: listFlashcard,
        filtro: filtroSlice
    }
})