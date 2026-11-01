"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Award,
  Calendar,
  Check,
  ChevronDown,
  ChevronUp,
  CreditCard,
  HelpCircle,
  Phone,
  RefreshCw,
  Shield,
  Star,
  Zap,
} from "lucide-react";
import PlanCard from "@/components/PlanCard";
import CTASection from "@/components/CTASection";
import { PLANS, FAQS, BRAND } from "@/data/libraryData";

export default function PlansPage() {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // 'daily' | 'monthly' | 'quarterly'
  const [openFaq, setOpenFaq] = useState(1);

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Header & Cadence Selector */}
      <section className="relative w-full overflow-hidden bg-[#fdf9f1] pt-10 pb-16">
        {/* Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#ffd082]/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-[#ffd082]/20 text-[#795714] text-xs font-bold uppercase tracking-wider mb-3 border border-[#ffd082]/30">
              <Award className="w-3.5 h-3.5" />
              <span>Membership Plans &amp; Passes</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#1c1c17] mb-3 tracking-tight">
              Choose a Plan That Fits Your Routine
            </h1>

            <p className="text-base sm:text-lg text-[#424844] max-w-xl leading-relaxed">
              Transparent, flexible, and student-friendly pricing with no hidden registration fees
              or lock-in contracts.
            </p>

            {/* Interactive Cadence Bar */}
            <div className="mt-8 p-1.5 bg-[#f1ede6] rounded-full flex items-center gap-1 shadow-sm border border-[#EDE5D8]">
              <button
                type="button"
                onClick={() => setBillingPeriod("daily")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all ${
                  billingPeriod === "daily"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                Daily Pass
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("monthly")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  billingPeriod === "monthly"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                <span>Monthly</span>
                <span className="px-2 py-0.5 rounded-full bg-[#ffd082] text-[#271900] text-[10px] font-bold">
                  Save 15%
                </span>
              </button>
              <button
                type="button"
                onClick={() => setBillingPeriod("quarterly")}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-1.5 ${
                  billingPeriod === "quarterly"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#1c1c17]"
                }`}
              >
                <span>Quarterly</span>
                <span className="px-2 py-0.5 rounded-full bg-[#edbf72]/40 text-[#795714] text-[10px] font-bold">
                  Save 25%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch mb-16">
            {PLANS.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>

          {/* Trust Assurance Strip */}
          <div className="bg-[#ece8e0] rounded-2xl p-6 sm:p-8 mb-16 border border-[#EDE5D8]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5815] shrink-0 shadow-sm">
                  <RefreshCw className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c17]">Flexible Upgrade</span>
                  <span className="text-xs text-[#424844]">Switch plans anytime</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5815] shrink-0 shadow-sm">
                  <Shield className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c17]">100% Encrypted</span>
                  <span className="text-xs text-[#424844]">Secured via UPI &amp; Razorpay</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5815] shrink-0 shadow-sm">
                  <Zap className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c17]">Instant Allotment</span>
                  <span className="text-xs text-[#424844]">Digital pass in 2 minutes</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#7b5815] shrink-0 shadow-sm">
                  <Award className="w-5 h-5" />
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-[#1c1c17]">Peace of Mind</span>
                  <span className="text-xs text-[#424844]">3-day refund guarantee</span>
                </div>
              </div>
            </div>
          </div>

          {/* Photographic Ambience Showcase (2-Image Strip) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center mb-16">
            <div className="md:col-span-7 rounded-2xl overflow-hidden shadow-md relative group border border-[#EDE5D8]">
              <img
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                alt="An atmospheric, quiet study library with rich dark wood private study cubicles"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtGxiu0UQntnzvUOxAyj-1u1FseYENYEV_JhFOaKYNKftmYVG08Z_HK-ju12lI66C0ybKQNOJBOHNi5pc5BrKvWbZF5-iwB4VN2D8iLL8U4ox5SOxQv2KEq-qwNmnboUZTNpqHExI1yYmIq5vHlIxA077XoW8SLotblH7xqyYu8Be_ueVknTmWrx1wo_GB6SZ-aKAUbXDGZNaK_vpI5SMIUZydUvqhS1tN8B_XtyM"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10271E]/90 via-transparent to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="text-xs font-bold text-[#ffdeab] uppercase tracking-widest block mb-1">
                    Acoustic Standards
                  </span>
                  <h4 className="font-display text-2xl font-semibold">
                    Pin-Drop Silence Guaranteed
                  </h4>
                  <p className="text-xs sm:text-sm text-[#e6e2da] mt-1">
                    Soft sound-absorbing carpets and partition felt ensure no external distractions.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col gap-6">
              <div className="rounded-2xl overflow-hidden shadow-sm relative group border border-[#EDE5D8]">
                <img
                  className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-700"
                  alt="A clean modern library reading lounge with ergonomic chairs"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBsrpbvJ_kcBqtjbfIG9vKtEmLJqP2ujYzNOSUak7C7dL2g4fibpoSU_YpQNq0hcsbmxyxSVFag720P-Y86ZjJNpFlhKHJ6v_i6jxyiiQStnTDjtXY-nChkqLAyrCsHGEhG2dXxyovhUMFL3Z8NFqcmtBgKYTTvuoFZ6dBkVtS7gysq5zaX02T5h2qahNKadlyFyuuei1JIpB7Pqsw3RCkFlSmE-F0P5xdB12Wb2g"
                />
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#EDE5D8]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ffd082]/20 flex items-center justify-center text-[#7b5815]">
                    <Zap className="w-4 h-4" />
                  </div>
                  <h4 className="font-display text-lg font-bold text-[#1c1c17]">
                    Climate &amp; Pure Air
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-[#424844] leading-relaxed">
                  Centralized whisper-quiet inverter air conditioning maintaining a steady 23°C
                  alongside HEPA air purifiers for optimum cognitive alertness.
                </p>
              </div>
            </div>
          </div>

          {/* Full Features Comparison Matrix */}
          <div className="mb-16">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h2 className="font-display text-3xl font-semibold text-[#1c1c17]">
                Compare All Privileges
              </h2>
              <p className="text-sm text-[#424844] mt-1">
                Choose the exact level of isolation and dedicated amenities you need.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-[#EDE5D8] overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[640px]">
                <thead>
                  <tr className="bg-[#f1ede6] text-[#1c1c17] text-sm font-bold border-b border-[#EDE5D8]">
                    <th className="py-4 px-6">Features &amp; Facilities</th>
                    <th className="py-4 px-6 text-center">Basic (Day Pass)</th>
                    <th className="py-4 px-6 text-center bg-[#10271E] text-white">
                      Premium (Monthly)
                    </th>
                    <th className="py-4 px-6 text-center">Elite (Quarterly)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EDE5D8] text-sm text-[#1c1c17]">
                  <tr>
                    <td className="py-4 px-6 font-semibold">Seating Format</td>
                    <td className="py-4 px-6 text-center text-[#424844]">Open Long Desk</td>
                    <td className="py-4 px-6 text-center font-bold text-[#10271E] bg-[#f7f3eb]">
                      Partitioned Cubicle
                    </td>
                    <td className="py-4 px-6 text-center font-bold">Private Acoustic Cabin</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Desk Ownership</td>
                    <td className="py-4 px-6 text-center text-[#424844]">
                      First-come, first-served
                    </td>
                    <td className="py-4 px-6 text-center text-[#1c1c17] bg-[#f7f3eb] font-semibold">
                      Same Reserved Seat
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#7b5815]">
                      Permanent Personal Desk
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Wi-Fi Bandwidth</td>
                    <td className="py-4 px-6 text-center text-[#424844]">50 Mbps Fiber</td>
                    <td className="py-4 px-6 text-center text-[#1c1c17] bg-[#f7f3eb] font-semibold">
                      150 Mbps Dedicated
                    </td>
                    <td className="py-4 px-6 text-center font-bold">300 Mbps Dual-Band</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Personal Locker</td>
                    <td className="py-4 px-6 text-center text-[#727974]">-</td>
                    <td className="py-4 px-6 text-center text-emerald-700 bg-[#f7f3eb] font-semibold">
                      Included Free
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-emerald-700">
                      Jumbo Cabin Locker
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Discussion Room Access</td>
                    <td className="py-4 px-6 text-center text-[#727974]">-</td>
                    <td className="py-4 px-6 text-center text-[#424844] bg-[#f7f3eb]">
                      2 hrs / month
                    </td>
                    <td className="py-4 px-6 text-center font-bold">6 hrs / month</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold">Free Laser Printing</td>
                    <td className="py-4 px-6 text-center text-[#424844]">Chargeable (₹2/pg)</td>
                    <td className="py-4 px-6 text-center text-[#424844] bg-[#f7f3eb]">
                      15 pages / mo
                    </td>
                    <td className="py-4 px-6 text-center font-bold text-[#7b5815]">
                      50 pages / mo
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="max-w-3xl mx-auto mb-16">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f1ede6] text-[#1c1c17] text-xs font-bold uppercase tracking-wider mb-2 border border-[#EDE5D8]">
                <HelpCircle className="w-3.5 h-3.5 text-[#7b5815]" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="font-display text-3xl font-semibold text-[#1c1c17]">
                Common Queries &amp; Policies
              </h2>
            </div>

            <div className="flex flex-col gap-3">
              {FAQS.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-xl overflow-hidden shadow-sm border border-[#EDE5D8]"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 flex items-center justify-between text-left hover:bg-[#f7f3eb] transition-colors gap-4"
                    >
                      <span className="text-base font-semibold text-[#1c1c17]">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-[#7b5815] shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#7b5815] shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0 text-sm text-[#424844] leading-relaxed border-t border-[#f7f3eb]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Action Callout Banner */}
          <div className="bg-[#10271E] rounded-2xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl mb-12 border border-[#EDE5D8]/10">
            <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-[#ffd082]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center">
              <span className="text-xs font-bold text-[#ffdeab] uppercase tracking-wider mb-2">
                Visit Before You Decide
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2 text-[#fdf9f1]">
                Experience the Silence First-Hand
              </h3>
              <p className="text-sm sm:text-base text-[#e6e2da] mb-8 leading-relaxed">
                Stop by Mohanlalganj campus for a complimentary 2-hour trial seat. Test our
                ergonomics, high-speed Wi-Fi, and tranquil study ambience today.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/book-seat"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#ffd082] hover:bg-[#ffdeab] text-[#271900] font-semibold text-sm transition-all shadow-md active:scale-95 hover:scale-105"
                >
                  <span>Book Free Trial Seat</span>
                  <Zap className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/10"
                >
                  <Phone className="w-4 h-4 text-[#ffd082]" />
                  <span>Call Reception</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        tag="Student Memberships"
        title="Ready to Elevate Your Academic Journey?"
        description="Pick the plan that aligns with your timeline. Zero hidden fees, cancel or upgrade anytime."
        primaryButtonText="Choose Your Pass"
      />
    </div>
  );
}
