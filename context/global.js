import { createContext, useState } from "react";
import { VIEWS } from "../env";

const defaultState = {
    view: VIEWS.LOADING,
    user: null,
    users: [],
}

export const GlobalContext = createContext({globalState: defaultState});

export default function GlobalContextProvider({ children }) {
    const [globalState, setState] = useState(defaultState)

    function setGlobalState(state) {
        setState(prev => ({ ...prev, ...state }))
    }

    return (
        <GlobalContext.Provider value={{ globalState, setGlobalState }}>
            {children}
        </GlobalContext.Provider>
   )
}