import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as Logo } from './svg/cookerHat.svg';

export const Layout = () => {
    return (
        <>
            <Link to="/">
                <Logo width="60px" height="60px" path="/" style={{ position: 'absolute', top: '10', left: '20', zIndex: 1 }} />
            </Link>
            <Outlet />
        </>
    )
}
