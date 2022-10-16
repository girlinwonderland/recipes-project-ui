import { useState } from 'react';
import { CreatorWindow } from './index';

export default {
    title: 'Компоненты',
    component: CreatorWindow,
};

export const WindowStory = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <CreatorWindow
            onSave={() => {}}
            onCancel={() => {}}
            title={title}
            onChangeTitle={setTitle}
            description={description}
            onChangeDescription={setDescription}

        />
    )
}

WindowStory.story = {
    name: 'Окно создания'
}
