import { TRequestFormPayload } from '../redux/types';
import $api from '../http';

// type TLoginAnswer = {
//     accessToken: string,
//     refreshToken: string,
//     user: {
//         id: string,
//         login: string,
//         posts: string[]
//     }
// };

export const login = ({
    login,
    password
}: TRequestFormPayload) => $api.post<any>('/auth/signIn', { password, login })
