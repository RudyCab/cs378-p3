import React from 'react';

const Header = ({title, caption}) => {
    return (
        <div>
            <img class="logo" src={`${process.env.PUBLIC_URL}/capyLogo.png`} alt='menu logo'/>
            <h1 class="name">{title}</h1>
            <h3 class="caption">{caption}</h3>
        </div>
    );
};

export default Header;