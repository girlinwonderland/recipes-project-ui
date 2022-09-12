import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signInRequest } from '../../../redux/actions';
import { loadingLoginStatus, errorLoginStatus, successAuthStatus } from '../../../redux/selectors';
import { TErrorType } from '../types';
import { ILogicOut } from './types';

export const useLoginFormLogic = (): ILogicOut => {
    const [loginValue, setLoginValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');

    const auth = useSelector(successAuthStatus);
    const login = localStorage.getItem('token');
    const loading = useSelector(loadingLoginStatus);
    const error = useSelector(errorLoginStatus);

    const navigate = useNavigate();

    useEffect(() => {
        login && navigate('/myRecipes');
    }, [login, navigate]);

    const dispatch = useDispatch();
    const onChangeLogin = useCallback((e) => setLoginValue(e.target.value),[]);

    const onChangePassword = useCallback((e) => setPasswordValue(e.target.value),[]);

    const onSignIn = useCallback(() => {
        dispatch(signInRequest({ login: loginValue, password: passwordValue }))
    }, [loginValue, passwordValue, dispatch]);

    const warningText = useMemo(() => {
        if (error){
            return TErrorType.EServerLogin;
        }
        return '';
    }, [error]);

    const title = useMemo(() => {
        if (loading){
            return 'Loading...'
        }
        if (auth){
            return 'Success! Login please';
        }
        if (warningText === TErrorType.EServerLogin){
            return 'Ooooops...';
        }
        return 'Hello, welcome back!';
    }, [auth, warningText, loading])

    return {
        title,
        loginValue,
        onChangeLogin,
        disableInputs: loading,
        passwordValue,
        onChangePassword,
        onClick: onSignIn,
        buttonLoading: loading,
        buttonDisable: loading,
        warningText
    }
}
