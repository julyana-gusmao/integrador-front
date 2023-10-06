import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLogin } from '../router/Coordinators'
import { MobileHeader } from '../components/mobileHeader'
import { SettingsForm } from '../components/forms/settingsForm'

export const Settings = (props) => {

    const navigate = useNavigate()
    const [user, setUser] = props.content

    return (
        < div className="flex flex-col justify-center pb-[4vh]">
            <MobileHeader
                function={goToLogin}
                isLogged={user.isLogged}
                content={props.content}
            />
        <SettingsForm
            content={props.content}
        />

        </div>
    )
}