import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.style.jsx";

// Three types of buttons
export const Button_Types = {
  base: "base",
  google: "google-sign-in",
  inverted: "inverted",
};

const getButton = (buttonType = Button_Types.base) =>
  ({
    [Button_Types.base]: BaseButton,
    [Button_Types.google]: GoogleSignInButton,
    [Button_Types.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherprops }) => {
  const CustomButton = getButton(buttonType);

  return <CustomButton {...otherprops}>{children}</CustomButton>;
};

export default Button;
