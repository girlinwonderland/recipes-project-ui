import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Input } from '../../components';
import S from './styled';

export const SignInPage = () => {
    const [valueLogin, setValueLogin] = useState<string>('');
    const [valuePassword, setValuePassword] = useState<string>('');

    const dispatch = useDispatch();
    const onChangeLogin = useCallback((e) => {
        setValueLogin(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setValuePassword(e.target.value);
    },[]);

    return (
        <S.Container>
            <S.MainBlock>
                <S.Title>Hello, welcome back!</S.Title>
                <S.InputWrapper>
                    <Input value={valueLogin} onChange={onChangeLogin} placeholder="Enter your login" className="animationInp" />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Input value={valuePassword} onChange={onChangePassword} placeholder="Enter your password" className="animationInp" />
                </S.InputWrapper>
                <S.ButtonBlock><Button text="Sign Up" onClick={() => dispatch({ type:'SIGN_IN' })} /></S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
