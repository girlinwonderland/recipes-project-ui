import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface IInput {
    value: string,
    onChange?:  (event: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder: string
    className?: string,
    type?: string,
    disable?: boolean
}

export const Input: React.FC<IInput> = ({
    value,
    onChange,
    placeholder,
    className = '',
    disable,
    type
}) => {
    const inputClassNames = clsx(
        styles['input'],
        className
    )
    return (
        <input
            className={inputClassNames}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            type={type}
            disabled={disable}
        />
    )
}
