import { useCallback, useEffect, useState } from 'react';
import { TLogic } from './types';

/** Логика клика по компоненту MoreMenu */
export const useClickLogic: TLogic = () => {

    const [dropdown, setDropdown] = useState(false);

    const onToggle = useCallback(() => setDropdown(prev => !prev), []);

    const onClose = useCallback((e) => {
        if (e.target.tagName && e.target.tagName !== 'svg' && e.target.tagName !== 'path'){
            setDropdown(false);
        }
    }, []);

    useEffect(()=> {
        document.addEventListener('mousedown', (e) => onClose(e));
        return () => document.removeEventListener('mousedown', onClose);
    }, [onClose]);

    return {
        onToggle,
        dropdown
    }
}
