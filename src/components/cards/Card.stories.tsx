import { Card } from './Card';
import { text } from '@storybook/addon-knobs';


export default {
    title: 'Компоненты',
    component: Card,
};

export const CardStory = () => {
    return (
        <Card
            title={text('title', 'рецептhgjfgjghjhgjhhhhh')}
            description="jhuhyyi fjhgn vhjfyenhgj gfgjhgy gjhuh jhuhjh jjhjhj hjhn hfjjg hufgb jdhtghtrh jthgjdgjd jgkgjhg"
        />

    )
}

CardStory.story = {
    name: 'Карточка'
}
