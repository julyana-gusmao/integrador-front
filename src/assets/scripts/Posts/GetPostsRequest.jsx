import axios from 'axios'
import { BASE_URL } from '../Functions'

export const getPosts = async (content, token, setState) => {

    try {
        let response;
        if (content) {
            response = await axios.get(`${BASE_URL}/posts/`,
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
            response = await axios.get(`${BASE_URL}/posts/`,
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