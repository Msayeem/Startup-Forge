import FounderStartup from '@/Components/FounderStartup';
import ManageStartup from '@/Components/ManageStartup';
import { getFounderStartup } from '@/lib/api';
import { getUserSession } from '@/lib/session';
import React from 'react';

const FounderCompanyPage = async() => {

const user=await getUserSession();

let startup = null;
  try {
    startup = await getFounderStartup(user.id);
  } catch (error) {
    console.error("Failed to fetch startup data safely:", error);
  }


    return (
        <div>
  {
    !startup &&
         <div className="relative flex items-center justify-center min-h-screen bg-[#090a0f] p-6 overflow-hidden antialiased">
  
  <div className="absolute w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

  
    <div className="relative z-10 w-full max-w-md rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] p-8 text-center transition-all duration-300">
      
      {/* Specular reflection overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent pointer-events-none rounded-3xl" />
      
      {/* Premium Glass Icon Container */}
      <div className="inline-flex items-center justify-center p-4 bg-gradient-to-b from-white/10 to-white/[0.02] border border-white/[0.1] rounded-2xl text-indigo-400 shadow-xl mb-6">
        {/* Modern Plus/Rocket/Startup Identity Hybrid Icon */}
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </div>

      {/* Main Title Typography */}
      <h2 className="text-2xl font-bold tracking-tight text-white mb-3">
        Launch Your Startup
      </h2>

      {/* Descriptive Body Text */}
      <p className="text-sm text-slate-400 leading-relaxed max-w-sm mx-auto mb-8">
        You need to establish your startup profile first before you can begin posting hiring opportunities.
      </p>

      {/* Render the Form / Button Component cleanly inside the aesthetic wrapper */}
      <div className="w-full">
        <FounderStartup user={user} />
      </div>

    </div>
   
</div>
  }

{
    startup && <ManageStartup startup={startup}></ManageStartup>
}

        </div>
    );
};

export default FounderCompanyPage;