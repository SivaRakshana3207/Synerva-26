import React from "react";

const markup = String.raw`<section id="venue" class="section bg-white">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

        <!-- SECTION HEADER -->
        <div class="text-center" data-aos="fade-up">
            <span class="section-label">
                <i class="bi bi-geo-alt-fill"></i> Find Us
            </span>

            <h2 class="mt-6 text-4xl md:text-6xl font-black">
                Event <span class="gradient-text">Venue</span>
            </h2>
        </div>


        <!-- VENUE CARD -->
        <div
            class="venue-card mt-14 grid lg:grid-cols-2 overflow-hidden"
            data-aos="fade-up"
        >

            <!-- MAP -->
            <div class="map-frame min-h-[320px] lg:min-h-full">
                <iframe
                    title="Arunachala College Location"
                    src="https://www.google.com/maps?q=Arunachala%20College%20of%20Engineering%20for%20Women&output=embed"
                    loading="lazy"
                    class="w-full h-full min-h-[320px] border-0"
                ></iframe>
            </div>


            <!-- VENUE DETAILS -->
            <div class="flex flex-col justify-center p-7 sm:p-9 md:p-12">

                <!-- ICON -->
                <div class="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-rose-50 text-2xl sm:text-3xl text-rose-700">
                    <i class="bi bi-geo-alt-fill"></i>
                </div>


                <!-- TITLE -->
                <h3 class="mt-6 sm:mt-7 text-2xl sm:text-3xl md:text-4xl font-black leading-tight">
                    Arunachala College of Engineering for Women
                </h3>

                <p class="mt-3 sm:mt-4 leading-7 text-gray-500">
                    Department of Computer Science & Engineering
                </p>


                <!-- DETAILS -->
                <div class="mt-7 sm:mt-8 space-y-4 sm:space-y-5">

                    <!-- DATE -->
                    <div class="flex items-center gap-4">

                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                            <i class="bi bi-calendar-event"></i>
                        </div>

                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                Date
                            </p>

                            <p class="font-black text-gray-700">
                                October 1, 2026
                            </p>
                        </div>

                    </div>


                    <!-- TIME -->
                    <div class="flex items-center gap-4">

                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                            <i class="bi bi-clock-fill"></i>
                        </div>

                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                Time
                            </p>

                            <p class="font-black text-gray-700">
                                09:00 AM onwards
                            </p>
                        </div>

                    </div>


                    <!-- DEPARTMENT -->
                    <div class="flex items-center gap-4">

                        <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                            <i class="bi bi-building"></i>
                        </div>

                        <div>
                            <p class="text-[10px] uppercase tracking-widest font-bold text-gray-400">
                                Department
                            </p>

                            <p class="font-black text-gray-700">
                                Computer Science & Engineering
                            </p>
                        </div>

                    </div>

                </div>


                <!-- GET DIRECTIONS -->
                <div class="mt-8 sm:mt-9">

                    <a
                        href="https://www.google.com/maps/search/?api=1&query=Arunachala+College+of+Engineering+for+Women"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="shine btn rounded-full border-0 px-6 sm:px-7 text-white wine-gradient"
                    >
                        <i class="bi bi-map-fill"></i>
                        Get Directions
                    </a>

                </div>

            </div>

        </div>

    </div>
</section>


<!-- =========================================================
     CONTACT
========================================================== -->`;

export default function Venue() {
    return (
        <div
            className="contents"
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}