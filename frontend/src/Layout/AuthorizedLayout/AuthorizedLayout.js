import React from 'react';
import Navbar from '../NavBar/Navbar';

const AuthorizedLayout = (props) => {
    return (
        <>
            <Navbar />
            {props.children}
        </>
    );
};

export default AuthorizedLayout;