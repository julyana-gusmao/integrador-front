import axios from 'axios'
import { BASE_URL } from '../Functions'

export const getComments = async (content, token, setState) => {

    try {
        let response;
        if (content) {
            response = await axios.get(`${BASE_URL}/comments/`,
                {
                    content: content
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
        } else {
            response = await axios.get(`${BASE_URL}/comments/`,
            {
                headers: {
                    Authorization: token
                }
            })
        }
        if (response) {
            setState(response.data)
        }
    } catch (error) {
        alert(error.message);
    }
}