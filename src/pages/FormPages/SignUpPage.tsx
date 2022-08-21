import { useCallback, useState } from 'react';
import {useDispatch} from "react-redux";

export const SignUpPage = () => {
    const [valueLogin, setValueLogin] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const dispatch = useDispatch();

    const onChangeLogin = useCallback((e) => {
        setValueLogin(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setValuePassword(e.target.value);
    },[]);

    const onChangeConfirmPassword = useCallback((e) => {
        setRepeatPassword(e.target.value);
    },[]);

    return (
        <div>
            <h1>Hello! It's sign up page!</h1>
            <input value={valueLogin} onChange={onChangeLogin} placeholder="Введите логин" />
            <input value={valuePassword} onChange={onChangePassword} placeholder="Введите пароль" />
            <input value={repeatPassword} onChange={onChangeConfirmPassword} placeholder="Повторите пароль" />
            <button onClick={() => dispatch({ type:'SIGN_UP' })} >Зарегистрироваться</button>
        </div>
    )
}
