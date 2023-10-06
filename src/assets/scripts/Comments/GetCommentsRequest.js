import axios from 'axios'

export const getComments = async (content, token, setState) => {

    try {
        let response;
        if (content) {
            response = await axios.get("http://127.0.0.1:3003/comments/",
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
            response = await axios.get("http://127.0.0.1:3003/comments/",
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