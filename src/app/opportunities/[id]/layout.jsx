import { requireRole } from '@/lib/session';
import React from 'react';

const SpecialLayout = async({children}) => {
    await requireRole('collaborator')
    return children
};

export default SpecialLayout;