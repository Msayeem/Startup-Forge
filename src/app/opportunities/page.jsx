import BrowseOpportunities from '@/Components/BrowseOpportunities';
import { getOpportunities } from '@/lib/api';
import React from 'react';

const OpportunitiesPage = async() => {

const opportunities=await getOpportunities()

    return (
        <div>
            <BrowseOpportunities opportunities={opportunities}></BrowseOpportunities>
        </div>
    );
};

export default OpportunitiesPage;