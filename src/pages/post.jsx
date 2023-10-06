import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { goToLogin } from "../router/Coordinators"
import { SinglePost } from '../components/singlePost'
import { CommentTextArea } from '../components/textArea'
import { MobileHeader } from "../components/mobileHeader"
import { CommentsCase } from '../components/cases/commentsCase'
import { createComment } from '../assets/scripts/Comments/CreateCommentRequest'


export const PostPage = (props) => {

    const [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments] = props.content
    const pagePost = posts.find(post => post.id.slice(0, 8) === props.url)

    const makeComment = () => {
        createComment(textArea.comment, pagePost.id, user.token, comments, setComments)
        setTextArea("")
    }

    return (
        < div className="flex flex-col justify-center align-center pb-[4vh]">
            <MobileHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />

            <div className="flex flex-col align-center relative left-[6vw] mt-[4vh] w-[100vw] justify-center">
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
            from-[#FF6489] to-[#F9B24E] mt-[3vh]" />
            
                <CommentsCase
                    content={props.content}
                    postId={pagePost.id}
                    />
            </div>
        </div>
    )
}