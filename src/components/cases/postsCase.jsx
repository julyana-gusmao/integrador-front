import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import { useNavigate } from 'react-router-dom'
import { goToPost } from '../../router/Coordinators'
import { deletePost } from '../../assets/scripts/Posts/DeletePostRequest'
import { likePost, dislikePost } from '../../assets/scripts/Posts/LikeOrDislikePostRequest'

export const PostsCase = (props) => {

    const navigate = useNavigate()

    return (
        <div className="post-container">

            {props.reversedPosts.map((post, index) => {
                const slicedId = post.id.slice(0, 8)

                return (
                    < div key={index}>
                        <div className="box">
                            <div className="flex justify-between">
                                <span className="text-[#6F6F6F] text-[12px]
                                cursor-pointer hover:underline"
                                    onClick={() => goToPost(navigate, slicedId)}>
                                    Enviado por: {post.creator.username}
                                    {post.updatedAt ? <span className="italic"> (editado)</span> : ""}
                                </span>
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

                            <div className=" mt-[2vh] flex gap-[5vw] lg:gap-[2vw]" >
                                <div className="icons-case lg:gap-[1vw]">
                                    <button>
                                        <LuIcons.LuArrowBigUp
                                            onClick={() => likePost(post.id, props.token)}
                                            className="icon active:text-green-600" />
                                    </button>
                                    <span className="text-[12px]">{post.likes}</span>

                                    <button>
                                        <LuIcons.LuArrowBigDown
                                            onClick={() => dislikePost(post.id, props.token)}
                                            className="icon active:text-red-600" />
                                    </button>
                                    <span className="text-[12px]">{post.dislikes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
