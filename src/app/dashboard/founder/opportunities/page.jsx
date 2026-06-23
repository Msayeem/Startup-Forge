import NewOpportunityForm from '@/Components/NewOpportunityForm';
import { getFounderOpportunities, getFounderStartup, getPlanById } from '@/lib/api-server';
import { getUserSession } from '@/lib/session';
import { ArrowUpRight, Award, Briefcase, Building2, HelpCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const FounderOpportunity = async() => {
    const user = await getUserSession();
    const opportunities = await getFounderOpportunities(user.id);
    
    let startup = null;
    try { 
        startup = await getFounderStartup(user?.id);
    } catch (error) {
        console.error("Failed to fetch startup data safely:", error);
    }

    const plan = await getPlanById(user?.plan);
    
    const usedCount = opportunities.length;
    const maxCount = plan.maxOpportunitiesPerMonth;
    const usagePercentage = Math.min((usedCount / maxCount) * 100, 100);
    const hasRemainingSlots = usedCount < maxCount;

    return (
        <div className="w-full max-w-4xl mx-auto space-y-6 md:space-y-8 antialiased text-white p-3 sm:p-4">
            
            {/* Liquid Glass Metric Usage Panel */}
            <div className="relative w-full rounded-2xl md:rounded-[28px] bg-white/[0.03] backdrop-blur-3xl border border-white/[0.08] p-5 sm:p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.12)] overflow-hidden">
                {/* Mirror Accent Glow Line */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none" />
                
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div className="space-y-3 flex-1 w-full">
                        {/* Dynamic Tier Badge */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 shadow-sm">
                            <Award className="size-3.5 text-indigo-400" />
                            {plan.name || "Founder Tier"} Account
                        </div>
                        
                        <h2 className="text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight leading-snug">
                            Monthly Opportunity Dispatch Quota
                        </h2>
                        
                        <p className="text-xs sm:text-sm text-slate-400 max-w-xl leading-relaxed">
                            You have deployed <span className="font-extrabold text-white">{usedCount}</span> out of your allocated <span className="font-extrabold text-white">{maxCount}</span> postings allowed this billing cycle.
                        </p>
                        
                        {/* Interactive Dynamic Meter Track */}
                        <div className="pt-2 w-full max-w-md">
                            <div className="w-full h-2 bg-white/[0.06] rounded-full overflow-hidden border border-white/[0.04] p-[1px]">
                                <div 
                                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-400 shadow-[0_0_12px_rgba(99,102,241,0.4)] transition-all duration-500"
                                    style={{ width: `${usagePercentage}%` }}
                                />
                            </div>
                            <div className="flex justify-between items-center text-[9px] sm:text-[11px] font-bold tracking-wide text-slate-500 mt-2 px-0.5">
                                <span>{Math.round(usagePercentage)}% CONSUMED</span>
                                <span>{maxCount - usedCount} SLOTS LEFT</span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Upgrade Route Trigger CTA Button (Full width on mobile) */}
                    <Link 
                        href={'/dashboard/founder/plans'}
                        className="w-full lg:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 sm:py-3 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-xs font-black shadow-[0_4px_20px_rgba(255,255,255,0.1)] active:scale-[0.98] transition-all duration-200 uppercase tracking-wider shrink-0"
                    >
                        <Sparkles className="size-3.5 text-indigo-600 stroke-[2.5]" />
                        View Premium Plans
                        <ArrowUpRight className="size-3.5 text-slate-600" />
                    </Link>
                </div>
            </div>

            {/* Content Logic Layer Container Segment */}
            <div className="relative w-full">
                {hasRemainingSlots ? (
                    <div className="w-full">
                        {startup ? (
                            <div className="space-y-4 w-full">
                                <div className="flex items-center gap-2 px-1 text-[11px] sm:text-xs font-bold uppercase tracking-widest text-slate-400">
                                    <Briefcase className="size-3.5 sm:size-4 text-indigo-400" />
                                    Draft New Venture Requirements
                                </div>
                                <div className="w-full overflow-hidden rounded-2xl">
                                    <NewOpportunityForm startup={startup} />
                                </div>
                            </div>
                        ) : (
                            /* No Startup Configured Anchor Card Fallback */
                            <div className="text-center p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[24px] bg-white/[0.01] border border-white/[0.06] border-dashed space-y-4">
                                <div className="mx-auto w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                                    <Building2 className="size-5" />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Venture Pipeline Unlinked</h3>
                                    <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed px-2">
                                        You must register a startup entity node with the forge before you can query open roles or post operational opportunities.
                                    </p>
                                </div>
                                <div className="pt-1">
                                    <Link 
                                        href="/dashboard/founder/startup" 
                                        className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-bold text-indigo-400 hover:text-indigo-300 bg-indigo-500/5 hover:bg-indigo-500/10 border border-indigo-500/15 rounded-xl px-5 py-2.5 sm:py-2 transition-all"
                                    >
                                        Create Startup Profile
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    /* Plan Maxed Out Allocation Limit State Lock Card */
                    <div className="text-center p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-[24px] bg-white/[0.02] border border-red-500/10 shadow-sm overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-b from-red-500/[0.02] via-transparent to-transparent pointer-events-none" />
                        <div className="mx-auto w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 mb-4 shadow-inner">
                            <HelpCircle className="size-5" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">Monthly Post Quota Reached</h3>
                        <p className="text-xs text-slate-400 max-w-sm mx-auto mt-1 leading-relaxed px-2">
                            Your billing profile has exhausted its allowed operational slot allocations for this calendar window. Upgrade or renew your subscription sequence to continue sourcing team collaborators.
                        </p>
                        <div className="mt-5">
                            <Link 
                                href={'/dashboard/founder/plans'}
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-1 text-xs font-bold text-white bg-white/[0.05] border border-white/[0.08] hover:bg-white/[0.08] px-5 py-2.5 sm:py-2 rounded-xl transition-all"
                            >
                                Upgrade Account Clearances
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default FounderOpportunity;