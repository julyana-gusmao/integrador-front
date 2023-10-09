import { useState } from "react"

export const useLoginForm = () => {

    const [form, setForm] = useState({ email: "", password: "" })

    const changeForm = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value });
    }

    return [form, changeForm]

}

export const useSignupForm = () => {

    const [form, setForm] = useState({ username: "", email: "", password: "" })

    const changeForm = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value });
    }

    return [form, changeForm]

}

export const usePassword = () => {

    const [type, setType] = useState("password")

    const changeType = () => {
        type === "password" ?
            setType("text")
            : setType("password")
    }

    return [type, changeType]
}
