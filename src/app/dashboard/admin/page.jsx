import AdminChart from '@/Components/AdminChart';
import RevenueChart from '@/Components/RevenueChart';
import { getOpportunities, getStartups, getUsers } from '@/lib/api-server';
import React from 'react';
import { Bar, BarChart, CartesianGrid, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const AdminPage = async () => {
  const users = await getUsers();
  const startups = await getStartups();
  const opportunities = await getOpportunities();

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/revenue/total`, { cache: 'no-store' });
  const { totalRevenue } = await res.json();

  const chartData = [
    { name: 'Users',         value: users.length,         color: '#10b981' },
    { name: 'Startups',      value: startups.length,      color: '#6366f1' },
    { name: 'Opportunities', value: opportunities.length, color: '#f59e0b' },
  
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto p-8 rounded-3xl bg-[#090a0f] overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">

      {/* Ambient Glow Orbs */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[60%] bg-amber-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] left-[30%] w-[40%] h-[50%] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[40%] h-[60%] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col gap-6">

        {/* Stat Cards — 4 col grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Total Users */}
          <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-between h-full space-y-6">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                </span>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Total Users</h3>
                <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">{users.length}</p>
              </div>
            </div>
          </div>

          {/* Total Startups */}
          <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-between h-full space-y-6">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.15)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                </span>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Total Startups</h3>
                <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">{startups.length}</p>
              </div>
            </div>
          </div>

          {/* Total Opportunities */}
          <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
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

          {/* Total Revenue */}
          <div className="group relative rounded-2xl p-6 transition-all duration-500 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] hover:bg-white/[0.06] hover:border-white/[0.15] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.7)]">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
            <div className="relative flex flex-col justify-between h-full space-y-6">
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center justify-center p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </span>
              </div>
              <div>
                <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Total Revenue</h3>
                <p className="text-4xl font-semibold tracking-tight text-white antialiased font-sans">$ {totalRevenue}</p>
              </div>
            </div>
          </div>

        </div>

        {/* Chart — full width below cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <AdminChart data={chartData} />
  <RevenueChart revenue={totalRevenue} />
</div>

      </div>
    </div>
  );
};

export default AdminPage;