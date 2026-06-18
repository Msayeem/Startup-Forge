import React from 'react';
import { Chip, Table } from "@heroui/react";

const formatRelativeTime = (dateString) => {
  const now = new Date();
  const appliedDate = new Date(dateString);
  const diffInMs = now - appliedDate;

  const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
  if (diffInHours < 24) {
    return diffInHours <= 1 ? "1 hour ago" : `${diffInHours} hours ago`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return diffInDays === 1 ? "1 day ago" : `${diffInDays} days ago`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  return diffInWeeks === 1 ? "1 week ago" : `${diffInWeeks} weeks ago`;
};

const getStatusChip = (status = "Applied") => {
  const normalized = status.toLowerCase();
  switch (normalized) {
    case 'applied':
      return <Chip variant="bordered" className="border-zinc-600 text-zinc-100 text-xs font-medium px-3 py-1">Applied</Chip>;
    case 'review':
      return <Chip variant="bordered" className="border-amber-600/70 text-amber-500 text-xs font-medium px-3 py-1 bg-amber-950/20">Review</Chip>;
    case 'shortlisted':
      return <Chip variant="bordered" className="border-emerald-600/70 text-emerald-500 text-xs font-medium px-3 py-1 bg-emerald-950/20">Shortlisted</Chip>;
    case 'rejected':
      return <Chip variant="bordered" className="border-rose-700/70 text-rose-600 text-xs font-medium px-3 py-1 bg-rose-950/20">Rejected</Chip>;
    case 'accept':
      return <Chip variant="bordered" className="border-zinc-400 text-zinc-200 text-xs font-medium px-3 py-1">Accepted</Chip>;
    default:
      return <Chip variant="bordered" className="border-zinc-600 text-zinc-400 text-xs font-medium">{status}</Chip>;
  }
};

const ApplicationTable = ({ application }) => {

console.log(application)

  return (
    <div className="w-full bg-white dark:bg-[#121212] p-6 rounded-xl border border-zinc-200 dark:border-zinc-800/80 min-h-screen text-zinc-800 dark:text-zinc-100 transition-colors duration-200">
  <h2 className="text-xl font-semibold mb-6 text-zinc-800 dark:text-zinc-200">
    Applications ({application.length})
  </h2>

  <Table
    className="w-full"
    classNames={{
      base: "bg-transparent",
      table: "border-collapse",
      thead: "[&>tr]:border-b [&>tr]:border-zinc-200 dark:[&>tr]:border-zinc-800/60",
      th: "bg-transparent text-zinc-500 dark:text-zinc-400 font-medium text-sm py-4 border-b border-zinc-200 dark:border-zinc-800/60 first:pl-4 last:pr-4",
      tr: "border-b border-zinc-100 dark:border-zinc-800/40 hover:bg-zinc-50 dark:hover:bg-zinc-900/40 transition-colors last:border-none",
      td: "py-4 align-middle first:pl-4 last:pr-4 text-zinc-700 dark:text-zinc-300 text-sm"
    }}
  >
    <Table.ScrollContainer>
      <Table.Content aria-label="Job applications tracking table">
        <Table.Header>
          <Table.Column className="w-[35%]">Opportunity Name</Table.Column>
          <Table.Column className="w-[20%]">Role</Table.Column>
          <Table.Column className="w-[15%]">Work Type</Table.Column>
          <Table.Column className="w-[15%]">Applied</Table.Column>
          <Table.Column className="w-[15%]">Status</Table.Column>
        </Table.Header>

        <Table.Body emptyContent={"No applications found."}>
          {application.map((app) => {
            const workType = app.workType || "Full-time";
            const status = app.status || "Applied";

            return (
              <Table.Row key={app._id?.$oid || app._id}>
                {/* OPPORTUNITY NAME COLUMN */}
                <Table.Cell>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-zinc-900 dark:text-zinc-100 text-[15px]">
                      {app.opportunityName}
                    </span>
                    <span className="text-xs text-zinc-400 dark:text-zinc-500 font-normal">
                      {app.opportunityName}
                    </span>
                  </div>
                </Table.Cell>

                {/* COMPANY COLUMN */}
                <Table.Cell>
                  <span className="text-zinc-700 dark:text-zinc-300 text-[14px]">
                    {app.roleTitle}
                  </span>
                </Table.Cell>

                {/* WORK TYPE COLUMN */}
                <Table.Cell>
                  <span className="text-zinc-600 dark:text-zinc-400 text-[14px]">{workType}</span>
                </Table.Cell>

                {/* APPLIED DATE COLUMN */}
                <Table.Cell>
                  <span className="text-zinc-600 dark:text-zinc-400 text-[14px]">
                    {formatRelativeTime(app.createdAt?.$date || app.createdAt)}
                  </span>
                </Table.Cell>

                {/* STATUS COLUMN */}
                <Table.Cell>
                  {getStatusChip(app.status)}
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

export default ApplicationTable;