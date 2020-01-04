import React from 'react';

const Header = ({titulo}) => {
    return (

        <nav className="nav-wrapper light-blue darken-3">
            {/* eslint-disable */}
            <a href="#" className="brand-logo center">{titulo}</a>
            {/* eslint-enable */}
        </nav>
        
    );
}

export default Header;