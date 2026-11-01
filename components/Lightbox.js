"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, CheckCircle2, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#001009]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-[#EDE5D8]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-[#10271E]/80 text-white hover:bg-[#10271E] flex items-center justify-center transition-all shadow-md"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Modal Image Viewport (Left 60%) */}
        <div className="w-full md:w-3/5 h-64 md:h-[480px] bg-[#001009] relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt={item.imageAlt || item.title}
            src={item.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001009]/40 via-transparent to-transparent" />
        </div>

        {/* Modal Content Pane (Right 40%) */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd082]/20 text-[#7b5815] text-xs font-bold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#7b5815]" />
              <span>{item.categoryLabel}</span>
            </div>

            <h3 className="font-display text-2xl font-bold text-[#1c1c17] mb-2">
              {item.title}
            </h3>

            <p className="text-sm text-[#424844] leading-relaxed mb-6">
              {item.fullDesc || item.description}
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1c1c17]">
                <CheckCircle2 className="w-4 h-4 text-[#7b5815] shrink-0" />
                <span>Ultra-fast 300 Mbps Dedicated Fiber WiFi</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1c1c17]">
                <CheckCircle2 className="w-4 h-4 text-[#7b5815] shrink-0" />
                <span>Sound-attenuated silent acoustics</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#1c1c17]">
                <CheckCircle2 className="w-4 h-4 text-[#7b5815] shrink-0" />
                <span>Individual AC airflow &amp; ambient control</span>
              </div>
            </div>
          </div>

          <div className="pt-4 bg-[#f7f3eb] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 p-6 sm:p-8 flex items-center justify-between border-t border-[#EDE5D8]">
            <div className="flex flex-col">
              <span className="text-[11px] text-[#727974] uppercase tracking-wider font-semibold">
                Pricing Rate
              </span>
              <span className="font-display text-xl text-[#10271E] font-bold">
                {item.price}
              </span>
            </div>

            <Link
              href="/book-seat"
              onClick={onClose}
              className="px-5 py-2.5 bg-[#10271E] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#001009] transition-all shadow-sm inline-flex items-center gap-1.5 hover:scale-105 active:scale-95"
            >
              <span>Book Seat</span>
              <ArrowRight className="w-4 h-4 text-[#ffd082]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
