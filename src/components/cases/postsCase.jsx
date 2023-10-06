import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../router/Coordinators'
import { deletePost } from '../../assets/scripts/Posts/DeletePostRequest'

export const PostsCase = (props) => {

    const navigate = useNavigate()

    return (
        <div className=" mt-[3vh] ql-editor flex flex-col items-center gap-[1.5vh]">

            {props.reversedPosts.map((post, index) => {
                const slicedId = post.id.slice(0, 8)

                return (
                    < div key={index}>
                        <div className="box">
                            <div className="flex justify-between">
                                <span className="text-[#6F6F6F] text-[12px]">
                                    Enviado por: {post.creator.username}</span>

                                {props.userId === post.creator.id || props.role === "ADMIN" ?
                                    <GoIcons.GoTrash
                                        className="icon text-[14px] top-[.2vh]"
                                        onClick={() => deletePost(post.id, props.token, props.posts, props.setPosts)}
                                    />
                                    :
                                    ""
                                }
                            </div>

                            <p
                                onClick={() => goToPost(navigate, slicedId)}
                                className="mt-[1vh] text-[18px] cursor-pointer">
                                {post.content}
                            </p>

                            <div className=" mt-[2vh] flex gap-[5vw]">
                                <div className="icons-case">
                                    <button>
                                        <LuIcons.LuArrowBigUp className="icon" />
                                    </button>
                                    <span className="text-[12px]">{post.likes}</span>

                                    <button>
                                        <LuIcons.LuArrowBigDown className="icon" />
                                    </button>
                                    <span className="text-[12px]">{post.dislikes}</span>
                                </div>

                                <div className="icons-case">
                                    <button className="w-[4vw]">
                                        <GoIcons.GoComment className="icon" />
                                    </button>
                                    <span className="text-[12px]">{post.comments}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}