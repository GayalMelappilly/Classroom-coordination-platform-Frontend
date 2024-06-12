'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import { StatusContext } from '@/context/StatusContext';


const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const statusContext = React.useContext(StatusContext);
    const { status }:any = statusContext
    const router = useRouter();

    React.useEffect(() => {
        if (!status) {
            router.push('/signup');
        }
    }, [status, router]);

    if (!status) {
        return null; // or a loading spinner
    }

    return <>{children}</>;
};

export default ProtectedRoute;
