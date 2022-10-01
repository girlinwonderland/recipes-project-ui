import React from 'react';
import Popover, { PopoverOrigin } from '@material-ui/core/Popover';
import { useClickLogic } from './logic';
import S from './styled';
import { IMore } from './types';

const ANCHOR_ORIGIN: PopoverOrigin = {
    vertical: 'bottom',
    horizontal: 'center'
}

const TRANSFORM_ORIGIN: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'center'
}

export const MoreMenu: React.FC<IMore> = React.memo(({
    items,
    onItemClick,
    transformOrigin = TRANSFORM_ORIGIN,
    anchorOrigin = ANCHOR_ORIGIN
}) => {

    const {
        open,
        anchor,
        ref,
        onClose,
        onOpen,
        onClick
    } = useClickLogic({ onItemClick })


    return (
        <div>
            <S.MoreSvg onClick={onOpen} ref={ref} />
            <Popover
                open={open}
                anchorEl={anchor}
                onClose={onClose}
                anchorOrigin={anchorOrigin}
                transformOrigin={transformOrigin}
            >
                <S.DropDown>
                    { items.map(({ text }, i) => (
                        <S.Line key={i} onClick={onClick}>{ text }</S.Line>
                    ))}
                </S.DropDown>
            </Popover>
        </div>
    )
})
