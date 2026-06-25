import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ArrowRight, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#030408] text-slate-300 overflow-hidden border-t border-white/[0.05]">
      
      {/* Top Ambient Fluid Reflection Strip */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Deep Liquid Plasma Glow Orbs */}
      <div className="pointer-events-none absolute -bottom-20 left-1/2 -translate-x-1/2 w-[800px] h-[350px] rounded-full bg-gradient-to-t from-indigo-600/10 to-purple-600/5 blur-[120px] mix-blend-screen" />
      <div className="pointer-events-none absolute -top-40 right-10 w-[300px] h-[300px] bg-white/[0.01] rounded-full blur-3xl" />

      {/* Liquid Glass Sub-Panel for Structure */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 pt-20 pb-10">
        
        {/* Top Section: Brand Block Left, Nav Block Right */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-16 mb-20">

          {/* Brand Block */}
          <div className="max-w-md space-y-6">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.08] shadow-inner text-indigo-400 group-hover:text-white transition-colors duration-300">
                <Sparkles className="w-4 h-4 stroke-[2]" />
              </div>
              <h1 className="text-lg font-black tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:via-white transition-all duration-300">
                        Startup<span className="text-indigo-400 font-medium">Forge</span>
                    </h1>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              The premium ecosystem to discover, invest in, and scale high-growth platforms. Built specifically for visionaries, founders, and modern builders.
            </p>

            <div>
              <Link
                href="/startups"
                className="group inline-flex items-center gap-2.5 rounded-xl bg-white text-slate-950 px-5 py-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 hover:bg-slate-100 shadow-[0_4px_20px_rgba(255,255,255,0.08)] active:scale-[0.98]"
              >
                Browse Startups
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Nav Columns Layered into Glass Cards */}
          <div className="grid grid-cols-2 gap-x-12 sm:gap-x-20 gap-y-10 shrink-0">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">
                Company
              </h3>
              <ul className="flex flex-col gap-4">
                {["About", "Contact", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-400 mb-6">
                Platform
              </h3>
              <ul className="flex flex-col gap-4">
                {["List a Facility", "How it works", "Pricing", "Help Centre"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm font-light text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Fine Glass Divider Grid-line */}
        <div className="h-px w-full bg-gradient-to-r from-white/[0.01] via-white/[0.06] to-white/[0.01] mb-8" />

        {/* Bottom Metadata & Legal Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

          <p className="text-xs text-slate-500 order-2 sm:order-1">
            © {new Date().getFullYear()} StartupForge. Operating across decentralized frameworks.
          </p>

          {/* Liquid Glass Social Icons */}
          <div className="flex items-center gap-2.5 order-1 sm:order-2">
            <Link
              href="https://www.linkedin.com/in/sayem-dev/"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/[0.04] transition-all duration-200 shadow-inner"
            >
              <FaLinkedin size={14} />
            </Link>
            <Link
              href="https://github.com/Msayeem"
              aria-label="GitHub"
              className="flex items-center justify-center w-9 h-9 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-400 hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/[0.04] transition-all duration-200 shadow-inner"
            >
              <FaGithub size={14} />
            </Link>
          </div>

          {/* Legal Compliance Block */}
          <div className="flex items-center gap-1.5 order-3">
            <Link href="#" className="text-xs font-light text-slate-500 hover:text-slate-300 transition-colors duration-200 px-2 py-1">
              Privacy Node
            </Link>
            <span className="text-slate-700 text-xs font-light">·</span>
            <Link href="#" className="text-xs font-light text-slate-500 hover:text-slate-300 transition-colors duration-200 px-2 py-1">
              Terms of Protocol
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;