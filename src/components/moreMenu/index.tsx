import React from 'react';
import { useClickLogic } from './logic';
import S from './styled';
import { IMore } from './types';

export const MoreMenu: React.FC<IMore> = React.memo(({
    items,
    onItemClick
}) => {

    const {
        dropdown,
        onToggle
    } = useClickLogic()

    return (
        <>
            <S.MoreSvg onClick={onToggle} />
            <S.DropDown visible={dropdown} >
                { items.map(({ id, text }) => (
                    <S.Line key={id} onClick={() => onItemClick(id)}>{ text }</S.Line>
                ))}
            </S.DropDown>
        </>
    )
})
