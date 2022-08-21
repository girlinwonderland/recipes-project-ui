import { useCallback, useState } from 'react';

export const SignInPage = () => {
    const [valueLogin, setValueLogin] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');

    const onChangeLogin = useCallback((e) => {
        setValueLogin(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setValuePassword(e.target.value);
    },[]);

    return (
        <div>
            <h1>Hello! It's sign in page!</h1>
            <input value={valueLogin} onChange={onChangeLogin} placeholder="Введите логин" />
            <input value={valuePassword} onChange={onChangePassword} placeholder="Введите пароль" />
            <button>Войти</button>
        </div>
    )
}
