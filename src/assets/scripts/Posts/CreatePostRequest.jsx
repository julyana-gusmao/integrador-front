import axios from 'axios'
import { BASE_URL } from '../Functions'

export const createPost = async (content, token, array, setArray) => {

    try {
        const response = await axios.post(`${BASE_URL}/posts/`,
            {
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