import Axios from "axios";
import { sign } from 'jsonwebtoken'


const axios = Axios.create({
    baseURL: 'http://127.0.0.1:3333',
})

export default axios