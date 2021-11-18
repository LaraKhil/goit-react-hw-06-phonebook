import { v4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";
import { addContactType, setFilterNameType, removeContactType } from "./phonebookTypes";

// const addContact = (value) => {
//     return {
//         type: 'phonebook/addContact',
//         payload: { id: v4(), ...value }
//     }
// };

// const setFilterName = (name) => {
//     return {
//         type: 'phonebook/setFilterName',
//         payload: name
//     }
// }

// const removeContact = (id) => {
//     return {
//         type: 'phonebook/removeContact',
//         payload: id,
//     }
// }

const addContact = createAction(addContactType, (contacts) => ({ payload: { ...contacts, id: v4() } }));
const setFilterName = createAction(setFilterNameType);
const removeContact = createAction(removeContactType);

export { addContact, setFilterName, removeContact };