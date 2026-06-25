import { getUserSession } from '@/lib/session';
import { Magnifier } from '@gravity-ui/icons';
import Link from 'next/link';
import React from 'react';
import { Sparkles, Terminal, Layers, ArrowRight } from 'lucide-react';
import FadeIn from '@/Components/FadeIn';

const CollabratorPage = async () => {
    const user = await getUserSession();

    // Splitting the name to greet cleanly by first name if possible
    const firstName = user?.name ? user.name.split(' ')[0] : 'Builder';

    return (
        <FadeIn>
            <main className="min-h-screen w-full bg-[#07080e] text-slate-100 antialiased selection:bg-indigo-500/30">
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20 overflow-hidden w-full">
                
                {/* Background Ambient Network Flares */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/[0.02] blur-[150px] pointer-events-none rounded-full" />
                <div className="absolute bottom-12 left-0 w-[300px] h-[300px] bg-emerald-500/[0.01] blur-[120px] pointer-events-none rounded-full" />

                {/* Top Hub Status Line */}
                <div className="flex items-center gap-3 mb-8 relative z-10">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider uppercase bg-zinc-900 border border-zinc-800 text-zinc-400">
                        <Terminal className="size-3 text-indigo-400" />
                        Status: Active Contributor
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                </div>

                {/* Dashboard Premium Hero Header Section */}
                <div className="space-y-4 mb-12 relative z-10 max-w-2xl">
                    <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
                        Welcome back, <span className="bg-gradient-to-r from-indigo-400 via-slate-200 to-white bg-clip-text text-transparent">{firstName}</span>.
                    </h1>
                    <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-normal">
                        Your workspace is initialized. Discover high-conviction startups looking for core development, UI architectures, or foundational product systems.
                    </p>
                </div>

                {/* Action Launch Grid Matrix */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative z-10 w-full mb-16">
                    
                    {/* Main Target Link Callout: Opportunities */}
                    <Link 
                        href="/opportunities"
                        className="sm:col-span-2 group relative flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0e1017] to-[#0a0b10] border border-zinc-800/80 hover:border-indigo-500/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all duration-300 overflow-hidden"
                    >
                        {/* Interactive Radial Hover Sheet */}
                        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.02] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        
                        <div className="space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-indigo-400 shadow-inner group-hover:text-white group-hover:border-zinc-700 transition-colors">
                                <Magnifier width={16} height={16} />
                            </div>
                            <div className="space-y-1.5">
                                <h2 className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                                    Explore Open Positions
                                </h2>
                                <p className="text-xs text-slate-400 leading-relaxed max-w-md">
                                    Filter through verified ideas, equity partners, and open protocols needing your precise technical execution stack.
                                </p>
                            </div>
                        </div>

                        <div className="mt-8 pt-4 border-t border-zinc-900 flex items-center justify-between text-xs font-bold text-slate-400 group-hover:text-white transition-colors">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-zinc-500">Launch Finder</span>
                            <div className="flex items-center gap-1 bg-zinc-900 border border-zinc-800 group-hover:bg-indigo-600 group-hover:border-indigo-500 p-2 rounded-xl transition-all">
                                <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </div>
                    </Link>

                    {/* Secondary Metrics/Info Block */}
                    <div className="p-6 rounded-2xl bg-[#0e1017] border border-zinc-800/60 flex flex-col justify-between shadow-inner">
                        <div className="space-y-4">
                            <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800/80 flex items-center justify-center text-emerald-400">
                                <Layers className="size-4" />
                            </div>
                            <div>
                                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-widest font-mono">Platform Feed</h3>
                                <div className="text-2xl font-black text-white mt-1">100%</div>
                                <p className="text-[11px] text-slate-500 leading-normal font-medium mt-1">
                                    Match matrix fully loaded based on decentralized early ecosystem activity.
                                </p>
                            </div>
                        </div>
                        
                        <div className="text-[10px] font-bold tracking-wider text-emerald-400/80 uppercase bg-emerald-950/20 border border-emerald-900/30 px-2.5 py-1 rounded-md w-max mt-6">
                            Verified Engine
                        </div>
                    </div>

                </div>

            </div>
        </main>
        </FadeIn>
    );
};

export default CollabratorPage;