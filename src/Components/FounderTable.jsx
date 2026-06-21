'use client';

import React from 'react';
import { Table, Button } from '@heroui/react';
// Assuming gravity-ui/icons are installed and imported like this
import { CircleArrowDownFill } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';
import { updateFounderApplication } from '@/lib/api';
import { useRouter } from 'next/navigation';

const FounderTable = ({ applications }) => {

const router=useRouter();

    const { data: session } = authClient.useSession();
    
    const handleApprove = async (id) => {
        // const token = session?.session?.token;
        const result = await updateFounderApplication(id, { status: 'approved' });
    router.refresh()
    };

    const handleReject = async (id) => {
        // const token = session?.session?.token;
        const result = await updateFounderApplication(id, { status: 'rejected' });
    router.refresh()
    };

    // Helper to format date cleanly like "Oct 12, 2023"
    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            month: 'short',
            day: '2-digit',
            year: 'numeric',
        });
    };

    // Status mapping for visual styling
    const getStatusDetails = (status) => {
        switch (status?.toLowerCase()) {
            case 'approved':
                return { 
                    color: 'text-emerald-600 dark:text-emerald-400', 
                    label: 'Approved' 
                };
            case 'rejected':
                return { 
                    color: 'text-rose-600 dark:text-rose-400', 
                    label: 'Rejected' 
                };
            case 'pending':
            default:
                return { 
                    color: 'text-amber-600 dark:text-amber-500', 
                    label: 'Pending' 
                };
        }
    };

    // Helper to generate initials for the placeholder icon
    const getInitials = (name) => {
        return name ? name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase() : 'CO';
    };

    return (
        <div className="w-full bg-white dark:bg-[#121214] text-neutral-800 dark:text-neutral-200 p-6 rounded-lg shadow-sm border border-neutral-200 dark:border-none">
            <Table className="bg-transparent border-none">
                <Table.ScrollContainer>
                    <Table.Content aria-label="Company approval management table">
                        <Table.Header>
                            <Table.Column isRowHeader className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                Applicant Name
                            </Table.Column>

                            <Table.Column className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                Applicant Email
                            </Table.Column>

                            <Table.Column className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                Role
                            </Table.Column>

                            <Table.Column className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                Status
                            </Table.Column>

                            <Table.Column className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800">
                                Date Submitted
                            </Table.Column>

                            <Table.Column className="text-neutral-500 dark:text-neutral-400 font-medium pb-4 border-b border-neutral-200 dark:border-neutral-800 text-right">
                                Actions
                            </Table.Column>
                        </Table.Header>
                        <Table.Body>
                            {applications.map((company) => {
                                const companyId = company._id?.$oid || company._id;
                                const statusInfo = getStatusDetails(company.status);

                                return (
                                    <Table.Row key={companyId} className="border-b border-neutral-100 dark:border-neutral-800/50 hover:bg-neutral-50 dark:hover:bg-neutral-900/30 transition-colors">
                                        {/* Company Avatar & Name */}
                                        <Table.Cell className="py-4 align-middle">
                                            <div className="flex items-center gap-3">
                                                <div className="w-9 h-9 flex items-center justify-center bg-neutral-200 dark:bg-neutral-800 text-gray-500 dark:text-neutral-300 rounded font-semibold text-sm tracking-wider">
                                                    {getInitials(company.applicantName)}
                                                </div>
                                                <span className="font-medium text-neutral-900 dark:text-neutral-200">{company.applicantName}</span>
                                            </div>
                                        </Table.Cell>

                                        {/* Recruiter Email Placeholder */}
                                        <Table.Cell className="py-4 align-middle text-neutral-500 dark:text-neutral-400">
                                            {company.applicantEmail || `recruiter@${company.company_name?.toLowerCase().replace(/\s+/g, '') || 'company'}.com`}
                                        </Table.Cell>

                                        {/* Industry Pill */}
                                        <Table.Cell className="py-4 align-middle">
                                            <span className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800/60 text-neutral-600 dark:text-neutral-400 rounded-full text-xs capitalize font-medium">
                                                {company.roleTitle}
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

                                        {/* Date Submitted */}
                                        <Table.Cell className="py-4 align-middle text-neutral-500 dark:text-neutral-400">
                                            {formatDate(company.createdAt?.$date || company.createdAt)}
                                        </Table.Cell>

                                        {/* Actions Panel */}
                                        <Table.Cell className="py-4 align-middle text-right">
                                            <div className="flex justify-end gap-2">
                                                {company.status?.toLowerCase() !== 'approved' && (
                                                    <Button
                                                        size="sm"
                                                        variant="light"
                                                        onClick={() => handleApprove(companyId)}
                                                        className="bg-emerald-50 hover:bg-emerald-100 text-emerald-600 border border-emerald-200 dark:bg-emerald-950/30 dark:hover:bg-emerald-900/50 dark:text-emerald-400 dark:border-emerald-900/60 rounded px-3 py-1 text-xs font-medium transition-colors"
                                                    >
                                                        Approve
                                                    </Button>
                                                )}
                                                {company.status?.toLowerCase() !== 'rejected' && (
                                                    <Button
                                                        size="sm"
                                                        variant="light"
                                                        onClick={() => handleReject(companyId)}
                                                        className="bg-rose-50 hover:bg-rose-100 text-rose-600 border border-rose-200 dark:bg-rose-950/20 dark:hover:bg-rose-900/40 dark:text-rose-400 dark:border-rose-900/40 rounded px-3 py-1 text-xs font-medium transition-colors"
                                                    >
                                                        Reject
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

export default FounderTable;