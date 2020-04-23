import React from 'react';
import '../App.scss';

function Navbar(props) {

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="navbar-brand"><strong>{props.name}'s</strong> Government </div>
        </nav>
    );
}

export default Navbar;





