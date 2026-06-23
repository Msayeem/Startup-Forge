"use client"
import { authClient } from '@/lib/auth-client';
import { Button } from '@heroui/react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { redirect, usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';

const Nav = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;
    const pathname = usePathname();

    const isActive = (path) => pathname === path;

    return (
        <div className='w-full max-w-7xl mx-auto px-4 md:px-6 py-4 sticky top-0 z-50 antialiased'>
            {/* Main Nav Container */}
            <nav className='relative w-full flex justify-between items-center bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] px-5 md:px-6 py-3.5 rounded-2xl md:rounded-full shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] transition-all duration-300 hover:border-white/[0.12]'>
                
                <div className="absolute inset-0 bg-gradient-to-r from-white/[0.03] via-transparent to-white/[0.01] pointer-events-none rounded-2xl md:rounded-full" />

                {/* Logo */}
                <Link href="/" className="relative z-10 flex items-center gap-2 group" onClick={() => setIsOpen(false)}>
                    <div className="w-2.5 h-2.5 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.6)] group-hover:scale-110 transition-transform" />
                    <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:via-white transition-all duration-300">
                        Startup<span className="text-indigo-400 font-medium">Forge</span>
                    </h1>
                </Link>

                {/* Desktop Navigation Links */}
                <div className='relative z-10 hidden md:flex items-center gap-1.5'>
                    <div className="flex items-center gap-1 mr-2 border-r border-white/[0.06] pr-2">
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
                </div>

                {/* User Status / Auth Actions (Desktop + Mobile inline setup) */}
                <div className="relative z-10 flex items-center gap-2">
                    {isPending ? (
                        <div className="w-20 h-8 rounded-full bg-white/[0.06] animate-pulse" />
                    ) : user ? (
                        <div className="flex items-center gap-2 md:gap-3 bg-white/[0.03] border border-white/[0.06] pl-2.5 md:pl-3 pr-1.5 py-1 rounded-full shadow-sm">
                            <span className="text-xs font-bold text-slate-200 max-w-[80px] md:max-w-[100px] truncate hidden sm:inline-block">
                                {user.name}
                            </span>
                        <Link href={'/profile'}>
                          <div className="relative w-7 h-7 rounded-full p-[1px] bg-gradient-to-b from-white/30 to-white/10 shadow-md overflow-hidden shrink-0">
                                <img 
                                    className="w-full h-full rounded-full object-cover"
                                    src={user.image}
                                    alt={user.name}
                                />
                            </div>
                        </Link>
                            <Button 
                                size="sm"
                                variant="light"
                                className="text-xs font-bold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-full px-2.5 md:px-3 h-7 transition-all hidden md:inline-flex"
                                onClick={async () => { await authClient.signOut(); router.refresh(); redirect('/login')}}
                            >
                                Log Out
                            </Button>
                        </div>
                    ) : (
                        <Link href={'/login'} className="hidden md:inline-flex justify-center items-center text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 px-4 py-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.1)] active:scale-[0.98] transition-all duration-200">
                            Login
                        </Link>
                    )}

                    {/* Mobile Menu Action Toggle Button */}
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden flex items-center justify-center p-2 rounded-xl bg-white/[0.03] border border-white/[0.06] text-slate-300 hover:text-white transition-all"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </div>

                {/* Mobile Liquid Glass Dropdown Menu Window Panel */}
                <div className={`absolute top-[calc(100%+0.75rem)] left-0 right-0 z-40 md:hidden flex flex-col gap-1.5 p-4 rounded-2xl bg-[#090a10]/95 border border-white/[0.08] backdrop-blur-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent pointer-events-none rounded-2xl" />
                    
                    <Link 
                        href={'/'} 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all ${isActive('/') ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-300 hover:bg-white/[0.03]'}`}
                    >
                        Home
                    </Link>
                    <Link 
                        href={'/startups'} 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all ${isActive('/startups') ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-300 hover:bg-white/[0.03]'}`}
                    >
                        Startups
                    </Link>
                    <Link 
                        href={'/opportunities'} 
                        onClick={() => setIsOpen(false)}
                        className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all ${isActive('/opportunities') ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-300 hover:bg-white/[0.03]'}`}
                    >
                        Opportunities
                    </Link>
                    {user && (
                        <Link 
                            href={`/dashboard/${user?.role}`} 
                            onClick={() => setIsOpen(false)}
                            className={`text-sm font-semibold px-4 py-3 rounded-xl transition-all ${isActive(`/dashboard/${user?.role}`) ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'text-slate-300 hover:bg-white/[0.03]'}`}
                        >
                            Dashboard
                        </Link>
                    )}

                    {/* Mobile-Only Auth Action Drawer Buttons */}
                    {!isPending && (
                        <div className="mt-2 pt-3 border-t border-white/[0.06] flex flex-col gap-2">
                            {user ? (
                                <button 
                                    className="w-full text-center text-sm font-bold text-rose-400 bg-rose-500/10 hover:bg-rose-500/15 border border-rose-500/20 py-3 rounded-xl transition-all"
                                    onClick={async () => { setIsOpen(false); await authClient.signOut(); router.refresh(); redirect('/login')}}
                                >
                                    Log Out
                                </button>
                            ) : (
                                <Link 
                                    href={'/login'} 
                                    onClick={() => setIsOpen(false)}
                                    className="w-full text-center text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 py-3 rounded-xl transition-all shadow-md"
                                >
                                    Login
                                </Link>
                            )}
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Nav;