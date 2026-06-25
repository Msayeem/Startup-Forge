import FadeIn from '@/Components/FadeIn';
import Profile from '@/Components/Profile';
import { getUserSession } from '@/lib/session';
import React from 'react';

const ProfilePage = async() => {

const user=await getUserSession();

    return (
     <FadeIn>
           <div>
            <Profile user={user}></Profile>
        </div>
     </FadeIn>
    );
};

export default ProfilePage;