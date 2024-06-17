'use client';

import { ReactNode, memo, useEffect } from "react";

interface Props {
    children:ReactNode;
};


const DefaultLayout = ({children}:Props)=>{
 return (
    <body className="full">
        
    </body>
 )
}   

export default memo(DefaultLayout); 