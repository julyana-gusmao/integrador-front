import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import { DesktopHeader } from '../components/desktop/desktopHeader'
import { MobileHeader } from '../components/mobile/mobileHeader'
import { SettingsForm } from '../components/forms/settingsForm'

export const Settings = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content

    return (
        <>
            <DesktopHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content} />
            <MobileHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />

            < div className="container md:min-h-[94vh]">
                <SettingsForm
                    content={props.content}
                    password={props.password}
                />
            </div>
        </>
    )
}