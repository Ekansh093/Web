import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteContact, selectContact } from '../../redux/actions/contactActions';

function Contact({ contact }) {

    const { id, name, email, phone } = contact;
    const dispatch = useDispatch();

    const handleCheckbox = e => {
        dispatch(selectContact(id, e.target.checked));
    }

    return (
        <>
            <tr>
                <th scope="row">
                    <input className="form-check-input child" type="checkbox" onChange={e => handleCheckbox(e)} />
                </th>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td className="actions">
                    <Link to={`/contacts/edit/${id}`}>
                        <span className="material-icons">edit</span>
                    </Link>
                    <span className="material-icons delete-icon" onClick={() => dispatch(deleteContact(id))}>remove_circle</span>

                </td>
            </tr>
        </>
    )
}

export default Contact
