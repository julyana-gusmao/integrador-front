import axios from 'axios'

export const createComment = async (content, postId, token, array, setArray) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/comments/",
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
            setTimeout(() => {
                setArray([...array, response.data])
            }, 1000)
        }
    } catch (error) {
        console.log(error.response.data);
    }
}