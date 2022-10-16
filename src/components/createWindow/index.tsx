import React from 'react';
import { Button } from '../button';
import S from './styled';

interface ICreator {
    onSave: () => void,
    onCancel: () => void,
    title: string,
    onChangeTitle: (p: string) => void,
    description: string,
    onChangeDescription: (p: string) => void
}

export const CreatorWindow: React.FC<ICreator> = React.memo(({
    onSave,
    onCancel,
    title,
    onChangeTitle,
    description,
    onChangeDescription,
}) => {
    return (
        <S.Wrapper>
            <S.Title>
                <S.Text>Title:</S.Text>
                <S.Input value={title} onChange={e => onChangeTitle(e.target.value)} />
            </S.Title>
            <S.Description>
                <S.Text>Description:</S.Text>
                <S.Input value={description} onChange={e => onChangeDescription(e.target.value)} />
            </S.Description>
            <S.Bottom>
                <Button text="Cancel" onClick={onCancel} />
                <Button text="Save" onClick={onSave} />
            </S.Bottom>
        </S.Wrapper>
    )
})
