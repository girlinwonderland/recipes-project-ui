import axios from 'axios';
import { TRequestFormPayload } from '../redux/types';

type TRegistrationAnswer = any;

export const login = ({
    login,
    password
}: TRequestFormPayload) => axios.post<TRegistrationAnswer>(
    'http://localhost:5005/auth/signIn',
    {
        password,
        login
    }
)
