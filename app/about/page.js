"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Target,
  Eye,
  VolumeX,
  Armchair,
  IndianRupee,
  Users,
  CheckCircle2,
  MapPin,
  Clock,
  Phone,
  Copy,
  ArrowRight,
  ShieldCheck,
  Star,
  Award,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import { BRAND, STATS } from "@/data/libraryData";
import { useBooking } from "@/context/BookingContext";

export default function AboutPage() {
  const { showToast } = useBooking();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(BRAND.address);
    setCopied(true);
    showToast("Campus address copied to clipboard!");
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero & Founder's Story Section */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
        {/* Breadcrumb Pill */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] text-xs font-bold uppercase tracking-wider border border-[#ffd082]/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>About StudyHive</span>
          </span>
          <span className="text-[#c2c8c3]">/</span>
          <span className="text-xs text-[#727974] tracking-wider uppercase font-semibold">
            Our Heritage &amp; Ethos
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Story Column (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1c1c17] tracking-tight leading-[1.15]">
              Our Mission is to Create the{" "}
              <span className="italic text-[#7b5815] font-normal">Best Study Environment</span>
            </h1>

            <p className="text-base sm:text-lg text-[#7b5815] font-medium leading-relaxed">
              Designed by educators and exam veterans for students who refuse to settle for
              distractions.
            </p>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-[#424844] leading-relaxed">
              <p>
                StudyHive was born from a very real struggle: finding a peaceful, well-equipped,
                and affordable place to study in Lucknow. Typical home environments are filled
                with inevitable household interruptions, and traditional public reading rooms often
                lack reliable air-conditioning, dependable power backups, or uncompromising
                acoustic silence.
              </p>
              <p>
                We set out to build an academic sanctuary—where every single desk is ergonomically
                engineered for 12-hour endurance, high-speed fiber Wi-Fi never drops, calibrated
                warm task lighting protects your eyesight, and the quiet collective focus inspires
                relentless, daily progress.
              </p>
            </div>

            {/* Quick Founder Signature */}
            <div className="flex items-center gap-6 pt-4 mt-2">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#10271E] text-[#ffd082] flex items-center justify-center font-display font-bold text-lg shadow-sm">
                  SH
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c17]">The Founding Faculty</span>
                  <span className="text-xs text-[#7b5815]">Educators • Mohanlalganj, Lucknow</span>
                </div>
              </div>

              <div className="h-8 w-px bg-[#c2c8c3] hidden sm:block" />

              <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-[#424844]">
                <ShieldCheck className="w-4 h-4 text-[#7b5815]" />
                <span>100% Student-First Architecture</span>
              </div>
            </div>
          </div>

          {/* Framed Hero Visual Mosaic (5 Cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#10271E] border border-[#EDE5D8] group">
              <img
                className="w-full h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                alt="Editorial photograph of an opulent academic library reading room with warm brass desk lamps"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD65q8j-wf5Sko-Giut89jOdvhQENKDsz1qcu5erm2dsMBCB-A-HOCQ35mTfXkBN8EG42ygIPH0MbHjwZH7WXxw1bxWeq_Le-JQmpSwqzQongKzqhuwlzcVAJUNzFMSQ5FUmCAuEP9csHlAfp3DCpGCTobD2cXOMk3_2D1bupBYPtbpu_9qZDfnk7O0vu7Rf7hbo07RhwPIqLDTfnvH60VfW5A_e8CuKjpic8xcbck"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10271E]/80 via-[#10271E]/20 to-transparent" />

              {/* Floating Insight Card on Photo */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg flex items-center justify-between gap-3 border border-[#EDE5D8]">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-[#7b5815] shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-[#1c1c17] leading-tight">
                      Mohanlalganj Flagship
                    </h4>
                    <p className="text-xs text-[#424844]">
                      Silent Academic Zone • Desk Capacity: 120+
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#10271E] text-[#ffd082] text-[10px] font-bold uppercase tracking-wider shrink-0">
                  Live Open
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Numbers & Trust Bar */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#f1ede6] rounded-2xl p-8 border border-[#EDE5D8] shadow-sm">
          {STATS.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-2">
              <span className="font-display text-3xl sm:text-4xl font-bold text-[#10271E] tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm font-bold text-[#1c1c17] mt-1">{stat.label}</span>
              <span className="text-xs text-[#727974]">{stat.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Core Mission & Vision Split Cards */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative bg-[#10271E] text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col justify-between overflow-hidden border border-[#EDE5D8]/10">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-white/5 pointer-events-none" />
            <div className="flex flex-col gap-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#ffd082]/20 flex items-center justify-center text-[#ffd082]">
                  <Target className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#ffd082] uppercase tracking-widest">
                    Purpose
                  </span>
                  <h3 className="font-display text-2xl font-bold text-white">Our Mission</h3>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#f1ede6] leading-relaxed italic font-serif">
                &ldquo;To make quiet, premium, and distraction-free learning environments accessible
                and affordable to every serious aspirant—ensuring no dream is derailed by lack of
                focus infrastructure.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 flex items-center justify-between text-xs text-[#779083] font-semibold border-t border-white/10 z-10">
              <span>Commitment: Focus First</span>
              <ArrowRight className="w-4 h-4 text-[#ffd082]" />
            </div>
          </div>

          {/* Vision Card */}
          <div className="relative bg-white text-[#1c1c17] rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-between overflow-hidden border border-[#EDE5D8]">
            <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#ffd082]/20 pointer-events-none" />
            <div className="flex flex-col gap-4 z-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#f7f3eb] flex items-center justify-center text-[#7b5815]">
                  <Eye className="w-6 h-6" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-[#7b5815] uppercase tracking-widest">
                    Aspiration
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#10271E]">Our Vision</h3>
                </div>
              </div>
              <p className="text-base sm:text-lg text-[#424844] leading-relaxed italic font-serif">
                &ldquo;To build India’s most trusted network of student-centric libraries where
                ambitions transform into rank-holding achievements, producing future civil servants,
                doctors, engineers, and scholars.&rdquo;
              </p>
            </div>
            <div className="mt-8 pt-4 flex items-center justify-between text-xs text-[#727974] font-semibold border-t border-[#EDE5D8] z-10">
              <span>Milestone: 10,000+ Alumni</span>
              <Award className="w-4 h-4 text-[#7b5815]" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We Started StudyHive (4 Pillars of Excellence) */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-12">
          <span className="px-3 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] text-xs font-bold uppercase tracking-wider mb-2 border border-[#ffd082]/30">
            The 4 Pillars of Excellence
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1c1c17] tracking-tight">
            Why We Started StudyHive
          </h2>
          <p className="text-sm sm:text-base text-[#424844] mt-2">
            We reimagined the library experience from the ground up, stripping away all friction
            that stands between a scholar and productive deep-work hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EDE5D8] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f7f3eb] flex items-center justify-center text-[#7b5815]">
                <VolumeX className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#7b5815] uppercase tracking-wider">
                Pillar 01
              </span>
              <h3 className="font-display text-lg font-bold text-[#1c1c17]">
                Absolute Silence &amp; Discipline
              </h3>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Zero mobile calls or whispering inside active study halls. Monitored strictly by
                full-time proctors to preserve uncompromised flow state.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#7b5815] text-xs font-bold border-t border-[#EDE5D8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Acoustically Treated</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EDE5D8] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f7f3eb] flex items-center justify-center text-[#7b5815]">
                <Armchair className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#7b5815] uppercase tracking-wider">
                Pillar 02
              </span>
              <h3 className="font-display text-lg font-bold text-[#1c1c17]">
                Modern Ergonomics
              </h3>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Custom lumbar-support seating and partitioned extra-wide oak desks tested
                rigorously for 10+ hour continuous study cycles without fatigue.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#7b5815] text-xs font-bold border-t border-[#EDE5D8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Eye-Safe 4000K Lighting</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EDE5D8] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f7f3eb] flex items-center justify-center text-[#7b5815]">
                <IndianRupee className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#7b5815] uppercase tracking-wider">
                Pillar 03
              </span>
              <h3 className="font-display text-lg font-bold text-[#1c1c17]">
                Student Affordability
              </h3>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Daily passes from just ₹99, transparent monthly plans, and zero lock-in deposits.
                High-end learning infrastructure without heavy financial burdens.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#7b5815] text-xs font-bold border-t border-[#EDE5D8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>No Hidden Fees</span>
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#EDE5D8] hover:shadow-md transition-shadow flex flex-col justify-between">
            <div className="flex flex-col gap-3">
              <div className="w-12 h-12 rounded-full bg-[#f7f3eb] flex items-center justify-center text-[#7b5815]">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold text-[#7b5815] uppercase tracking-wider">
                Pillar 04
              </span>
              <h3 className="font-display text-lg font-bold text-[#1c1c17]">
                Thriving Peer Community
              </h3>
              <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                Be surrounded by focused peers preparing for UPSC, UPPSC, NEET, JEE, GATE, and CA
                examinations. Motivation and accountability are contagious here.
              </p>
            </div>
            <div className="mt-4 pt-3 flex items-center gap-1.5 text-[#7b5815] text-xs font-bold border-t border-[#EDE5D8]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>High-Focus Vibe</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Anatomy of a Distraction-Free Desk */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[#f1ede6] rounded-2xl p-8 lg:p-12 border border-[#EDE5D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 flex flex-col gap-4">
              <span className="text-xs font-bold text-[#7b5815] uppercase tracking-wider">
                Space Architecture
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1c1c17] leading-tight">
                Anatomy of the StudyHive Dedicated Carrel
              </h3>
              <p className="text-sm text-[#424844] leading-relaxed">
                Every detail in our reading hall is intentional. From non-reflective matte desk
                coatings to power strips placed right above keyboard level to avoid bending down.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#7b5815] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1c1c17]">
                      Individual Acoustic Felt Partitions
                    </h4>
                    <p className="text-xs text-[#424844]">
                      Blocks lateral peripheral distractions and absorbs mechanical typing clicks.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#7b5815] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1c1c17]">
                      Dedicated 3-Pin Point &amp; Fast USB-C Port
                    </h4>
                    <p className="text-xs text-[#424844]">
                      Power laptops, iPads, and mobile test devices without sharing sockets.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#7b5815] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-[#1c1c17]">
                      High-CRI Warm White Study Lamps
                    </h4>
                    <p className="text-xs text-[#424844]">
                      Eliminates blue light harshness during marathon night-shift sessions.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden shadow-md border border-[#EDE5D8]">
                <img
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Close-up architectural photograph of a sleek wooden private study carrel with warm reading lamp"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmxqh60gMHOJ4XFsCud-8CqYjbyd7IXOAtU-PFSXEreuvRC4RrcLHzdg8bXGqt23-iieg_MO8Pxm6oCpUnBrTcrUwbZx5DGBv7M5d3J-RX54vcrICvuisYgD1kvHrUsQh5kfM83l9gvuKYczqOSUx0hVJICl-1UO4NRW-miRm9tlmdnZ56nXXaZ7VC8wmaM5ngQgJlbweXhdsbo4yTCJ5F1ijlc3Di5LSJYbSNrow"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md border border-[#EDE5D8]">
                <img
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  alt="Atmospheric view of students sitting in silent individual study cubicles in Lucknow"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIrd_23Nw18JbkkA9dcluRahuPfW4Yfv5kQmHT-uC2uVo_dqtUMFieB5685cOAsqo0lhTmnrwuoXnXns40DFfT1Uu8dC9CYBofrXwzIp_v0CJC-9ct2a5qxKRi5zpyIgMrgyBWI8oEbgNyym9EZLU2OPxD2tfjPoYIf1eCJOW-yGRVS05xnz_PxNoYPoDmaYa_Bkt8WHVdc1QXu05fbuDq0IvgCITfr8xUawwVKGM"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Facility Tour & Location Spotlight */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-[#EDE5D8] flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] text-xs font-bold uppercase tracking-wider">
                  Visit Campus
                </span>
                <span className="text-xs text-[#727974] font-medium">Mohanlalganj Flagship</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#1c1c17]">
                Convenient, Safe &amp; Centrally Located
              </h3>

              <p className="text-sm text-[#424844] leading-relaxed">
                Located on the prominent main corridor of Mohanlalganj with robust CCTV surveillance,
                well-lit street access, and designated two-wheeler parking for day &amp; night
                scholars.
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f3eb]">
                  <MapPin className="w-5 h-5 text-[#7b5815] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                      Campus Address
                    </h4>
                    <p className="text-xs sm:text-sm text-[#424844] mt-0.5">{BRAND.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f3eb]">
                  <Clock className="w-5 h-5 text-[#7b5815] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                      Operating Timings
                    </h4>
                    <p className="text-xs sm:text-sm text-[#424844] mt-0.5">
                      Open All 365 Days •{" "}
                      <strong className="text-[#10271E] font-semibold">{BRAND.hours}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-xl bg-[#f7f3eb]">
                  <Phone className="w-5 h-5 text-[#7b5815] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                      Facility Helpdesk
                    </h4>
                    <p className="text-xs sm:text-sm text-[#424844] mt-0.5">
                      {BRAND.phone} • {BRAND.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-3 flex-wrap">
              <Link
                href="/book-seat"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#10271E] text-white rounded-full text-xs sm:text-sm font-semibold hover:bg-[#001009] shadow-sm transition-all"
              >
                <span>Schedule an On-site Tour</span>
                <ArrowRight className="w-4 h-4 text-[#ffd082]" />
              </Link>

              <button
                type="button"
                onClick={copyAddress}
                className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-[#f1ede6] text-[#1c1c17] text-xs sm:text-sm font-semibold hover:bg-[#ece8e0] transition-colors"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? "Copied!" : "Copy Address"}</span>
              </button>
            </div>
          </div>

          {/* Location Map Visual */}
          <div className="lg:col-span-6 flex flex-col rounded-2xl overflow-hidden shadow-sm bg-[#f1ede6] min-h-[380px] border border-[#EDE5D8] relative">
            <img
              className="w-full h-full object-cover min-h-[380px]"
              alt="Map view of Mohanlalganj, Lucknow, Uttar Pradesh"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0BpjMjFmsakcKiJ-4Hwo-bY1ec2znOtbZboDELSK6PHEoVDmEqgeRTKPFNdnieXYnnhLoOfTXyV6qP4MVmmDaea1aq8wKwadFTZC9TcpGLFhr69w4y3XkI-3J7uu8AHHQMAGKvtmonzV68OxapnZnEPdv_OLA7qQ8i4kdvmOQeFDm2gcPsMslPvZVxHqW8f70HcUm8D-0pNAXFHbbfd5ay5GHB8BAdvQrKWEW4W0"
            />
            {/* Map Overlay Pin Card */}
            <div className="absolute top-6 left-6 p-4 rounded-xl bg-white/95 backdrop-blur-md shadow-lg max-w-xs border border-[#EDE5D8]">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D9AD62] animate-ping" />
                <span className="text-sm font-bold text-[#1c1c17]">StudyHive Flagship</span>
              </div>
              <p className="text-xs text-[#424844]">
                Near Tehsil Compound, Mohanlalganj. Direct highway connectivity.
              </p>
              <div className="mt-3 flex items-center gap-2 text-xs font-bold text-[#7b5815]">
                <MapPin className="w-3.5 h-3.5" />
                <span>5 mins from Mohanlalganj Crossing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <CTASection
        tag="Take The Next Step"
        title="Your Goals Deserve a Better Study Environment"
        description="Visit StudyHive today and experience the difference of a space crafted purely for your success. Daily trial passes start at just ₹99."
        primaryButtonText="Reserve Your Seat Now"
      />
    </div>
  );
}
