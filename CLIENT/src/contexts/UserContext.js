import { createContext, useContext } from "react";
import userTemplate from "../constants/userTemplate";

export const UserContext = createContext({
    user: userTemplate,
    setUserData: () => null,
    clearUserData: () => null
});


export function useUserContext() {
    const data = useContext(UserContext);

    return data;
}