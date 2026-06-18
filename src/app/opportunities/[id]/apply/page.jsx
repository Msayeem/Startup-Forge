import ApplyForm from '@/Components/ApplyForm';
import { getUserSession } from '@/lib/session';
import React from 'react';

const ApplyPage = async({params}) => {

    const user=await getUserSession();

const {id}=await params;
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${id}`)
const opportunity=await res.json();

    return (
        <div>
            <ApplyForm opportunity={opportunity} user={user}></ApplyForm>
        </div>
    );
};

export default ApplyPage;