import axios from 'axios';
import { API_URL } from '../http';

export const deleteRecipe = (id: string) => axios.delete<any>(`${API_URL}/user/deletePost/${id}`, { withCredentials: true })
