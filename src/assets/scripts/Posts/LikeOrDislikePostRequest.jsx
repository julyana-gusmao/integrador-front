import axios from 'axios'
import { BASE_URL } from '../Functions'

export const likePost = async (id, token) => {

    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}/like`,
            {
                like: true
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

export const dislikePost = async (id, token) => {

    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}/like`,
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