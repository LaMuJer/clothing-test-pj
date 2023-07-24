
import SignUpForm from "../../components/sign-up-form/Sign-up-form";
import SignInForm from "../../components/sign-in/Sign-in-form";

import "./auth.scss"

const Authentication = () => {

    return (
        <div className="authentication-container">

            <SignInForm />

            {/* <button onClick={handleSignInUserWithPopUp}>SignIn with Google Pop Up</button> */}
            {/* <button onClick={signInWithGoogleRedirect}>SignIn with Google Redirect</button> */}

            <SignUpForm />
        </div>
    )
}

export default Authentication
