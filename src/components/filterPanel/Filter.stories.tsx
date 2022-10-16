import { useState } from 'react';
import { FilterPanel } from './index';

export default {
    title: 'Компоненты',
    component: FilterPanel,
};

export const FilterStory = () => {
    const [search, onChangeSearch] = useState('')
    const [isActive, setIsActive] = useState(false);

    return (
        <FilterPanel
            onChangeFilter={() => setIsActive(prev => !prev)}
            onChangeSearch={(e) => onChangeSearch(e.target.value)}
            isActiveFilter={isActive}
            search={search}
        />
    )
}

FilterStory.story = {
    name: 'Панель фильтрации'
}
