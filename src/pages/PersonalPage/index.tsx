// import { useParams, useNavigate } from 'react-router-dom';
import {useCallback, useEffect, useMemo, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, FilterPanel } from '../../components';
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

    const [searchText, setSearchText] = useState('');

    const [filter, setFilter] = useState(false);

    const onChangeFilter = useCallback(() => setFilter(prev => !prev), []);

    const onChangeSearch = useCallback((e) => setSearchText(e.target.value), []);

    const filteredBySearchRecipes = useMemo(() => {
        return searchText.length ? recipes.filter(({ title }) => title.toLowerCase().includes(searchText.toLowerCase())) : recipes
    }, [recipes, searchText])

    const filteredRecipes = useMemo(() => {
        return filteredBySearchRecipes.filter(({ favourite }) => filter ? favourite : true)
    }, [filter, filteredBySearchRecipes])

    console.log(filteredRecipes)

    return (
        <S.Container>
            <S.ButtonWrapper>
                <Button text="Выход" onClick={onLogout} />
            </S.ButtonWrapper>
            <S.Title>My recipes</S.Title>
            <S.Search>
                <FilterPanel
                    search={searchText}
                    onChangeSearch={onChangeSearch}
                    onChangeFilter={onChangeFilter}
                    isActiveFilter={filter}
                />
            </S.Search>
            <S.Main>
                {
                    filteredRecipes.length ?
                        <S.CardsContainer>
                            {
                                filteredRecipes.map(({ description, title, id, favourite, userId }) => (
                                    <Card
                                        key={id}
                                        title={title}
                                        description={description}
                                        id={id}
                                        favourite={favourite}
                                        userId={userId}
                                    />
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
