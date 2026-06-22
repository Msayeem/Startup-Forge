import ApplicationTable from '@/Components/ApplicationTable';
import { getApplication } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const CoolabratorApplications = async() => {

const user=await getUserSession();
const application=await getApplication(user?.id);


    return (
        <div>
            <ApplicationTable application={application}></ApplicationTable>
        </div>
    );
};

export default CoolabratorApplications;