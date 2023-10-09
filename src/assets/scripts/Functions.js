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
    const [isLoading, setIsLoading] = useState(false)

    return [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea, isLoading, setIsLoading]

}

export const onEnter = (e, fn) => {
    if (e.key === 'Enter') {
         fn()
    }
};

export const editingContent = () => {

    const [editing, setEditing] = useState(false)
    const [content, setContent] = useState("")

    return [editing, setEditing, content, setContent]
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

export const checkData = (mail, userMail, setState) => {
    if (mail === userMail) {
        setState(1)
    } else {
        alert("Email inválido, insira o relativo a sua conta.")
    }
}

export const edit = (request, id, token, form, setState) => {
    request(id, token, form, setState)
}

export const BASE_URL = "https://labeddit-api-0ek7.onrender.com"