import { useCallback, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpRequest } from '../../../redux/actions';
import { errorAuthStatus, loadingAuthStatus, successAuthStatus } from '../selectors';
import { TErrorType } from '../types';
import { ILogicOut } from './types';

export const useRegistrationFormLogic = (): ILogicOut => {

    const [loginValue, setLoginValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');
    const [confirmPasswordValue, setConfirmPasswordValue] = useState<string>('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const auth = useSelector(successAuthStatus);
    const loading = useSelector(loadingAuthStatus);
    const error = useSelector(errorAuthStatus);

    useEffect(() => {
        auth && navigate('/signIn');
    }, [auth, navigate]);

    const onChangeLogin = useCallback((e) => setLoginValue(e.target.value),[]);

    const onChangePassword = useCallback((e) => setPasswordValue(e.target.value),[]);

    const onChangeConfirmPassword = useCallback((e) => setConfirmPasswordValue(e.target.value),[]);

    const onSignUp = useCallback(() => {
        dispatch(signUpRequest({ login: loginValue, password: passwordValue }))
    }, [loginValue, passwordValue, dispatch]);

    const isSamePasswords = useMemo(() => (
            confirmPasswordValue.length >= passwordValue.length ? passwordValue === confirmPasswordValue : true
    ), [passwordValue, confirmPasswordValue])

    const warningText = useMemo(() => {
        if (error){
            return TErrorType.EServerAuth;
        } else if (!isSamePasswords){
            return TErrorType.EConfirmPassword;
        }
        return '';
    }, [error, isSamePasswords]);

    const buttonDisable = useMemo<boolean>(() => (
        loading || warningText === TErrorType.EConfirmPassword || passwordValue.length !== confirmPasswordValue.length
    ), [loading, warningText, passwordValue, confirmPasswordValue]);

    const title = useMemo(() => (
        loading ? 'Loading...' : (warningText === TErrorType.EServerAuth  ? 'Ooooops...' : 'Welcome! Let\'s begin')
    ), [loading, warningText]);

    return {
        loginValue,
        onChangeLogin,
        disableInputs: loading,
        passwordValue,
        onChangePassword,
        confirmPasswordValue,
        onChangeConfirmPassword,
        onClick: onSignUp,
        buttonLoading: loading,
        warningText,
        buttonDisable,
        title
    }
}
