import axios from 'axios';
import { TRequestFormPayload } from '../redux/types';

type TRegistrationAnswer = boolean;

export const registration = ({
    login,
    password
}: TRequestFormPayload) => axios.post<TRegistrationAnswer>(
    'http://localhost:5005/auth/signUp',
    {
        password,
        login
    }
)
