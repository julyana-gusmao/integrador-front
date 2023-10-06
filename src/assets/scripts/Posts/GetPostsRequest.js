import axios from 'axios'

export const getPosts = async (content, token, setState) => {

    try {
        let response;
        if (content) {
            response = await axios.get("http://127.0.0.1:3003/posts/",
                {
                    content: content
                },
                {
                    headers: {
                        Authorization: token
                    }
                }
            )
        } else {
            response = await axios.get("http://127.0.0.1:3003/posts/",
            {
                headers: {
                    Authorization: token
                }
            })
        }
        if (response) {
            setState(response.data)
        }
    } catch (error) {
        console.log(error.response.data);
    }
}