import axios from 'axios';
import { API_URL } from '../http';

export const recipes = () => axios.get<any>(`${API_URL}/user/recipes`, { withCredentials: true })
