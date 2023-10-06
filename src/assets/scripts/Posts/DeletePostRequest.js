import axios from 'axios'

export const deletePost = async (id, token, array, setArray) => {

    try {
            const response = await axios.delete(`http://127.0.0.1:3003/posts/${id}`,
                {
                    headers: {
                        Authorization: token
                    }
                }
                )
        if (response) {
            setTimeout(() => {
                const filteredArray = array.filter(post => post.id !== id)
                setArray(filteredArray)
            }, 1000)
        }
    } catch (error) {
        console.log(error.response.data);
}
}