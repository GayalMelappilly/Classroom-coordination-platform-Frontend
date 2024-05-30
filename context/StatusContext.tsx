import { createContext, useState, Dispatch, SetStateAction } from "react";

type StatusContextType = {
    status: boolean;
    setStatus: Dispatch<SetStateAction<boolean>>;
};

export const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusContextProvider = ({children}: { children: React.ReactNode }) => {

    const [status, setStatus] = useState(true);
    
    return (
        <StatusContext.Provider value={{status, setStatus}}>
            {children}
        </StatusContext.Provider>
    );
};
