import * as AiIcons from 'react-icons/ai'
import { useState } from 'react'
import { checkData, edit, onEnter } from '../../assets/scripts/Functions'
import { editUser } from '../../assets/scripts/Users/EditUserRequest'
import { useSignupForm, usePassword } from '../../assets/scripts/Hooks'

export const SettingsForm = (props) => {

    const [user, setUser] = props.content
    const [flow, setFlow] = useState(0)
    const [type, changeType] = usePassword("password")
    const [form, changeForm] = useSignupForm({ username: "", email: "", password: "" })
    const [checkMail, setCheckMail] = useState("")

    return (
        <>
            {flow === 0 ?
                <div className="text-center p-14">
                    <p className="text-[20px]">Para prosseguir, por favor confirme seu email.</p>
                    < form className="font-sans flex flex-col gap-[1vh] mt-[5vh] lg:mt-[2vh] items-center"
                        onKeyPress={(e) => onEnter(e, () => checkData(checkMail, user.email, setFlow))}>
                        <label htmlFor="email">
                            <input
                                className="input"
                                value={checkMail.email}
                                onChange={(e) => setCheckMail(e.target.value)}
                                name="email"
                                type="email"
                                placeholder="Email atual"
                            />
                        </label>

                        <button
                            type="button"
                            onClick={() => checkData(checkMail, user.email, setFlow)}
                            className="button mt-[1.5vh] ml-[1.5vw] lg:ml-[.4vw] text-white bg-gradient-to-r  
                from-[#FF6489] to-[#F9B24E]">
                            Confirmar
                        </button>
                    </form >
                </div>

                :

                <div className="text-center p-14">
                    <p className="text-[20px] lg:w-[20vw] relative lg:left-[4.5vw]">Olá {user.username}, informe apenas os dados que deseja alterar</p>

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

                        <div className=" relative right-[.5vw]">
                            <button
                                type="button"
                                onClick={() => edit(editUser, user.id, user.token, form, setUser)}
                                className="button mt-[1.5vh] ml-[1.5vw] text-white 
                                bg-gradient-to-r from-[#FF6489] to-[#F9B24E]">
                                <p>Alterar dados</p>
                            </button>
                            <button
                                type="button"
                                onClick={() => setFlow(0)}
                                className="button mt-[1.5vh] ml-[1.5vw]
                                border-[1px]  border-[#FE7E02]  text-[#FE7E02]">
                                <p>Voltar</p>
                            </button>
                        </div>
                    </form >
                </div>
            }
        </>
    )
}