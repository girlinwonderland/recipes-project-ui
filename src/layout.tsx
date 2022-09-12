import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
    return (
        <>
            {/*<header>*/}
            {/*    <Link to="/">About</Link>*/}
            {/*    <Link to="/signUp">Sign up</Link>*/}
            {/*    <Link to="/signIn">Sign in</Link>*/}
            {/*</header>*/}

            <Outlet />
        </>
    )
}
