import axios from 'axios'
import { BASE_URL } from '../Functions'

export const likeComment = async (id, token) => {

    try {
        const response = await axios.put(`${BASE_URL}/comments/${id}/like`,
            {
                like: true
            },
            {
                headers: {
                    Authorization: token
                }
            })
    } catch (error) {
        console.log(`${error.response.statusText} => ${error.response.data}`);
    }
}

export const dislikeComment = async (id, token) => {

    try {
        const response = await axios.put(`${BASE_URL}/comments/${id}/like`,
            {
                like: false
            },
            {
                headers: {
                    Authorization: token
                }
            })
    } catch (error) {
        alert(error.message);
    }
}