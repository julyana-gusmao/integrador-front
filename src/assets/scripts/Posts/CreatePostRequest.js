import axios from 'axios'

export const createPost = async (content, token, array, setArray) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/posts/",
            {
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