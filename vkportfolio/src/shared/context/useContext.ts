import { Dispatch, SetStateAction, createContext } from "react";

export const UserContext = createContext<{
    currentPage : string,
    setCurrentPage? : Dispatch<SetStateAction<string>>
}>({
    currentPage : "About me",
})