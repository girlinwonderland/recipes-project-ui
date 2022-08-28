import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import './style.css';

interface IButton {
    text: string,
    onClick?: () => void,
    className?: string,
    loading?: boolean,
    disable?: boolean
}

export const Button: React.FC<IButton> = ({
    text,
    onClick,
    className = '',
    loading,
    disable
}) => {
    const btnClassNames = clsx(
        disable ? styles['disable'] : '',
        styles['button'],
        className
    )

    const loadingBlock = (
        <div className="loadingContainer">
            <div className="bubble" />
            <div className="bubble" />
            <div className="bubble" />
        </div>
    )
    return (
        <button
            className={btnClassNames}
            onClick={onClick}
            title={text}
            disabled={disable}
        >
            {loading ? loadingBlock : text}
        </button>
    )
}
