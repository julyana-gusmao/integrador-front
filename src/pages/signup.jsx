import * as IoIcons from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import Loading from '../assets/images/loading.gif'
import Person from '../assets/images/person.png'
import HomeLogo from '../assets/images/homelogo.png'
import HeaderLogo from '../assets/images/headerlogo.png'
import { SignUpForm } from '../components/forms/signupForm'
import { MobileHeader } from '../components/mobile/mobileHeader'


export const Signup = (props) => {

    const [user, setUser, isLoading, setIsLoading] = props.content
    const navigate = useNavigate()

    return (
        <>
            <MobileHeader
                function={goToLogin}
                content={props.content}
            />

            <div className="lg:flex">

                <div className="lg:bg-mainbg w-[75vw]">
                    <div className="md:relative md:mt-0 md:right-[40vw] md:top-[20vh] 
            flex flex-col font-sans text-[16px] mt-[8vh] items-center">
                        <p className=" lg:text-[60px] text-[32px] relative left-[10vw] lg:left-[40vw] font-bold text-center  text-[#373737]">
                            Olá, boas vindas <br/>ao LabEddit ;)</p>
                    </div>
                    <img src={Person} alt="Duas pessoas recepcionando o usuário"
                        className="hidden lg:flex w-[7vw] top-[3vh] absolute left-[68.6vw] z-10" />

                </div>

                <div className="form-container">
                    {isLoading === true ?

                        <div className="mt-[10vh] flex flex-col font-sans text-[16px] items-center">
                            <img src={HomeLogo} className=" hidden lg:flex lg:w-[10vw]" alt="labeddit" />
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
                            <div className="md:mt-0 md:flex md:flex-col md:items-center md:gap-[2vh]">
                                <p className="hidden md:flex items-center justify-center font-bold hover:underline cursor-pointer relative right-[5vw] top-[-5vh]"
                                    onClick={() => goToLogin(navigate)}>
                                    <IoIcons.IoIosArrowBack /> Voltar para o login</p>
                                <img src={HeaderLogo} className="hidden md:block w-[2.5vw] pb-[2vh]" alt="labeddit-logo" />

                                <p className="hidden md:block text-[25px] font-bold">Faça aqui seu cadastro!</p>
                                <SignUpForm
                                    setIsLoading={setIsLoading}
                                    setUser={setUser}
                                />
                            </div>
                        </>
                    }
                </div>
            </div>
        </>
    )
}
