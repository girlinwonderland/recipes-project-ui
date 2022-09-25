import { Link } from 'react-router-dom';
import { ReactComponent as MainSvg } from '../../svg/mainText.svg';
import { Button } from '../../components';
import S from './styled';
import { useEffect } from 'react';
import './style.css';

export const MainPage = () => {
    const login = localStorage.getItem('token');

    useEffect(() => {
        if (!login){
            const svg = document.getElementsByTagName('svg')[1];
            svg.classList.add('path');
            const child = svg.children;
            for (let i = 0; i < child.length; i++){
                child[i].classList.add(`path-${i+1}`)
            }
        }
    }, [login]);

    return (
        <S.Container>
            <S.MainBlock>
                <MainSvg />
                <S.ButtonBlock>
                    {
                        login ?
                            <Link to='/myRecipes' ><Button text='View my recipes' /></Link>
                            :
                            <>
                                <Link to='/signUp'><Button text='Sign Up' className='animation' /></Link>
                                <Link to='/signIn'><Button text='Sign In' className='animation' /></Link>
                            </>

                    }
                </S.ButtonBlock>
            </S.MainBlock>
        </S.Container>
    )
}
