'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import BrowseOpportunities from '@/Components/BrowseOpportunities';

const WORK_TYPES = ['remote', 'hybrid', 'onsite'];
const INDUSTRIES = ['technology', 'healthcare', 'finance', 'education', 'retail', 'manufacturing', 'real-estate', 'media'];
const PAGE_SIZE = 9;

export default function OpportunitiesClient() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // URL is the single source of truth — no duplicated state
  const search = searchParams.get('search') || '';
  const selectedTypes = searchParams.getAll('workType');
  const selectedIndustries = searchParams.getAll('industry');
  const page = parseInt(searchParams.get('page')) || 1;

  const [opportunities, setOpportunities] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateURL = useCallback((newSearch, newTypes, newIndustries, newPage) => {
    const params = new URLSearchParams();
    if (newSearch) params.set('search', newSearch);
    newTypes.forEach(t => params.append('workType', t));
    newIndustries.forEach(i => params.append('industry', i));
    if (newPage > 1) params.set('page', newPage);
    router.replace(`?${params.toString()}`, { scroll: false });
  }, [router]);

  const fetchOpportunities = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.set('page', searchParams.get('page') || 1);
      params.set('limit', PAGE_SIZE);
      if (searchParams.get('search')) params.set('search', searchParams.get('search'));
      searchParams.getAll('workType').forEach(t => params.append('workType', t));
      searchParams.getAll('industry').forEach(i => params.append('industry', i));

      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/opportunities?${params}`);
      const json = await res.json();
      setOpportunities(json.data);
      setTotalPages(json.totalPages);
      setTotal(json.total);
    } finally {
      setLoading(false);
    }
  }, [searchParams]); // ← searchParams change = new fetch

  useEffect(() => {
    fetchOpportunities();
  }, [fetchOpportunities]);

  const toggleType = (type) => {
    const next = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    updateURL(search, next, selectedIndustries, 1);
  };

  const toggleIndustry = (industry) => {
    const next = selectedIndustries.includes(industry)
      ? selectedIndustries.filter(i => i !== industry)
      : [...selectedIndustries, industry];
    updateURL(search, selectedTypes, next, 1);
  };

  const handleSearch = (e) => {
    updateURL(e.target.value, selectedTypes, selectedIndustries, 1);
  };

  const handlePageChange = (n) => {
    updateURL(search, selectedTypes, selectedIndustries, n);
  };

  return (
    <div className="relative z-10 max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div className="space-y-2">
          <p className="text-xs font-bold tracking-[0.25em] text-indigo-400 uppercase drop-shadow-[0_2px_10px_rgba(99,102,241,0.3)]">
            Available Roles
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            Explore Opportunities
          </h1>
        </div>
        <div className="inline-flex items-center self-start md:self-auto px-3 py-1 rounded-full text-xs font-medium bg-white/[0.04] text-slate-300 border border-white/[0.08] backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2 animate-pulse" />
          {total} Positions Open
        </div>
      </div>

      {/* Search + Filter bar */}
      <div className="flex flex-col gap-4">
        <input
          type="text"
          value={search}
          onChange={handleSearch}
          placeholder="Search by role or requirements..."
          className="w-full sm:max-w-sm px-4 py-2.5 rounded-xl text-sm bg-white/[0.05] border border-white/[0.08] text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500/60 focus:bg-white/[0.07] transition-all backdrop-blur-md"
        />

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-1">Work type:</span>
          {WORK_TYPES.map(type => (
            <button key={type} onClick={() => toggleType(type)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all backdrop-blur-md ${
                selectedTypes.includes(type)
                  ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:border-white/20 hover:text-slate-300'
              }`}
            >
              {type}
            </button>
          ))}
          {selectedTypes.length > 0 && (
            <button onClick={() => updateURL(search, [], selectedIndustries, 1)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.06] text-slate-500 hover:text-slate-300 transition-all">
              Clear
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-slate-500 mr-1">Industry:</span>
          {INDUSTRIES.map(industry => (
            <button key={industry} onClick={() => toggleIndustry(industry)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all backdrop-blur-md ${
                selectedIndustries.includes(industry)
                  ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                  : 'bg-white/[0.04] border-white/[0.08] text-slate-400 hover:border-white/20 hover:text-slate-300'
              }`}
            >
              {industry}
            </button>
          ))}
          {selectedIndustries.length > 0 && (
            <button onClick={() => updateURL(search, selectedTypes, [], 1)}
              className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/[0.06] text-slate-500 hover:text-slate-300 transition-all">
              Clear
            </button>
          )}
        </div>
      </div>

      {/* Grid */}
      {loading ? (
        <div className="w-full text-center py-20">
          <p className="text-sm text-slate-500">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full items-start justify-items-center md:justify-items-stretch">
          {opportunities.map(opportunity => (
            <BrowseOpportunities key={opportunity._id} opportunities={opportunity} />
          ))}
        </div>
      )}

      {!loading && opportunities.length === 0 && (
        <div className="w-full text-center py-20 rounded-2xl bg-white/[0.02] border border-dashed border-white/[0.08] backdrop-blur-xl">
          <p className="text-sm text-slate-400">No opportunities match your search.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-4">
          <button onClick={() => handlePageChange(Math.max(1, page - 1))} disabled={page === 1}
            className="px-4 py-2 rounded-lg text-sm border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
            <button key={n} onClick={() => handlePageChange(n)}
              className={`w-9 h-9 rounded-lg text-sm border transition-all ${
                page === n
                  ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-300'
                  : 'border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:border-white/20'
              }`}>
              {n}
            </button>
          ))}
          <button onClick={() => handlePageChange(Math.min(totalPages, page + 1))} disabled={page === totalPages}
            className="px-4 py-2 rounded-lg text-sm border border-white/[0.08] bg-white/[0.04] text-slate-400 hover:text-white hover:border-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-all">
            Next
          </button>
        </div>
      )}
    </div>
  );
}