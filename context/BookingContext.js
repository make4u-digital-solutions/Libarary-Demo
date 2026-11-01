"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { PLANS, SPACES } from "@/data/libraryData";

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  // Step state (1 to 6)
  const [step, setStep] = useState(1);

  // Selected Plan
  const [selectedPlan, setSelectedPlan] = useState(() => PLANS[1]); // Default to Monthly Pass

  // Selected Space
  const [selectedSpace, setSelectedSpace] = useState(() => SPACES[1]); // Default to Individual Cubicle

  // Date and Time
  const [startDate, setStartDate] = useState("2026-11-01");
  const [timeSlot, setTimeSlot] = useState("Full Day (6:00 AM – 11:00 PM)");

  // Student Details
  const [studentDetails, setStudentDetails] = useState({
    fullName: "Aarav Sharma",
    email: "aarav.sharma@gmail.com",
    mobile: "+91 98765 43210",
    examGoal: "UPSC Civil Services 2026",
  });

  // Errors state
  const [formErrors, setFormErrors] = useState({});

  // Payment state
  const [paymentMethod, setPaymentMethod] = useState("upi"); // 'upi' | 'card' | 'nb' | 'wallet'
  const [upiId, setUpiId] = useState("aarav.sharma@okaxis");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "4532 8920 1192 4819",
    expiry: "12/28",
    cvv: "882",
    cardHolder: "Aarav Sharma",
  });

  // Booking result after payment
  const [completedBooking, setCompletedBooking] = useState(null);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  // Hydrate from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("studyhive_booking_state");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.selectedPlan) setSelectedPlan(parsed.selectedPlan);
        if (parsed.selectedSpace) setSelectedSpace(parsed.selectedSpace);
        if (parsed.startDate) setStartDate(parsed.startDate);
        if (parsed.timeSlot) setTimeSlot(parsed.timeSlot);
        if (parsed.studentDetails) setStudentDetails(parsed.studentDetails);
        if (parsed.step) setStep(parsed.step);
      }
      const savedCompleted = localStorage.getItem("studyhive_completed_booking");
      if (savedCompleted) {
        setCompletedBooking(JSON.parse(savedCompleted));
      }
    } catch (e) {
      console.warn("Could not parse saved booking state", e);
    }
  }, []);

  // Save to localStorage when state updates
  useEffect(() => {
    try {
      const stateToSave = {
        selectedPlan,
        selectedSpace,
        startDate,
        timeSlot,
        studentDetails,
        step,
      };
      localStorage.setItem("studyhive_booking_state", JSON.stringify(stateToSave));
    } catch (e) {
      // ignore
    }
  }, [selectedPlan, selectedSpace, startDate, timeSlot, studentDetails, step]);

  // Pricing calculations
  const calculatePricing = () => {
    const basePrice = selectedPlan ? selectedPlan.price : 1499;
    // GST 18% inclusive in display, or breakdown
    const gstRate = 0.18;
    const baseExclusive = Math.round((basePrice / (1 + gstRate)) * 100) / 100;
    const gstAmount = Math.round((basePrice - baseExclusive) * 100) / 100;

    return {
      basePrice,
      baseExclusive,
      gstAmount,
      discount: 0,
      totalAmount: basePrice,
      currency: "₹",
    };
  };

  // Helper to select a plan directly (e.g. from /plans page)
  const choosePlan = (planId) => {
    const found = PLANS.find((p) => p.id === planId) || PLANS[0];
    setSelectedPlan(found);
    // automatically adapt default space if appropriate
    if (found.id === "daily") {
      setSelectedSpace(SPACES[0]);
    } else if (found.id === "monthly") {
      setSelectedSpace(SPACES[1]);
    } else if (found.id === "quarterly") {
      setSelectedSpace(SPACES[2]);
    }
    showToast(`Selected ${found.name}`);
  };

  // Helper to select a space directly (e.g. from /spaces page)
  const chooseSpace = (spaceId) => {
    const found = SPACES.find((s) => s.id === spaceId) || SPACES[0];
    setSelectedSpace(found);
    showToast(`Selected ${found.name}`);
  };

  // Form validation for student details
  const validateStudentDetails = () => {
    const errors = {};
    if (!studentDetails.fullName || studentDetails.fullName.trim().length < 2) {
      errors.fullName = "Please enter your full name (minimum 2 characters)";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!studentDetails.email || !emailRegex.test(studentDetails.email)) {
      errors.email = "Please enter a valid email address";
    }
    const phoneClean = studentDetails.mobile.replace(/[^0-9]/g, "");
    if (!studentDetails.mobile || phoneClean.length < 10) {
      errors.mobile = "Please enter a valid 10-digit mobile number";
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Finalize booking / trigger simulated Razorpay payment
  const completePayment = (customDetails = {}) => {
    const pricing = calculatePricing();
    const randomId = "SH-" + Math.floor(100000 + Math.random() * 900000);
    const deskCode =
      (selectedSpace ? selectedSpace.deskCodePrefix : "Desk #") +
      Math.floor(10 + Math.random() * 80);

    // Compute validity date
    const startObj = new Date(startDate || Date.now());
    let endObj = new Date(startObj);
    if (selectedPlan.id === "daily") {
      endObj.setDate(endObj.getDate() + 1);
    } else if (selectedPlan.id === "quarterly") {
      endObj.setMonth(endObj.getMonth() + 3);
    } else {
      endObj.setMonth(endObj.getMonth() + 1);
    }

    const validity = `${startObj.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })} – ${endObj.toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    })}`;

    const newBooking = {
      bookingId: randomId,
      deskCode,
      createdAt: new Date().toISOString(),
      studentDetails: { ...studentDetails },
      plan: selectedPlan,
      space: selectedSpace,
      startDate,
      validity,
      timeSlot,
      pricing,
      paymentMethod,
      gateway: "Razorpay (Test Simulation)",
      status: "Confirmed",
      isDemo: true,
      ...customDetails,
    };

    setCompletedBooking(newBooking);
    try {
      localStorage.setItem("studyhive_completed_booking", JSON.stringify(newBooking));
    } catch (e) {
      // ignore
    }
    return newBooking;
  };

  return (
    <BookingContext.Provider
      value={{
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
        setFormErrors,
        paymentMethod,
        setPaymentMethod,
        upiId,
        setUpiId,
        cardDetails,
        setCardDetails,
        completedBooking,
        setCompletedBooking,
        toast,
        showToast,
        choosePlan,
        chooseSpace,
        calculatePricing,
        validateStudentDetails,
        completePayment,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return context;
}
