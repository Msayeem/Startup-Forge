import FounderStartup from '@/Components/FounderStartup';
import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderCompanyPage = async() => {

const user=await getUserSession();
const startup=await getFounderStartup(user)

    return (
        <div>
            <FounderStartup user={user}></FounderStartup>
        </div>
    );
};

export default FounderCompanyPage;