import FounderTable from '@/Components/FounderTable';
import { getFounderApplication } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderApplications = async() => {

const user=await getUserSession();
const applications=await getFounderApplication(user?.id);


    return (
        <div>
            <FounderTable applications={applications}></FounderTable>
        </div>
    );
};

export default FounderApplications;