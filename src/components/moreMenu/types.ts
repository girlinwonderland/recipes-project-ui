interface ILogicOut {
    dropdown: boolean,
    onToggle: () => void,
}

export type TLogic = () => ILogicOut

type TItems = {
    id: string,
    text: string
}

export interface IMore {
    items: TItems[],
    onItemClick: (id: string) => void,
}
