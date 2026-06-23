'use client';

import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts';

export default function RevenueChart({ revenue }) {
  const data = [{ name: 'Revenue', value: revenue, fill: '#10b981' }];

  return (
    <div className="relative rounded-2xl p-6 bg-white/[0.03] backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-transparent rounded-2xl pointer-events-none" />
      <div className="relative">
        <h3 className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-6">
          Total Revenue
        </h3>
        <div className="flex items-center justify-center gap-8">
          <ResponsiveContainer width="50%" height={200}>
            <RadialBarChart
              innerRadius="60%"
              outerRadius="100%"
              data={data}
              startAngle={90}
              endAngle={-270}
            >
              <RadialBar dataKey="value" cornerRadius={8} background={{ fill: 'rgba(255,255,255,0.05)' }} />
          
            </RadialBarChart>
          </ResponsiveContainer>
          <div>
            <p className="text-[11px] font-semibold text-slate-400 tracking-[0.12em] uppercase mb-1">Collected</p>
            <p className="text-4xl font-semibold tracking-tight text-white">${revenue}</p>
          </div>
        </div>
      </div>
    </div>
  );
}