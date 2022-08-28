import { Button, Input } from '../../../components';
import styles from '../styles.module.css';
import S from '../styled';
import { useRegistrationFormLogic } from './logic';

export const SignUpPage = () => {

    const {
        loginValue,
        onChangeLogin,
        disableInputs,
        passwordValue,
        onChangePassword,
        confirmPasswordValue,
        onChangeConfirmPassword,
        onClick,
        buttonLoading,
        warningText,
        buttonDisable,
        title
    } = useRegistrationFormLogic();

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
                        type="password"
                        onChange={onChangePassword}
                        placeholder="Enter your password"
                        className={styles.animationInp}
                        disable={disableInputs}
                    />
                </S.InputWrapper>
                <S.InputWrapper>
                    <Input
                        value={confirmPasswordValue}
                        type="password"
                        onChange={onChangeConfirmPassword}
                        placeholder="Repeat your password"
                        className={styles.animationInp}
                        disable={disableInputs}
                    />
                </S.InputWrapper>
                <S.ButtonBlock>
                    <Button
                        text="Sign Up"
                        onClick={onClick}
                        loading={buttonLoading}
                        disable={buttonDisable}
                        className={styles.animationBtn}
                    />
                </S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
