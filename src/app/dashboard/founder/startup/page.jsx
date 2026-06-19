import FounderStartup from '@/Components/FounderStartup';
import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import Image from 'next/image';
import React from 'react';

const FounderCompanyPage = async() => {

const user=await getUserSession();
const startup=await getFounderStartup(user.id);

    return (
        <div>
            {
                !startup && <FounderStartup user={user}></FounderStartup>
            }


<div>
    <Image src={startup?.logo_url} width={200} height={200} alt={startup.startup_name}></Image>
    <h1>Startup Name <br /> {startup.startup_name}</h1>
    <h1>Industry <br />{startup.industry}</h1>
    <h1>Website <br />{startup.website_url}</h1>
    <h1>Funding Stage <br />{startup.funding_stage}</h1>
    <h1>Description <br />{startup.description}</h1>
    <h1>Status <br /> {startup.status}</h1>
</div>

        </div>
    );
};

export default FounderCompanyPage;