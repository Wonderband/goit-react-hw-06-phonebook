import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = {
    contactsArray : [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
]};
      
const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact(state, action) {
            if (state.contactsArray.find
                (contact => contact.name.toLowerCase() === action.payload.name.toLowerCase().trim()))
            {
                alert(`${action.payload.name} is already in contacts`);
                return;
            }
            state.contactsArray.push(action.payload)
        },
        deleteContact(state, action) { 
            state.contactsArray = state.contactsArray.filter(contact => contact.id !== action.payload);            
        },
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, deleteContact } = contactsSlice.actions;