import axios from 'axios';
import { API_URL } from '../http';
import { TPost } from '../redux/types';

export const editRecipe = (item: TPost) => axios.put<any>(`${API_URL}/user/editPost/${item.id}`, { withCredentials: true, ...item })
