import { AxiosResponse } from 'axios';
import { TRequestFormPayload } from '../redux/types';
import $api from '../http';

type TRegistrationAnswer = {
    id: string,
    login: string,
    posts: any[]
}

export const registration = ({
    login,
    password
}: TRequestFormPayload) => $api.post<AxiosResponse<TRegistrationAnswer>>('/auth/signUp', { password, login })
