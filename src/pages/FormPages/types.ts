import React from 'react';

export type TOnChange = (event: React.ChangeEvent<HTMLInputElement>) => void;

export enum TErrorType {
    EServerAuth = 'Login already taken',
    EServerLogin = 'Incorrect username or password',
    EConfirmPassword = 'Password are not matching'
}

export type TCommonForm = {
    /** Заголовок формы */
    title: string,
    /** Значение логина */
    loginValue: string,
    /** Событие изменения логина */
    onChangeLogin: TOnChange,
    /** Состояние disable для инпутов */
    disableInputs: boolean,
    /** Значение пароля */
    passwordValue: string,
    /** Событие изменения пароля */
    onChangePassword: TOnChange,
    /** Событие нажатия на кнопку формы */
    onClick: () => void,
    /** Загрузка кнопки */
    buttonLoading: boolean,
    /** Состояние disable кнопки */
    buttonDisable: boolean,
    /** Текст предупреждения об ошибке */
    warningText: string
}
