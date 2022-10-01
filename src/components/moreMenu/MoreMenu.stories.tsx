// import { actions } from '@storybook/addon-actions';
import { MoreMenu } from './';


export default {
    title: 'Компоненты',
    component: MoreMenu,
};

const ITEMS = [{ id:'delete', text: 'Удалить' }];

export const MoreMenuStory = () => {
    return <MoreMenu items={ITEMS} onItemClick={() => {}} />
}

MoreMenuStory.story = {
    name: 'Меню ещё'
}

