import React from 'react';
import styles from './styles.module.css';
import S from './styled';
import { Input } from '../input';

interface IFilterPanel {
    search: string,
    onChangeSearch: (e: any) => void,
    onChangeFilter: () => void,
    isActiveFilter?: boolean
}

export const FilterPanel: React.FC<IFilterPanel> = React.memo(({
    search,
    onChangeSearch,
    onChangeFilter,
    isActiveFilter
}) => {

    return (
        <S.Container>
            <Input value={search} onChange={onChangeSearch} placeholder="Search" className={styles.animationInp} />
            <S.FilterIcon onClick={onChangeFilter} isActive={isActiveFilter} />
        </S.Container>
    )
})
