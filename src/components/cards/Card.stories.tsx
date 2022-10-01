import { Card } from './index';
import { text } from '@storybook/addon-knobs';


export default {
    title: 'Компоненты',
    component: Card,
};

export const CardStory = () => {
    return (
        <Card
            title={text('title', 'рецепт')}
            description="jhuhyyi fjhgn vhjfyenhgj gfgjhgy gjhuh jhuhjh jjhjhj hjhn hfjjg hufgb jdhtghtrh jthgjdgjd jgkgjhg"
            id="1"
        />

    )
}

CardStory.story = {
    name: 'Карточка'
}
