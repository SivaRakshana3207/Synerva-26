import React from "react";

const markup = String.raw`<section id="venue" class="section bg-white">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
        <div class="text-center" data-aos="fade-up">
            <span class="section-label"><i class="bi bi-geo-alt-fill"></i> Find Us</span>
            <h2 class="mt-6 text-4xl md:text-6xl font-black">Event <span class="gradient-text">Venue</span></h2>
        </div>

        <div class="venue-card mt-14 grid lg:grid-cols-2" data-aos="fade-up">

            <div class="map-frame">
                <iframe title="Arunachala College Location"
                    src="https://www.google.com/maps?q=Arunachala%20College%20of%20Engineering%20for%20Women&output=embed"
                    loading="lazy"></iframe>
            </div>

            <div class="flex flex-col justify-center p-8 md:p-12">
                <div class="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-3xl text-rose-700">
                    <i class="bi bi-geo-alt-fill"></i>
                </div>

                <h3 class="mt-7 text-3xl md:text-4xl font-black">Arunachala College of Engineering for Women</h3>
                <p class="mt-4 leading-7 text-gray-500">Department of Computer Science & Engineering</p>

                <div class="mt-8 space-y-5">
                    <div class="flex gap-4">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><i class="bi bi-calendar-event"></i></div>
                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">Date</p>
                            <p class="font-black text-gray-700">October 1, 2026</p>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><i class="bi bi-clock-fill"></i></div>
                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">Time</p>
                            <p class="font-black text-gray-700">09:00 AM onwards</p>
                        </div>
                    </div>

                    <div class="flex gap-4">
                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700"><i class="bi bi-building"></i></div>
                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">Department</p>
                            <p class="font-black text-gray-700">Computer Science & Engineering</p>
                        </div>
                    </div>
                </div>

                <div class="mt-9 flex flex-col sm:flex-row gap-3">
                    <a href="https://www.google.com/maps/search/?api=1&query=Arunachala+College+of+Engineering+for+Women" target="_blank" rel="noopener noreferrer" class="shine btn rounded-full border-0 text-white wine-gradient">
                        <i class="bi bi-map-fill"></i> Get Directions
                    </a>
                    <a href="./bus-route.pdf" target="_blank" rel="noopener noreferrer" class="btn rounded-full border-rose-200 bg-rose-50 text-rose-800">
                        <i class="bi bi-file-earmark-pdf-fill"></i> Bus Route
                    </a>
                </div>

                <div class="alert mt-6 border-rose-100 bg-rose-50 text-rose-900">
                    <i class="bi bi-info-circle-fill"></i>
                    <span class="text-xs leading-5">Click <strong>Bus Route</strong> to open the official route PDF in a new tab.</span>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- =========================================================
     CONTACT
========================================================== -->`;

export default function Venue() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
