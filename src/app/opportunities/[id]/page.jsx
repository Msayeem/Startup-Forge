import { CircleDollar } from '@gravity-ui/icons';
import { ArrowUpRight, Briefcase, Calendar, GitCommitHorizontal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const OpportunityDetails = async({params}) => {

    const {id} = await params;
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${id}`);
    const opportunity = await res.json();

    if (!opportunity) {
        return (
            <div className="relative w-full min-h-screen bg-[#05060b] flex flex-col justify-center items-center text-white p-6 overflow-hidden antialiased">
                <div className="absolute w-[300px] h-[300px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.08] p-8 text-center shadow-2xl">
                    <p className="text-slate-400 text-base font-light">Opportunity could not be found or is no longer active.</p>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        if (!dateString) return "N/A";
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="relative min-h-screen w-full bg-[#05060b] text-white overflow-hidden antialiased">
            
            {/* Highly Visible Amplified Liquid Glow Backdrops */}
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[130px] pointer-events-none mix-blend-screen opacity-80" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[110px] pointer-events-none mix-blend-screen opacity-70" />
            <div className="absolute top-[30%] left-[20%] w-[450px] h-[450px] bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen opacity-50" />

            <main className="relative z-10 w-full p-6 md:p-12 lg:p-16 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start">

                    {/* LEFT BLOCK: Corporate Identity, Description & Details (Spans 2 columns) */}
                    <div className="lg:col-span-2 space-y-10">

                        {/* Glass Header Profile Block */}
                        <div className="relative rounded-3xl bg-white/[0.03] backdrop-blur-3xl border border-white/[0.1] p-6 md:p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.12)]">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-3xl" />
                            
                            <div className="relative space-y-6">
                                <div className="flex items-center gap-4">
                                    {/* Glass Logo Border Bezel */}
                                    {opportunity.companyLogo && (
                                        <div className="relative shrink-0 w-16 h-16 rounded-2xl p-[1.5px] bg-gradient-to-b from-white/40 to-white/10 shadow-lg overflow-hidden">
                                            <div className="w-full h-full rounded-[14px] bg-[#0d0e16] flex items-center justify-center p-2.5">
                                                <img
                                                    src={opportunity.companyLogo}
                                                    alt={`${opportunity.opportunityName} Branding`}
                                                    className="w-full h-full object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className="space-y-0.5">
                                        <h2 className="text-lg font-bold tracking-tight text-white drop-shadow-sm">{opportunity.opportunityName}</h2>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[10px] font-bold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                                            {opportunity.roleTitle} Role
                                        </span>
                                    </div>
                                </div>

                                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md">
                                    {opportunity.roleTitle}
                                </h1>
                            </div>
                        </div>

                        {/* Section: Core Technical Requirements */}
                        <section className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                                <h3 className="text-lg font-bold tracking-wider uppercase text-slate-400 text-xs">Requirements</h3>
                            </div>
                            <div className="relative rounded-2xl bg-white/[0.02] backdrop-blur-xl border border-white/[0.06] p-6 shadow-[0_20px_40px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.05)]">
                                <p className="text-slate-200 text-base leading-relaxed font-light antialiased">
                                    {opportunity.requirements || "Standard industry standards apply."}
                                </p>
                            </div>
                        </section>

                    </div>

                    {/* RIGHT BLOCK: Premium Glass Side Widget Panel */}
                    <aside className="relative lg:sticky lg:top-8 rounded-[32px] bg-white/[0.04] backdrop-blur-3xl border border-white/[0.12] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-8 overflow-hidden">
                        
                        {/* Specular gloss sheen surface layer */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] via-transparent to-transparent pointer-events-none rounded-[32px]" />

                        <div className="relative space-y-1">
                            <span className="text-[10px] font-bold text-indigo-400 tracking-[0.2em] uppercase block">Overview</span>
                            <h3 className="text-xl font-extrabold tracking-tight text-white">Job Details</h3>
                        </div>

                        {/* Info Fields Grid Stack */}
                        <div className="relative space-y-5 border-t border-b border-white/[0.06] py-6">
                            
                            {/* Position Type Element */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center p-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300 shadow-sm">
                                    <Briefcase className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Work Type</span>
                                    <span className="text-sm font-semibold text-slate-200 capitalize block">{opportunity.workType}</span>
                                </div>
                            </div>

                            {/* Commitment Level Element */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center p-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-indigo-400 group-hover:text-white group-hover:bg-indigo-500 transition-all duration-300 shadow-sm">
                                    <GitCommitHorizontal className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Commitment Level</span>
                                    <span className="text-sm font-semibold text-slate-200 capitalize block">{opportunity.commitmentLevel}</span>
                                </div>
                            </div>

                            {/* Deadline Element */}
                            <div className="flex items-center gap-4 group">
                                <div className="flex items-center justify-center p-2.5 bg-white/[0.04] border border-white/[0.06] rounded-xl text-amber-400 group-hover:text-white group-hover:bg-amber-500 transition-all duration-300 shadow-sm">
                                    <Calendar className="w-4 h-4" />
                                </div>
                                <div className="space-y-0.5">
                                    <span className="text-[10px] font-bold text-slate-500 tracking-wider uppercase">Application Deadline</span>
                                    <span className="text-sm font-bold text-amber-400 font-mono block">{formatDate(opportunity.deadline)}</span>
                                </div>
                            </div>
                        </div>

                        {/* High-Contrast Interactive CTA Button */}
                        <div className="relative pt-2">
                            <Link
                                href={`/opportunities/${id}/apply`}
                                className="w-full relative px-6 py-4 rounded-xl bg-white text-slate-950 hover:bg-slate-100 text-sm font-bold shadow-[0_4px_25px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 transform active:scale-[0.99] transition-all duration-300"
                            >
                                Apply For This Job
                                <ArrowUpRight className="w-4 h-4 text-slate-950 stroke-[2.5]" />
                            </Link>
                        </div>
                    </aside>

                </div>
            </main>
        </div>
    );
};

export default OpportunityDetails;