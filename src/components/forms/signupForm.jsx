import * as AiIcons from 'react-icons/ai'
import { Checkbox, Stack } from '@chakra-ui/react'
import { useSignupForm, usePassword } from '../../assets/scripts/Hooks'
import { SignupRequest } from '../../assets/scripts/Users/SignupRequest'

export const SignUpForm = (props) => {

    const [form, changeForm] = useSignupForm({ username: "", email: "", password: "" })
    const [type, changeType] = usePassword()

    return (
        <form className="font-sans flex flex-col gap-[1vh] mt-[11vh] items-center">
            <label htmlFor="username">
                <input 
                    className="input"
                    value={form.username}
                    onChange={changeForm}
                    name="username"
                    type="text"
                    placeholder="Apelido"
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

            <div className="flex flex-col gap-[2vh]">

                <p className="text-[14px] w-[90vw] ml-[3vw]">
                    Ao continuar, você concorda com o nosso
                    <span className='register-docs'> Contrato de usuário</span> e nossa
                    <span className='register-docs'> Política de Privacidade</span>.
                </p>

                <Stack spacing={[1, 3]} direction={['column', 'row']}>
                    <Checkbox colorScheme='blue' className="w-[70vw] relative left-[8vw]">
                        <span className="text-[14px] cursor-auto relative left-[2vw]">
                            Eu concordo em receber emails sobre coisas legais no Labeddit.
                        </span>
                    </Checkbox>
                </Stack>


                <button 
                    type="button"
                    onClick={() => SignupRequest(form, props.setPageFlow, props.setUser)}
                    className="button mt-[1.5vh] ml-[1.5vw] text-white bg-gradient-to-r  
                    from-[#FF6489] to-[#F9B24E]">
                    Cadastrar
                </button>
            </div>
        </form>
    )
}