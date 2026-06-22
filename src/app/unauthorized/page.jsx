
import React from 'react';
import Link from 'next/link';


export default function UnauthorizedPage() {


    return (
        <div className="relative min-h-screen w-full bg-[#05060b] text-white flex items-center justify-center p-6 overflow-hidden antialiased">
            
            {/* Highly Visible Amplified Liquid Glow Backdrops */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[130px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-[110px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50" />

            {/* Main Premium Fluid-Glass Card */}
            <div className="relative z-10 w-full max-w-lg rounded-[32px] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.1] p-8 md:p-12 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden">
                
                {/* Specular Edge Highlighting */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-[32px]" />

                {/* Decorative Elite Warning Shield Shield */}
                <div className="relative mx-auto w-16 h-16 rounded-2xl p-[1px] bg-gradient-to-b from-red-400/40 to-red-500/10 shadow-lg overflow-hidden flex items-center justify-center mb-8">
                    <div className="w-full h-full rounded-[15px] bg-[#0d0e16] flex items-center justify-center text-red-400">
                        <svg className="w-7 h-7 filter drop-shadow-[0_2px_8px_rgba(239,68,68,0.4)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m0-6V9m0-6H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2h-6z" />
                        </svg>
                    </div>
                </div>

                {/* Micro Meta-Header */}
                <div className="space-y-3 mb-8">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.2em] uppercase bg-red-500/10 text-red-400 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.1)]">
                        Error 403: Restricted Access
                    </span>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                        Access Denied
                    </h1>
                 
                <p className="text-sm text-slate-400  max-w-sm mx-auto">
                        Your account does not possess the elevated security clearances required to view the workspace.
                    </p>
                    
                    {/* Displaying path context beautifully */}
                    </div>

                {/* Divider Line */}
                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent my-6" />

                {/* Dual Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 items-center justify-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-bold shadow-md transform active:scale-[0.99] transition-all duration-200"
                    >
                        Return Home
                    </Link>
                    
                 
                </div>
                
            </div>
        </div>
    );
}