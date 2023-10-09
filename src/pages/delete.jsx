import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import sadAvatar from '../assets/images/sadAvatar.png'
import { FeedbackTextArea } from '../components/textArea'
import { MobileHeader } from '../components/mobile/mobileHeader'
import { DesktopHeader } from '../components/desktop/desktopHeader'
import { deleteUser } from '../assets/scripts/Users/DeleteUserRequest'


export const DeleteAccount = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content

    return (
        < div className="flex flex-col justify-center pb-[4vh] md:pb-0">
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

            <div className="container md:min-h-[95vh]">

                <div className="flex items-center pb-[2vh] gap-[2vw]">
                    <img src={sadAvatar} className="w-[17vw] md:w-[6vw]" alt="Personagem chorando porque você vai deletar a conta" />
                    <div className="leading-8 relative top-[2vh] text-center pb-[1vh]">
                        <p className="md:text-[20px]">Poxa, já está nos deixando? </p>
                        <p className="text-[14px]">Conte para nós o que aconteceu, se quiser.</p>
                    </div>
                </div>
                <FeedbackTextArea
                    email={user.email}
                    function={() => deleteUser(user.id, user.token, setUser, navigate)}
                />
            </div>
        </div>
    )
}