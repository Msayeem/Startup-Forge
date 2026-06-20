import ManageOpportunity from '@/Components/ManageOpportunity';
import { getFounderOpportunities } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const ManageOpportunityPage = async() => {

    const user=await getUserSession();

    let opportunities=null;

try{opportunities=await getFounderOpportunities(user.id) }
catch(error){    console.error("Failed to fetch opportunity data safely:", error);
}

    return (
        <div>
           
{
    opportunities ? 
    opportunities.map(opportunity=> <ManageOpportunity key={opportunity._id} opportunity={opportunity}></ManageOpportunity>)
:
<h1>No opportunities</h1>
}

        </div>
    );
};

export default ManageOpportunityPage;