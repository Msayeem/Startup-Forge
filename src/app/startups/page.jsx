
import FadeIn from '@/Components/FadeIn';
import { getStartups } from '@/lib/api-server';
import Image from 'next/image';
import React from 'react';

const StartupsPage = async () => {
    const startups = await getStartups() || [];

    return (
        // Enhanced background depth with a subtle dark noise/mesh-like gradient foundation
      <FadeIn>
          <div className="relative min-h-screen w-full bg-gradient-to-b from-[#0b0d19] via-[#070810] to-[#030408] text-white p-6 md:p-12 overflow-hidden antialiased">
            
            {/* Highly Visible & Amplified Ambient Liquid Glows */}
            <div className="absolute top-[-5%] left-[-5%] w-[600px] h-[600px] bg-indigo-500/25 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute top-[40%] left-[25%] w-[350px] h-[350px] bg-emerald-500/15 rounded-full blur-[90px] pointer-events-none mix-blend-screen opacity-60" />

            <div className="relative z-10 max-w-7xl mx-auto space-y-10">
                
                {/* Header Section */}
                <div className="space-y-2">
                    <p className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase drop-shadow-[0_2px_10px_rgba(99,102,241,0.3)]">Directory</p>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                        Explore Startups
                    </h1>
                </div>

                {/* Grid Container for Looped Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {startups.map((startup) => (
                        <div 
                            key={startup?._id} 
                            // Increased opacity to bg-white/[0.05], increased backdrop-blur-3xl, and sharpened the border alpha
                            className="group relative flex flex-col justify-between rounded-2xl bg-white/[0.05] backdrop-blur-3xl border border-white/[0.12] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-400 hover:bg-white/[0.09] hover:border-white/[0.22] hover:shadow-[0_35px_70px_-10px_rgba(0,0,0,0.8)] hover:-translate-y-1"
                        >
                            {/* Boosted Specular Light Surface Gloss */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-2xl" />

                            <div className="space-y-5">
                                {/* Top Header Section: Logo & Name */}
                                <div className="flex items-center gap-4">
                                    {/* Logo border bezel highlights made much crisper */}
                                    <div className="relative shrink-0 w-14 h-14 rounded-xl p-[1.5px] bg-gradient-to-b from-white/40 to-white/10 shadow-lg overflow-hidden">
                                        <div className="w-full h-full rounded-[10px] bg-[#0d0e16] flex items-center justify-center p-2">
                                            <Image 
                                                src={startup?.logo_url || "/placeholder-logo.png"} 
                                                width={56} 
                                                height={56} 
                                                alt={startup?.startup_name || "Startup logo"} 
                                                className="object-contain w-full h-full filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-0.5">
                                        <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-300 drop-shadow-sm">
                                            {startup?.startup_name}
                                        </h2>
                                        <span className="inline-flex items-center text-[11px] font-semibold text-slate-300 tracking-wide capitalize">
                                            {startup?.industry}
                                        </span>
                                    </div>
                                </div>

                                {/* Main Body Text: Description */}
                                <p className="text-sm text-slate-200 leading-relaxed font-normal antialiased line-clamp-3 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] capitalize">
                                    {startup?.description}
                                </p>
                            </div>

                            {/* Bottom Metadata & Actions Footer */}
                            <div className="mt-6 pt-4 border-t border-white/[0.08] flex items-center justify-between gap-4">
                                <div className="space-y-1">
                                    <span className="block text-[9px] font-bold text-slate-400 tracking-wider uppercase">Stage</span>
                                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-400/30 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
                                        {startup?.funding_stage}
                                    </span>
                                </div>

                                {startup?.website_url && (
                                    <a 
                                        href={startup.website_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-white transition-colors duration-200 group/link bg-white/[0.04] hover:bg-indigo-500 px-3 py-1.5 rounded-xl border border-white/[0.06] hover:border-indigo-400 shadow-sm"
                                    >
                                        Launch Site
                                        <svg className="w-3 h-3 text-indigo-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                )}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
      </FadeIn>
    );
};

export default StartupsPage;