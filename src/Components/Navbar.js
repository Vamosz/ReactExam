import React from 'react';
import '../App.scss';

function Navbar(props) {

    return (
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand"><strong>Debrecen's</strong> {props.name}</a>
        </nav>
    );
}

export default Navbar;





