import { CircleDollar } from '@gravity-ui/icons';
// Added Link to HeroUI imports
import { Card, Link } from '@heroui/react';
// Renamed the Lucide 'Link' to 'LinkIcon' to avoid conflicts
import { ArrowRight, Factory, Briefcase, Link as LinkIcon, MapPin } from 'lucide-react';
import React from 'react';

const BrowseOpportunities = ({opportunities}) => {

console.log(opportunities)

    return (
        <div>
          <Card className="group relative w-full max-w-[440px] rounded-[32px] bg-white/[0.05] backdrop-blur-3xl border border-white/[0.12] p-6 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)] transition-all duration-400 hover:bg-white/[0.08] hover:border-white/[0.22] hover:shadow-[0_35px_70px_-10px_rgba(0,0,0,0.8)] overflow-hidden">
  
  {/* Intense Specular Surface Sheen */}
  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent pointer-events-none rounded-[32px]" />

  {/* Card Header: Company Info & Job Title */}
  <Card.Header className="relative flex flex-col items-start gap-4 p-0 pb-4 border-b border-white/[0.08]">
    <div className="flex items-center gap-3">
      {opportunities.companyLogo && (
        <div className="relative w-8 h-8 rounded-lg p-[1px] bg-gradient-to-b from-white/40 to-white/10 shadow-md overflow-hidden shrink-0">
          <img
            src={opportunities.companyLogo}
            alt={`${opportunities.OpportunityName || "Company"} logo`}
            className="w-full h-full object-contain rounded-[7px] p-0.5 bg-white dark:bg-[#0d0e16]"
          />
        </div>
      )}
      <span className="text-sm font-semibold tracking-wide text-indigo-300 drop-shadow-sm uppercase">
        {opportunities.opportunityName || "Confidential"}
      </span>
    </div>
    
    <Card.Title className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight antialiased">
      {opportunities.roleTitle}
    </Card.Title>
    
    {opportunities.responsibilities && (
      <Card.Description className="text-sm text-slate-200 leading-relaxed font-normal antialiased line-clamp-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
        {opportunities.responsibilities}
      </Card.Description>
    )}
  </Card.Header>

  {/* Card Content: Badges/Tags & Technical Details */}
  <Card.Content className="relative flex flex-col gap-5 p-0 py-5">
    {/* High-Visibility Glass Tags */}
    <div className="flex flex-wrap gap-2">
      {opportunities.workType && (
        <div className="flex items-center gap-2 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.08] shadow-sm">
          <Briefcase className="text-indigo-400 w-3.5 h-3.5 filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.3)]" />
          <span className="text-xs font-semibold text-slate-200 capitalize tracking-wide">
            {opportunities.workType}
          </span>
        </div>
      )}
    </div>

    <div className="flex flex-wrap gap-2">
      {opportunities.industry && (
        <div className="flex items-center gap-2 bg-white/[0.04] px-4 py-1.5 rounded-full border border-white/[0.08] shadow-sm">
          <Factory className="text-indigo-400 w-3.5 h-3.5 filter drop-shadow-[0_2px_8px_rgba(99,102,241,0.3)]" />
          <span className="text-xs font-semibold text-slate-200 capitalize tracking-wide">
            {opportunities.industry}
          </span>
        </div>
      )}
    </div>

    {/* Supplemental Requirements Block */}
    {opportunities.requirements && (
      <div className="text-xs text-slate-300 space-y-1.5 border-t border-white/[0.06] pt-4">
        <p className="leading-relaxed antialiased">
          <strong className="text-slate-400 font-bold tracking-wider uppercase text-[10px] block mb-0.5">Requirements:</strong>{' '}
          {opportunities.requirements}
        </p>
      </div>
    )}
  </Card.Content>

  {/* Card Footer: Action Button */}
  <Card.Footer className="relative p-0 pt-2 flex justify-between items-center">
    <Link
      href={`/opportunities/${opportunities._id}`}
      className="group/btn inline-flex justify-center items-center gap-2 bg-white/[0.05] hover:bg-indigo-500 px-5 py-2.5 rounded-2xl text-sm font-bold text-white border border-white/[0.06] hover:border-indigo-400 shadow-md transition-all duration-300 active:scale-[0.98]"
      color="foreground"
      disableRipple
    >
      Apply Now
      <ArrowRight className="group-hover/btn:translate-x-0.5 text-indigo-400 group-hover/btn:text-white w-4 h-4 transition-all duration-200" />
    </Link>
  </Card.Footer>

</Card>
        </div>
    );
};

export default BrowseOpportunities;