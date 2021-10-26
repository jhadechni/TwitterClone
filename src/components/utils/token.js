import axios from 'axios';
const my_jwk_token =  localStorage.getItem('TOKEN');

export const Token = axios.create({
    headers: {'x-access-token': `${my_jwk_token}`}
});