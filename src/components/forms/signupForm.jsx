import * as AiIcons from 'react-icons/ai'
import { useNavigate } from "react-router-dom"
import { Checkbox, Stack } from '@chakra-ui/react'
import { onEnter } from '../../assets/scripts/Functions'
import { useSignupForm, usePassword } from '../../assets/scripts/Hooks'
import { SignupRequest } from '../../assets/scripts/Users/SignupRequest'

export const SignUpForm = (props) => {

    const [form, changeForm] = useSignupForm({ username: "", email: "", password: "" })
    const [type, changeType] = usePassword()
    const navigate = useNavigate()

    return (
        <form 
            className="font-sans flex flex-col gap-[2vh] mt-[6vh] items-center 
            lg:w-[25vw] lg:gap-[3vh] lg:mt-[3vh] z-10"
            onKeyPress={(e) => onEnter(e, () => SignupRequest(form, props.setUser, props.setIsLoading, navigate))}>

            <label htmlFor="username">
                <input
                    className="input"
                    value={form.username}
                    onChange={changeForm}
                    name="username"
                    type="text"
                    placeholder="Apelido"
                    autoComplete="true"
                />
            </label>

            <label htmlFor="email">
                <input
                    className="input"
                    value={form.email}
                    onChange={changeForm}
                    name="email"
                    type="email"
                    placeholder="E-mail"
                    autoComplete="true"
                />
            </label>

            <label htmlFor="password">
                <input
                    className="input"
                    value={form.password}
                    onChange={changeForm}
                    name="password"
                    type={type}
                    placeholder="Senha"
                    autoComplete="true"
                />

                {type === "password" ?
                    <AiIcons.AiOutlineEye
                        className="password-icon"
                        onClick={() => changeType()} />
                    :
                    <AiIcons.AiOutlineEyeInvisible
                        className="password-icon"
                        onClick={() => changeType()} />
                }
            </label>

            <div className="flex flex-col gap-[2vh] lg:relative lg:gap-[3vh] lg:w-[25vw] bottom-[2vh]">

                <p className="text-[14px] w-[80vw] ml-[6vw] lg:ml-[3vw] lg:w-[20vw]">
                    Ao continuar, você concorda com o nosso
                    <span className='register-docs'> Contrato de usuário</span> e nossa
                    <span className='register-docs'> Política de Privacidade</span>.
                </p>

                <Stack spacing={[1, 3]} direction={['column', 'row']}>
                    <Checkbox colorScheme='blue' className="w-[70vw] relative left-[8vw] lg:left-[3vw] lg:w-[18vw]">
                        <span className="text-[14px] cursor-auto relative left-[2vw] lg:left-[.1vw] lg:text-[15px]">
                            Eu concordo em receber emails sobre coisas legais no Labeddit.
                        </span>
                    </Checkbox>
                </Stack>


                <button
                    type="button"
                    onClick={() => SignupRequest(form, props.setUser, props.setIsLoading, navigate)}
                    className="button mt-[1.5vh] ml-[3.5vw] text-white bg-gradient-to-r  
                    from-[#FF6489] to-[#F9B24E] lg:left-[-.8vw]">
                    Cadastrar
                </button>
            </div>
        </form >
    )
}