"use client";

import React from "react";
import Link from "next/link";
import { Globe, Mail, Phone, MapPin, Clock } from "lucide-react";
import { BRAND } from "@/data/libraryData";

export default function Footer() {
  return (
    <footer className="w-full bg-[#001009] text-white border-t border-[#EDE5D8]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand Intro (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                alt="StudyHive Brand Logo"
                className="h-8 w-auto object-contain"
                src={BRAND.logoUrl}
              />
              <div className="flex flex-col">
                <span className="font-display text-xl text-[#fdf9f1] tracking-tight font-semibold">
                  StudyHive
                </span>
                <span className="text-[10px] font-bold text-[#ffd082] uppercase tracking-wider">
                  Sanctuary for Intellectual Focus
                </span>
              </div>
            </div>

            <p className="text-sm text-[#e6e2da] leading-relaxed max-w-sm">
              An editorial, quiet sanctuary designed for deep cognitive concentration, exam
              preparations, and timeless scholarly focus in Mohanlalganj, Lucknow.
            </p>

            <div className="flex items-center gap-3 mt-2">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#ffdeab] hover:bg-[#ffd082] hover:text-[#271900] transition-colors"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND.email}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#ffdeab] hover:bg-[#ffd082] hover:text-[#271900] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={`tel:${BRAND.phone.replace(/[^0-9+]/g, "")}`}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-[#ffdeab] hover:bg-[#ffd082] hover:text-[#271900] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (Col 5-6) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="text-base font-semibold text-[#fdf9f1] font-display">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/spaces"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  Spaces
                </Link>
              </li>
              <li>
                <Link
                  href="/plans"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  Plans
                </Link>
              </li>
              <li>
                <Link
                  href="/book-seat"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  Book a Seat
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#e6e2da] hover:text-[#ffdeab] transition-colors"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Spaces & Memberships (Col 7-9) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-semibold text-[#fdf9f1] font-display">
              Spaces &amp; Memberships
            </h4>
            <div className="flex flex-col gap-1.5 mb-2">
              <span className="text-[11px] font-bold text-[#ffdeab] uppercase tracking-wider">
                Study Zones
              </span>
              <span className="text-sm text-[#e6e2da]">Open Reading Area</span>
              <span className="text-sm text-[#e6e2da]">Individual Cubicles</span>
              <span className="text-sm text-[#e6e2da]">Private Study Cabins</span>
              <span className="text-sm text-[#e6e2da]">Silent Discussion Room</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-bold text-[#ffdeab] uppercase tracking-wider">
                Membership Tiers
              </span>
              <span className="text-sm text-[#e6e2da]">
                Daily Pass • Monthly • Quarterly
              </span>
            </div>
          </div>

          {/* Contact & Hours (Col 10-12) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="text-base font-semibold text-[#fdf9f1] font-display">
              Contact &amp; Hours
            </h4>
            <div className="flex flex-col gap-3 text-sm text-[#e6e2da]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ffdeab] shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#ffdeab] shrink-0" />
                <a href={`tel:${BRAND.phone}`} className="hover:text-white transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#ffdeab] shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-white transition-colors">
                  {BRAND.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#ffdeab] shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium">Open Daily</span>
                  <p className="text-xs text-[#ffdeab] font-semibold">{BRAND.hours}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#e6e2da]">
          <span>
            © {new Date().getFullYear()} StudyHive Library &amp; Reading Space. All rights
            reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-[#ffdeab] transition-colors">
              Terms of Service
            </Link>
            <Link href="/about" className="hover:text-[#ffdeab] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-[#ffdeab] transition-colors">
              Library Guidelines
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
