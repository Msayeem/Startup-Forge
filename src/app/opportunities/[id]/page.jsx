import { CircleDollar } from '@gravity-ui/icons';
import { ArrowUpRight, Briefcase, Calendar, GitCommitHorizontal } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const OpportunityDetails = async({params}) => {

const {id}=await params;
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${id}`);
    const opportunity=await res.json();

          if (!opportunity) {
        return (
            <div className="w-full min-h-screen bg-zinc-950 flex flex-col justify-center items-center text-white p-6">
                <p className="text-zinc-400 text-lg">Opportunity could not be found or is no longer active.</p>
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
      <div>
         <main className="w-full min-h-screen bg-zinc-950 text-zinc-100 p-6 md:p-12 lg:p-16">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

                {/* LEFT BLOCK: Corporate Identity, Description & Details (Spans 2 columns) */}
                <div className="lg:col-span-2 space-y-8">

                    {/* Header Group */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            {opportunity.companyLogo && (
                                <img
                                    src={opportunity.companyLogo}
                                    alt={`${opportunity.opportunityName} Branding`}
                                    className="w-14 h-14 object-contain bg-zinc-900 border border-zinc-800 p-2 rounded-xl"
                                />
                            )}
                            <div>
                                <h2 className="text-xl font-medium text-zinc-300">{opportunity.opportunityName}</h2>
                                <p className="text-sm text-zinc-500 capitalize">{opportunity.roleTitle} Role</p>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
                            {opportunity.roleTitle}
                        </h1>
                    </div>

            

                    {/* Section: Core Technical Requirements */}
                    <section className="space-y-3">
                        <h3 className="text-xl font-semibold text-white">Requirements</h3>
                        <div className="bg-zinc-900/40 border border-zinc-800/60 rounded-2xl p-5">
                            <p className="text-zinc-300 text-base leading-relaxed">
                                {opportunity.requirements || "Standard industry standards apply."}
                            </p>
                        </div>
                    </section>

                    {/* Section: Benefits & Perks */}
                    {/* {job.benefits && (
                        <section className="space-y-3">
                            <h3 className="text-xl font-semibold text-white">Benefits & Perks</h3>
                            <p className="text-zinc-300 text-base leading-relaxed">
                                {job.benefits}
                            </p>
                        </section>
                    )} */}
                </div>

                {/* RIGHT BLOCK: Core Structural Metadata Panel Widget */}
                <aside className="bg-zinc-900 border border-zinc-800/80 rounded-[32px] p-6 lg:sticky lg:top-8 space-y-6 shadow-xl">
                    <h3 className="text-lg font-semibold text-white">Job Overview</h3>

                    <div className="space-y-4">
                        {/* Location Element */}
                        

                        {/* Position Type Element */}
                        <div className="flex items-start gap-3">
                            <Briefcase className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Work Type</span>
                                <span className="text-sm font-medium text-zinc-200 capitalize">{opportunity.workType}</span>
                            </div>
                        </div>


                        <div className="flex items-start gap-3">
                            <GitCommitHorizontal className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Commitment Level</span>
                                <span className="text-sm font-medium text-zinc-200 capitalize">{opportunity.commitmentLevel}</span>
                            </div>
                        </div>


                        {/* Deadline Element */}
                        <div className="flex items-start gap-3">
                            <Calendar className="text-purple-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-500 block">Deadline</span>
                                <span className="text-sm font-medium text-zinc-200">{formatDate(opportunity.deadline)}</span>
                            </div>
                        </div>
                    </div>

                    

                    {/* Action Button: Apply Routing Link Container */}
                    <Link
                       
                        href={`/opportunities/${id}/apply`}
                        className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-6 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                        endContent={<ArrowUpRight className="w-4 h-4" />}
                    >
                        Apply For This Job
                    </Link>
                </aside>

            </div>
        </main>
      </div>
    );
};

export default OpportunityDetails;