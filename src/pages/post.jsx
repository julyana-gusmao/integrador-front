import { goToLogin } from "../router/Coordinators"
import { SinglePost } from '../components/singlePost'
import { CommentTextArea, DesktopCommentTextArea } from '../components/textArea'
import { MobileHeader } from "../components/mobile/mobileHeader"
import { DesktopHeader } from "../components/desktop/desktopHeader"
import { CommentsCase } from '../components/cases/commentsCase'
import { createComment } from '../assets/scripts/Comments/CreateCommentRequest'


export const PostPage = (props) => {

    const [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments] = props.content
    const pagePost = posts.find(post => post.id.slice(0, 8) === props.url)

    const makeComment = () => {
        if (textArea.comment) {
            createComment(textArea.comment, pagePost.id, user.token, comments, setComments)
            setTimeout(() =>
                setTextArea({ post: "", comment: "" })
                , 1000)
        }
    }

    return (
        < div className="flex flex-col justify-center align-center pb-[4vh] lg:pb-0">
            <MobileHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />
            <DesktopHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />

            <div className="post-container lg:min-h-[96vh]">
                <SinglePost
                    pagePost={pagePost}
                    role={user.role}
                    userId={user.Id}
                    token={user.token}
                    posts={posts}
                    setPosts={setPosts}
                />

                <CommentTextArea
                    value={textArea.comment}
                    state={textArea}
                    setState={setTextArea}
                    function={() => makeComment()}
                />

                <div className=" w-[85vw] h-[.2vh] bg-gradient-to-r  
            from-[#FF6489] to-[#F9B24E] mt-[3vh] lg:w-[40vw]" />

                <CommentsCase
                    content={props.content}
                    postId={pagePost.id}

                />
                <div className="hidden lg:flex lg:flex-col">
                <DesktopCommentTextArea
                    value={textArea.comment}
                    state={textArea}
                    setState={setTextArea}
                    function={() => makeComment()}
                />
                </div>

            </div>
    
        </div>
    )
}