import BrowseOpportunities from '@/Components/BrowseOpportunities';
import { getOpportunities } from '@/lib/api';
import React from 'react';

const OpportunitiesPage = async() => {

const opportunitiess=await getOpportunities()

    return (
      <div className="relative min-h-screen w-full bg-[#05060b] text-white p-6 md:p-12 overflow-hidden antialiased">
            
            {/* Highly Visible & Dynamic Ambient Background Glows */}
            <div className="absolute top-[-5%] right-[-5%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute top-[35%] right-[20%] w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none mix-blend-screen opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-10">
                
                {/* Header Section with Structural Typography */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
                    <div className="space-y-2">
                        <p className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase drop-shadow-[0_2px_10px_rgba(99,102,241,0.3)]">
                            Available Roles
                        </p>
                        <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                            Explore Opportunities
                        </h1>
                    </div>
                    
                    {/* Counter Micro-badge */}
                    <div className="inline-flex items-center self-start md:self-auto px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08] backdrop-blur-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse" />
                        {opportunitiess.length} Positions Open
                    </div>
                </div>

                {/* Grid Container for Looped Liquid Glass Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start justify-items-center md:justify-items-stretch">
                    {
                        opportunitiess.map(opportunities =>
                            <BrowseOpportunities 
                                key={opportunities._id} 
                                opportunities={opportunities}
                            />
                        )
                    }
                </div>

                {/* Elegant Empty State handling if array is empty */}
                {opportunitiess.length === 0 && (
                    <div className="w-full text-center py-20 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.08] backdrop-blur-xl">
                        <p className="text-sm text-slate-400 font-light">No active opportunities found at this moment.</p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default OpportunitiesPage;