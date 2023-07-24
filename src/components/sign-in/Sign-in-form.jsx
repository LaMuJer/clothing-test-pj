import { useContext, useEffect, useState } from "react";
import "./sign-in-form.scss";
import Button, { Button_Types } from "../button/Button";
import FormInput from "../form-input/FormInput";
import { getRedirectResult } from "firebase/auth";
import {
  createUserDocumentFromAuth,
  auth,
  signInAuthUserWithEmail_Password,
  signInWithGooglePopup,
} from "../../utils/firebase.util";
import { UserContext } from "../../contexts/User.contenxt";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const defaultFormfields = {
    email: "",
    password: "",
  };

  const [formfields, setFormfields] = useState(defaultFormfields);
  const { email, password } = formfields;

  const resetFormfields = () => {
    setFormfields(defaultFormfields);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getRedirectResult(auth);
      // console.log(response)
    };
    fetchData();
  }, []);

  const handleSignInUserWithPopUp = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormfields({
      ...formfields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmail_Password(email, password);
      // setCurrentUser(user)
      console.log(user);
      resetFormfields();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="sign-container">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <div className="button-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            buttonType={Button_Types.google}
            onClick={handleSignInUserWithPopUp}
          >
            Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
