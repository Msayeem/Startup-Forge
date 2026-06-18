import NewOpportunityForm from '@/Components/NewOpportunityForm';
import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderOpportunity = async() => {

const user=await getUserSession();

const startup=await getFounderStartup(user?.id)
console.log(startup)

    return (
        <div>
            <NewOpportunityForm startup={startup}></NewOpportunityForm>
        </div>
    );
};

export default FounderOpportunity;