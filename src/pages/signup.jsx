import { SignUpForm } from '../components/forms/signupForm'
import { MobileHeader } from '../components/mobileHeader'
import { goToLogin } from '../router/Coordinators'
import { goToForum } from '../router/Coordinators'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import loading from '../assets/images/loading.gif'

export const Signup = (props) => {

    const [user, setUser] = props.content
    const [pageFlow, setPageFlow] = useState(0)
    const navigate = useNavigate()
    const timeOut = () => {
        setTimeout(() => {
            goToForum(navigate)
        }, 2500)
    }

    return (
        <>
            <MobileHeader
                function={goToLogin}
                content={props.content}
            />
            {pageFlow === 0 ?

                <>
                    <div className="mt-[8vh] flex flex-col font-sans text-[16px] items-center ">
                        <p className=" w-[75vw] text-[32px] font-bold text-[#373737]">Olá, boas vindas ao LabEddit ;)</p>
                    </div>
                    <SignUpForm
                        setPageFlow={setPageFlow}
                        setUser={setUser} />
                </>
                :

                <>
                    <div className="mt-[7vh] flex flex-col font-sans text-[16px] gap-[5vh] items-center">
                        <p className=" w-[75vw] text-[32px] text-center font-bold text-[#373737]">Cadastro realizado com sucesso!</p>
                        <p>Já estamos te levando pro nosso fórum ;)</p>
                        <img className="w-[70vw]" src={loading} alt="loading" />
                    {timeOut()}
                    </div>
                </>
            }

        </>
    )
}