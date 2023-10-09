import axios from 'axios'
import { BASE_URL } from '../Functions'

export const deleteComment = async (id, token, array, setArray) => {

    try {
        const response = await axios.delete(`${BASE_URL}/comments/${id}`,
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
            const filteredArray = array.filter(comment => comment.id !== id)
            setArray(filteredArray)
        }
    } catch (error) {
        alert(error.message);
    }
}