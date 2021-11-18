// import { createStore } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, createReducer } from '@reduxjs/toolkit';
// import {
//     addContactType,
//     setFilterNameType,
//     removeContactType,
// } from '../redux/phonebookTypes';

import { addContact, setFilterName, removeContact } from './actions';

const initialState = {
    contacts: [], filterName: ''
}

const rootReducer = createReducer(initialState, {
    [addContact]: (state, action) => ({ ...state, contacts: [...state.contacts, action.payload] }),
    [removeContact]: (state, action) => ({ ...state, contacts: state.contacts.filter(item => item.id !== action.payload), filterName: '' }),
    [setFilterName]: (state, action) => ({ ...state, filterName: action.payload })
});


// const rootReducer = (state = { contacts: [], filterName: '' }, { type, payload }) => {
//     switch (type) {
//         case addContactType:
//             return { ...state, contacts: [...state.contacts, payload] };

//         case setFilterNameType:
//             return { ...state, filterName: payload };

//         case removeContactType:
//             return { ...state, contacts: state.contacts.filter(item => item.id !== payload), filterName: '' };

//         default:
//             return state;
//     }
// };


// const store = createStore(reducer, composeWithDevTools());
const store = configureStore({ reducer: rootReducer });

export default store;
