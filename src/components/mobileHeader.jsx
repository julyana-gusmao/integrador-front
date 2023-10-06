import HeaderLogo from '../assets/images/headerlogo.png'
import * as BiIcons from 'react-icons/bi'
import { MobileMenu } from './mobileMenu'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { logout } from '../assets/scripts/Functions'

export const MobileHeader = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className=
            {user.isLogged ?
                "bg-[#EDEDED] w-[100vw] h-[7vh] flex gap-[31vw]  p-4 items-center"
                :
                "bg-[#EDEDED] w-[100vw] h-[7vh] flex gap -[31vw]  justify-center p-4 items-center"
            }
        >

            {user.isLogged ? <span className="text-[12px]">Olá, {user.username}!</span> : ""}

            < img src={HeaderLogo} alt="Labeddit" />

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

        </div >
    )
}