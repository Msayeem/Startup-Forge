import ManageOpportunity from '@/Components/ManageOpportunity';
import { getFounderOpportunities } from '@/lib/api-server';
import { getUserSession } from '@/lib/session';
import React from 'react';

const ManageOpportunityPage = async() => {

    const user=await getUserSession();

    let opportunities=null;

try{opportunities=await getFounderOpportunities(user.id) }
catch(error){    console.error("Failed to fetch opportunity data safely:", error);
}

    return (
        <div className="px-4 sm:px-6 lg:px-8 py-6 max-w-4xl mx-auto">
           
{!opportunities || opportunities.length === 0 ? (
<div className="flex flex-col items-center justify-center px-6 py-16 text-center">
    <div className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="1.5"
            className="text-zinc-500">
            <rect x="2" y="7" width="20" height="14" rx="2"/>
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
        </svg>
    </div>
    <h2 className="text-lg font-medium text-zinc-100 mb-2">
        No opportunities yet
    </h2>
    <p className="text-sm text-zinc-500 max-w-[280px] leading-relaxed">
        You haven't posted any opportunities. Create one to start finding
        collaborators for your startup.
    </p>
</div>
) : (
    opportunities.map(opportunity => (
        <ManageOpportunity key={opportunity._id} opportunity={opportunity} />
    ))
)}

        </div>
    );
};

export default ManageOpportunityPage;