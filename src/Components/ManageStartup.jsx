"use client"
import { AlertDialog, Button } from '@heroui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';
import UpdateStartup from './UpdateStartup';

const ManageStartup = ({startup}) => {

  const router=useRouter();

const handleDelete=async()=>{
    const res=await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/startups/${startup._id}`, {
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
        <div>
            
<div className="relative w-full max-w-4xl mx-auto p-6 md:p-8 rounded-3xl bg-[#090a0f] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] antialiased">
  
  {/* Liquid Ambient Light Orbs (Glow behind the glass panel) */}
  <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[70%] bg-indigo-500/15 rounded-full blur-[140px] pointer-events-none" />
  <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[60%] bg-purple-500/10 rounded-full blur-[140px] pointer-events-none" />

  {/* Main Glass Panel */}
  <div className="relative z-10 rounded-2xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] p-6 md:p-8">
    
    {/* Specular Light Reflection Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl" />

    {/* Header Section: Logo & Primary Info */}
    <div className="relative flex flex-col md:flex-row items-center md:items-start gap-6 border-b border-white/[0.06] pb-8 mb-8">
      
      {/* Premium Framed Logo Container */}
      <div className="relative group shrink-0 w-32 h-32 rounded-2xl p-0.5 bg-gradient-to-b from-white/20 to-white/[0.02] shadow-xl">
        <div className="w-full h-full rounded-[14px] bg-[#14151f] overflow-hidden flex items-center justify-center p-3">
          <Image 
            src={startup?.logo_url || "/placeholder-logo.png"} 
            width={120} 
            height={120} 
            alt={startup?.startup_name || "Startup Logo"}
            className="object-contain w-full h-full filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Startup Name & Status Badge */}
      <div className="text-center md:text-left flex-1 space-y-3">
        <div className="flex flex-col md:flex-row md:items-center gap-3 justify-center md:justify-start">
          <h1 className="text-3xl font-bold tracking-tight text-white">{startup?.startup_name}</h1>
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wide backdrop-blur-md border uppercase self-center md:self-auto ${
            startup?.status?.toLowerCase() === 'approved' 
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
              : 'bg-amber-500/10 text-amber-400 border-amber-500/20'
          }`}>
            ● {startup?.status}
          </span>
        </div>
        
        {/* Industry Tag */}
        <p className="text-sm font-medium text-slate-400">
          <span className="text-indigo-400 font-semibold capitalize">{startup?.industry}</span> Sector
        </p>

        {/* Website Action Button */}
        {startup?.website_url && (
          <a 
            href={startup.website_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-xs font-medium text-slate-200 border border-white/[0.08] transition-all duration-300 group"
          >
            Visit Website
            <svg className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        )}
      </div>
    </div>

    {/* Metadata & Details Grid */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      
      {/* Funding Stage Grid Block */}
      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <h3 className="text-[10px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1.5">Funding Stage</h3>
        <p className="text-lg font-semibold text-white bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
          {startup?.funding_stage}
        </p>
      </div>

      {/* Website Text Block */}
      <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] md:col-span-2">
        <h3 className="text-[10px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-1.5">Domain URL</h3>
        <p className="text-sm font-medium text-slate-300 truncate font-mono">
          {startup?.website_url}
        </p>
      </div>

      {/* Long Description Block across full row width */}
      <div className="md:col-span-3 p-5 rounded-xl bg-white/[0.02] border border-white/[0.05] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <h3 className="text-[10px] font-bold text-slate-500 tracking-[0.15em] uppercase mb-2">Company Overview</h3>
        <p className="text-sm text-slate-300 leading-relaxed font-normal antialiased">
          {startup?.description}
        </p>
      </div>

    </div>

   

  </div>
  <div className='flex items-center justify-between my-5'>
   <AlertDialog>
      <Button variant="danger">Delete Startup</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete Startup permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete the Startup. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete Startup
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>

    <UpdateStartup startup={startup}></UpdateStartup>
    </div>
</div>




        </div>
    );
};

export default ManageStartup;