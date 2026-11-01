"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Star, Check, Award, BookOpen, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SpaceCard from "@/components/SpaceCard";
import PlanCard from "@/components/PlanCard";
import AmenityCard from "@/components/AmenityCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { SPACES, PLANS, FACILITIES, TESTIMONIALS } from "@/data/libraryData";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Immersive Hero Section */}
      <HeroSection />

      {/* 2. Facilities & Thoughtful Amenities Section */}
      <section className="w-full py-20 bg-[#f7f3eb] text-[#1c1c17] border-b border-[#EDE5D8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#edbf72]/20 text-[#7b5815] text-xs font-bold uppercase tracking-wider mb-3 border border-[#edbf72]/30">
                <Award className="w-3.5 h-3.5" />
                <span>Scholarly Amenities</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1c17] leading-tight">
                Architected Exclusively for Deep Cognitive Flow
              </h2>
            </div>
            <p className="text-sm sm:text-base text-[#424844] max-w-md leading-relaxed">
              Every detail is calibrated to eliminate sensory friction, preserving mental energy
              for UPSC, NEET, CA, and academic excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility, index) => (
              <AmenityCard key={index} facility={facility} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Study Spaces Preview */}
      <section className="w-full py-20 bg-[#fdf9f1] text-[#1c1c17]" id="spaces-preview">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edbf72]/20 text-[#7b5815] text-xs font-bold uppercase tracking-wider mb-2 border border-[#edbf72]/30">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Study Environments</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1c17]">
                Explore Our Study Spaces
              </h2>
            </div>

            <Link
              href="/spaces"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#7b5815] hover:text-[#5f4100] transition-colors group"
            >
              <span>View All Spaces</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* List of 3 Spaces */}
          <div className="space-y-8">
            {SPACES.map((space) => (
              <SpaceCard key={space.id} space={space} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Membership Plans Preview */}
      <section className="w-full py-20 bg-[#f1ede6] text-[#1c1c17] border-t border-b border-[#EDE5D8]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#edbf72]/20 text-[#7b5815] text-xs font-bold uppercase tracking-wider mb-2 border border-[#edbf72]/30">
              <Award className="w-3.5 h-3.5" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#1c1c17] mb-3">
              Choose a Plan That Fits Your Routine
            </h2>
            <p className="text-sm sm:text-base text-[#424844] leading-relaxed">
              Simple, honest memberships designed for daily test-takers or multi-month competitive
              preparation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/plans"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#10271E] hover:text-[#7b5815] transition-colors group"
            >
              <span>Compare all plan features &amp; FAQs</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Testimonials & Community Success */}
      <section className="w-full py-20 bg-[#fdf9f1] text-[#1c1c17]">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#edbf72]/20 text-[#7b5815] text-xs font-bold uppercase tracking-wider mb-2 border border-[#edbf72]/30">
                <Star className="w-3.5 h-3.5 fill-[#7b5815]" />
                <span>Voices of Success</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#1c1c17]">
                From Our Mohanlalganj Community
              </h2>
            </div>

            <div className="flex items-center gap-2 text-[#D9AD62]">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D9AD62] text-[#D9AD62]" />
                ))}
              </div>
              <span className="text-sm font-bold text-[#1c1c17] ml-2">
                4.8 / 5 Rating across 280+ Reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <TestimonialCard key={idx} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Final High-Impact CTA Banner */}
      <CTASection />
    </div>
  );
}
