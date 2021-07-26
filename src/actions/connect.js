import axios from 'axios'

import{
    API_URL ,
} from '../constants'

export const request = axios.create({
    baseURL : API_URL,
    timeout: 1000,
})