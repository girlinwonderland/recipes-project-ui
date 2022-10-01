import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { onDeleteRecipe } from '../../redux/actions';
import { MoreMenu } from '../moreMenu';
import S from './styled';

interface ICard {
    title: string,
    description: string,
    id: string
}

const ITEMS = [{ id:'delete', text: 'Удалить' }];

export const Card: React.FC<ICard> = React.memo(({
    title,
    description,
    id
}) => {

    const dispatch = useDispatch();

    const [hover, setHover] = useState(false);

    const onDeleteCard = useCallback((id: string) => dispatch(onDeleteRecipe(id)), [dispatch])

    return (
        <S.Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <S.Text>
                <S.Title>{ title }</S.Title>
                <S.Bottom hover={hover}>
                    <S.Description>{description}</S.Description>
                </S.Bottom>
            </S.Text>
            <S.Controls>
                <MoreMenu items={ITEMS} onItemClick={() => onDeleteCard(id)} />
                <S.EditIcon hover={hover} />
            </S.Controls>
        </S.Container>
    )
})
