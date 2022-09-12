import { Button, Input } from '../../../components';
import styles from '../styles.module.css';
import S from '../styled';
import { useLoginFormLogic } from './logic';

export const SignInPage = () => {

    const {
        title,
        loginValue,
        onChangeLogin,
        disableInputs,
        passwordValue,
        onChangePassword,
        onClick,
        buttonLoading,
        buttonDisable,
        warningText
    } = useLoginFormLogic();

    return (
        <S.Container>
            <S.MainBlock>
                <S.Title>{title}</S.Title>
                { warningText && <S.Warning>{warningText}</S.Warning> }
                <S.InputWrapper>
                    <Input
                        value={loginValue}
                        onChange={onChangeLogin}
                        placeholder="Enter your login"
                        className={styles.animationInp}
                        disable={disableInputs}
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Input
                        value={passwordValue}
                        onChange={onChangePassword}
                        type="password"
                        placeholder="Enter your password"
                        className={styles.animationInp}
                        disable={disableInputs}
                    />
                </S.InputWrapper>
                <S.ButtonBlock>
                    <Button
                        text="Sign In"
                        onClick={onClick}
                        className={styles.animationBtn}
                        disable={buttonDisable}
                        loading={buttonLoading}
                    />
                </S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
