import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { deleteComment } from '../../assets/scripts/Comments/DeleteCommentRequest'

export const CommentsCase = (props) => {

    const [user, setUser, posts, setPosts, textArea, setTextArea, comments, setComments] = props.content
    const reversedComments = [...comments].reverse()

    return (
        <div className=" mt-[3vh] ql-editor flex flex-col items-center gap-[1.5vh]">

            {reversedComments.map((comment, index) => {

                return (
                    <div
                        key={index}
                        className="w-[98vw]">
                        {props.postId === comment.postId ?
                            <div
                                key={index}
                                className="box">
                                <div className="flex justify-between">
                                    <span className="text-[#6F6F6F] text-[12px]">
                                        Enviado por: {comment.creator.username}</span>

                                    {user.id === comment.creator.id || user.role === "ADMIN" ?
                                        <GoIcons.GoTrash
                                            onClick={() => deleteComment(comment.id, props.postId, user.token, comments, setComments)}
                                            className="icon text-[14px] relative top-[.2vh]"
                                        />
                                        :
                                        ""
                                    }
                                </div>

                                <p className="mt-[1vh] text-[18px]">{comment.content}</p>

                                <div className=" mt-[2vh] flex gap-[5vw]">
                                    <div className="icons-case">
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
    )
}
