import { LoginForm } from '../components/forms/loginForm'
import HomeLogo from '../assets/images/homelogo.png'
import Person from '../assets/images/person.png'
import Loading from '../assets/images/loading.gif'

export const Login = (props) => {

    const [user, setUser, isLoading, setIsLoading] = props.content

    return (
        <div className="lg:flex">

            <div className="lg:bg-mainbg w-[75vw]">
                <img src={Person} alt="Duas pessoas recepcionando o usuário"
                    className="hidden lg:flex w-[7vw] top-[3vh] absolute left-[68.6vw] z-10" />

            </div>
            <div className="form-container">
                {isLoading === true ?

                    <div className="mt-[10vh] flex flex-col font-sans text-[16px] items-center">
                        <img src={HomeLogo} className="lg:w-[10vw]" alt="labeddit" />
                        <span className="lg:text-[18px] lg:relative top-[1vh]">O projeto de rede social da Labenu</span>

                        <div className="w-[75vw] text-[20px] flex-flex-col mt-[8vh] text-center
                            md:w-[20vw]">
                            <p className="font-bold">Aguarde, já estaremos te redirecionando para o fórum ;)</p>
                            <img src={Loading}
                                className="w-[55vw] m-auto mt-[2vh] md:w-[12vw]"
                                alt="Carregando...já estaremos te redirecionando para o fórum!" />
                        </div>
                    </div>
                    :
                    <>
                        <div className="mt-[10vh] flex flex-col font-sans text-[16px] items-center">
                            <img src={HomeLogo} className="lg:w-[10vw]" alt="labeddit" />
                            <span className="lg:text-[18px] lg:relative top-[1vh]">O projeto de rede social da Labenu</span>
                        </div>

                        <LoginForm
                            setUser={setUser}
                            setIsLoading={setIsLoading}
                        />
                    </>
                }
            </div>
        </div>

    )
}