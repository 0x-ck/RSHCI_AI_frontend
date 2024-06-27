import AuthLayout from "@/components/templates/AuthLayout";
import PermissionLayout from "@/components/templates/PermissionLayout";
import MainLayout from "@/components/templates/layout/MainLayout";
import { Children } from "react";


const DashboardPage = () => {
    return (
            // <PermissionLayout permission={['customer', 'owner', 'super']} role={['admin', 'member']}>
                <MainLayout/>
            // </PermissionLayout>
    );
};

export default DashboardPage;