import axios from 'axios'
import { BASE_URL } from '../Functions'
import { goToLogin } from '../../../router/Coordinators'

export const deleteUser = async (id, token, setState, navigate) => {

    try {
        const response = await axios.delete(`${BASE_URL}/users/${id}`,
            {
                headers: {
                    Authorization: token
                }
            })
        if (response) {
            (localStorage.removeItem("user"))
                setState("")
                goToLogin(navigate)
        }
    } catch (error) {
        alert(error.message)
    }
}