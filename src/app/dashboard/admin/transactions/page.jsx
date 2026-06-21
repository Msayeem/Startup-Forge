
import Transactions from '@/Components/Transactions';
import { getUsers } from '@/lib/api';
import React from 'react';

const TransactionsPage = async() => {


const users=await getUsers();
const user=users.filter(usa=> usa.plan!=="founder_free" && usa.plan !== "collabrator_free")
console.log(user)
    return (
        <div>
            <Transactions user={user}></Transactions>
        </div>
    );
};

export default TransactionsPage;