import { createContext, useEffect, useReducer, useState } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangeListener,
  signOutUser,
} from "../utils/firebase.util";
import { createAction } from "../utils/reducer/reducer.utils";

// context part
// export const UserContext = createContext({
//   currentUser: null,
//   setCurrentUser: () => null,
// });

// export const UserProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const value = { currentUser, setCurrentUser };

//   // signOutUser()

//   useEffect(() => {
//     const unsubscribe = onAuthStateChangeListener((user) => {
//       if (user) {
//         createUserDocumentFromAuth(user);
//       }
//       setCurrentUser(user);
//     });
//     return unsubscribe;
//   }, []);

//   return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
// };

// reducer part
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const USER_ACTION_TYPE = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPE.SET_CURRENT_USER:
      return {
        currentUser: payload,
      };

    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);

  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  // signOutUser()

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
