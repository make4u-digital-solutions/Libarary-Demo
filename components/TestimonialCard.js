"use client";

import React from "react";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="p-8 rounded-2xl bg-[#f7f3eb] border border-[#EDE5D8] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-1 text-[#D9AD62] mb-4">
          {[...Array(testimonial.rating || 5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#D9AD62] text-[#D9AD62]" />
          ))}
        </div>

        <p className="text-sm sm:text-base text-[#424844] italic leading-relaxed mb-6 font-serif">
          &ldquo;{testimonial.quote}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-[#EDE5D8]">
        <div className="w-10 h-10 rounded-full bg-[#10271E] text-[#ffdeab] font-bold text-base flex items-center justify-center font-display shadow-sm">
          {testimonial.initial}
        </div>
        <div>
          <p className="text-sm font-bold text-[#1c1c17]">{testimonial.author}</p>
          <p className="text-xs text-[#7b5815] font-medium">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}
