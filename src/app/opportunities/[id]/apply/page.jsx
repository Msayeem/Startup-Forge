import ApplyForm from '@/Components/ApplyForm';
import { getUserSession, getUserToken } from '@/lib/session';
import React from 'react';

const ApplyPage = async({params}) => {

    const user=await getUserSession();
 

const {id}=await params;
const token=await getUserToken();
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${id}`,{
           headers: {
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    })
const opportunity=await res.json();

console.log(opportunity)

    return (
        <div>
            <ApplyForm opportunity={opportunity} user={user}></ApplyForm>
        </div>
    );
};

export default ApplyPage;