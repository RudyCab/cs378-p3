import React from 'react';

const Header = ({title, caption}) => {
    return (
        <div>
            <img class="logo" id="logo" src="menuLogo.png" alt="Menu logo"/>
            <h1 class="name">{title}</h1>
            <h3 class="caption">{caption}</h3>
        </div>
    );
};

export default Header;