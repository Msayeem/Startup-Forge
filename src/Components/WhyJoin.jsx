import React from 'react';
import { Target, Users, Flame, Zap } from 'lucide-react';

export default function WhyJoin() {
    const pillars = [
        {
            icon: <Target className="size-5 text-indigo-400" />,
            title: "Validated Paradigms",
            desc: "Skip the noise. Browse through curated startup concepts backed by clear problem statements, target market sizing, and structured execution roadmaps."
        },
        {
            icon: <Users className="size-5 text-emerald-400" />,
            title: "Asymmetric Co-Founders",
            desc: "Founders find elite executioners; engineers discover visionaries. Connect across diverse skill sets to assemble technically balanced founding teams."
        },
        {
            icon: <Flame className="size-5 text-amber-400" />,
            title: "Skin-in-the-Game Culture",
            desc: "Our ecosystem prioritizes high-conviction collaboration. Negotiate transparent equity splits, sweat-equity partnerships, or core contributor milestones."
        },
        {
            icon: <Zap className="size-5 text-purple-400" />,
            title: "Accelerated Incubation",
            desc: "Go from raw text layout to a structured team workspace within days. Forge legal agreements, setup repos, and start building immediately."
        }
    ];

    return (
        <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 my-32 antialiased overflow-hidden">
            {/* Background Radial Ambiance */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[120px] pointer-events-none rounded-full" />

            {/* Master Header Block */}
            <div className="mb-16 border-b border-zinc-800/50 pb-8">
                <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-indigo-400 block mb-3">
                    / VALUE PROPOSITION
                </span>
                <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
                    Why Join <span className="bg-gradient-to-r from-indigo-400 via-slate-200 to-white bg-clip-text text-transparent">StartupForge?</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start relative z-10 w-full">
                
                {/* Left Column: Sticky Context Header */}
                <div className="lg:sticky lg:top-24 space-y-4 w-full">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-zinc-900 text-zinc-400 border border-zinc-800">
                        Ecosystem Architecture
                    </div>
                    <h2 className="text-2xl font-extrabold tracking-tight text-slate-200 leading-tight">
                        Built for the next generation of builders.
                    </h2>
                    <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                        Traditional job boards optimize for employment. StartupForge optimizes for ownership, high equity leverage, and collaborative velocity.
                    </p>
                </div>

                {/* Right Column: Grid Matrix - Explicitly fixed for absolute mobile sizing */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:col-span-2 gap-4 w-full max-w-full">
                    {pillars.map((item, index) => (
                        <div 
                            key={index}
                            className="p-6 rounded-2xl bg-[#0e1017] border border-zinc-800/80 hover:border-zinc-700/60 transition-all duration-300 relative group overflow-hidden w-full box-border"
                        >
                            {/* Subtle Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                            
                            <div className="w-10 h-10 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-center mb-5 shadow-inner">
                                {item.icon}
                            </div>
                            <h3 className="text-sm font-bold text-slate-200 mb-2 tracking-tight group-hover:text-white transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-xs text-slate-400 leading-relaxed font-normal">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}