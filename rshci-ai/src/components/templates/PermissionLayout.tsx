'use client';

import { ReactNode, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

import Loading from "./Loading";

interface Props {
    permission:('super' | 'owner' | 'customer')[];
    role : ('admin' | 'member')[];
    children ?: ReactNode;
}

const PermissionLayout = ({ children, permission, role} : Props) => {
    const router = useRouter();
    const pathname = usePathname();
    const { user } = useAuth();

    useEffect (()=> {
        if(user) {
            if(!permission.includes(user.permission)){
                router.push(`/dashboard`);
            }

            if (user.permission == 'customer' && !role.includes(user.user_info?.role.role_id as 'admin' | 'member')) {
                router.push (`/dashboard`);
            }

            if(user.permission == 'owner' && user.user_info.role.role_id == 'admin') {
                router.push ('/admin');
            }

            if(user.permission == 'customer' && user.user_info.role.role_id == 'member') {
                router.push ('/customers');
            }

        }
    },[user]);

    
    return children;
  
};

export default PermissionLayout;