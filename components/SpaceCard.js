"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CheckCircle2, ArrowRight, Star, Armchair, Volume2, Clock } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function SpaceCard({ space }) {
  const router = useRouter();
  const { chooseSpace, setStep } = useBooking();

  const handleBookSpace = (e) => {
    e.preventDefault();
    chooseSpace(space.id);
    setStep(2); // move to step 2 or direct
    router.push("/book-seat");
  };

  return (
    <article
      className="group bg-white rounded-2xl shadow-sm border border-[#EDE5D8] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 relative"
      data-type={space.id}
    >
      {/* Popular Ribbon if applicable */}
      {space.isPopular && (
        <div className="absolute top-0 right-0 z-20 bg-[#D9AD62] text-[#171916] px-4 py-1 rounded-bl-xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-[#171916]" />
          <span>Most Popular</span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[360px]">
        {/* Photography Left Pane (5 Cols) */}
        <div className="lg:col-span-5 relative overflow-hidden min-h-[260px] lg:min-h-full">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            alt={space.imageAlt || space.name}
            src={space.image}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#10271E]/60 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#7b5815] text-xs font-semibold shadow-sm tracking-wide uppercase border border-[#EDE5D8]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#7b5815]" />
              {space.badge}
            </span>
          </div>
        </div>

        {/* Details Right Pane (7 Cols) */}
        <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between bg-white">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 pr-24 lg:pr-0">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1c1c17]">
                {space.name}
              </h2>
              <div className="flex items-baseline gap-1">
                <span className="text-xs text-[#424844] uppercase tracking-wider">Starts at</span>
                <span className="font-display text-2xl font-bold text-[#7b5815]">
                  ₹{space.price.toLocaleString("en-IN")}
                </span>
                <span className="text-xs text-[#424844]">/{space.pricePeriod}</span>
                {space.priceMonthly && space.pricePeriod === "day" && (
                  <span className="text-xs text-[#727974] ml-1">({space.priceMonthly})</span>
                )}
              </div>
            </div>

            <p className="text-sm text-[#424844] mb-6 leading-relaxed">
              {space.description}
            </p>

            {/* Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5 mb-6">
              {space.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#7b5815] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#1c1c17]">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar Action */}
          <div className="pt-4 flex flex-wrap items-center justify-between gap-3 bg-[#f7f3eb] -mx-6 sm:-mx-8 -mb-6 sm:-mb-8 px-6 sm:px-8 py-4 border-t border-[#EDE5D8]">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5 text-[#424844] text-xs font-medium">
                <Armchair className="w-4 h-4 text-[#7b5815]" />
                <span>{space.availableUnits} Units Available</span>
              </div>
              <span className="text-[#c2c8c3]">•</span>
              <div className="flex items-center gap-1.5 text-[#424844] text-xs font-medium">
                <Volume2 className="w-4 h-4 text-[#7b5815]" />
                <span>{space.zoneType}</span>
              </div>
            </div>

            <button
              onClick={handleBookSpace}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#10271E] text-white text-xs sm:text-sm font-semibold hover:bg-[#001009] hover:scale-105 active:scale-95 transition-all shadow-sm"
            >
              <span>Book This Space</span>
              <ArrowRight className="w-4 h-4 text-[#ffd082]" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
