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
        <div>
           
{!opportunities || opportunities.length === 0 ? (
    <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        padding: '4rem 2rem', textAlign: 'center'
    }}>
        <div style={{
            width: 72, height: 72, borderRadius: 12,
            background: 'var(--color-background-secondary, #f4f4f5)',
            border: '1px solid var(--color-border, #e4e4e7)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center', marginBottom: '1.5rem'
        }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                style={{ color: '#a1a1aa' }}>
                <rect x="2" y="7" width="20" height="14" rx="2"/>
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
            </svg>
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 500, margin: '0 0 8px' }}>
            No opportunities yet
        </h2>
        <p style={{
            fontSize: 14, color: '#71717a',
            margin: '0 0 1.5rem', maxWidth: 280, lineHeight: 1.6
        }}>
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