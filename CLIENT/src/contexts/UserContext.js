import { createContext, useContext } from "react";
import userTemplate from "../constants/userTemplate";

export const UserContext = createContext({
    user: userTemplate,
    setUserData: () => null
});

