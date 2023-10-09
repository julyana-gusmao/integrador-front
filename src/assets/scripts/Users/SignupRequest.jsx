import axios from 'axios'
import { BASE_URL } from '../Functions'
import { goToForum } from '../../../router/Coordinators'

export const SignupRequest = async (form, setState, isLoading, navigate) => {

    try {
        isLoading(true)
        const response = await axios.post(`${BASE_URL}/users/signup`,
            {
                username: form.username, 
                email: form.email,
                password: form.password
            }
        )
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
            goToForum(navigate),
            isLoading(false)
        }
    } catch (error) {
        alert(error.message)
        isLoading(false)
    }
}