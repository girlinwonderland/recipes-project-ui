import { Link } from 'react-router-dom';
import { ReactComponent as MainSvg} from '../../svg/mainText.svg';
import { Button } from '../../components';
import S from './styled';
import './style.css';

export const MainPage = () => {
    return (
        <S.Container>
            <S.MainBlock>
                <MainSvg />
                <S.ButtonBlock>
                    <Link to='/signUp'><Button text='Sign Up' className='animation' /></Link>
                    <Link to='/signIn'><Button text='Sign In' className='animation' /></Link>
                </S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
