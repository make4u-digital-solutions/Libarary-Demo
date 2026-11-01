"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import { BRAND } from "@/data/libraryData";

export default function CTASection({
  tag = "Reserve Your Desk Today",
  title = "Your Next Big Achievement Starts With the Right Environment",
  description = "Join over 2,500 students in Lucknow stepping into a sanctuary designed for pure scholarly triumph. Seats are limited to preserve silence.",
  primaryButtonText = "Book Your Seat Now",
  primaryButtonHref = "/book-seat",
}) {
  return (
    <section className="w-full bg-[#10271E] text-white relative overflow-hidden py-20 border-t border-b border-[#EDE5D8]/10">
      {/* Ambient background glow */}
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-[#D9AD62]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="max-w-2xl text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffdeab]/20 text-[#ffdeab] text-xs font-semibold uppercase tracking-wider mb-4 border border-[#ffdeab]/20">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd082]" />
            <span>{tag}</span>
          </span>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#fdf9f1] mb-4 tracking-tight leading-tight">
            {title}
          </h2>

          <p className="text-base sm:text-lg text-[#e6e2da] leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
          <Link
            href={primaryButtonHref}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#ffd082] text-[#271900] font-semibold text-base shadow-xl hover:bg-[#ffdeab] hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span>{primaryButtonText}</span>
            <ArrowRight className="w-5 h-5 text-[#271900]" />
          </Link>

          <a
            href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
            className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 text-white font-semibold text-base hover:bg-white/20 transition-all flex items-center justify-center gap-2 border border-white/10"
          >
            <Phone className="w-4 h-4 text-[#ffd082]" />
            <span>Contact Desk</span>
          </a>
        </div>
      </div>
    </section>
  );
}
