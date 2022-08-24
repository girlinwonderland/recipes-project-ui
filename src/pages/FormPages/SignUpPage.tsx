import {useCallback, useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpRequest } from '../../redux/actions';
import { Button, Input } from '../../components';
import { successAuthStatus, loadingAuthStatus, errorAuthStatus } from './selectors';
import S from './styled';

export const SignUpPage = () => {
    const [valueLogin, setValueLogin] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');
    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const navigate = useNavigate();

    const dispatch = useDispatch();
    const auth = useSelector(successAuthStatus);
    const loading = useSelector(loadingAuthStatus);
    const error = useSelector(errorAuthStatus);

    useEffect(() => {
        auth && navigate('/signIn')
    }, [auth, navigate]);

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
        <S.Container>
            <S.MainBlock>
                <S.Title>Welcome! Let's begin</S.Title>
                <S.InputWrapper>
                    <Input value={valueLogin} onChange={onChangeLogin} placeholder="Enter your login" className="animationInp" />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Input value={valuePassword} type="password" onChange={onChangePassword} placeholder="Enter your password" className="animationInp" />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Input value={repeatPassword} type="password" onChange={onChangeConfirmPassword} placeholder="Repeat your password" className="animationInp" />
                </S.InputWrapper>
                <S.ButtonBlock>
                    <Button
                        text="Sign Up"
                        onClick={() => dispatch(signUpRequest({ login: valueLogin, password: valuePassword }))}
                        loading={loading}
                    />
                </S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
