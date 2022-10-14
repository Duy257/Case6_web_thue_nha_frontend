import { GoogleLogin } from 'react-google-login';
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {loginGoogleAction} from "../../redux/actionThunk/userActionThunk";
const clientID = "834466386428-j6ifk7es8vo0k3r86c50ekojr26jd1m1.apps.googleusercontent.com";
const clientSecret = "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";

export default function LoginGoogle(){
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSuccess = (res) => {
        localStorage.setItem("accessToken", res.accessToken);
        // console.log(res.profileObj)
        // console.log(req.body)
        dispatch(loginGoogleAction(res.profileObj))
        navigate("/");
    }
    const handleFailure = (res) => {

    }

    return (
        <div id="signInButton" className="w-full" >
            <GoogleLogin
                clientId= {clientID}
                buttonText="Login with google"
                onSuccess={handleSuccess}
                onFailure={handleFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn = {true}
                // render={renderProps => (
                //     <button style={{paddingLeft: "15px", fontSize: "14px"}} onClick={renderProps.onClick} disabled={renderProps.disabled}>Log out</button>
                // )}
                className="w-full flex items-center justify-center"
            />
        </div>
    )
}