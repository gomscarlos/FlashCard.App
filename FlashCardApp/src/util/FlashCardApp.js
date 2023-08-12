import React from "react";
import Router from './Router';

import { Provider } from "react-redux";
import { store } from "../reducers/store";

const FlashCardApp = props => (
    <Provider store={store}>
        <Router />
    </Provider>
)

export default FlashCardApp;