"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Star,
  Wifi,
  Armchair,
  Snowflake,
  VolumeX,
  ShieldCheck,
  Award,
} from "lucide-react";

export default function HeroSection() {
  const scrollToSpaces = () => {
    const el = document.getElementById("spaces-preview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#001009] overflow-hidden text-white">
      {/* Ambient glowing aura */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-[#7b5815]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-[#10271e]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 lg:pt-16 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Text & Content (Left 7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start gap-6 z-10"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffd082]/15 text-[#ffdeab] text-xs font-semibold uppercase tracking-wider shadow-sm border border-[#ffd082]/20">
              <Award className="w-4 h-4 text-[#ffd082]" />
              <span>Premium Study Library in Mohanlalganj, Lucknow</span>
            </div>

            {/* Main Headline with Editorial Italic */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fdf9f1] tracking-tight leading-[1.15]">
              A Quiet &amp; Focused Study Space for{" "}
              <span className="text-[#ffdeab] italic font-normal">Serious Learners</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#f1ede6] max-w-xl leading-relaxed">
              Distraction-free environment, ergonomic seating, high-speed Wi-Fi, and all the
              scholarly essentials you need to prepare, focus, and excel in competitive
              examinations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/book-seat"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#ffd082] text-[#271900] font-semibold text-base rounded-full shadow-lg hover:bg-[#ffdeab] hover:scale-105 active:scale-95 transition-all"
              >
                <span>Book Your Seat</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                onClick={scrollToSpaces}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white/10 text-[#fdf9f1] font-semibold text-base rounded-full hover:bg-white/20 transition-all border border-white/10"
              >
                <PlayCircle className="w-5 h-5 text-[#ffd082]" />
                <span>Virtual Tour</span>
              </button>
            </div>

            {/* Social Proof & Trust Strip */}
            <div className="w-full pt-8 grid grid-cols-3 gap-4 border-t border-white/10 mt-2">
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  2,500+
                </span>
                <span className="text-xs sm:text-sm text-[#779083]">Active Aspirants</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-semibold text-white">
                  99%
                </span>
                <span className="text-xs sm:text-sm text-[#779083]">Quiet Satisfaction</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-[#ffdeab]">
                  <span className="font-display text-2xl sm:text-3xl font-semibold text-white">
                    4.8
                  </span>
                  <Star className="w-4 h-4 fill-[#ffd082] text-[#ffd082]" />
                </div>
                <span className="text-xs sm:text-sm text-[#779083]">Google Reviews</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Showcase (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-[#10271e] border border-white/10">
              <img
                className="w-full h-[420px] sm:h-[460px] object-cover rounded-2xl filter brightness-[0.92]"
                alt="A warm, atmospheric academic reading library hall with polished warm wood individual study booths in Mohanlalganj Lucknow"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh7M32d0M5gCQavjPsO5xzjbxq-SsZpNWs4rUmQ6B4aeuoyF_ikUCWZqNo0CUxjr48SxJd5EQlIID4oyc-rtyk-xLkUlrIU1q_fJc2ZEdW_pU_52aRNIl7AU493lu6PlKK3bZSXihtvlkdBPGEgV-yHD-6w86-mXKAbhvEnlcl38yeS1FEK8PAfVeJ-uNgdkJaxk4Xk7N8nqSJ2gaRijyzwwbA0NYZOTwzcJDtg74"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001009] via-transparent to-transparent opacity-80" />

              {/* Live Occupancy Badge Overlay */}
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#001009]/85 backdrop-blur-md border border-white/10 flex items-center justify-between text-white shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffdeab] opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-[#ffd082]" />
                  </span>
                  <div>
                    <p className="text-xs sm:text-sm font-semibold text-white">
                      Current Silence Index
                    </p>
                    <p className="text-[11px] text-[#edbf72]">
                      Strict Pin-Drop Protocol • 28 dB
                    </p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-[#ffdeab] text-[11px] font-semibold uppercase tracking-wider">
                  Active Now
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Feature Highlight Banner */}
      <div className="w-full bg-[#10271e]/90 backdrop-blur-md py-6 border-t border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffd082]/15 flex items-center justify-center text-[#ffdeab] shrink-0">
                <Wifi className="w-5 h-5 text-[#ffd082]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">300 Mbps</p>
                <p className="text-xs text-[#779083]">Dual Fiber Wi-Fi</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffd082]/15 flex items-center justify-center text-[#ffdeab] shrink-0">
                <Armchair className="w-5 h-5 text-[#ffd082]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Ergonomic</p>
                <p className="text-xs text-[#779083]">Orthopedic Seating</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffd082]/15 flex items-center justify-center text-[#ffdeab] shrink-0">
                <Snowflake className="w-5 h-5 text-[#ffd082]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Climate AC</p>
                <p className="text-xs text-[#779083]">Glare-free 4000K Light</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffd082]/15 flex items-center justify-center text-[#ffdeab] shrink-0">
                <VolumeX className="w-5 h-5 text-[#ffd082]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">Silent Sanctuary</p>
                <p className="text-xs text-[#779083]">Zero Interruption</p>
              </div>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-3 col-span-2 md:col-span-1">
              <div className="w-10 h-10 rounded-full bg-[#ffd082]/15 flex items-center justify-center text-[#ffdeab] shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#ffd082]" />
              </div>
              <div>
                <p className="text-sm font-bold text-white">CCTV 24x7</p>
                <p className="text-xs text-[#779083]">Secure RFID Entry</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
