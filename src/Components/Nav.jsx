"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Nav = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    console.log(user)
    const pathname = usePathname();

    // Helper to check and inject premium styling to active state links
    const isActive = (path) => pathname === path;

    return (
        // Floating pill structural system layout container
         <div className='w-full max-w-7xl mx-auto px-4 md:px-6 py-4 sticky top-0 z-50 antialiased'>
            <nav className='relative w-full flex justify-between items-center bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] px-6 py-3.5 rounded-2xl md:rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/[0.12]'>
                
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.01] pointer-events-none rounded-2xl md:rounded-full" />

                <Link href="/" className="relative z-10 flex items-center gap-2 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-110 transition-transform" />
                    <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:via-white transition-all duration-300">
                        Startup<span className="text-indigo-400 font-medium">Forge</span>
                    </h1>
                </Link>

                <div className='relative z-10 flex flex-wrap md:flex-nowrap items-center gap-1.5 md:gap-2'>
                    <div className="hidden md:flex items-center gap-1 mr-2 border-r border-white/[0.06] pr-2">
                        <Link href={'/'} className={`text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide transition-all duration-200 ${isActive('/') ? 'bg-white/[0.06] text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}>
                            Home
                        </Link>
                        <Link href={'/startups'} className={`text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide transition-all duration-200 ${isActive('/startups') ? 'bg-white/[0.06] text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}>
                            Startups
                        </Link>
                        <Link href={'/opportunities'} className={`text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide transition-all duration-200 ${isActive('/opportunities') ? 'bg-white/[0.06] text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}>
                            Opportunities
                        </Link>
                        {user && (
                            <Link href={`/dashboard/${user?.role}`} className={`text-xs font-semibold px-3.5 py-1.5 rounded-full tracking-wide transition-all duration-200 ${isActive(`/dashboard/${user?.role}`) ? 'bg-white/[0.06] text-white shadow-sm' : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'}`}>
                                Dashboard
                            </Link>
                        )}
                    </div>

                    {/* ✅ Handle all three states: loading, logged in, logged out */}
                    {isPending ? (
                        <div className="w-20 h-8 rounded-full bg-white/[0.06] animate-pulse" />
                    ) : user ? (
                        <div className="flex items-center gap-3 bg-white/[0.03] border border-white/[0.06] pl-3 pr-1.5 py-1 rounded-full shadow-sm">
                            <span className="text-xs font-bold text-slate-200 max-w-[100px] truncate hidden sm:inline-block">
                                {user.name}
                            </span>
                            <div className="relative w-7 h-7 rounded-full p-[1px] bg-gradient-to-b from-white/30 to-white/10 shadow-md overflow-hidden">
                                <img 
                                    className="w-full h-full rounded-full"
                                    src={user.image}
                                    alt={user.name}
                                    
                                />
                            </div>
                            <Button 
                                size="sm"
                                variant="light"
                                className="text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full px-3 h-7 transition-all"
                                onClick={async () => await authClient.signOut()}
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <Link href={'/login'} className="inline-flex justify-center items-center text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-[0.98] transition-all duration-200">
                            Login
                        </Link>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Nav;