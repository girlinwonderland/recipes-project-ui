import React from 'react';
import classNames from 'classnames';
import './style.css';

interface IInput {
    value: string,
    onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
    className?: string,
    type?: string
}

export const Input: React.FC<IInput> = ({
    value,
    onChange,
    placeholder,
    className = '',
    type
}) => {
    const classes = classNames({ 'input': true, [className]: true });
    return (
        <input
            className={classes}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
        />
    )
}
