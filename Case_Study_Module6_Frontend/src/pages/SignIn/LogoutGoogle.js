import { GoogleLogout } from 'react-google-login';
import {useNavigate} from "react-router-dom";
const clientID = "834466386428-j6ifk7es8vo0k3r86c50ekojr26jd1m1.apps.googleusercontent.com";
const clientSecret = "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";

export default function LogoutGoogle(){
    const navigate = useNavigate()
    const handleLogout = (res) => {
        localStorage.removeItem("currentUser");
        localStorage.removeItem("accessToken");

        navigate("/login");
    }


    return (
        <GoogleLogout
            clientId={clientID}
            render={renderProps => (
                <button style={{paddingLeft: "15px", fontSize: "14px"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
            )}
            buttonText="Logout"
            onLogoutSuccess={handleLogout}
        >
        </GoogleLogout>
    )
}