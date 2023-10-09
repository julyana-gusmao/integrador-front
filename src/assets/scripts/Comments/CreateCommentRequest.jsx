import axios from 'axios'
import { BASE_URL } from '../Functions'

export const createComment = async (content, postId, token, array, setArray) => {

    try {
        const response = await axios.post(`${BASE_URL}/comments/`,
            {
                postId: postId,
                content: content
            },
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
                setArray([...array, response.data])
        }
    } catch (error) {
        if(!content) {
            alert("Escreva alguma coisa no campo de postagem!")
        };
    }
}