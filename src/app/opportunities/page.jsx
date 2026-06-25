import BrowseOpportunities from '@/Components/BrowseOpportunities';
import FadeIn from '@/Components/FadeIn';
import OpportunitiesClient from '@/Components/OpportunitiesClient';
import { getOpportunities } from '@/lib/api-server';

import React, { Suspense } from 'react';

const OpportunitiesPage = async() => {

const opportunitiess=await getOpportunities()

    return (
   <FadeIn>
       <div className="relative min-h-screen w-full bg-[#05060b] text-white p-6 md:p-12 overflow-hidden antialiased">
            
            {/* Highly Visible & Dynamic Ambient Background Glows */}
            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute top-[35%] right-[20%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none mix-blend-screen opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-10">
                
                {/* Header Section with Structural Typography */}
                <Suspense>
                     <OpportunitiesClient />
                </Suspense>
             

                {/* Grid Container for Looped Liquid Glass Cards */}
              

            </div>

            
        </div>
   </FadeIn>
    );
};

export default OpportunitiesPage;