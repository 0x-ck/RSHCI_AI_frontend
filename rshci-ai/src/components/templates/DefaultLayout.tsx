'use client';

import { ReactNode, memo, useEffect,Suspense } from "react";
import { usePathname,useSearchParams } from "next/navigation";
import { ThemeProvider } from '@mui/material/styles';
import { AuthProvider,useAuth } from "@/contexts/AuthContext";
import {useAppDispatch, useAppSelector } from '@/store/hooks';
import {Providers} from '@/store/provider';
import {reset} from '@/store/features/utils';


import clsx from 'clsx';
import moment from 'moment';
import 'moment/locale/ja';
moment.locale('ja');

import { AnimatePresence } from 'framer-motion';
import Loading from "./Loading";
import Pending from "./Pending";
import theme from '@/components/templates/themes';

interface Props {
    children:ReactNode;
};

const ComponentWrapper = ({children}:{children:React.ReactNode}) => {

    const dispatch = useAppDispatch();

    const {loading, pending, isAuthenticated } = useAuth();
    const pathname = usePathname()!;
    const params = useSearchParams()!;

    const customization = useAppSelector(state => state.utils);

    useEffect (()=>{
        dispatch(reset());
    },[pathname,params]);

    return (
        <ThemeProvider theme={theme(customization)}>
            <div className={clsx('flex flex-col w-full min-h-screen overflow-x-hidden', {})}>
                {loading ? (<Loading/>):(
                    <>
                        {children}
                        <Pending pending={pending} />
                    </>
            )}
            </div>
        </ThemeProvider>
    )
}

const DefaultLayout = ({children}:Props)=>{
 return (
    <body className="full">
        <AnimatePresence>
            <Providers>
                <AuthProvider>
                    <Suspense fallback= {<Loading />}>
                        <div id="top"></div>
                        <main className="w-full flex-grow tracking-wide font-normal text-[14px]">
                            {children}
                        </main>
                    </Suspense>
                </AuthProvider>
            </Providers>
        </AnimatePresence>
    </body>
 )
}   

export default memo(DefaultLayout); 