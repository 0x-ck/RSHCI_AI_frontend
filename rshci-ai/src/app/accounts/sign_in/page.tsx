'use client';

import dynamic from "next/dynamic";
import Loading from '@/components/templates/Loading';

const SignIn = dynamic(()=>import('@/components/pages/accounts/SignIn/SignIn'),{
    loading:()=> <Loading />
});

const Page = () => {
    return <SignIn />;
}

export default Page;
