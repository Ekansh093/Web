import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container-fluid">
                <Link className="navbar-brand text-bold" to="/">Home</Link>

                <div className="d-flex" id="navbarNav">
                    <Link className="btn btn-secondary" to="/postmaster">Post Master</Link>&nbsp;
                    <Link className="btn btn-danger" to="/youtube">
                        <i className="fa fa-youtube-play" aria-hidden="true"></i> &nbsp;
                        YouTube</Link> &nbsp;
                    <Link className="btn btn-primary" to="/contacts">Contact List</Link> &nbsp;
                    <Link className="btn btn-primary" to="/contacts/add">Create Contact</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
