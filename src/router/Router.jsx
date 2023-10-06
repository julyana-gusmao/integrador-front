import { useEffect } from "react";
import { Login } from "../pages/login";
import { Forum } from "../pages/forum";
import { PostPage } from "../pages/post"
import { Signup } from "../pages/signup";
import { Settings } from "../pages/settings";
import { NotFound } from "../pages/notFound";
import { DeleteAccount } from "../pages/delete";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPosts } from "../assets/scripts/Posts/GetPostsRequest";
import { states, getUserState } from "../assets/scripts/Functions";
import { getComments } from "../assets/scripts/Comments/GetCommentsRequest";


export default function Router() {


    const [user, setUser, posts, setPosts, comments, setComments, textArea, setTextArea] = states()
    const token = user.token

    useEffect(() => { getUserState(setUser) }, [])

    const reversedPosts = [...posts].reverse()
    const urlsList = reversedPosts.map(post => post.id.slice(0, 8))

    useEffect(() => {
        if (user.isLogged) {
            getPosts("", user.token, setPosts)
            getComments("", user.token, setComments)
        }
    }, [token]

    )
    const content = [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments]

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={
                    !user.isLogged ?
                        <Login
                            setUser={setUser} />
                        :
                        <Forum
                            content={content}
                            reversedPosts={reversedPosts}
                        />}
                />

                <Route path="/signup" element={
                    !user.isLogged ?
                        <Signup
                            content={content} />
                        :
                        <Forum
                            content={content}
                            reversedPosts={reversedPosts}
                        />}
                />

                <Route path="/forum" element={
                    <Forum
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />

                {urlsList.map((url, index) => {
                    return (
                        <Route
                            key={index}
                            path={`/forum/post/${url}`}
                            element={
                                <PostPage
                                    key={url}
                                    url={url}
                                    content={content}
                                />
                            }
                        />
                    )
                })}

                <Route path="/settings" element={
                    <Settings
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />

                <Route path="/delete" element={
                    <DeleteAccount
                        content={content}
                        reversedPosts={reversedPosts}
                    />}
                />
            </Routes>
        </BrowserRouter>
    )
}