import axios from 'axios'

export const editPost = async (id, content, token, array, setArray) => {

    try {
        const response = await axios.put(`http://127.0.0.1:3003/posts/:id=${id}`,
            {
                content: content
            },
            {
                params: {
                    id: id
                }
            },
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
            setTimeout(() => {
                const index = array.findIndex(post => post.id === id)
                const newArray = array.splice(index, 1)

                if (index >= 0 && index < array.length) {
                    newArray[index] = response.data
                    setArray(newArray)
                }
            }, 1000)
        }
    } catch (error) {
        console.log(error.response.data);
    }
}