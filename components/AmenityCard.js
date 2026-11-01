"use client";

import React from "react";
import {
  Wifi,
  Armchair,
  VolumeX,
  SunMedium,
  Lock,
  Coffee,
  CheckCircle,
} from "lucide-react";

export default function AmenityCard({ facility }) {
  const getIcon = (iconName) => {
    switch (iconName) {
      case "wifi_tethering":
        return <Wifi className="w-6 h-6 text-[#ffdeab]" />;
      case "airline_seat_recline_extra":
        return <Armchair className="w-6 h-6 text-[#ffdeab]" />;
      case "volume_off":
        return <VolumeX className="w-6 h-6 text-[#ffdeab]" />;
      case "light_mode":
        return <SunMedium className="w-6 h-6 text-[#ffdeab]" />;
      case "lock":
        return <Lock className="w-6 h-6 text-[#ffdeab]" />;
      case "local_cafe":
        return <Coffee className="w-6 h-6 text-[#ffdeab]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#ffdeab]" />;
    }
  };

  return (
    <div className="p-8 rounded-2xl bg-white shadow-sm border border-[#EDE5D8] hover:shadow-md hover:-translate-y-1 transition-all flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-[#10271E] flex items-center justify-center mb-6 shadow-sm">
          {getIcon(facility.icon)}
        </div>
        <h3 className="font-display text-xl font-bold text-[#1c1c17] mb-2">
          {facility.title}
        </h3>
        <p className="text-sm text-[#424844] leading-relaxed">
          {facility.description}
        </p>
      </div>

      <div className="pt-6 mt-6 flex items-center gap-2 text-[#7b5815] text-xs font-semibold border-t border-[#EDE5D8]/60">
        <span className="w-1.5 h-1.5 rounded-full bg-[#7b5815]" />
        <span>{facility.perk}</span>
      </div>
    </div>
  );
}
