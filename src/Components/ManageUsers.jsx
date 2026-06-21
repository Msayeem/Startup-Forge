"use client"
import { updateUser } from '@/lib/api';
import { CircleArrowDownFill } from '@gravity-ui/icons';
import { Button, Table } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const ManageUsers = ({user}) => {

    const router=useRouter();

   const handleApprove = async (id) => {
     
        const result=await updateUser(id, {status:'active'})
router.refresh()
    };

    const handleReject = async (id) => {
             
        const result=await updateUser(id, {status:'block'})
    router.refresh()
    };


    const getStatusDetails = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return { color: 'text-emerald-500', label: 'Active' };
            case 'block':
                return { color: 'text-rose-500', label: 'Block' };
           
        }
    };

      const getInitials = (name) => {
        return name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'CO';
    };

    return (
      <div className="w-full bg-[#121214] text-neutral-200 p-6 rounded-lg">
            <Table className="bg-transparent border-none">
                <Table.ScrollContainer>
                    <Table.Content aria-label="Company approval management table">
                        <Table.Header>
                            {/* Add the isRowHeader prop to your primary identifying column */}
                            <Table.Column isRowHeader className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                User Name
                            </Table.Column>

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                User Email
                            </Table.Column>

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                User Role
                            </Table.Column>
                           

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                Status
                            </Table.Column>

                    

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800 text-right">
                                Actions
                            </Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {user.map((us) => {
                                const userId = us?._id;
                                const statusInfo = getStatusDetails(us.status);

                                return (
                                    <Table.Row key={userId} className="border-b border-neutral-800/50 hover:bg-neutral-900/30 transition-colors">
                                        {/* Company Avatar & Name */}
                                        <Table.Cell className="py-4 align-middle">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 flex items-center justify-center bg-neutral-800 text-neutral-300 rounded font-semibold text-sm tracking-wider">
                                                    {getInitials(us.name)}
                                                </div>
                                                <span className="font-medium text-neutral-200">{us.name}</span>
                                            </div>
                                        </Table.Cell>

                                        {/* Recruiter Email Placeholder */}
                                        <Table.Cell className="py-4 align-middle text-neutral-400">
                                            {us.email}
                                        </Table.Cell>

                                        {/* Industry Pill */}
                                        <Table.Cell className="py-4 align-middle">
                                            <span className="px-3 py-1 bg-neutral-800/60 text-neutral-400 rounded-full text-xs capitalize">
                                                {us.role}
                                            </span>
                                        </Table.Cell>
                                     
                                        

                                        {/* Status Dot */}
                                        <Table.Cell className="py-4 align-middle">
                                            <div className="flex items-center gap-2">
                                                <CircleArrowDownFill className={`w-2 h-2 ${statusInfo.color}`} />
                                                <span className={`text-sm font-medium ${statusInfo.color}`}>
                                                    {statusInfo.label}
                                                </span>
                                            </div>
                                        </Table.Cell>

                               

                                        {/* Actions Panel */}
                                        <Table.Cell className="py-4 align-middle text-right">
                                            <div className="flex justify-end gap-2">
                                                {us.status?.toLowerCase() !== 'active' && (
                                                    <Button
                                                        size="sm"
                                                        variant="light"
                                                        onClick={() => handleApprove(userId)}
                                                        className="bg-emerald-950/30 hover:bg-emerald-900/50 text-emerald-500 border border-emerald-900/60 rounded px-3 py-1 text-xs font-medium transition-colors"
                                                    >
                                                        Active
                                                    </Button>
                                                )}
                                                {us.status?.toLowerCase() !== 'block' && (
                                                    <Button
                                                        size="sm"
                                                        variant="light"
                                                        onClick={() => handleReject(userId)}
                                                        className="bg-rose-950/20 hover:bg-rose-900/40 text-rose-500 border border-rose-900/40 rounded px-3 py-1 text-xs font-medium transition-colors"
                                                    >
                                                        Block
                                                    </Button>
                                                )}
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            })}
                        </Table.Body>
                    </Table.Content>
                </Table.ScrollContainer>
            </Table>
        </div>
    );
};

export default ManageUsers;