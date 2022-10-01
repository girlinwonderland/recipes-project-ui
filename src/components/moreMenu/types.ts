import { PopoverOrigin } from '@material-ui/core/Popover';

interface ILogicOut {
    ref: React.MutableRefObject<null>,
    anchor: Element | null,
    open: boolean,
    onClick: (e: any) => void,
    onClose: (e: any) => void,
    onOpen: (e: any) => void
}

interface ILoginIn {
    onItemClick: () => void
}

export type TLogic = (p: ILoginIn) => ILogicOut;

type TItems = {
    id: string,
    text: string
}

export interface IMore {
    items: TItems[],
    onItemClick: () => void,
    anchorOrigin?: PopoverOrigin,
    transformOrigin?: PopoverOrigin
}
