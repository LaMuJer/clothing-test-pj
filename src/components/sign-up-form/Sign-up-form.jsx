import { useContext, useState } from "react";
import "./sign-up-form.scss";
import Button, { Button_Types } from "../button/Button";
import {
  createAuthUserWithEmail_Password,
  createUserDocumentFromAuth,
} from "../../utils/firebase.util";
import FormInput from "../form-input/FormInput";

import { UserContext } from "../../contexts/User.contenxt";

const SignUpForm = () => {
  const defaultFormfields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [formfields, setFormfields] = useState(defaultFormfields);
  const { displayName, email, password, confirmPassword } = formfields;

  const resetFormfields = () => {
    setFormfields(defaultFormfields);
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

    if (password !== confirmPassword) {
      alert("Yours Passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmail_Password(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormfields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Email already exists!");
      } else {
        console.log("Server Error" + error.message);
      }
    }
  };

  return (
    <div className="sign-container">
      <h2>Don't have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label={"Confirm Password"}
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button buttonType={Button_Types.google} type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};

export default SignUpForm;
