"use client";

import React, { useState } from "react";
import { Camera, ZoomIn, Sparkles, Filter } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import CTASection from "@/components/CTASection";
import { GALLERY_ITEMS } from "@/data/libraryData";

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState(null);

  const filterTabs = [
    { id: "all", label: "All Highlights" },
    { id: "study-areas", label: "Study Areas" },
    { id: "cubicles", label: "Individual Cubicles" },
    { id: "cabins", label: "Private Cabins" },
    { id: "facilities", label: "Facilities & Amenities" },
    { id: "lounge", label: "Lounge & Refreshment" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="flex flex-col w-full">
      {/* Editorial Header */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#ffd082]/20 text-[#795714] text-xs font-bold uppercase tracking-widest mb-3 border border-[#ffd082]/30">
          <Camera className="w-4 h-4 text-[#7b5815]" />
          <span>Visual Sanctuary • Mohanlalganj</span>
        </div>

        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#10271E] tracking-tight mb-3">
          A Glimpse Inside StudyHive
        </h1>

        <p className="text-base sm:text-lg text-[#424844] max-w-2xl mx-auto leading-relaxed">
          Explore our peaceful, modern, and thoughtfully equipped study environments designed to
          nurture prolonged academic concentration and unhurried intellectual pursuit.
        </p>

        {/* Filter Bar */}
        <div className="mt-8 flex items-center justify-center gap-2 flex-wrap">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm ${
                  isActive
                    ? "bg-[#10271E] text-white shadow-md scale-105"
                    : "bg-[#f1ede6] text-[#1c1c17] hover:bg-[#ece8e0]"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 items-start">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxItem(item)}
              className={`${
                item.colSpan || "lg:col-span-4"
              } group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl cursor-pointer bg-[#f1ede6] border border-[#EDE5D8] transition-all duration-300 hover:-translate-y-1`}
            >
              <div className={`relative w-full ${item.height || "h-[320px]"} overflow-hidden`}>
                <img
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  alt={item.imageAlt || item.title}
                  src={item.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#10271E]/85 via-[#10271E]/20 to-transparent" />

                {item.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10271E]/85 backdrop-blur-md text-[#ffd082] text-xs font-bold tracking-wider uppercase shadow-sm border border-[#D9AD62]/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ffd082]" />
                      Featured Sanctuary
                    </span>
                  </div>
                )}

                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                  <div className="flex flex-col text-white">
                    <span className="text-xs font-semibold text-[#ffd082] uppercase tracking-wider mb-1">
                      {item.zone}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#e6e2da] line-clamp-1 max-w-sm mt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-[#ffd082] text-[#271900] flex items-center justify-center shrink-0 shadow-lg group-hover:bg-[#ffdeab] group-hover:scale-110 transition-all">
                    <ZoomIn className="w-5 h-5 text-[#271900]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {activeLightboxItem && (
        <Lightbox
          item={activeLightboxItem}
          onClose={() => setActiveLightboxItem(null)}
        />
      )}

      {/* Final CTA */}
      <CTASection
        tag="Experience It in Person"
        title="Walk Through Our Doors and Feel the Focus"
        description="Visit our Mohanlalganj facility for a quick tour. We will show you around our quiet reading halls, cabins, and amenities."
        primaryButtonText="Schedule a Visit"
      />
    </div>
  );
}
