import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { EditTextArea } from './textArea'
import { useNavigate } from "react-router-dom"
import { goToForum } from "../router/Coordinators"
import { delPost } from '../assets/scripts/Functions'
import { editingContent } from '../assets/scripts/Functions'
import { editPost } from '../assets/scripts/Posts/EditPostRequest'
import { getPosts } from '../assets/scripts/Posts/GetPostsRequest'
import { deletePost } from '../assets/scripts/Posts/DeletePostRequest'
import { likePost, dislikePost } from '../assets/scripts/Posts/LikeOrDislikePostRequest'

export const SinglePost = (props) => {

    const [editing, setEditing, content, setContent] = editingContent()
    const navigate = useNavigate()

    return (
        <>

            {editing === true ?
                <>
                    <p className="back-button" onClick={() => setEditing(false)}>
                        <GoIcons.GoChevronLeft />Cancelar edição
                    </p>

                    <EditTextArea                      
                        value={content}
                        setValue={setContent}
                        type={"post"}
                        function={() => editPost(props.pagePost.id, content, props.token, setEditing)}
                    />
                </>
                :

                <>
                    <p className="back-button" onClick={() => goToForum(navigate)}>
                        <GoIcons.GoChevronLeft />Voltar para o fórum
                    </p>

                    <div className="gap-[1vh] box">

                        <div className="flex justify-between">

                            <p className="text-[#6F6F6F] text-[12px]">Enviado por: {props.pagePost.creator.username}
                                {props.pagePost.updatedAt ? <span className="italic"> (editado)</span> : ""}
                            </p>
                            {props.userId === props.pagePost.creator.id || props.role === "ADMIN" ?
                                <div className="flex gap-[3vw] mt-[.1vh]">
                                    <PiIcons.PiPencilSimpleLineLight
                                        onClick={() => setEditing(true)}
                                        className="icon text-[15px]"
                                    />
                                    <GoIcons.GoTrash
                                        onClick={() => delPost(deletePost, props.pagePost.id, props.token, props.posts, props.setPosts, navigate)}
                                        className="icon text-[14px]"
                                    />
                                </div>
                                :
                                ""
                            }
                        </div>
                        <p className="text-[17px]">{props.pagePost.content}</p>
                        <div className=" mt-[2vh] flex gap-[5vw]">
                            <div className="icons-case lg:gap-[1vw]">
                                <button>
                                    <LuIcons.LuArrowBigUp
                                        onClick={() => likePost(props.pagePost.id, props.token)}
                                        className="icon active:text-green-600" />
                                </button>
                                <span className="text-[12px]">{props.pagePost.likes}</span>

                                <button>
                                    <LuIcons.LuArrowBigDown
                                        onClick={() => dislikePost(props.pagePost.id, props.token)}
                                        className="icon active:text-red-600" />
                                </button>
                                <span className="text-[12px]">{props.pagePost.dislikes}</span>
                            </div>
                        </div>
                    </div>
                </>
            }

        </>
    )
}