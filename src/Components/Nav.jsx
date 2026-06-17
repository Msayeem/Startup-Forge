import Link from 'next/link';
import React from 'react';

const Nav = () => {
    return (
        <div className='w-[90%] mx-auto my-2.5'>
            <nav className='flex justify-between items-center'>
                <h1>
                    Startup-Forge
                </h1>

                <div className='flex items-center gap-3'>
                    <Link href={'/'}>Home</Link>
                    <Link href={'/'}>Browse Startups</Link>
                    <Link href={'/'}>Browse Oppurtunities</Link>
                    <Link href={'/login'}>Login</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;