import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Contact from './Contact';
import { selectAllContacts as selectAllContactsAction, deleteSelectedContacts } from '../../redux/actions/contactActions';

function Contacts() {

    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contactRDCR.contacts);
    const [selectAllContacts, setSelectAllContacts] = useState(false);
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    const selectAllContactsHandler = () => {
        setSelectAllContacts(!selectAllContacts);
        document.querySelectorAll("input.child[type='checkbox']").forEach(checkbox => checkbox.checked = !selectAllContacts);
        dispatch(selectAllContactsAction(!selectAllContacts));
    }

    const deleteContacts = () => {
        setSelectAllContacts(false);
        document.querySelectorAll("input.child[type='checkbox']").forEach(checkbox => checkbox.checked = false);
        dispatch(deleteSelectedContacts());
    }

    useEffect(() => {
        setShowDeleteBtn(contacts.some(contact => contact.selected == true));
    }, [contacts]);

    return (
        <div className="container">
            <h1 className="mb-2 fw-bold">Contacts</h1>
            { showDeleteBtn && (<div className="d-flex" id="navbarNav">
                <button class="btn btn-primary" to="/contacts/add" onClick={deleteContacts}>Delete Contacts</button>
            </div>)}
            <table className="table table-bordered">
                <thead className="table-danger">
                    <tr>
                        <th scope="col">
                            <input className="form-check-input" type="checkbox" checked={selectAllContacts} id="flexCheckDefault" onChange={selectAllContactsHandler} />
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => <Contact key={'key_' + contact.id} contact={contact} />)}
                </tbody>
            </table>
        </div>
    )
}

export default Contacts
