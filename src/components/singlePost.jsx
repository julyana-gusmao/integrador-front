import * as LuIcons from 'react-icons/lu'
import * as GoIcons from 'react-icons/go'
import * as PiIcons from 'react-icons/pi'
import { useNavigate } from "react-router-dom"
import { goToForum } from "../router/Coordinators"

export const SinglePost = (props) => {

    const navigate = useNavigate()

    return (
        <>
        <p className="back-button" onClick={() => goToForum(navigate)}>
                    <GoIcons.GoChevronLeft />Voltar para o fórum
                </p>

                <div className="gap-[1vh] post-box">

                    <div className="flex gap-[35vw]">

                        <p className="text-[#6F6F6F] text-[12px]">Enviado por: {props.pagePost.creator.username}</p>
                        {props.userId === props.pagePost.creator.id || props.role === "ADMIN" ?
                            <div className="flex gap-[3vw] mt-[.1vh]">
                                <PiIcons.PiPencilSimpleLineLight
                                    className="icon text-[15px]"
                                />
                                <GoIcons.GoTrash
                                    className="icon text-[14px]"
                                />
                            </div>
                            :
                            ""
                        }
                    </div>
                    <p className="text-[17px]">{props.pagePost.content}</p>
                    <div className=" mt-[2vh] flex gap-[5vw]">
                        <div className="icons-case">
                            <button>
                                <LuIcons.LuArrowBigUp className="icon" />
                            </button>
                            <span className="text-[12px]">{props.pagePost.likes}</span>

                            <button>
                                <LuIcons.LuArrowBigDown className="icon" />
                            </button>
                            <span className="text-[12px]">{props.pagePost.dislikes}</span>
                        </div>

                        <div className="icons-case">
                            <button className="w-[4vw]">
                                <GoIcons.GoComment className="icon" />
                            </button>
                            <span className="text-[12px]">{props.pagePost.comments}</span>
                        </div>
                    </div>
                </div>
        </>
    )
}