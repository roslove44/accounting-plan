import { createContext, useState} from "react";

export const CurrentPageContext = createContext({
    currentPage : 1,
    setCurrentPage : (e:number) => {e}
});

export function CurrentPageContextProvider({children}:CurrentPageContextProviderPros) {
    const [currentPage, setCurrentPage] = useState(2);

    return <CurrentPageContext.Provider value={{currentPage, setCurrentPage}}>
        {children}
    </CurrentPageContext.Provider>
}

type CurrentPageContextProviderPros = {
    children : React.ReactNode,
}