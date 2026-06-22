import NewOpportunityForm from '@/Components/NewOpportunityForm';
import { getFounderOpportunities, getFounderStartup, getPlanById } from '@/lib/api-server';
import { getUserSession } from '@/lib/session';
import Link from 'next/link';
import React from 'react';

const FounderOpportunity = async() => {

const user=await getUserSession();

const opportunities=await getFounderOpportunities(user.id);

let startup=null

try{ startup=await getFounderStartup(user?.id)}
catch (error) {
    console.error("Failed to fetch startup data safely:", error);
  }

  const plan=await getPlanById(user?.plan)



    return (
        <div>

<h1>You have posted {opportunities.length} out of {plan.maxOpportunitiesPerMonth} opportunities</h1>
<Link href={'/dashboard/founder/plans'}>View Plans</Link>
   {
    opportunities.length < plan.maxOpportunitiesPerMonth &&
         <div>
                {
                startup ?    <NewOpportunityForm startup={startup}></NewOpportunityForm>
:
<h1>Create a startup to post opportunity</h1>
            }
        </div>
   }
        </div>
    );
};

export default FounderOpportunity;