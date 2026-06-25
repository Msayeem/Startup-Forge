import { getStartups } from '@/lib/api-server';
import React from 'react';
import { Sparkles } from 'lucide-react';
import StartupSlider from './StartupSlider';
import FadeIn from './FadeIn';

const Featured = async () => {
    const startups = await getStartups() || [];

    return (
     <FadeIn>
           <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 my-24 antialiased">
            
            {/* Section Header Architecture */}
            <div className="space-y-3 mb-10 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    <Sparkles className="size-3 text-indigo-400 animate-pulse" />
                    Curated Ecosystem
                </div>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">
                    Featured <span className="bg-gradient-to-r from-white via-slate-200 to-indigo-400 bg-clip-text text-transparent">Startups</span>
                </h2>
                <p className="text-sm text-slate-400 max-w-xl">
                    Explore next-generation platforms engineered by global builders, fully vetted for strategic deployment.
                </p>
            </div>

            {/* Client Component handling the horizontal tracking logic */}
            {startups.length === 0 ? (
                <div className="w-full text-center py-16 border border-dashed border-zinc-800 rounded-2xl text-slate-500 text-xs tracking-wider uppercase font-mono">
                    No active syndicates forged yet.
                </div>
            ) : (
                <StartupSlider startups={startups} />
            )}
        </div>
     </FadeIn>
    );
};

export default Featured;