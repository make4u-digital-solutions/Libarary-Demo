"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  CreditCard,
  QrCode,
  Building,
  Wallet,
  Lock,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  Sparkles,
} from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function PaymentPage() {
  const router = useRouter();
  const {
    selectedPlan,
    selectedSpace,
    startDate,
    timeSlot,
    studentDetails,
    paymentMethod,
    setPaymentMethod,
    upiId,
    setUpiId,
    cardDetails,
    setCardDetails,
    calculatePricing,
    completePayment,
    showToast,
  } = useBooking();

  const [isProcessing, setIsProcessing] = useState(false);
  const [activeUpiApp, setActiveUpiApp] = useState("gpay");
  const pricing = calculatePricing();

  const handlePay = () => {
    setIsProcessing(true);
    showToast("Connecting to Razorpay Test Gateway...", "info");

    setTimeout(() => {
      completePayment({
        paymentMethod,
        paidAt: new Date().toISOString(),
      });
      setIsProcessing(false);
      showToast("Payment Successful! Digital Pass Generated.");
      router.push("/booking-success");
    }, 2000);
  };

  return (
    <div className="w-full min-h-[calc(100vh-80px)] bg-[#fdf9f1] py-12">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/book-seat"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#7b5815] hover:text-[#10271E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Seat Configuration</span>
          </Link>
        </div>

        {/* Razorpay Test Mode Banner */}
        <div className="mb-8 p-4 rounded-2xl bg-[#ffd082]/25 border border-[#ffd082] flex items-center justify-between gap-4 text-[#795714]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#ffd082] flex items-center justify-center text-[#271900] shrink-0 font-bold">
              ⚡
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight">
                RAZORPAY TEST MODE ENVIRONMENT
              </p>
              <p className="text-xs text-[#795714]/90">
                Simulated checkout demonstration. No actual debit will occur from your bank
                account or card.
              </p>
            </div>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#10271E] text-white text-xs font-bold uppercase tracking-wider shrink-0">
            Sandbox Active
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Payment Methods (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EDE5D8]">
            <h2 className="font-display text-2xl font-bold text-[#10271E] mb-2">
              Choose Payment Method
            </h2>
            <p className="text-xs sm:text-sm text-[#424844] mb-6">
              All transactions are encrypted with 256-bit bank-grade SSL protocol.
            </p>

            {/* Method Tabs */}
            <div className="grid grid-cols-4 gap-2 p-1.5 bg-[#f1ede6] rounded-xl mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  paymentMethod === "upi"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#10271E]"
                }`}
              >
                <QrCode className="w-4 h-4 mb-1" />
                <span>UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  paymentMethod === "card"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#10271E]"
                }`}
              >
                <CreditCard className="w-4 h-4 mb-1" />
                <span>Cards</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("nb")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  paymentMethod === "nb"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#10271E]"
                }`}
              >
                <Building className="w-4 h-4 mb-1" />
                <span>Net Banking</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("wallet")}
                className={`flex flex-col items-center justify-center py-2.5 px-2 rounded-lg text-xs font-bold transition-all ${
                  paymentMethod === "wallet"
                    ? "bg-[#10271E] text-white shadow-sm"
                    : "text-[#424844] hover:text-[#10271E]"
                }`}
              >
                <Wallet className="w-4 h-4 mb-1" />
                <span>Wallets</span>
              </button>
            </div>

            {/* Dynamic Payment Panel */}
            {paymentMethod === "upi" && (
              <div className="flex flex-col gap-5 p-5 bg-[#f7f3eb] rounded-xl border border-[#EDE5D8]">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#10271E] uppercase tracking-wider">
                    Select Instant UPI App
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Zero Extra Surcharge
                  </span>
                </div>

                <div className="grid grid-cols-4 gap-3 text-center text-xs">
                  {[
                    { id: "gpay", label: "Google Pay" },
                    { id: "phonepe", label: "PhonePe" },
                    { id: "paytm", label: "Paytm" },
                    { id: "bhim", label: "BHIM QR" },
                  ].map((app) => (
                    <div
                      key={app.id}
                      onClick={() => setActiveUpiApp(app.id)}
                      className={`p-3 rounded-xl cursor-pointer transition-all border flex flex-col items-center gap-1.5 ${
                        activeUpiApp === app.id
                          ? "bg-[#10271E] text-white border-[#10271E] shadow-sm"
                          : "bg-white text-[#1c1c17] border-[#EDE5D8] hover:bg-[#f1ede6]"
                      }`}
                    >
                      <QrCode className="w-5 h-5 text-[#ffd082]" />
                      <span className="font-semibold text-[11px]">{app.label}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5 mt-2">
                  <label className="text-xs font-semibold text-[#1c1c17]">
                    Or Enter Virtual Payment Address (VPA / UPI ID)
                  </label>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@okhdfcbank"
                      className="flex-1 bg-white border border-[#EDE5D8] px-4 py-2.5 rounded-xl text-sm text-[#10271E] focus:outline-none focus:border-[#7b5815]"
                    />
                    <button
                      type="button"
                      onClick={() => showToast("UPI ID Verified")}
                      className="px-4 py-2.5 rounded-xl bg-[#f1ede6] text-[#1c1c17] text-xs font-bold hover:bg-[#ece8e0] transition-colors"
                    >
                      Verify
                    </button>
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="flex flex-col gap-4 p-5 bg-[#f7f3eb] rounded-xl border border-[#EDE5D8]">
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#1c1c17]">Card Number</label>
                  <input
                    type="text"
                    value={cardDetails.cardNumber}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cardNumber: e.target.value })
                    }
                    placeholder="4532 8920 1192 4819"
                    className="w-full bg-white border border-[#EDE5D8] px-4 py-2.5 rounded-xl text-sm text-[#10271E] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#1c1c17]">Expiry (MM/YY)</label>
                    <input
                      type="text"
                      value={cardDetails.expiry}
                      onChange={(e) =>
                        setCardDetails({ ...cardDetails, expiry: e.target.value })
                      }
                      placeholder="12/28"
                      className="w-full bg-white border border-[#EDE5D8] px-4 py-2.5 rounded-xl text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-semibold text-[#1c1c17]">CVV / CVC</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cardDetails.cvv}
                      onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
                      placeholder="•••"
                      className="w-full bg-white border border-[#EDE5D8] px-4 py-2.5 rounded-xl text-sm text-[#10271E] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold text-[#1c1c17]">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardDetails.cardHolder}
                    onChange={(e) =>
                      setCardDetails({ ...cardDetails, cardHolder: e.target.value })
                    }
                    placeholder="Aarav Sharma"
                    className="w-full bg-white border border-[#EDE5D8] px-4 py-2.5 rounded-xl text-sm text-[#10271E] focus:outline-none"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "nb" && (
              <div className="p-5 bg-[#f7f3eb] rounded-xl border border-[#EDE5D8] text-sm text-[#424844]">
                <p className="font-semibold text-[#10271E] mb-3">Popular Net Banking Portals</p>
                <div className="grid grid-cols-3 gap-3 text-xs text-center">
                  {["SBI", "HDFC Bank", "ICICI Bank", "Axis Bank", "PNB", "Kotak"].map(
                    (bank, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg border border-[#EDE5D8] font-bold text-[#10271E] cursor-pointer hover:border-[#7b5815]"
                      >
                        {bank}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {paymentMethod === "wallet" && (
              <div className="p-5 bg-[#f7f3eb] rounded-xl border border-[#EDE5D8] text-sm text-[#424844]">
                <p className="font-semibold text-[#10271E] mb-3">Supported Digital Wallets</p>
                <div className="grid grid-cols-3 gap-3 text-xs text-center">
                  {["Paytm Wallet", "PhonePe Wallet", "Amazon Pay", "Mobikwik"].map(
                    (w, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3 rounded-lg border border-[#EDE5D8] font-bold text-[#10271E] cursor-pointer hover:border-[#7b5815]"
                      >
                        {w}
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Action Pay Button */}
            <div className="mt-8">
              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePay}
                className="w-full py-4 px-6 rounded-full bg-[#ffd082] hover:bg-[#ffdeab] text-[#271900] font-bold text-base transition-all shadow-lg flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95 disabled:opacity-75 disabled:pointer-events-none"
              >
                {isProcessing ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing Demo Payment...</span>
                  </>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-[#271900]" />
                    <span>
                      Pay ₹{pricing.totalAmount.toLocaleString("en-IN")}.00 via Razorpay Test
                    </span>
                  </>
                )}
              </button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-[#727974]">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#7b5815]" />
                PCI-DSS Level 1 Compliant
              </span>
              <span>•</span>
              <span>256-Bit SSL Bank Encryption</span>
            </div>
          </div>

          {/* Right Column: Invoice Summary (5 Cols) */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#EDE5D8]">
            <h3 className="font-display text-xl font-bold text-[#10271E] mb-4 pb-3 border-b border-[#EDE5D8]">
              Booking Overview
            </h3>

            <div className="space-y-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Student Name:</span>
                <span className="font-semibold text-[#10271E]">
                  {studentDetails?.fullName || "Aarav Sharma"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Mobile:</span>
                <span className="font-medium text-[#10271E]">
                  {studentDetails?.mobile || "+91 98765 43210"}
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Plan:</span>
                <span className="font-semibold text-[#10271E]">{selectedPlan?.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Study Space:</span>
                <span className="font-semibold text-[#10271E]">{selectedSpace?.name}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Start Date:</span>
                <span className="font-medium text-[#10271E]">{startDate}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#424844]">Shift Timing:</span>
                <span className="font-medium text-[#10271E] text-right max-w-[200px] truncate">
                  {timeSlot}
                </span>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6 pt-4 bg-[#f7f3eb] rounded-xl p-4 space-y-2 border border-[#EDE5D8]">
              <div className="flex items-center justify-between text-xs text-[#424844]">
                <span>Base Plan Price</span>
                <span>₹{pricing.baseExclusive.toFixed(2)}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-[#424844]">
                <span className="flex items-center gap-1">
                  Security Deposit{" "}
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
                  Total Amount
                </span>
                <span className="font-display text-2xl font-bold text-[#10271E]">
                  ₹{pricing.totalAmount.toLocaleString("en-IN")}.00
                </span>
              </div>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Instant digital seat pass generation upon completion</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
