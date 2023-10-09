import axios from 'axios'
import { BASE_URL } from '../Functions'

export const editPost = async (id, content, token, setState) => {

    try {
        const response = await axios.put(`${BASE_URL}/posts/${id}`,
            {
                content: content
            },
            {
                headers: {
                    Authorization: token
                }
            }
        )
        if (response) {
            setState(false)
            window.location.reload(true)
        }
    } catch (error) {
        alert(error.message);
    }
}