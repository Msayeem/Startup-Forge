import { requireRole } from '@/lib/session';
import React from 'react';

const FounderLayout = async({children}) => {
    await requireRole('founder')
    return children
};

export default FounderLayout;