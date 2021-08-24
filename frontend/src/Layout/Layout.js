import React from 'react';

import AuthorizedLayout from './AuthorizedLayout/AuthorizedLayout';
import UnAuthorizedLayout from './UnAuthorizedLayout/UnAuthorizedLayout';

const Layout = ({ isAuthorized, children }) => {
    const content = isAuthorized ?
        <AuthorizedLayout>{children}</AuthorizedLayout>
        :
        <UnAuthorizedLayout>{children}</UnAuthorizedLayout>;
    return (
        <>
            {content}
        </>
    );
};

export default Layout;