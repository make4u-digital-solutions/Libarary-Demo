"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Wifi,
  Zap,
  Droplets,
  Sparkles,
  Lock,
  Users,
  Snowflake,
  ShieldCheck,
  Check,
  Minus,
  ArrowRight,
} from "lucide-react";
import SpaceCard from "@/components/SpaceCard";
import CTASection from "@/components/CTASection";
import { SPACES } from "@/data/libraryData";

export default function SpacesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSpaces =
    activeFilter === "all"
      ? SPACES
      : SPACES.filter((space) => space.id === activeFilter);

  const infrastructureItems = [
    {
      icon: <Wifi className="w-6 h-6 text-[#7b5815]" />,
      title: "High-Speed Wi-Fi",
      desc: "Dual-band 300 Mbps fiber line with automatic backup failover.",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#7b5815]" />,
      title: "Power Backup",
      desc: "100% Inverter & dedicated DG generator fallback. Zero blackout downtime.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#7b5815]" />,
      title: "Purified RO Alkaline Water",
      desc: "Multi-stage filtration with hot, cold, and ambient copper dispensaries.",
    },
    {
      icon: <Sparkles className="w-6 h-6 text-[#7b5815]" />,
      title: "Sanitized Restrooms",
      desc: "Hourly hospital-grade cleaning cycles with separate male and female zones.",
    },
    {
      icon: <Lock className="w-6 h-6 text-[#7b5815]" />,
      title: "Locker Facilities",
      desc: "Secure keyed and digital combination personal book and gadget storage.",
    },
    {
      icon: <Users className="w-6 h-6 text-[#7b5815]" />,
      title: "Discussion & Doubt Room",
      desc: "Sound-isolated whiteboarding space for collaborative peer study sessions.",
    },
    {
      icon: <Snowflake className="w-6 h-6 text-[#7b5815]" />,
      title: "Climate Controlled AC",
      desc: "Whisper-quiet inverter AC maintaining 23°C alongside HEPA air purifiers.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#7b5815]" />,
      title: "24x7 CCTV Security",
      desc: "HD surveillance coverage across corridors and biometric entrance scanner.",
    },
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Header & Filter Switcher */}
      <section className="w-full relative overflow-hidden pb-12 pt-10">
        {/* Ambient Backdrop Aura */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#ffd082]/20 via-[#f1ede6]/40 to-transparent blur-3xl pointer-events-none -z-10" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] mb-3 border border-[#ffd082]/40">
              <BookOpen className="w-4 h-4 text-[#7b5815]" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Our Curated Study Zones
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1c1c17] mb-3">
              Find Your Perfect Study Space
            </h1>

            <p className="text-base sm:text-lg text-[#424844] max-w-2xl leading-relaxed">
              Choose an environment tailored to your unique study style and preparation needs.
              Designed specifically for deep focus, long shifts, and intellectual triumph.
            </p>

            {/* Quick Filter Switcher */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 bg-[#f1ede6] rounded-full border border-[#EDE5D8]">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                All Spaces (3)
              </button>
              <button
                onClick={() => setActiveFilter("open")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === "open"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                Open Reading
              </button>
              <button
                onClick={() => setActiveFilter("cubicle")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === "cubicle"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                Individual Cubicles
              </button>
              <button
                onClick={() => setActiveFilter("cabin")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  activeFilter === "cabin"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                Private Cabins
              </button>
            </div>
          </div>

          {/* Space Feature Cards */}
          <div className="flex flex-col gap-8 mb-16">
            {filteredSpaces.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Amenities & Infrastructure Grid */}
      <section className="w-full bg-[#f7f3eb] py-20 border-t border-b border-[#EDE5D8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] text-xs font-bold uppercase tracking-widest mb-2 border border-[#ffd082]/30">
                <span>Sanctuary Infrastructure</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1c1c17]">
                Designed for 12-Hour Continuous Focus
              </h2>
              <p className="text-sm sm:text-base text-[#424844] mt-2 leading-relaxed">
                Every square foot is optimized for cognitive stamina, uninterrupted power, and
                zero logistical friction.
              </p>
            </div>

            {/* Live Acoustic Pill */}
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-sm border border-[#EDE5D8] w-fit">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ffd082] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7b5815]" />
              </span>
              <span className="text-xs sm:text-sm text-[#1c1c17]">
                Ambient Noise Level: <strong>&lt; 32 dB</strong> (Soundproof)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureItems.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-sm border border-[#EDE5D8] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between min-h-[190px]"
              >
                <div className="w-12 h-12 rounded-xl bg-[#ffd082]/20 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-lg font-bold text-[#1c1c17] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Comparison Matrix */}
      <section className="w-full py-20 bg-[#fdf9f1]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1c1c17] mb-2">
              Compare Spaces Side-by-Side
            </h2>
            <p className="text-sm text-[#424844]">
              Match your study routine with the exact acoustic and spatial privacy level you need.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-[#EDE5D8] overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-[#f1ede6] text-[#1c1c17] text-sm font-bold border-b border-[#EDE5D8]">
                  <th className="py-4 px-6">Zone Features</th>
                  <th className="py-4 px-6 text-center">Open Reading Area</th>
                  <th className="py-4 px-6 text-center bg-[#10271E] text-white">
                    Individual Cubicles
                  </th>
                  <th className="py-4 px-6 text-center">Private Study Cabins</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EDE5D8] text-sm text-[#1c1c17]">
                <tr>
                  <td className="py-4 px-6 font-semibold">Base Pricing</td>
                  <td className="py-4 px-6 text-center text-[#424844]">From ₹99/day</td>
                  <td className="py-4 px-6 text-center font-bold text-[#7b5815] bg-[#f7f3eb]">
                    From ₹1,499/month
                  </td>
                  <td className="py-4 px-6 text-center font-bold">From ₹2,499/month</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Acoustic Isolation</td>
                  <td className="py-4 px-6 text-center text-[#424844]">Whisper Zone (&lt; 35 dB)</td>
                  <td className="py-4 px-6 text-center font-medium bg-[#f7f3eb]">
                    Felt Baffles (&lt; 28 dB)
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-[#7b5815]">
                    Double-Glazed Soundproof
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Seat Ownership</td>
                  <td className="py-4 px-6 text-center text-[#424844]">First-come, first-served</td>
                  <td className="py-4 px-6 text-center font-medium bg-[#f7f3eb]">
                    Reserved Assigned Desk
                  </td>
                  <td className="py-4 px-6 text-center font-bold">Permanent Private Room</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Reading Lamp</td>
                  <td className="py-4 px-6 text-center text-[#424844]">Ambient Chandeliers</td>
                  <td className="py-4 px-6 text-center font-medium bg-[#f7f3eb]">
                    Dedicated 4000K LED Lamp
                  </td>
                  <td className="py-4 px-6 text-center font-bold">Adjustable Task Luminaire</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Personal Storage Locker</td>
                  <td className="py-4 px-6 text-center text-[#727974]">Optional (₹200/mo)</td>
                  <td className="py-4 px-6 text-center font-medium text-emerald-700 bg-[#f7f3eb]">
                    Included Free
                  </td>
                  <td className="py-4 px-6 text-center font-bold text-emerald-700">
                    Jumbo In-Cabin Locker
                  </td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold">Pantry &amp; RO Water</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-5 h-5 text-[#7b5815] mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center bg-[#f7f3eb]">
                    <Check className="w-5 h-5 text-[#7b5815] mx-auto" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-5 h-5 text-[#7b5815] mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        tag="Ready to Book?"
        title="Find the Zone Where Your Highest Focus Lives"
        description="Seats are strictly capped to ensure 100% pin-drop quietness. Reserve your space now."
        primaryButtonText="Book Your Space"
      />
    </div>
  );
}
