"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MapPin, ArrowRight, Menu, X, User } from "lucide-react";
import { BRAND } from "@/data/libraryData";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Spaces", href: "/spaces" },
    { label: "Plans", href: "/plans" },
    { label: "Book a Seat", href: "/book-seat" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#10271e]/90 backdrop-blur-xl border-b border-[#EDE5D8]/10 shadow-[0_1px_8px_rgba(0,0,0,0.06)]">
      <div className="h-20 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo & Title */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <img
            alt="StudyHive Brand Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src={BRAND.logoUrl}
          />
          <div className="flex flex-col">
            <span className="font-display text-lg text-white tracking-tight font-semibold">
              StudyHive
            </span>
            <span className="text-[10px] font-bold text-[#edbf72] uppercase tracking-wider font-sans">
              Library &amp; Reading Space
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 px-2 py-1 bg-white/5 rounded-full border border-white/5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 transition-all text-sm ${
                  active
                    ? "bg-white/10 text-white font-semibold rounded-full shadow-inner"
                    : "text-[#779083] hover:text-white font-medium"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Location Badge */}
          <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#ffdeab] text-xs font-semibold">
            <MapPin className="w-3.5 h-3.5 text-[#ffd082]" />
            <span>Mohanlalganj, Lucknow</span>
          </div>

          {/* Book a Seat CTA Pill */}
          <Link
            href="/book-seat"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2 bg-[#ffd082] text-[#271900] text-sm font-semibold rounded-full shadow-[0_1px_8px_rgba(0,0,0,0.04)] hover:bg-[#ffdeab] hover:scale-105 transition-all active:scale-95"
          >
            <span>Book a Seat</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          {/* User Profile Avatar Icon */}
          <div className="w-8 h-8 rounded-full bg-[#001009] border border-white/10 hidden sm:flex items-center justify-center text-white">
            <User className="w-4 h-4 text-white" />
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#10271e] border-b border-[#EDE5D8]/10 px-6 py-5 shadow-2xl animate-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 text-[#ffdeab] text-xs font-semibold w-fit mb-2">
              <MapPin className="w-3.5 h-3.5 text-[#ffd082]" />
              <span>Mohanlalganj, Lucknow</span>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base transition-colors ${
                    active
                      ? "bg-white/15 text-white font-semibold"
                      : "text-[#779083] hover:text-white font-medium"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-white/10 mt-2 flex flex-col gap-3">
              <Link
                href="/book-seat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#ffd082] text-[#271900] font-semibold rounded-full shadow-md"
              >
                <span>Book Your Seat</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
