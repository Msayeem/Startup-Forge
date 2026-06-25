'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Target } from 'lucide-react';

export default function StartupSlider({ startups }) {
    const sliderRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    // Core function handling smooth calculation shifts
    const scroll = (direction) => {
        if (sliderRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
            
            // Calculate item width including its gap spacing
            const cardWidth = 340 + 24; 
            
            let newScrollLeft;
            if (direction === 'right') {
                // If we reach near the end, loop smoothly back to the beginning
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    newScrollLeft = 0;
                } else {
                    newScrollLeft = scrollLeft + cardWidth;
                }
            } else {
                // If we scroll left at the beginning, loop to the very end
                if (scrollLeft <= 0) {
                    newScrollLeft = scrollWidth - clientWidth;
                } else {
                    newScrollLeft = scrollLeft - cardWidth;
                }
            }

            sliderRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth',
            });
        }
    };

    // Automated Self-Scrolling Engine Hooks
    useEffect(() => {
        if (isPaused) return;

        // Automatically transitions tracking space every 3.5 seconds
        const autoScrollTimer = setInterval(() => {
            scroll('right');
        }, 3500);

        return () => clearInterval(autoScrollTimer);
    }, [isPaused]);

    return (
        <div 
            className="relative group/slider w-full"
            // Pauses carousel animation whenever a pointer enters the active matrix container boundary
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            
            {/* Action Navigation Buttons - Top Right */}
            <div className="absolute -top-[76px] right-0 flex items-center gap-2 z-20">
                <button
                    onClick={() => {
                        setIsPaused(true);
                        scroll('left');
                    }}
                    aria-label="Scroll Left"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-800 text-slate-400 hover:text-white hover:border-zinc-700 active:scale-95 transition-all duration-200"
                >
                    <ArrowLeft className="size-4" />
                </button>
                <button
                    onClick={() => {
                        setIsPaused(true);
                        scroll('right');
                    }}
                    aria-label="Scroll Right"
                    className="flex items-center justify-center w-10 h-10 rounded-xl bg-zinc-900/60 border border-zinc-800 text-slate-400 hover:text-white hover:border-zinc-700 active:scale-95 transition-all duration-200"
                >
                    <ArrowRight className="size-4" />
                </button>
            </div>

            {/* Horizontal Continuous Tape Loop Wrapper */}
       <div
  ref={sliderRef}
  className=" flex items-stretch gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth w-full pb-6 select-none"
  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
>
              

                {startups.slice().reverse().slice(0, 4).map((startup) => (
                    <div
                        key={startup?._id}
                        className="w-[280px] sm:w-[340px] md:w-[380px] shrink-0 snap-start relative flex flex-col justify-between rounded-2xl bg-[#0e1017] border border-zinc-800/80 p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7)] transition-all duration-400 hover:border-indigo-500/40 hover:-translate-y-1 hover:shadow-[0_25px_50px_-12px_rgba(99,102,241,0.12)] group"
                    >
                        {/* Radial Hover Backlighting */}
                        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" />

                        <div className="space-y-6 relative z-10">
                            {/* Card Header Content Block */}
                            <div className="flex items-center gap-3.5">
                                <div className="relative shrink-0 w-11 h-11 rounded-xl p-[1px] bg-gradient-to-b from-zinc-700 to-zinc-900 shadow-md overflow-hidden">
                                    <div className="w-full h-full rounded-[10px] bg-[#07080e] flex items-center justify-center p-2">
                                        <Image
                                            src={startup?.logo_url || '/placeholder-logo.png'}
                                            width={44}
                                            height={44}
                                            alt={startup?.startup_name || 'Startup logo'}
                                            className="object-contain w-full h-full filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-0.5">
                                    <h3 className="text-sm font-bold tracking-tight text-white group-hover:text-indigo-300 transition-colors duration-300">
                                        {startup?.startup_name}
                                    </h3>
                                    <span className="inline-flex items-center text-[9px] font-bold text-indigo-400 uppercase tracking-wider">
                                        {startup?.industry}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body Description Context */}
                            <p className="text-xs text-slate-400 leading-relaxed min-h-[4.5rem] line-clamp-3">
                                {startup?.description}
                            </p>
                        </div>

                        {/* Structural Action Footer Section */}
                        <div className="mt-8 pt-4 border-t border-zinc-800/60 flex items-center justify-between gap-4 relative z-10">
                            <div className="space-y-1">
                                <span className="block text-[8px] font-bold text-zinc-500 tracking-widest uppercase">Ecosystem Stage</span>
                                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[9px] font-extrabold tracking-wide uppercase bg-zinc-900 text-zinc-300 border border-zinc-800">
                                    <Target className="size-2.5 text-indigo-400" />
                                    {startup?.funding_stage}
                                </div>
                            </div>

                            {startup?.website_url && (
                                <a
                                    href={startup.website_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-slate-300 hover:text-white transition-colors duration-200 group/link bg-zinc-900 hover:bg-indigo-600 px-3 py-2 rounded-xl border border-zinc-800 hover:border-indigo-500 shadow-sm"
                                >
                                    Launch Protocol
                                    <ArrowUpRight className="w-3 h-3 text-slate-400 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-all duration-200" />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}