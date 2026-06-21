import ManageUsers from '@/Components/ManageUsers';
import { getUsers } from '@/lib/api';
import React from 'react';

const ManageUsersPage = async() => {

const users=await getUsers();
const user=users.filter(us=> us.role!=='admin')
console.log(user)
    return (
        <div>
            <ManageUsers user={user}></ManageUsers>
        </div>
    );
};

export default ManageUsersPage;