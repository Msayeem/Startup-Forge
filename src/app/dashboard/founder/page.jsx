import { getFounderApplication, getFounderOpportunities, getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderDashboard = async() => {

const user=await getUserSession();
const opportunities=await getFounderOpportunities(user.id);
const applications=await getFounderApplication(user.id);
const acceptedCount=applications.filter(app=>app.status=='approved').length;



    return (
    <div className="relative w-full max-w-6xl mx-auto p-8 rounded-3xl bg-[#090a0f] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
  
  {/* Liquid Ambient Light Orbs (Glow effects behind the glass) */}
  <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute bottom-[-20%] left-[30%] w-[40%] h-[50%] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

  {/* Content Grid */}
  <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 w-full z-10">
    
    {/* Card 1: Total Opportunities */}
    <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
      {/* Specular Liquid Reflection Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="relative flex flex-col justify-between h-full space-y-6">
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center justify-center p-3 bg-amber-500/10 rounded-2xl text-amber-400 border border-amber-500/20 shadow-[0_0_20px_rgba(245,158,11,0.15)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </span>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Total Opportunities</h3>
          <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">{opportunities.length}</p>
        </div>
      </div>
    </div>

    {/* Card 2: Total Applications */}
    <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="relative flex flex-col justify-between h-full space-y-6">
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </span>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Total Applications</h3>
          <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">{applications.length}</p>
        </div>
      </div>
    </div>

    {/* Card 3: Accepted Members */}
    <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
      
      <div className="relative flex flex-col justify-between h-full space-y-6">
        <div className="flex items-start justify-between">
          <span className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          </span>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Accepted Members</h3>
          <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">{acceptedCount}</p>
        </div>
      </div>
    </div>

  </div>
</div>
    );
};

export default FounderDashboard;