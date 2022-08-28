import { TOnChange, TCommonForm } from '../types';

export type ILogicOut = {
    /** Значение повторного пароля */
    confirmPasswordValue: string,
    /** Событие изменения повторного пароля */
    onChangeConfirmPassword: TOnChange,
} & TCommonForm
