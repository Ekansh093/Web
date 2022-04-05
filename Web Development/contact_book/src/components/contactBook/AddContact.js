import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContact, updateContact } from '../../redux/actions/contactActions';
import { useHistory, useParams } from 'react-router-dom';
import shortid from 'shortid';

function AddContact() {

    const dispatch = useDispatch();
    const history = useHistory();
    let { id } = useParams();
    let contact = useSelector(state => state.contactRDCR.contact);

    const initialFormData = {
        name: "",
        email: "",
        phone: ""
    }

    const [formData, setFormData] = useState(initialFormData);

    const onChangeFormField = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const submitForm = e => {
        e.preventDefault();
        if (id) {
            dispatch(updateContact(formData))
        } else {
            let finalFormData = { ...formData, id: shortid.generate() }
            dispatch(addContact(finalFormData));
        }
        history.push("/contacts");
    }

    useEffect(() => {
        if (contact !== null) {
            setFormData(contact);
        } else {
            setFormData(initialFormData);
        }
        dispatch(getContact(id || null));
    }, [contact, id]);

    return (
        <div className="container">
            <h1>Add a contact</h1>
            <form onSubmit={submitForm}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input type="text" className="form-control" name="name" aria-describedby="emailHelp" value={formData.name} onChange={e => onChangeFormField(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address:</label>
                    <input type="email" className="form-control" name="email" aria-describedby="emailHelp" value={formData.email} onChange={e => onChangeFormField(e)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone:</label>
                    <input type="phone" className="form-control" name="phone" aria-describedby="emailHelp" value={formData.phone} onChange={e => onChangeFormField(e)} />
                </div>
                <button type="submit" className="btn btn-primary">{id ? 'Update Contact' : 'Add Contact'}</button>

            </form>
        </div>
    )
}

export default AddContact
