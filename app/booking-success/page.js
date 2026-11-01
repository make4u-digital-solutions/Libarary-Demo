"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  Download,
  Share2,
  Calendar,
  Clock,
  User,
  ShieldCheck,
  ArrowRight,
  QrCode,
  MapPin,
  Sparkles,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { BRAND } from "@/data/libraryData";

export default function BookingSuccessPage() {
  const { completedBooking, showToast } = useBooking();

  // Fallback demo data if navigated directly
  const booking = completedBooking || {
    bookingId: "SH-884219",
    deskCode: "Cubicle #C-14",
    createdAt: new Date().toISOString(),
    studentDetails: {
      fullName: "Aarav Sharma",
      email: "aarav.sharma@gmail.com",
      mobile: "+91 98765 43210",
      examGoal: "UPSC Civil Services 2026",
    },
    plan: {
      name: "Monthly Pass",
      tier: "Premium Sanctuary",
    },
    space: {
      name: "Individual Study Cubicles",
      zoneType: "100% Pin-Drop Silence Zone",
    },
    startDate: "2026-11-01",
    validity: "01 Nov 2026 – 01 Dec 2026",
    timeSlot: "Full Day (6:00 AM – 11:00 PM)",
    pricing: {
      totalAmount: 1499,
    },
    gateway: "Razorpay (Test Simulation)",
    isDemo: true,
  };

  const handleDownload = () => {
    window.print();
    showToast("Invoice pass sent to print spooler");
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-[#fdf9f1] py-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Celebration Header */}
        <div className="text-center mb-8">
          <div className="w-20 h-20 rounded-full bg-[#ffd082]/30 text-[#7b5815] mx-auto flex items-center justify-center mb-4 shadow-sm border border-[#ffd082]">
            <CheckCircle2 className="w-10 h-10 text-[#7b5815]" />
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-[#10271E] text-[#ffd082] text-xs font-bold uppercase tracking-wider mb-2">
            Payment Completed (Test Mode)
          </span>

          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#10271E] tracking-tight">
            Study Space Confirmed!
          </h1>
          <p className="text-sm text-[#424844] mt-1">
            Your official digital study pass and desk allocation have been registered.
          </p>
        </div>

        {/* Digital Pass Boarding Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-[#EDE5D8] overflow-hidden mb-8 relative">
          {/* Card Top Banner */}
          <div className="bg-[#10271E] text-white p-6 sm:p-8 flex items-center justify-between border-b border-[#D9AD62]/20">
            <div className="flex items-center gap-3">
              <img
                alt="StudyHive Logo"
                className="h-7 w-auto object-contain"
                src={BRAND.logoUrl}
              />
              <div>
                <span className="font-display text-lg font-bold text-[#fdf9f1]">
                  StudyHive Access Pass
                </span>
                <span className="block text-[10px] text-[#ffd082] font-semibold uppercase tracking-wider">
                  Mohanlalganj Flagship Campus
                </span>
              </div>
            </div>

            <div className="text-right">
              <span className="text-[10px] text-[#e6e2da] uppercase tracking-wider block">
                Booking ID
              </span>
              <span className="font-mono text-base font-bold text-[#ffd082]">
                #{booking.bookingId}
              </span>
            </div>
          </div>

          {/* Card Body Details */}
          <div className="p-6 sm:p-8 space-y-6">
            {/* Student & Desk Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EDE5D8]">
              <div>
                <span className="text-xs text-[#727974] uppercase tracking-wider font-semibold block">
                  Scholar / Aspirant
                </span>
                <h3 className="font-display text-xl font-bold text-[#10271E]">
                  {booking.studentDetails?.fullName}
                </h3>
                <span className="text-xs text-[#7b5815] font-semibold">
                  {booking.studentDetails?.examGoal || "Competitive Exam Aspirant"}
                </span>
              </div>

              <div className="flex sm:flex-col items-center sm:items-end justify-between gap-1 bg-[#f7f3eb] sm:bg-transparent p-3 sm:p-0 rounded-xl">
                <span className="text-xs text-[#727974] uppercase tracking-wider font-semibold">
                  Allocated Desk
                </span>
                <span className="text-sm font-bold bg-[#10271E] text-[#ffd082] px-3 py-1 rounded-lg">
                  {booking.deskCode}
                </span>
              </div>
            </div>

            {/* Grid of Key Info */}
            <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
              <div>
                <span className="text-[#727974] text-xs block mb-0.5">Membership Plan</span>
                <strong className="text-[#10271E] font-bold block text-sm">
                  {booking.plan?.name}
                </strong>
                <span className="text-[11px] text-[#424844]">{booking.plan?.tier}</span>
              </div>

              <div>
                <span className="text-[#727974] text-xs block mb-0.5">Study Space</span>
                <strong className="text-[#10271E] font-bold block text-sm">
                  {booking.space?.name}
                </strong>
                <span className="text-[11px] text-[#424844]">{booking.space?.zoneType}</span>
              </div>

              <div className="pt-2">
                <span className="text-[#727974] text-xs block mb-0.5">Pass Validity Period</span>
                <strong className="text-[#10271E] font-bold block">
                  {booking.validity}
                </strong>
              </div>

              <div className="pt-2">
                <span className="text-[#727974] text-xs block mb-0.5">Daily Shift Hours</span>
                <strong className="text-[#10271E] font-bold block">
                  {booking.timeSlot}
                </strong>
              </div>

              <div className="pt-2">
                <span className="text-[#727974] text-xs block mb-0.5">Amount Paid</span>
                <strong className="text-[#7b5815] font-display text-base font-bold block">
                  ₹{booking.pricing?.totalAmount?.toLocaleString("en-IN")}.00
                </strong>
              </div>

              <div className="pt-2">
                <span className="text-[#727974] text-xs block mb-0.5">Gateway &amp; Security</span>
                <strong className="text-emerald-700 font-semibold block flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {booking.gateway}
                </strong>
              </div>
            </div>

            {/* QR Scanner Ticket Footer */}
            <div className="p-4 bg-[#f7f3eb] rounded-2xl border border-[#EDE5D8] flex items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-[#10271E] uppercase tracking-wider block">
                  Biometric / Turnstile QR
                </span>
                <p className="text-[11px] text-[#424844] mt-0.5">
                  Scan at Mohanlalganj library turnstiles for instant entrance.
                </p>
              </div>

              {/* QR Graphic */}
              <div className="w-14 h-14 bg-white p-1 rounded-lg border border-[#EDE5D8] shrink-0 flex items-center justify-center shadow-inner">
                <QrCode className="w-full h-full text-[#10271E]" />
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
          <button
            type="button"
            onClick={handleDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#10271E] text-white text-sm font-semibold rounded-full hover:bg-[#001009] shadow-md transition-all"
          >
            <Download className="w-4 h-4 text-[#ffd082]" />
            <span>Download PDF Receipt &amp; Pass</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#f1ede6] text-[#1c1c17] text-sm font-semibold rounded-full hover:bg-[#ece8e0] transition-colors"
          >
            <span>Back to Home</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-center text-xs text-[#727974] mt-6">
          A confirmation dispatch has been logged to{" "}
          <strong className="text-[#1c1c17]">{booking.studentDetails?.email}</strong> and SMS
          credentials sent to{" "}
          <strong className="text-[#1c1c17]">{booking.studentDetails?.mobile}</strong>.
        </p>
      </div>
    </div>
  );
}
