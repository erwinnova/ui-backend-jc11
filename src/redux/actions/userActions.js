import Axios from 'axios';
import { API_URL } from '../../support/API_URL';

export const Login = (username, password) => {
    return(dispatch) => {
        Axios.post(API_URL + '/users/login', {
            username,
            password
        })
        .then((res) => {
            localStorage.setItem('token', res.data.token)
            console.log(res.data)
            dispatch({
                type: 'LOGIN',
                payload: res.data
            })
        })
        .catch((err) => {
            localStorage.removeItem('token')
            console.log(err)
            dispatch({
                type: 'LOGOUT'
            })
        })
    }
}