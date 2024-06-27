'use client';

import dynamic from "next/dynamic";
import Loading from '@/components/templates/Loading';
import SignUp from "@/components/pages/accounts/SignUp/SignUp";

const SignIn = dynamic(()=>import('@/components/pages/accounts/SignUp/SignUp'),{
    loading:()=> <Loading />
});

const Page = () => {
    return <SignUp />;
}

export default Page;
