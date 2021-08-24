import React from 'react';

const AuthorizedLayout = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default AuthorizedLayout;