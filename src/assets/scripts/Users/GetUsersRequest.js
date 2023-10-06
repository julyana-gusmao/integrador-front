import axios from 'axios'

export const GetUsers = async (username, token, state, setState) => {

    try {
        let response;
        if (username) {
            response = await axios.get("http://127.0.0.1:3003/users/",
                {
                    username: username
                },
                {
                    headers: {
                        Authorization: token
                    }
                })
        } else {
            response = await axios.get("http://127.0.0.1:3003/users/",
                {
                    headers: {
                        Authorization: token
                    }
                })
        }
        if (response) {
            setState(response.data)
                .then(localStorage.setItem("user", state))
        }
    } catch (error) {
        alert(error.response.data);
    }
}