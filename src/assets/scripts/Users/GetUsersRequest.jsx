import axios from 'axios'
import { BASE_URL } from '../Functions'

export const GetUsers = async (username, token, state, setState) => {

    try {
        let response;
        if (username) {
            response = await axios.get(`${BASE_URL}/users/`,
                {
                    username: username
                },
                {
                    headers: {
                        Authorization: token
                    }
                })
        } else {
            response = await axios.get(`${BASE_URL}/users/`,
                {
                    headers: {
                        Authorization: token
                    }
                })
        }
        if (response) {
            setState(response.data)
                .then(localStorage.setItem("user", state))
        }
    } catch (error) {
        alert(error.message)
    }
}