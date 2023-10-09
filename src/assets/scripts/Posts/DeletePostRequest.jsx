import axios from 'axios'
import { BASE_URL } from '../Functions'

export const deletePost = async (id, token, array, setArray) => {

    const idToDelete = id
    try {
        const response = await axios.delete(`${BASE_URL}/posts/${idToDelete}`, {

            headers: {
                Authorization: token
            }
        })
        if (response) {
            const filteredArray = array.filter(post => post.id !== id)
            setArray(filteredArray)
            window.location.reload(true)
        }
    } catch (error) {
        alert(error.message);
    }
}