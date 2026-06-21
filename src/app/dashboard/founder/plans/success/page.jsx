import { createSubscription } from '@/lib/api'
import { stripe } from '@/lib/stripe'
import Link from 'next/link'
import { redirect } from 'next/navigation'



export default async function Success({ searchParams }) {
  const { session_id } = await searchParams

  if (!session_id)
    throw new Error('Please provide a valid session_id (`cs_test_...`)')

  const {
    status,
    customer_details: { email: customerEmail },
    metadata
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ['line_items', 'payment_intent']
  })

  if (status === 'open') {
    return redirect('/')
  }

  if (status === 'complete') {

const subsInfo={
  email: customerEmail,
  planId:metadata.planId
}

const result=await createSubscription(subsInfo)

    return (
      <section id="success">
     <div className="relative min-h-screen w-full flex items-center justify-center bg-[#05060b] p-6 overflow-hidden antialiased">
  
  {/* Liquid Ambient Light Orbs (Glow behind the success panel) */}
  <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
  <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

  {/* Main Liquid Glass Success Card */}
  <div className="relative z-10 w-full max-w-xl rounded-3xl bg-white/[0.02] backdrop-blur-2xl border border-white/[0.08] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.12)] p-8 md:p-10 text-center">
    
    {/* Specular Light Reflection Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent pointer-events-none rounded-3xl" />

    {/* Apple-Style Animated Success Checkmark Ring */}
    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)] mb-6 animate-pulse">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
      </svg>
    </div>

    {/* Primary Headline */}
    <h1 className="text-3xl font-bold tracking-tight text-white mb-4">
      Payment Successful
    </h1>

    {/* Your Original Success Message - Upgraded Typography */}
    <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light max-w-md mx-auto mb-8">
      We appreciate your business! A confirmation email will be sent to{' '}
      <span className="font-medium text-white underline decoration-indigo-400/40 underline-offset-4 selection:bg-indigo-500/30">
        {customerEmail}
      </span>
      . If you have any questions, please email{' '}
      <a 
        href="mailto:orders@example.com" 
        className="inline-flex items-center gap-0.5 font-medium text-indigo-400 hover:text-indigo-300 transition-colors duration-200 underline decoration-indigo-400/20 hover:decoration-indigo-300 underline-offset-4"
      >
        orders@example.com
      </a>
      .
    </p>

    {/* Divider */}
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6" />

    {/* Action Button */}
    <Link href={'/dashboard/founder'} className="relative w-full sm:w-auto px-8 py-3 rounded-xl bg-white text-slate-950 font-medium text-sm shadow-[0_4px_20px_rgba(255,255,255,0.15)] hover:bg-slate-100 active:scale-[0.98] transition-all duration-200">
      Go to Dashboard
    </Link>

  </div>
</div>
      </section>
    )
  }
}