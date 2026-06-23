
import React from 'react';
import { ArrowRight, Flame, Layers, Users2 } from 'lucide-react';
import Link from 'next/link';

export default function Banner() {
    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 my-8 antialiased">
            
            {/* Hyper-Amplified Liquid Ambient Backdrops */}
            <div className="absolute top-[-20%] left-[10%] w-[500px] h-[400px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute bottom-[-30%] right-[5%] w-[600px] h-[450px] bg-violet-500/10 rounded-full blur-[160px] pointer-events-none mix-blend-screen opacity-70" />

            {/* Core Premium Liquid Glass Canvas */}
            <div className="relative z-10 w-full rounded-[32px] bg-gradient-to-b from-white/[0.04] to-white/[0.01] backdrop-blur-3xl border border-white/[0.08] p-8 md:p-14 shadow-[0_35px_70px_-15px_rgba(0,0,0,0.7),inset_0_1px_2px_rgba(255,255,255,0.15)] overflow-hidden group">
                
                {/* Specular Micro-Prism Reflection Layer */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.02] via-transparent to-white/[0.05] pointer-events-none rounded-[32px]" />
                
                {/* Subtle Grid Substructure Accent */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                    
                    {/* Left Column: Vision & Dynamic Copy */}
                    <div className="lg:col-span-7 space-y-6 text-left">
                        
                        {/* Elite Specular Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                            <Flame className="size-3 text-indigo-400 animate-pulse" />
                            Where Co-Founders Collide
                        </div>

                        {/* Title Framework */}
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white leading-[1.1]">
                            Assemble Your Elite <br />
                            <span className="bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
                                Startup Syndicate
                            </span>
                        </h2>

                        {/* Structural Subtitle */}
                        <p className="text-sm sm:text-base text-slate-400  max-w-xl leading-relaxed">
                            StartupForge bridges the gap between vision and execution. Publish raw concepts, anchor mission-critical collaborator networks, and recruit elite engineers, designers, and growth builders to forge ideas into scalable enterprises.
                        </p>

                        {/* Custom Micro-Action Routes */}
                        <div className="flex flex-wrap items-center gap-4 pt-2">
                            <Link href={'/startups'} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-extrabold shadow-lg active:scale-[0.98] transition-all duration-200 group/btn">
                                Explore Startups
                                <ArrowRight className="size-3.5 group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            
                            <Link href={'/opportunities'} className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.07] text-xs font-bold text-slate-200 border border-white/[0.06] hover:border-white/[0.12] shadow-sm active:scale-[0.98] transition-all duration-200">
                                Explore Opportunities
                            </Link>
                        </div>
                    </div>

                    {/* Right Column: High-End Liquid Metric Metrics Grid */}
                    <div className="lg:col-span-5 grid grid-cols-2 gap-4 w-full">
                        
                        {/* Metric Node 1 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-sm group-hover:border-white/[0.08] transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                                <Layers className="size-4" />
                            </div>
                            <div className="text-2xl font-black text-white tracking-tight">1.2k+</div>
                            <div className="text-[11px] font-medium text-slate-400 tracking-wide mt-0.5">Active Forges</div>
                        </div>

                        {/* Metric Node 2 */}
                        <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-md shadow-sm group-hover:border-white/[0.08] transition-all duration-300">
                            <div className="w-8 h-8 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                                <Users2 className="size-4" />
                            </div>
                            <div className="text-2xl font-black text-white tracking-tight">8.4k+</div>
                            <div className="text-[11px] font-medium text-slate-400 tracking-wide mt-0.5">Vetted Collaborators</div>
                        </div>

                        {/* Large Full-Width Interactive Status Bar */}
                        <div className="col-span-2 p-4 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-transparent border border-indigo-500/10 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                                </span>
                                <span className="text-[11px] font-semibold text-slate-300 tracking-wide">
                                    Syndicate Matching System Engine Active
                                </span>
                            </div>
                            <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                                v2.4
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}