import { CircleDollar } from '@gravity-ui/icons';
// Added Link to HeroUI imports
import { Card, Link } from '@heroui/react';
// Renamed the Lucide 'Link' to 'LinkIcon' to avoid conflicts
import { ArrowRight, Briefcase, Link as LinkIcon, MapPin } from 'lucide-react';
import React from 'react';

const BrowseOpportunities = ({opportunities}) => {

console.log(opportunities)

    return (
        <div>
            <Card className="p-6 w-full max-w-[440px] border border-default-200/60 dark:border-default-100 bg-background text-foreground rounded-[32px] shadow-2xl transition-all duration-200">
      
      {/* Card Header: Company Info & Job Title */}
      <Card.Header className="flex flex-col items-start gap-4 p-0 pb-3">
        <div className="flex items-center gap-3">
          {opportunities.companyLogo && (
            <img
              src={opportunities.companyLogo}
              alt={`${opportunities.OpportunityName || "Company"} logo`}
              className="w-8 h-8 object-contain rounded-md border border-default-200/50 p-0.5 bg-white dark:bg-transparent"
            />
          )}
          <span className="text-lg font-medium text-default-500 dark:text-zinc-300">
            {opportunities.opportunityName || "Confidential"}
          </span>
        </div>
        
        <Card.Title className="text-3xl font-semibold tracking-tight text-foreground leading-tight">
          {opportunities.roleTitle}
        </Card.Title>
        
        {opportunities.responsibilities && (
          <Card.Description className="text-base text-default-600 dark:text-zinc-400 line-clamp-2">
            {opportunities.responsibilities}
          </Card.Description>
        )}
      </Card.Header>

      {/* Card Content: Badges/Tags & Technical Details */}
      <Card.Content className="flex flex-col gap-5 p-0 py-4">
        {/* Badge Grid matching your reference layout */}
        <div className="flex flex-wrap gap-2">
          {/* Location Tag */}
          {/* {job.location && (
            <div className="flex items-center gap-2 bg-default-100 dark:bg-zinc-800/60 px-4 py-2 rounded-full border border-default-200 dark:border-zinc-800">
              <MapPin className="text-purple-500 dark:text-purple-400 w-4 h-4" />
              <span className="text-sm font-medium text-default-700 dark:text-zinc-200">
                {job.location} {job.isRemote && "(Remote)"}
              </span>
            </div>
          )} */}

          {/* Job Type Tag */}
          {opportunities.workType && (
            <div className="flex items-center gap-2 bg-default-100 dark:bg-zinc-800/60 px-4 py-2 rounded-full border border-default-200 dark:border-zinc-800">
              <Briefcase className="text-purple-500 dark:text-purple-400 w-4 h-4" />
              <span className="text-sm font-medium text-default-700 dark:text-zinc-200 capitalize">
                {opportunities.workType}
              </span>
            </div>
          )}

       
        </div>

        {/* Supplemental info strings */}
        {(opportunities.requirements) && (
          <div className="text-xs text-default-400 dark:text-zinc-500 space-y-1 border-t border-default-200 dark:border-zinc-800/60 pt-3">
            {opportunities.requirements && (
              <p><strong className="text-default-700 dark:text-zinc-400">Requirements:</strong> {opportunities.requirements}</p>
            )}
           
          </div>
        )}
      </Card.Content>

      {/* Card Footer: Action Button */}
      <Card.Footer className="p-0 pt-4">
        <Link
        
          href={`/opportunities/${opportunities._id}`}
          className="group flex justify-start items-center gap-2 bg-transparent hover:bg-default-100 dark:hover:bg-zinc-800/40 p-2 -ml-2 rounded-lg text-base font-medium text-foreground transition-all duration-200"
          color="foreground"
          disableRipple
        >
          Apply Now
          <ArrowRight className="group-hover:translate-x-1 text-default-400 dark:text-zinc-400 group-hover:text-foreground w-4 h-4 transition-transform duration-200 mt-1" />
        </Link>
      </Card.Footer>

    </Card>
        </div>
    );
};

export default BrowseOpportunities;