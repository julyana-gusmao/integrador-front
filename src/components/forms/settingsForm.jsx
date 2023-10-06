import * as AiIcons from 'react-icons/ai'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToForum } from '../../router/Coordinators'
import { useSignupForm, usePassword } from '../../assets/scripts/Hooks'

export const SettingsForm = (props) => {

    const [form, changeForm] = useSignupForm({ username: "", email: "", password: "" })
    const [user, setUser] = props.content
    const [type, changeType] = usePassword("password")
    const [checkMail, setCheckMail] = useState("")
    const [flow, setFlow] = useState(0)
    const navigate = useNavigate()

    const sendCheckPassword = () => {
        if (checkMail === user.email) {
            setFlow(1)
        }
    }

    return (
        <>
            {flow === 0 ?
                <div className="text-center p-14">
                    <p className="text-[20px]">Para prosseguir, por favor insira seu email atual.</p>
                    < form className="font-sans flex flex-col gap-[1vh] mt-[5vh] items-center">
                        <label htmlFor="email">
                            <input
                                className="input"
                                value={checkMail}
                                onChange={(e) => setCheckMail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="Email atual"
                            />
                        </label>

                        <button
                            type="button"
                            onClick={() => sendCheckPassword()}
                            className="button mt-[1.5vh] ml-[1.5vw] text-white bg-gradient-to-r  
                from-[#FF6489] to-[#F9B24E]">
                            Confirmar
                        </button>
                    </form >
                </div>

                :

                <div className="text-center p-14">
                    <p className="text-[20px]">Olá {user.username}, informe apenas os dados que deseja alterar</p>

                    < form className="font-sans flex flex-col gap-[1vh] mt-[5vh] items-center">
                        <label htmlFor="username">
                            <input
                                className="input"
                                value={form.username}
                                onChange={changeForm}
                                name="username"
                                type="text"
                                placeholder="Novo apelido"
                            />
                        </label>

                        <label htmlFor="email">
                            <input
                                className="input"
                                value={form.email}
                                onChange={changeForm}
                                name="email"
                                type="email"
                                placeholder="Novo e-mail"
                            />
                        </label>

                        <label htmlFor="password">
                            <input
                                className="input"
                                value={form.password}
                                onChange={changeForm}
                                name="password"
                                type={type}
                                placeholder="Nova senha"
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
                        {form.email !== "" | form.username !== "" | form.password !== "" ?

                            <button
                                type="button"
                                className="button mt-[1.5vh] ml-[1.5vw] text-white 
                                bg-gradient-to-r from-[#FF6489] to-[#F9B24E]">
                                <p>Alterar dados</p>
                            </button>
                            :
                            <button
                                type="button"
                                onClick={() => goToForum(navigate)}
                                className="button mt-[1.5vh] ml-[1.5vw] text-white 
                                bg-gradient-to-r from-[#FF6489] to-[#F9B24E]">
                                <p>Voltar</p>
                            </button>
                        }
                    </form >
                </div>
            }
        </>
    )
}