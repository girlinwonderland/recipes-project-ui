import $api from '../http';

export const logout = () => $api.post<any>('/auth/logOut');
