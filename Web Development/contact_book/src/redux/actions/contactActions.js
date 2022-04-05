import { ADD_CONTACT, GET_CONTACT, UPDATE_CONTACT, DELETE_CONTACT, SELECT_CONTACT, SELECT_ALL_CONTACTS, DELETE_SELECTED_CONTACTS } from '../actionTypes/contactTypes'


export const addContact = (payload) => {
    return {
        type: ADD_CONTACT,
        payload
    }
}

export const getContact = id => {
    return {
        type: GET_CONTACT,
        payload: {
            id
        }
    }
}

export const updateContact = payload => {
    return {
        type: UPDATE_CONTACT,
        payload
    }
}

export const deleteContact = id => {
    return {
        type: DELETE_CONTACT,
        payload: {
            id
        }
    }
}

export const selectContact = (id, value) => {
    return {
        type: SELECT_CONTACT,
        payload: {
            id,
            selected: value
        }
    }
}

export const selectAllContacts = (value) => {
    return {
        type: SELECT_ALL_CONTACTS,
        payload: {
            selected: value
        }
    }
}

export const deleteSelectedContacts = () => {
    return {
        type: DELETE_SELECTED_CONTACTS
    }
}