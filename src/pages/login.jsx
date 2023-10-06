import { LoginForm } from '../components/forms/loginForm'
import HomeLogo from '../assets/images/homelogo.png'

export const Login = (props) => {

    return (
        <>
            <div className="mt-[10vh] flex flex-col font-sans text-[16px] items-center ">
                <img src={HomeLogo} alt="labeddit" />
                <span>O projeto de rede social da Labenu</span>
            </div>
            <LoginForm
                setUser={props.setUser}
                />
        </>
    )
}