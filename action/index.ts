import 'server-only'
import axios from 'axios';
import { API_URL } from './api_url';

export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | "PACTH" | "OPTION";

export const axiosServerOnly = async (endpoint: string, method: HttpMethod, data: any = {}) => {
    try {
        const response = await axios({
            method,
            url: `${API_URL}/${endpoint}`,
            data,
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};