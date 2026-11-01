"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, Star, ArrowRight, Calendar, Award, Shield } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function PlanCard({ plan }) {
  const router = useRouter();
  const { choosePlan, setStep } = useBooking();

  const handleSelectPlan = () => {
    choosePlan(plan.id);
    setStep(1);
    router.push("/book-seat");
  };

  const getPlanIcon = (id) => {
    switch (id) {
      case "daily":
        return <Calendar className="w-5 h-5 text-[#10271E]" />;
      case "monthly":
        return <Award className="w-5 h-5 text-[#7b5815]" />;
      case "quarterly":
        return <Shield className="w-5 h-5 text-[#10271E]" />;
      default:
        return <Calendar className="w-5 h-5 text-[#10271E]" />;
    }
  };

  return (
    <div
      className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative border ${
        plan.isPopular
          ? "bg-white shadow-xl border-[#D9AD62] lg:-translate-y-2 ring-1 ring-[#D9AD62]/40"
          : "bg-white shadow-sm border-[#EDE5D8] hover:shadow-md hover:-translate-y-1"
      }`}
    >
      {/* Top Floating Popular Badge */}
      {plan.isPopular && (
        <div className="absolute -top-3.5 right-6 px-4 py-1 rounded-full bg-[#ffd082] text-[#271900] text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm border border-[#D9AD62]">
          <Star className="w-3.5 h-3.5 fill-[#271900]" />
          <span>Most Popular</span>
        </div>
      )}

      <div>
        {/* Header Strip */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              plan.isPopular ? "bg-[#ffd082]/30" : "bg-[#f1ede6]"
            }`}
          >
            {getPlanIcon(plan.id)}
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-[#1c1c17]">{plan.name}</h3>
            <span className="text-xs text-[#424844]">{plan.subtitle}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-baseline gap-1 my-6">
          <span
            className={`font-display text-4xl font-bold ${
              plan.isPopular ? "text-[#7b5815]" : "text-[#1c1c17]"
            }`}
          >
            ₹{plan.price.toLocaleString("en-IN")}
          </span>
          <span className="text-sm text-[#424844]">/{plan.period}</span>
          {plan.saveLabel && (
            <span className="ml-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              {plan.saveLabel}
            </span>
          )}
        </div>

        {/* Features List */}
        <ul className="space-y-3.5 text-sm text-[#1c1c17]">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 leading-snug">
              <Check className="w-4 h-4 text-[#7b5815] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action CTA Button */}
      <div className="pt-8 mt-auto">
        <button
          onClick={handleSelectPlan}
          className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-sm transition-all shadow-sm active:scale-95 ${
            plan.isPopular
              ? "bg-[#10271E] hover:bg-[#001009] text-white hover:scale-105"
              : "bg-[#f1ede6] hover:bg-[#ece8e0] text-[#1c1c17]"
          }`}
        >
          <span>{plan.ctaText}</span>
          <ArrowRight className="w-4 h-4 text-[#D9AD62]" />
        </button>
      </div>
    </div>
  );
}
