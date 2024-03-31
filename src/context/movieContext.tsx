"use client"

import { ReactNode, createContext, useState } from "react";

type ContextType ={
    apiUrl: string,
    setMovie: (n: string) => void;
}

export const MovieContext = createContext<ContextType | null>(null);

export const MovieProvider = ({children}: { children: ReactNode }) =>{
    const [apiUrl, setMovie] = useState('movie/now_playing');

    return(
        <MovieContext.Provider value={{apiUrl, setMovie}}>{children}</MovieContext.Provider>
    )
}