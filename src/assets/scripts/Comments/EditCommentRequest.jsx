import axios from 'axios'
import { BASE_URL } from '../Functions'

export const editComment = async (id, content, token, setState) => {

    try {
        const response = await axios.put(`http://127.0.0.1:3003/comments/${id}`,
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
        }
    } catch (error) {
        alert(error.message);
    }
}