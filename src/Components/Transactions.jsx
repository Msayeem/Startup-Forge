"use client"

import { CircleArrowDownFill } from '@gravity-ui/icons';
import { Button, Table } from '@heroui/react';

import React from 'react';

const Transactions = ({user}) => {

   const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
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
                                Amount
                            </Table.Column>

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                Date
                            </Table.Column>
                           

                            <Table.Column className="text-neutral-400 font-medium pb-4 border-b border-neutral-800">
                                Payment Status
                            </Table.Column>

                    

                        </Table.Header>
                        <Table.Body>
                            {user.map((us) => {
                                const userId = us?._id;
                                

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
                                        <Table.Cell className="py-4 align-middle font-medium text-neutral-300">
                                            {us.plan=='founder_enterprise' ? '$ 149.99' : '$ 49.99'}
                                        </Table.Cell>

                                        {/* Industry Pill */}
                                      <Table.Cell className="py-4 align-middle text-neutral-400">
                                            {formatDate(us?.createdAt)}
                                        </Table.Cell>
                                     
                                        

                                        {/* Status Dot */}
                                        <Table.Cell className="py-4 align-middle">
                                            <div className="flex items-center gap-2">
                                                
                                                <span className={`text-sm font-medium text-green-500`}>
                                                   Completed
                                                </span>
                                            </div>
                                        </Table.Cell>

                               

                                        {/* Actions Panel */}
                                      
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

export default Transactions;