import React from 'react';
import classNames from 'classnames';
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
    const classes = classNames({'button': true, [className]: true,})
    const loadingBlock = (
        <div className="loadingContainer">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
        </div>
    )
    return (
        <button className={classes} onClick={onClick} title={text} >
            {loading ? loadingBlock : text}
        </button>
    )
}
