import axios from 'axios'

export const SignupRequest = async (form, setFlow, setState) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/users/signup",
            {
                username: form.username,
                email: form.email,
                password: form.password
            })
            if (response) {
                const user = {
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                    role: response.data.role,
                    token: response.data.token,
                    isLogged: true
                }
                localStorage.setItem("user", JSON.stringify(user)),
                    setState(user),
                    setTimeout(() => {
                        setFlow(1)
                    }, 1000)
        }
    } catch (error) {
        alert(error.response.data);
    }
}