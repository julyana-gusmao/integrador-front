import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import { posting } from '../assets/scripts/Functions'
import { PostsCase } from '../components/cases/postsCase'
import { MobileHeader } from '../components/mobile/mobileHeader'
import { DesktopHeader } from '../components/desktop/desktopHeader'
import { TextArea, ReadOnlyTextArea } from '../components/textArea'
import { createPost } from '../assets/scripts/Posts/CreatePostRequest'


export const Forum = (props) => {

    const navigate = useNavigate()
    const [user, setUser, posts, setPosts, textArea, setTextArea, comments] = props.content
  

    return (
        < div className="flex flex-col justify-center pb-[4vh] lg:pb-0">
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

            <div className="container">
                <form className="flex flex-col">
                    {user.isLogged ?

                        <TextArea
                            value={textArea.post}
                            state={textArea}
                            setState={setTextArea}
                            function={() => posting(createPost, textArea.post, user.token, posts, setPosts, setTextArea)} />
                        :
                        <ReadOnlyTextArea />
                    }

                </form>
            </div>

            <div className="hidden lg:block lg:bg-[#EBEBEB] w-[40vw] m-auto">
                <div className="ml-[7.5vw] w-[85vw] h-[.2vh] bg-gradient-to-r  
            from-[#FF6489] to-[#F9B24E] mt-[3vh] lg:w-[40vw] lg:m-auto " />
            </div>

            {user.isLogged ?

                <PostsCase
                    reversedPosts={props.reversedPosts}
                    posts={posts}
                    setPosts={setPosts}
                    role={user.role}
                    userId={user.id}
                    token={user.token}
                    comments={comments}
                />
                :
                <div className=" flex justify-center mt-[5vh] text-[14.5px]">
                    <p>
                        Por favor, <span className="cursor-pointer hover:underline" onClick={() => goToLogin(navigate)}>faça login</span> para visualizar as postagens.
                    </p>
                </div>
            }
        </div>
    )
}