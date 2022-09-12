// import { useParams, useNavigate } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../components';
import { logOut } from '../../redux/actions';
import { successLoginStatus } from '../../redux/selectors';
import { useNavigate } from 'react-router-dom';
import S from './styled';

export const SinglePage = () => {

    // const navigate = useNavigate();
    // const goToBack = navigate(-1)

    // const { id } = useParams();

    const navigate = useNavigate();

    useSelector(successLoginStatus);
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
        <>
            <S.ButtonWrapper>
                <Button text="Выход" onClick={onLogout}  />
            </S.ButtonWrapper>
            <div>Personal page</div>
        </>
    )
}
