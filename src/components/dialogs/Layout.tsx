import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import styles from './styles.module.css';

interface ILayout {
    open: boolean,
    onClose: (e?: any) => void
}

const Layout: React.FC<ILayout> = ({
    open,
    onClose,
    children
}) => (
    <Dialog open={open} onClose={onClose} classes={{ paperWidthSm: styles.dialog }} >
        {children}
    </Dialog>
)

export default Layout;
