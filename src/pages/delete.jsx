import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import { posting } from '../assets/scripts/Functions'
import { MobileHeader } from '../components/mobileHeader'
import { PostsCase } from '../components/cases/postsCase'
import { TextArea, ReadOnlyTextArea } from '../components/textArea'
import { createPost } from '../assets/scripts/Posts/CreatePostRequest'


export const DeleteAccount = (props) => {

    const navigate = useNavigate()
    const [user, setUser, posts, setPosts, textArea, setTextArea] = props.content
    const token = user.token


    return (
        < div className="flex flex-col justify-center pb-[4vh]">
            <MobileHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />

            <div className="mt-[5vh] flex flex-col font-sans text-[16px] items-center ">
                <form className="flex flex-col">
                    {user.isLogged ?

                        <TextArea
                            value={textArea.post}
                            state={textArea}
                            setState={setTextArea}
                            function={() => posting(createPost, textArea.post, token, posts, setPosts, setTextArea)} />
                        :
                        <ReadOnlyTextArea />
                    }

                </form>
            </div>

            <div className="ml-[7.5vw] w-[85vw] h-[.2vh] bg-gradient-to-r  
            from-[#FF6489] to-[#F9B24E] mt-[3vh]" />

            {user.isLogged ?

                <PostsCase
                    reversedPosts={props.reversedPosts}
                    posts={posts}
                    setPosts={setPosts}
                    role={user.role}
                    userId={user.id}
                    token={user.token}
                />
                :
                <div className=" flex justify-center mt-[5vh] text-[14.5px]">
                    <p>
                        Por favor, <span className="cursor-pointer hover:underline" onClick={() => goToLogin(navigate)}>faÃ§a login</span> para visualizar as postagens.
                    </p>
                </div>
            }
        </div>
    )
}