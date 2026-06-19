import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderDashboard = async() => {

const user=await getUserSession();
const startup=await getFounderStartup(user?.id);


    return (
        <div>
            
        </div>
    );
};

export default FounderDashboard;