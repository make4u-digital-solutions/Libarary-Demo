"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  CheckCircle2,
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  GraduationCap,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Zap,
  Info,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { PLANS, SPACES } from "@/data/libraryData";

export default function BookSeatPage() {
  const router = useRouter();
  const {
    step,
    setStep,
    selectedPlan,
    setSelectedPlan,
    selectedSpace,
    setSelectedSpace,
    startDate,
    setStartDate,
    timeSlot,
    setTimeSlot,
    studentDetails,
    setStudentDetails,
    formErrors,
    calculatePricing,
    validateStudentDetails,
    showToast,
  } = useBooking();

  const pricing = calculatePricing();

  const shifts = [
    { label: "Full 17-Hour Access", value: "Full Day (6:00 AM – 11:00 PM)" },
    { label: "Morning Fresh", value: "Morning Slot (6:00 AM – 12:00 PM)" },
    { label: "Afternoon Deep Work", value: "Afternoon Slot (12:00 PM – 5:00 PM)" },
    { label: "Night Owl Shift", value: "Evening Slot (5:00 PM – 11:00 PM)" },
  ];

  const handleNext = () => {
    if (step === 4) {
      if (!validateStudentDetails()) {
        showToast("Please fill in valid student credentials", "error");
        return;
      }
    }
    if (step < 5) {
      setStep(step + 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    } else if (step === 5) {
      // Step 6: Proceed to Payment page
      router.push("/payment");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
      window.scrollTo({ top: 120, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col w-full pb-20">
      {/* Page Header */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] mb-3 border border-[#ffd082]/40">
          <ShieldCheck className="w-4 h-4 text-[#7b5815]" />
          <span className="text-xs uppercase tracking-wider font-bold">
            Official Reservation Desk
          </span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#10271E] tracking-tight mb-2">
          Reserve Your Study Space
        </h1>
        <p className="text-sm sm:text-base text-[#424844] max-w-2xl mx-auto">
          Complete your booking in just a few simple steps with instant desk allocation and digital
          pass generation.
        </p>

        {/* Stepper Navigation */}
        <div className="mt-8 max-w-4xl mx-auto">
          <div className="bg-[#f7f3eb] rounded-full px-4 sm:px-6 py-3 shadow-sm border border-[#EDE5D8] flex items-center justify-between overflow-x-auto gap-2">
            {[
              { num: 1, label: "Select Plan" },
              { num: 2, label: "Select Space" },
              { num: 3, label: "Date & Slot" },
              { num: 4, label: "Student Details" },
              { num: 5, label: "Review Summary" },
              { num: 6, label: "Payment" },
            ].map((s, idx, arr) => {
              const isCurrent = step === s.num;
              const isDone = step > s.num;

              return (
                <React.Fragment key={s.num}>
                  <div
                    onClick={() => {
                      if (isDone) setStep(s.num);
                    }}
                    className={`flex items-center gap-2 shrink-0 ${
                      isDone ? "cursor-pointer" : ""
                    }`}
                  >
                    <span
                      className={`w-7 h-7 rounded-full text-xs flex items-center justify-center font-bold transition-all ${
                        isCurrent
                          ? "bg-[#10271E] text-white ring-2 ring-[#ffd082]"
                          : isDone
                          ? "bg-[#7b5815] text-white"
                          : "bg-[#e6e2da] text-[#424844]"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span
                      className={`text-xs font-semibold hidden md:inline transition-colors ${
                        isCurrent
                          ? "text-[#10271E]"
                          : isDone
                          ? "text-[#7b5815]"
                          : "text-[#727974]"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>

                  {idx < arr.length - 1 && (
                    <span
                      className={`h-[2px] w-4 sm:w-8 md:w-10 shrink-0 transition-colors ${
                        step > s.num ? "bg-[#7b5815]" : "bg-[#c2c8c3]"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Form Workstation */}
      <section className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Form Steps (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* STEP 1: Select Membership Plan */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border transition-all ${
                step === 1 ? "border-[#D9AD62] ring-2 ring-[#D9AD62]/20" : "border-[#EDE5D8]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#10271E] text-white flex items-center justify-center text-xs font-bold">
                    1
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#10271E]">
                    Choose a Membership Plan
                  </h2>
                </div>
                <span className="text-xs uppercase tracking-wider text-[#727974] font-semibold">
                  Step 1 of 5
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {PLANS.map((plan) => {
                  const isSelected = selectedPlan?.id === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan)}
                      className={`cursor-pointer rounded-xl p-5 transition-all flex flex-col justify-between relative border ${
                        isSelected
                          ? "bg-[#10271E] text-white shadow-md border-[#D9AD62] ring-2 ring-[#D9AD62]"
                          : "bg-[#f7f3eb] text-[#1c1c17] border-[#EDE5D8] hover:bg-[#f1ede6]"
                      }`}
                    >
                      {plan.isPopular && (
                        <span className="absolute -top-2.5 right-3 bg-[#ffd082] text-[#271900] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                          Best Value
                        </span>
                      )}

                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center border ${
                              isSelected
                                ? "bg-[#ffd082] border-[#ffd082]"
                                : "bg-white border-[#c2c8c3]"
                            }`}
                          >
                            {isSelected && (
                              <span className="w-2 h-2 rounded-full bg-[#10271E]" />
                            )}
                          </span>
                          <span
                            className={`font-display text-base font-bold ${
                              isSelected ? "text-white" : "text-[#1c1c17]"
                            }`}
                          >
                            {plan.name}
                          </span>
                        </div>
                        <p
                          className={`text-xs mt-1 mb-4 ${
                            isSelected ? "text-[#e6e2da]" : "text-[#424844]"
                          }`}
                        >
                          {plan.subtitle}
                        </p>
                      </div>

                      <div
                        className={`text-lg font-bold font-display ${
                          isSelected ? "text-[#ffd082]" : "text-[#10271E]"
                        }`}
                      >
                        ₹{plan.price.toLocaleString("en-IN")}{" "}
                        <span className="text-xs font-normal opacity-80">/{plan.period}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: Select Study Space */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border transition-all ${
                step === 2 ? "border-[#D9AD62] ring-2 ring-[#D9AD62]/20" : "border-[#EDE5D8]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#10271E] text-white flex items-center justify-center text-xs font-bold">
                    2
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#10271E]">
                    Select Study Space Zone
                  </h2>
                </div>
                <span className="text-xs text-[#7b5815] font-semibold">3 zones available</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {SPACES.map((space) => {
                  const isSelected = selectedSpace?.id === space.id;
                  return (
                    <div
                      key={space.id}
                      onClick={() => setSelectedSpace(space)}
                      className={`cursor-pointer rounded-xl overflow-hidden transition-all flex flex-col border ${
                        isSelected
                          ? "bg-[#10271E] text-white shadow-md border-[#D9AD62] ring-2 ring-[#D9AD62]"
                          : "bg-[#f7f3eb] text-[#1c1c17] border-[#EDE5D8] hover:bg-[#f1ede6]"
                      }`}
                    >
                      <div className="h-28 w-full overflow-hidden relative">
                        <img
                          className="w-full h-full object-cover"
                          alt={space.name}
                          src={space.image}
                        />
                        <span className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-[#10271E]/80 backdrop-blur-md text-[10px] font-semibold text-white">
                          {space.tag}
                        </span>
                      </div>

                      <div className="p-4 flex flex-col flex-1 justify-between">
                        <div>
                          <h3
                            className={`font-display text-base font-bold ${
                              isSelected ? "text-white" : "text-[#10271E]"
                            }`}
                          >
                            {space.name}
                          </h3>
                          <p
                            className={`text-xs mt-1 ${
                              isSelected ? "text-[#e6e2da]" : "text-[#424844]"
                            }`}
                          >
                            {space.zoneType}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center justify-between pt-2 border-t border-white/10">
                          <span
                            className={`text-xs font-semibold ${
                              isSelected ? "text-[#ffd082]" : "text-[#7b5815]"
                            }`}
                          >
                            From ₹{space.price}/d
                          </span>
                          <CheckCircle2
                            className={`w-4 h-4 ${
                              isSelected ? "text-[#ffd082]" : "text-[#c2c8c3]"
                            }`}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* STEP 3: Select Date & Time Slot */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border transition-all ${
                step === 3 ? "border-[#D9AD62] ring-2 ring-[#D9AD62]/20" : "border-[#EDE5D8]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#10271E] text-white flex items-center justify-center text-xs font-bold">
                    3
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#10271E]">
                    Select Date &amp; Preferred Timing
                  </h2>
                </div>
                <span className="text-xs text-[#7b5815] font-semibold">Immediate Activation</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Date Input */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Booking Start Date
                  </label>
                  <div className="flex items-center justify-between px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#EDE5D8]">
                    <div className="flex items-center gap-3 w-full">
                      <Calendar className="w-5 h-5 text-[#7b5815] shrink-0" />
                      <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="bg-transparent text-sm font-semibold text-[#10271E] focus:outline-none w-full cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* Shift Selector */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Preferred Daily Shift
                  </label>
                  <div className="relative">
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full appearance-none px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#EDE5D8] text-sm text-[#10271E] font-medium focus:outline-none cursor-pointer"
                    >
                      <option value="Full Day (6:00 AM – 11:00 PM)">
                        Full Day (6:00 AM – 11:00 PM) – All Access
                      </option>
                      <option value="Morning Slot (6:00 AM – 12:00 PM)">
                        Morning Slot (6:00 AM – 12:00 PM)
                      </option>
                      <option value="Afternoon Slot (12:00 PM – 5:00 PM)">
                        Afternoon Slot (12:00 PM – 5:00 PM)
                      </option>
                      <option value="Evening Slot (5:00 PM – 11:00 PM)">
                        Evening Slot (5:00 PM – 11:00 PM)
                      </option>
                    </select>
                    <Clock className="w-4 h-4 absolute right-4 top-3.5 pointer-events-none text-[#727974]" />
                  </div>
                </div>
              </div>

              {/* Shift Shortcuts */}
              <div className="mt-5 pt-4 border-t border-[#EDE5D8] flex flex-wrap items-center gap-2">
                <span className="text-xs text-[#727974] uppercase tracking-wider font-semibold mr-1">
                  Shift shortcuts:
                </span>
                {shifts.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setTimeSlot(s.value)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      timeSlot === s.value
                        ? "bg-[#10271E] text-white"
                        : "bg-[#f1ede6] text-[#1c1c17] hover:bg-[#ece8e0]"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* STEP 4: Student Details */}
            <div
              className={`bg-white rounded-2xl p-6 sm:p-8 shadow-sm border transition-all ${
                step === 4 ? "border-[#D9AD62] ring-2 ring-[#D9AD62]/20" : "border-[#EDE5D8]"
              }`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#10271E] text-white flex items-center justify-center text-xs font-bold">
                    4
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#10271E]">
                    Student &amp; Aspirant Details
                  </h2>
                </div>
                <span className="text-xs text-[#727974]">Access pass credentials</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div
                    className={`flex items-center px-4 py-3 rounded-xl bg-[#f7f3eb] border gap-3 ${
                      formErrors.fullName ? "border-red-500" : "border-[#EDE5D8]"
                    }`}
                  >
                    <User className="w-4 h-4 text-[#7b5815] shrink-0" />
                    <input
                      type="text"
                      placeholder="e.g. Aarav Sharma"
                      value={studentDetails.fullName}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, fullName: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                  {formErrors.fullName && (
                    <span className="text-xs text-red-500">{formErrors.fullName}</span>
                  )}
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Email Address *
                  </label>
                  <div
                    className={`flex items-center px-4 py-3 rounded-xl bg-[#f7f3eb] border gap-3 ${
                      formErrors.email ? "border-red-500" : "border-[#EDE5D8]"
                    }`}
                  >
                    <Mail className="w-4 h-4 text-[#7b5815] shrink-0" />
                    <input
                      type="email"
                      placeholder="e.g. aarav@gmail.com"
                      value={studentDetails.email}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, email: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                  {formErrors.email && (
                    <span className="text-xs text-red-500">{formErrors.email}</span>
                  )}
                </div>

                {/* Mobile Number */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Mobile Number *
                  </label>
                  <div
                    className={`flex items-center px-4 py-3 rounded-xl bg-[#f7f3eb] border gap-3 ${
                      formErrors.mobile ? "border-red-500" : "border-[#EDE5D8]"
                    }`}
                  >
                    <Phone className="w-4 h-4 text-[#7b5815] shrink-0" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={studentDetails.mobile}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, mobile: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                  {formErrors.mobile && (
                    <span className="text-xs text-red-500">{formErrors.mobile}</span>
                  )}
                </div>

                {/* Preparation Goal */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-[#1c1c17] uppercase tracking-wider">
                    Preparation Goal / Exam
                  </label>
                  <div className="flex items-center px-4 py-3 rounded-xl bg-[#f7f3eb] border border-[#EDE5D8] gap-3">
                    <GraduationCap className="w-4 h-4 text-[#7b5815] shrink-0" />
                    <input
                      type="text"
                      placeholder="e.g. UPSC / NEET / CA / GATE"
                      value={studentDetails.examGoal}
                      onChange={(e) =>
                        setStudentDetails({ ...studentDetails, examGoal: e.target.value })
                      }
                      className="w-full bg-transparent text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Stepper Forward / Back Buttons */}
            <div className="flex items-center justify-between pt-4">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f1ede6] hover:bg-[#ece8e0] text-[#1c1c17] text-sm font-semibold transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Previous Step</span>
                </button>
              ) : (
                <div />
              )}

              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#10271E] hover:bg-[#001009] text-white text-sm font-semibold shadow-lg hover:scale-105 active:scale-95 transition-all"
              >
                <span>{step === 5 ? "Proceed to Payment" : "Next Step"}</span>
                <ArrowRight className="w-4 h-4 text-[#ffd082]" />
              </button>
            </div>
          </div>

          {/* Right Column: Sticky Summary Invoice Ticket (5 Cols) */}
          <div className="lg:col-span-5 sticky top-24 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-md border border-[#EDE5D8] relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#EDE5D8]">
                <div>
                  <span className="text-[11px] font-bold text-[#7b5815] uppercase tracking-wider">
                    Summary Invoice
                  </span>
                  <h3 className="font-display text-xl font-bold text-[#10271E]">
                    Pass Configuration
                  </h3>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#ffd082]/30 text-[#795714] text-xs font-bold">
                  Auto-assigned
                </div>
              </div>

              {/* Detailed Ticket Specifications */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Membership Plan:</span>
                  <span className="font-semibold text-[#10271E]">{selectedPlan?.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Assigned Space:</span>
                  <span className="font-semibold text-[#10271E]">{selectedSpace?.name}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Seat Identifier:</span>
                  <span className="font-semibold text-[#ffd082] bg-[#10271E] px-2.5 py-0.5 rounded text-xs tracking-wider">
                    {selectedSpace?.deskCodePrefix || "Desk #"}14
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Branch Center:</span>
                  <span className="font-medium text-[#10271E]">Mohanlalganj, Lucknow</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Start Date:</span>
                  <span className="font-medium text-[#10271E]">{startDate}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#424844]">Daily Shift:</span>
                  <span className="font-medium text-[#10271E] text-right max-w-[200px] truncate">
                    {timeSlot}
                  </span>
                </div>
              </div>

              {/* Price Breakdown Calculation */}
              <div className="mt-6 pt-4 bg-[#f7f3eb] rounded-xl p-4 space-y-2 border border-[#EDE5D8]">
                <div className="flex items-center justify-between text-xs text-[#424844]">
                  <span>Base Membership Fee</span>
                  <span>₹{pricing.baseExclusive.toFixed(2)}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#424844]">
                  <span className="flex items-center gap-1">
                    Locker Security Deposit{" "}
                    <span className="text-[10px] bg-[#ffd082]/40 text-[#795714] px-1 rounded font-bold">
                      Waived
                    </span>
                  </span>
                  <span className="line-through text-[#727974]">₹500.00</span>
                </div>

                <div className="flex items-center justify-between text-xs text-[#424844]">
                  <span>Inclusive GST (18%)</span>
                  <span>₹{pricing.gstAmount.toFixed(2)}</span>
                </div>

                <div className="pt-2 border-t border-[#EDE5D8] flex items-center justify-between">
                  <span className="font-display text-base font-bold text-[#10271E]">
                    Total Payable
                  </span>
                  <span className="font-display text-2xl font-bold text-[#10271E]">
                    ₹{pricing.totalAmount.toLocaleString("en-IN")}.00
                  </span>
                </div>
              </div>

              {/* Proceed CTA */}
              <div className="mt-6">
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full py-4 px-6 rounded-full bg-[#ffd082] hover:bg-[#ffdeab] text-[#271900] font-bold text-base transition-all shadow-md flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                >
                  <CreditCard className="w-5 h-5 text-[#271900]" />
                  <span>
                    {step === 5
                      ? "Proceed to Razorpay Payment"
                      : `Review & Pay ₹${pricing.totalAmount}`}
                  </span>
                </button>
              </div>

              {/* Security Badges */}
              <div className="mt-4 pt-2 flex items-center justify-between text-[11px] text-[#727974] font-medium border-t border-[#EDE5D8]">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#7b5815]" />
                  256-bit SSL Encrypted
                </span>
                <span className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-[#7b5815]" />
                  Instant Allotment
                </span>
              </div>
            </div>

            {/* Guarantee Callout */}
            <div className="bg-[#f7f3eb] p-4 rounded-xl border border-[#EDE5D8] flex items-center gap-3 text-xs text-[#424844]">
              <Info className="w-4 h-4 text-[#7b5815] shrink-0" />
              <span>
                100% money-back seat switch guarantee within the first 24 hours of your booking.
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
