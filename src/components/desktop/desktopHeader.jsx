import { DesktopMenu } from './desktopMenu'
import { useNavigate } from 'react-router-dom'
import { goToForum } from '../../router/Coordinators'
import { logout } from '../../assets/scripts/Functions'
import DesktopLogo from '../../assets/images/desktoplogo.png'

export const DesktopHeader = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content


    return (
        <header className="bg-gray-300 w-[100vw] h-[5vh] 
            justify-between p-4 items-center hidden md:flex lg:flex">


            < img src={DesktopLogo}
                onClick={() => goToForum(navigate)}
                className="cursor-pointer relative lg:w-[10vw] md:w-[15vw] p-5 left-[4vw]"
                alt="Labeddit" />

            {
                user.isLogged ?
                    <DesktopMenu
                        username={user.username}
                        logout={() => logout(user, setUser, navigate)}
                    />
                    :
                    <span
                        onClick={() => setTimeout(() => {
                            props.function(navigate)
                        }, 1000)}
                        className="header-text">
                        Entrar
                    </span>
            }

        </header >
    )
}

