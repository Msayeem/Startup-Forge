import BrowseOpportunities from '@/Components/BrowseOpportunities';
import { getOpportunities } from '@/lib/api';
import React from 'react';

const OpportunitiesPage = async() => {

const opportunitiess=await getOpportunities()

    return (
        <div>
            {
                opportunitiess.map(opportunities=>
                                <BrowseOpportunities key={opportunities._id} opportunities={opportunities}></BrowseOpportunities>

                )
            }
        </div>
    );
};

export default OpportunitiesPage;