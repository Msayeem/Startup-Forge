import Sidebar from '@/Components/Sidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen'>
            <Sidebar></Sidebar>
            <div className='flex-1'>{children}</div>
        </div>
    );
};

export default DashboardLayout;