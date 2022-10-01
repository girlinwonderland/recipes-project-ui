// import { useParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card } from '../../components';
import { logOut } from '../../redux/actions';
import { successLoginStatus, recipesData } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import S from './styled';

export const SinglePage = () => {

    // const navigate = useNavigate();
    // const goToBack = navigate(-1)

    // const { id } = useParams();

    const navigate = useNavigate();

    useSelector(successLoginStatus);
    const recipes = useSelector(recipesData);
    const login = localStorage.getItem('token');

    useEffect(() => {})

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(logOut())
    }, [dispatch]);

    useEffect(() => {
        !login && navigate('/');
    }, [login, navigate]);

    return (
        <S.Container>
            <S.ButtonWrapper>
                <Button text="Выход" onClick={onLogout} />
            </S.ButtonWrapper>
            <S.Title>My recipes</S.Title>
            <S.Main>
                {
                    recipes.length ?
                        <S.CardsContainer>
                            {
                                recipes.map(({ description, title, id }) => (
                                    <Card key={id} title={title} description={description} id={id} />
                                ))
                            }
                        </S.CardsContainer>
                        : <S.Empty />
                }
            </S.Main>
            <S.Add />
        </S.Container>
    )
}
