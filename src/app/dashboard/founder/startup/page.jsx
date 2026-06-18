import FounderStartup from '@/Components/FounderStartup';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderCompanyPage = async() => {

const user=await getUserSession()

    return (
        <div>
            <FounderStartup user={user}></FounderStartup>
        </div>
    );
};

export default FounderCompanyPage;