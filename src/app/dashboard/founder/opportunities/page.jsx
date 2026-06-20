import NewOpportunityForm from '@/Components/NewOpportunityForm';
import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderOpportunity = async() => {

const user=await getUserSession();

let startup=null

try{ startup=await getFounderStartup(user?.id)}
catch (error) {
    console.error("Failed to fetch startup data safely:", error);
  }

    return (
        <div>
            {
                startup ?             <NewOpportunityForm startup={startup}></NewOpportunityForm>
:
<h1>Create a startup to post opportunity</h1>
            }
        </div>
    );
};

export default FounderOpportunity;