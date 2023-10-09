import axios from 'axios'
import { BASE_URL } from '../Functions'

export const editUser = async (id, token, form) => {

    try {
        const response = await axios.put(`${BASE_URL}/users/${id}`,
            {
                username: form.username,
                email: form.email,
                password: form.password
            },
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
            const user = {
                id: response.data.id,
                username: response.data.username,
                email: response.data.email,
                role: response.data.role,
                token: token,
                isLogged: true
            }
            localStorage.setItem("user", JSON.stringify(user)),
            alert(`${response.data.username}, dado(s) alterado(s) com sucesso!`),
            window.location.reload(true)
        }
    } catch (error) {
        alert(`Não foi possível alterar seus dados! Tente novamente`)
        alert(error.message)
    }
}