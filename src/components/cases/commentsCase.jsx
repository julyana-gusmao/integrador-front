import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import { deleteComment } from '../../assets/scripts/Comments/DeleteCommentRequest'
import { likeComment } from '../../assets/scripts/Comments/LikeOrDislikeCommenttRequest'
import { dislikeComment } from '../../assets/scripts/Comments/LikeOrDislikeCommenttRequest'

export const CommentsCase = (props) => {

    const [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments] = props.content
    const reversedComments = [...comments].reverse()

    return (
        <>
            <div className="post-container lg:hidden">

                {reversedComments.map((comment, index) => {

                    return (
                        <div
                            key={index}
                            className="w-[85vw]
                        lg:w-[40vw] relative lg:left-[1.5vw]">
                            {props.postId === comment.postId ?
                                <div
                                    key={index}
                                    className="box">
                                    <div className="flex justify-between">
                                        <span className="text-[#6F6F6F] text-[12px]">
                                            Enviado por: {comment.creator.username}
                                            {comment.updatedAt ? <span className="italic"> (editado)</span> : ""}
                                        </span>

                                        {user.id === comment.creator.id || user.role === "ADMIN" ?
                                            <GoIcons.GoTrash
                                                onClick={() => deleteComment(comment.id, user.token, comments, setComments)}
                                                className="icon text-[14px] relative top-[.2vh]"
                                            />
                                            :
                                            ""
                                        }
                                    </div>

                                    <p className="mt-[1vh] text-[18px]">{comment.content}</p>

                                    <div className=" mt-[2vh] flex gap-[5vw]">
                                        <div className="icons-case lg:gap-[1vw]">
                                            <button>
                                                <LuIcons.LuArrowBigUp className="icon"
                                                    onClick={() => likeComment(comment.id, user.token)} />
                                            </button>
                                            <span className="text-[12px]">{comment.likes}</span>

                                            <button>
                                                <LuIcons.LuArrowBigDown className="icon"
                                                    onClick={() => dislikeComment(comment.id, user.token)} />
                                            </button>
                                            <span className="text-[12px]">{comment.dislikes}</span>
                                        </div>

                                    </div>
                                </div>
                                :

                                ""
                            }
                        </div>
                    )
                }
                )}
            </div >

            <div className=" hidden mt-[1vh] items-center gap-[1.5vh] 
                bg-[#EBEBEB] m-auto p-2 lg:flex lg:flex-col w-[37vw] relative left-[.5vw]
                 ">

                {comments.map((comment, index) => {

                    return (
                        <div
                            key={index}
                            className="w-[98vw]
                        lg:w-[40vw] relative lg:left-[1.5vw]">
                            {props.postId === comment.postId ?
                                <div
                                    key={index}
                                    className="box">
                                    <div className="flex justify-between">
                                        <span className="text-[#6F6F6F] text-[12px]">
                                            Enviado por: {comment.creator.username}
                                            {comment.updatedAt ? <span className="italic"> (editado)</span> : ""}
                                        </span>

                                        {user.id === comment.creator.id || user.role === "ADMIN" ?
                                            <GoIcons.GoTrash
                                                onClick={() => deleteComment(comment.id, user.token, comments, setComments)}
                                                className="icon text-[14px] relative top-[.2vh]"
                                            />
                                            :
                                            ""
                                        }
                                    </div>

                                    <p className="mt-[1vh] text-[18px]">{comment.content}</p>

                                    <div className=" mt-[2vh] flex gap-[5vw]">
                                        <div className="icons-case lg:gap-[1vw]">
                                            <button>
                                                <LuIcons.LuArrowBigUp className="icon" />
                                            </button>
                                            <span className="text-[12px]">{comment.likes}</span>

                                            <button>
                                                <LuIcons.LuArrowBigDown className="icon" />
                                            </button>
                                            <span className="text-[12px]">{comment.dislikes}</span>
                                        </div>

                                    </div>
                                </div>
                                :

                                ""
                            }
                        </div>
                    )
                }
                )}
            </div >
        </>
    )

}

