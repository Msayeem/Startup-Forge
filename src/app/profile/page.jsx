import Profile from '@/Components/Profile';
import { getUserSession } from '@/lib/session';
import React from 'react';

const ProfilePage = async() => {

const user=await getUserSession();

    return (
        <div>
            <Profile user={user}></Profile>
        </div>
    );
};

export default ProfilePage;