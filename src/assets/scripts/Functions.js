import { useState } from "react"
import { goToLogin } from "../../router/Coordinators"
import { goToForum } from "../../router/Coordinators"

export const states = () => {

    const [user, setUser] = useState({
        id: "",
        username: "",
        email: "",
        role: "",
        token: "",
        logged: ""

    })

    const [textArea, setTextArea] = useState({ post: "", comment: "" })
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    return [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea]

}

export const getUserState = (setState) => {
    const getUser = localStorage.getItem("user")
    if (getUser) {
        const newUser = JSON.parse(getUser)
        setState({
            id: newUser.id,
            username: newUser.username,
            email: newUser.email,
            role: newUser.role,
            token: newUser.token,
            isLogged: newUser.isLogged
        })
    }
}

export const logout = (user, setState, navigate) => {

    localStorage.removeItem("user")
    setTimeout(() => {
        setState({
            id: user.id,
            username: user.username,
            email: user.email,
            role: user.role,
            token: user.token,
            isLogged: ""
        })
    }, 1000)
    goToLogin(navigate)
}


export const startEdit = (request, post, content, token, array, setArray, setState) => {
    if (post.content !== "") {
        request(post.id, content, token, array, setArray)
        setState(true)
    }
}

export const posting = (request, content, token, array, setArray, setState) => {
    request(content, token, array, setArray)
    setState({post: "", comment: ""})
}

export const delPost = (request, id, token, array, setArray, navigate) => {
    request(id, token, array, setArray).then(goToForum(navigate))

}