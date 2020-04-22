import React from 'react';
import '../App.scss';

function Navbar(props) {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand"><strong>Debrecen's</strong> {props.name}</div>
        </nav>
    );
}

export default Navbar;





