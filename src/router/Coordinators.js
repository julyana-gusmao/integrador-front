export const goToLogin = (navigate) => {
    navigate("/")
}

export const goToSignup= (navigate) => {
    navigate("/signup")
}

export const goToForum = (navigate) => {
    navigate("/forum")
}

export const goToPost = (navigate, url) => {
    navigate(`/forum/post/${url}`)
}

export const goToSettings = (navigate) => {
    navigate("/settings")
}

export const goToDelete = (navigate) => {
    navigate("/delete")
}