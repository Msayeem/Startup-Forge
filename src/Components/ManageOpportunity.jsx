"use client"
import { AlertDialog, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const ManageOpportunity = ({opportunity}) => {

    const router=useRouter()

const handleDelete=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities/${opportunity._id}`, {
        method:'DELETE',
        headers:{
             'content-type':'application/json',
        }
    });

    const result=await res.json();
    toast.error('Startup deleted.');
    router.refresh()
}

    return (
        <div className="group relative w-full rounded-2xl bg-white/[0.02] backdrop-blur-md border border-white/[0.06] p-6 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)] transition-all duration-400 hover:bg-white/[0.04] hover:border-white/[0.12] hover:shadow-[0_20px_50px_-8px_rgba(0,0,0,0.5)]">
            
            {/* Specular glass reflection overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-2xl" />

            <div className="relative flex flex-col space-y-4">
                
                {/* Header: Title */}
                <div>
                    <span className="text-[10px] font-bold text-slate-500 tracking-[0.15em] uppercase block mb-1">Opportunity</span>
                    <h1 className="text-xl font-bold tracking-tight text-white antialiased">
                        {opportunity.roleTitle}
                    </h1>
                </div>

                {/* Meta Row: Commitment and Work Type pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                        <span className="text-slate-400 font-medium normal-case mr-1">Commitment:</span> {opportunity.commitmentLevel}
                    </div>
                    <div className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold tracking-wide uppercase bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                        <span className="text-slate-500 font-medium normal-case mr-1">Type:</span> {opportunity.workType}
                    </div>
                </div>

                {/* Divider Line */}
                <div className="h-px w-full bg-gradient-to-r from-white/[0.08] via-white/[0.02] to-transparent" />

                {/* Requirements Block */}
                <div className="space-y-1">
                    <h1 className="text-[10px] font-bold text-slate-400 tracking-[0.15em] uppercase">Requirements</h1>
                    <h1 className="text-sm text-slate-300 leading-relaxed font-normal antialiased">
                        {opportunity.requirements}
                    </h1>
                </div>

                {/* Footer: Deadline tracking */}
                <div className="pt-2 flex items-center justify-between border-t border-white/[0.04]">
                    <h1 className="text-[10px] font-bold text-slate-500 tracking-[0.1em] uppercase">Application Deadline</h1>
                    <h1 className="text-xs font-semibold font-mono text-amber-400 bg-amber-500/5 px-2 py-0.5 rounded border border-amber-500/10">
                        {opportunity.deadline}
                    </h1>
                </div>

            <AlertDialog>
                  <Button variant="danger">Delete Opportunity</Button>
                  <AlertDialog.Backdrop>
                    <AlertDialog.Container>
                      <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                          <AlertDialog.Icon status="danger" />
                          <AlertDialog.Heading>Delete Opportunity permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                          <p>
                            This will permanently delete the Opportunity. This action cannot be undone.
                          </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                          <Button slot="close" variant="tertiary">
                            Cancel
                          </Button>
                          <Button onClick={handleDelete} slot="close" variant="danger">
                            Delete Opportunity
                          </Button>
                        </AlertDialog.Footer>
                      </AlertDialog.Dialog>
                    </AlertDialog.Container>
                  </AlertDialog.Backdrop>
                </AlertDialog>

            </div>
        </div>
    );
};

export default ManageOpportunity;