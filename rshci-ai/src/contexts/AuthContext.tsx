'use client';

import React, { useEffect,useState,useContext} from 'react';
import { getCookie, setCookie, hasCookie, deleteCookie } from 'cookies-next';
import { IUser } from '@/interfaces';


import toast, {Toaster} from 'react-hot-toast';

type AuthContextProps = {
    isAuthenticated:boolean;
    loading:boolean;
    pending:boolean;
    user:IUser|null;
    setLoading:(loading:boolean) => void;
    setPending:(pending:boolean) => void;
    login:(crediential:any,callback:(user:IUser|null) => void) => void;
    logout:() => void;
    refresh:()=> void;
};

const AuthContext = React.createContext<Partial<AuthContextProps>>({});

interface AuthProviderProps {
    children:React.ReactNode;
};

const COOKIE_NAME = process.env.NEXT_PUBLIC_COOKIE_NAME!;

export const AuthProvider = ( {children}:AuthProviderProps) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState(true);

    const login = () => {

    };

    const logout = () => {

    };

    const refresh = () => {

    };

    return (
        <AuthContext.Provider value={{
            isAuthenticated:!!user,
            user,
            loading,
            pending,
            login:login,
            logout:logout,
            refresh:refresh,
            setLoading,
            setPending
        }}>
            {children}
            <Toaster/>
        </AuthContext.Provider>
    )
};


export const useAuth = () => useContext(AuthContext);