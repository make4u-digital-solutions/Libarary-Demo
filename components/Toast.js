"use client";

import React from "react";
import { useBooking } from "@/context/BookingContext";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";

export default function Toast() {
  const { toast } = useBooking();

  if (!toast) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-forest text-white shadow-2xl border border-champagne/30">
        {toast.type === "error" ? (
          <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
        ) : toast.type === "info" ? (
          <Info className="w-5 h-5 text-champagne shrink-0" />
        ) : (
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
        )}
        <span className="text-sm font-medium tracking-wide">{toast.message}</span>
      </div>
    </div>
  );
}
