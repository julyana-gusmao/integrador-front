import axios from 'axios'
import { goToForum } from '../../../router/Coordinators'

export const LoginRequest = async (form, navigate, setState) => {

    try {
        const response = await axios.post("http://127.0.0.1:3003/users/login",
            {
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
            setState(user),
                localStorage.setItem("user", JSON.stringify(user)),
                setTimeout(() => {
                    goToForum(navigate)
                }, 1000)
        }
    } catch (error) {
        alert(error.response.data);
    }
}