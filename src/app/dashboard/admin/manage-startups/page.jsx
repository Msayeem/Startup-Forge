import AdminStartup from '@/Components/AdminStartup';
import { getStartups } from '@/lib/api';
import React from 'react';

const ManageStartups = async() => {

const user=await getStartups();

    return (
        <div>
            <AdminStartup user={user}></AdminStartup>
        </div>
    );
};

export default ManageStartups;