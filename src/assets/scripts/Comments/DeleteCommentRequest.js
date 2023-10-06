import axios from 'axios'

export const deleteComment = async (id, postId, token, array, setArray) => {

    const idToDelete = id

    try {
        const response = await axios.delete(`http://127.0.0.1:3003/comments/${idToDelete}`,
        {
            postId: postId
        },
        {
            headers: {
                Authorization: token
            }
        })
        if (response) {
            setTimeout(() => {
                const filteredArray = array.filter(comment => comment.id !== id)
                setArray(filteredArray)
            }, 1000)
        }
    } catch (error) {
        console.log(`${error.response.statusText} => ${error.response.data}`);
    }
}