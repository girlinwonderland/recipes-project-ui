// import { actions } from '@storybook/addon-actions';
import { MoreMenu } from './';


export default {
    title: 'Компоненты',
    component: MoreMenu,
};

const ITEMS = [{ id:'delete', text: 'Удалить' }];

export const MoreMenuStory = () => {
    const onClickItem = (id: string) => console.log(id)
    return <MoreMenu items={ITEMS} onItemClick={onClickItem} />
}

MoreMenuStory.story = {
    name: 'Меню ещё'
}

