import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from "./components/App";
import reducers, { saveToLocalStorage, loadFromLocalStorage } from "./reducers";

// const persistedStore = loadFromLocalStorage();
const store = createStore(reducers, applyMiddleware(thunk));
// store.subscribe(() => saveToLocalStorage(store.getState()));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

