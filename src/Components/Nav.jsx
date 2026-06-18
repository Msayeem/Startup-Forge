"use client"
import { authClient } from '@/lib/auth-client';
import { Avatar, Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Nav = () => {

const { data: session, isPending } =authClient.useSession();
const user=session?.user;

    return (
        <div className='w-[90%] mx-auto my-2.5'>
            <nav className='flex justify-between items-center'>
                <h1>
                    Startup-Forge
                </h1>

                <div className='flex items-center gap-3'>
                    <Link href={'/'}>Home</Link>
                    {user && <Link href={`/dashboard/${user?.role}`}>Dashboard</Link>}
                    <Link href={'/'}>Startups</Link>
                    <Link href={'/opportunities'}>Oppurtunities</Link>
                     {user && <div className="flex items-center gap-3">  <h1>{user?.name}</h1>
        <Avatar className="rounded-lg">
        <Avatar.Image
          alt="Square Avatar"
          src={user?.image}
        />
        <Avatar.Fallback className="rounded-lg">SQ</Avatar.Fallback>
      </Avatar></div>

}
{
    user ? <Button onClick={async()=>await authClient.signOut()}>Log Out</Button>
    :
    <Link href={'/login'}>Login</Link>
}
                  
                </div>
            </nav>
        </div>
    );
};

export default Nav;