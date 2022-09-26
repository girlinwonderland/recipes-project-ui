import React, {useState} from 'react';
import S from './styled';

interface ICard {
    title: string,
    description: string,
}

export const Card: React.FC<ICard> = React.memo(({
    title,
    description
}) => {

    const [hover, setHover] = useState(false);

    return (
        <S.Container onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <S.Text>
                <S.Title>{ title }</S.Title>
                <S.Bottom hover={hover}>
                    <S.Description>{description}</S.Description>
                </S.Bottom>
            </S.Text>
            <S.Controls>
                <S.MoreSvg />
                <S.EditIcon hover={hover} />
            </S.Controls>
        </S.Container>
    )
})
