import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onDeleteRecipe, onEditRecipes } from '../../redux/actions';
import { MoreMenu } from '../moreMenu';
import S from './styled';
import {TPost} from "../../redux/types";

interface ICard {
    title: string,
    description: string,
    id: string,
    favourite: boolean,
    userId: string,
}

const ITEMS = [{ id:'delete', text: 'Удалить' }];

export const Card: React.FC<ICard> = React.memo(({
    title,
    description,
    favourite,
    userId,
    id
}) => {

    const dispatch = useDispatch();

    const [hover, setHover] = useState(false);

    const onDeleteCard = useCallback((id: string) => dispatch(onDeleteRecipe(id)), [dispatch]);

    const onToggleLike = useCallback((p: TPost) => dispatch(onEditRecipes(p)) , [dispatch])

    return (
        <S.Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <S.Text>
                <S.Title>{ title }</S.Title>
                <S.Bottom hover={hover && !!description.length}>
                    <S.Description>{description}</S.Description>
                </S.Bottom>
            </S.Text>
            <S.Controls>
                <MoreMenu items={ITEMS} onItemClick={() => onDeleteCard(id)} />
                <S.HeartIcon fav={favourite} onClick={(e) => {
                    e.stopPropagation();
                    onToggleLike({ id, favourite: !favourite, description, title, userId });
                }} />
            </S.Controls>
        </S.Container>
    )
})
