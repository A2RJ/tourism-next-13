import Axios from "axios";
import { sign } from 'jsonwebtoken'

const generateJwt = (payload: string) => {
    const secretKey = process.env.JWT_SECRET_KEY;
    if (!secretKey) {
        throw new Error('JWT secret key is missing or undefined');
        // redirect ke halaman awal
    }
    return sign({ payload }, secretKey, { expiresIn: '1h', algorithm: 'HS256' });
};

const axios = (token: string) => Axios.create({
    baseURL: 'http://127.0.0.1:3333',
    headers: {
        Authorization: `Bearer ${generateJwt(token)}`
    }
})

export default axios