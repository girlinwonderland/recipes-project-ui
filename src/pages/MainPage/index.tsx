import { Link } from 'react-router-dom';
import { ReactComponent as MainSvg} from '../../svg/mainText.svg';
import S from './styled';
import './style.css';

export const MainPage = () => {
    return (
        <S.Container>
            <S.MainPaper>
                <MainSvg style={{ position: 'absolute', top: '85px' }} />
            </S.MainPaper>
            {/*<S.ButtonBlock>*/}
            {/*    <Link to='/signUp'>*/}
            {/*        <Button text='Sign In' />*/}
            {/*    </Link>*/}
            {/*    <Link to='/signIn'><Button text='Sign Up' /></Link>*/}
            {/*</S.ButtonBlock>*/}
        </S.Container>
    )
}
