import { useContext } from "react"
import { userContext } from "../../Contexts/userContext"
import GoogleLogin from 'react-google-login'


export const GoogleAuth = () => {
    const { user, setUser } = useContext(userContext);

    const handleSucces = (response) => {
        setUser(response.profileObj)
    }
    if (!user) {
        return (
            <GoogleLogin
                clientId="973765427428-5u5i2of66ll96g8i2ddhek8bs99tfc81.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={handleSucces}
                cookiePolicy="single_host_origin"
            />
        )
    }

    return <></>
}
