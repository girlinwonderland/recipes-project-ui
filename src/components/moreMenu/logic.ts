import { useCallback, useMemo, useRef, useState } from 'react';
import { TLogic } from './types';

/** Логика клика по компоненту MoreMenu */
export const useClickLogic: TLogic = ({
    onItemClick
}) => {

    const ref = useRef(null);

    const [anchor, setAnchor] = useState<Element | null>(null);

    const open = useMemo(() => !!anchor, [anchor]);

    const onOpen = useCallback((e) => {
        e && e.stopPropagation();
        setAnchor(ref.current);
    }, [ref]);

    const onClose = useCallback((e) => {
        e.stopPropagation();
        setAnchor(null);
    }, []);

    const onClick = useCallback((e) => {
        e.stopPropagation();
        onClose(e);
        onItemClick();
    }, [onItemClick, onClose])

    return {
        ref,
        anchor,
        onOpen,
        open,
        onClick,
        onClose
    }
}
