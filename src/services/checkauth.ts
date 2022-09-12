import axios from 'axios';
import { API_URL } from '../http';

export const checkauth = () => axios.get<any>(`${API_URL}/auth/refresh`, { withCredentials: true })
