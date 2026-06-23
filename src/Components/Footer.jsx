import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Trophy } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#060908] text-[#e2e8e2] overflow-hidden">

      {/* Top accent line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent" />

      {/* Subtle radial bg glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-green-500/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-8 pt-16 pb-8">

        {/* Top section: brand left, nav right */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-14 mb-16">

          {/* Brand block */}
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-2.5 mb-5">
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-green-500/10 border border-green-500/20 group-hover:bg-green-500/20 transition-colors duration-300">
                <Trophy className="w-4.5 h-4.5 text-green-400" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-white">
                Sport<span className="text-green-400">Nest</span>
              </span>
            </Link>

            <p className="text-sm leading-relaxed  mb-8">
              The easiest way to discover, book, and list sports facilities. For players, coaches, and venue owners.
            </p>

            <Link
              href="/startups"
              className="group inline-flex items-center gap-2 rounded-xl bg-green-500 px-5 py-2.5 text-sm font-semibold text-[#040804] transition-all duration-200 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/20 active:scale-[0.98]"
            >
              Browse Startups
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 gap-x-16 gap-y-10 shrink-0">
            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-green-500 mb-4">
                Company
              </h3>
              <ul className="flex flex-col gap-3">
                {["About", "Contact", "Careers", "Blog"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-[#7a8e7a] hover:text-[#e2e8e2] transition-colors duration-150"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.15em] text-green-500 mb-4">
                Platform
              </h3>
              <ul className="flex flex-col gap-3">
                {["List a facility", "How it works", "Pricing", "Help centre"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm text-[#7a8e7a] hover:text-[#e2e8e2] transition-colors duration-150"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-white/[0.05] mb-7" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          <p className="text-xs  order-2 sm:order-1">
            © {new Date().getFullYear()} SportNest. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-2 order-1 sm:order-2">
            <Link
              href="https://www.linkedin.com/in/sayem-dev/"
              aria-label="LinkedIn"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.06]  hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/[0.07] transition-all duration-200"
            >
              <FaLinkedin size={13} />
            </Link>
            <Link
              href="https://github.com/Msayeem"
              aria-label="GitHub"
              className="flex items-center justify-center w-8 h-8 rounded-lg border border-white/[0.06]  hover:text-green-400 hover:border-green-500/30 hover:bg-green-500/[0.07] transition-all duration-200"
            >
              <FaGithub size={13} />
            </Link>
          </div>

          {/* Legal */}
          <div className="flex items-center gap-1 order-3">
            <Link href="#" className="text-xs  hover:text-[#7a8e7a] transition-colors duration-150 px-2 py-1">
              Privacy
            </Link>
            <span className="text-[#1e2e1e] text-xs">·</span>
            <Link href="#" className="text-xs  hover:text-[#7a8e7a] transition-colors duration-150 px-2 py-1">
              Terms
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
