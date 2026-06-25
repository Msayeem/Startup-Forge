import { getOpportunities } from '@/lib/api-server';
import React from 'react';
import BrowseOpportunities from './BrowseOpportunities';
import Link from 'next/link';
import { Briefcase, ArrowRight } from 'lucide-react';

const FeaturedOpportunities = async () => {
    const opportunitiesList = await getOpportunities() || [];

    return (
        <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 my-28 antialiased">
            
            {/* Section Structural Header */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 relative z-10">
                <div className="space-y-3">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                        <Briefcase className="size-3 text-indigo-400" />
                        Syndicate Openings
                    </div>
                    <h2 className="text-3xl font-black tracking-tight text-white">
                        Mission Critical <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">Opportunities</span>
                    </h2>
                    <p className="text-sm text-slate-400 max-w-xl">
                        Acquire equity or core contributor status in rapidly expanding early-stage networks.
                    </p>
                </div>

                {/* Desktop View All Link */}
                <Link 
                    href="/opportunities" 
                    className="hidden sm:inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 group/all"
                >
                    View All Opportunities
                    <ArrowRight className="size-3.5 group-hover/all:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Opportunities List Container */}
            {opportunitiesList.length === 0 ? (
                <div className="w-full text-center py-12 border border-dashed border-zinc-800 rounded-2xl text-slate-500 text-xs tracking-wider uppercase font-mono">
                    No open protocols found.
                </div>
            ) : (
                <div className="space-y-4 relative z-10 w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {opportunitiesList.slice().reverse().slice(0, 3).map((opp) => (
                        <div 
                            key={opp?._id}
                            className="transition-all duration-300 hover:scale-[1.005]"
                        >
                            <BrowseOpportunities opportunities={opp} />
                        </div>
                    ))}
                </div>
            )}

            {/* Mobile-Only View All Link Button */}
            <div className="mt-8 flex sm:hidden w-full justify-center">
                <Link 
                    href="/opportunities"
                    className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-bold text-slate-300 active:scale-[0.99] transition-all"
                >
                    View All Opportunities
                    <ArrowRight className="size-3.5" />
                </Link>
            </div>
        </div>
    );
};

export default FeaturedOpportunities;