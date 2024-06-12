import { createContext, useState, Dispatch, SetStateAction } from "react";

interface StatusContextType {
    status: boolean;
    setStatus: (status: boolean) => void;
}

export const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusContextProvider = ({children}: { children: React.ReactNode }) => {

    const [status, setStatus] = useState<boolean>(false);
    
    return (
        <StatusContext.Provider value={{status, setStatus}}>
            {children}
        </StatusContext.Provider>
    );
};
