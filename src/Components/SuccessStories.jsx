import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SuccessStories() {
    const stories = [
        {
            name: "Robert",
            role: "Full-Stack Developer",
            startup: "FINFLOW",
            avatar: "/avatars/sayem.png", // Replace with actual avatar paths when available
            quote: "I joined the forge with nothing but a raw markdown file for a fintech idea. Within 48 hours, I matched with an infrastructure engineer who helped me build and ship our core transaction engine. It skipped all the traditional hiring friction.",
            achievement: "Assembled Founding Team"
        },
        {
            name: "Arif Karim",
            role: "UI/UX Designer",
            startup: "FINTECH",
            avatar: "/avatars/arif.png",
            quote: "As a designer, it's incredibly hard to find developers who care about micro-interactions and clean layouts. StartupForge connected me with two Next.js experts who turned my Figma prototypes into a live product in weeks.",
            achievement: "Found Core Contributors"
        }
    ];

    return (
        <section className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 my-32 antialiased overflow-hidden">
            {/* Background Ambient Flare */}
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] bg-emerald-500/[0.015] blur-[100px] pointer-events-none rounded-full" />

            {/* Header Text Block */}
            <div className="text-center space-y-3 mb-16">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    <Sparkles className="size-3 text-emerald-400" />
                    Member Testimonials
                </div>
                <h2 className="text-3xl font-black tracking-tight text-white">
                    Forged into <span className="bg-gradient-to-r from-emerald-400 via-teal-200 to-slate-200 bg-clip-text text-transparent">Reality</span>
                </h2>
                <p className="text-xs text-slate-400 max-w-md mx-auto">
                    Hear from the developers, designers, and builders who found their squad and launched real products through our dashboard.
                </p>
            </div>

            {/* List Matrix Row Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10 w-full max-w-full">
                {stories.map((story, idx) => (
                    <div 
                        key={idx}
                        className="flex flex-col justify-between p-6 rounded-2xl bg-[#0e1017] border border-zinc-800/80 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-zinc-700/60 transition-all duration-300 w-full box-border relative group"
                    >
                        {/* Quote Decorative Icon Accent */}
                        <Quote className="absolute right-6 top-6 size-16 text-zinc-900/40 pointer-events-none group-hover:text-indigo-950/20 transition-colors duration-300" />

                        <div className="relative z-10">
                            {/* Card Header Structure */}
                            <div className="flex items-center justify-between gap-4 pb-4 mb-5 border-b border-zinc-800/60">
                                <div className="flex items-center gap-3">
                                    {/* User Avatar Frame */}
                                    <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center overflow-hidden shrink-0 relative">
                                        {/* Default elegant visual circle asset while awaiting dynamic files */}
                                        <div className="w-full h-full bg-gradient-to-tr from-zinc-800 to-zinc-700 flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">
                                            {story.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold text-white tracking-tight">{story.name}</h3>
                                        <span className="text-[10px] font-medium text-slate-400">{story.role}</span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[8px] font-extrabold tracking-wide uppercase bg-emerald-950/40 text-emerald-400 border border-emerald-800/40 shrink-0">
                                    <CheckCircle2 className="size-2.5" />
                                    {story.achievement}
                                </div>
                            </div>

                            {/* Quote Content Block */}
                            <p className="text-xs text-slate-300 leading-relaxed font-normal mb-6 pr-4">
                                "{story.quote}"
                            </p>
                        </div>

                        {/* Card Footer Placement Context */}
                        <div className="pt-4 border-t border-zinc-800/40 flex items-center gap-2 relative z-10">
                            <span className="text-[8px] font-bold uppercase tracking-wider text-zinc-500">Launched Team:</span>
                            <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/5 border border-indigo-500/10 px-2 py-0.5 rounded">
                                {story.startup}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}