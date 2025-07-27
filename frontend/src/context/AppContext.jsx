import { createContext } from "react";


export const AppContext = createContext();

const AppContextProvider = (props) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL

    const value = {backendURL}

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider