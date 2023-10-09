import { MobileMenu } from './mobileMenu'
import { useNavigate } from 'react-router-dom'
import { goToForum } from '../../router/Coordinators'
import { logout } from '../../assets/scripts/Functions'
import HeaderLogo from '../../assets/images/headerlogo.png'

export const MobileHeader = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content

    return (
        <header className="bg-[#EDEDED] w-[100vw] h-[7vh] 
        flex justify-between p-4 items-center md:hidden">

            {user.isLogged ? <span className="text-[12px] absolute">Olá, {user.username}</span> : ""}

            < img src={HeaderLogo}
                onClick={() => goToForum(navigate)}
                className="cursor-pointer relative left-[44vw]"
                alt="Labeddit" />

            {
                user.isLogged ?
                    <MobileMenu
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

