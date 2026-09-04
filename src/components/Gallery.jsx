import React from "react";

import annualDay from "../assets/annual.jpeg";
import independenceDay from "../assets/independence.jpeg";
import salesforceSeminar from "../assets/salesforce.jpeg";
import codecraftWorkshop from "../assets/aidevcon.jpeg";
import externalCompetition from "../assets/unstop.jpeg";

const markup = String.raw`
<section id="gallery" class="section bg-gradient-to-b from-rose-50/70 to-white">

    <div class="max-w-7xl mx-auto px-5 lg:px-8">

        <!-- SECTION HEADER -->
        <div class="text-center" data-aos="fade-up">

            <span class="section-label">
                <i class="bi bi-images"></i>
                Event Gallery
            </span>

            <h2 class="mt-6 text-4xl md:text-6xl font-black">
                Moments That
                <span class="gradient-text">Matter</span>
            </h2>

            <p class="mt-5 max-w-2xl mx-auto text-gray-500 leading-7">
                A glimpse into the achievements, celebrations, learning
                experiences and memorable moments of our students.
            </p>

        </div>


        <!-- GALLERY -->
        <div
            class="gallery-grid mt-14"
            data-aos="fade-up"
            data-aos-delay="100"
        >

            <!-- 01 - ANNUAL DAY ACHIEVEMENT -->
            <div class="gallery-item large group">

                <img
                    src="${annualDay}"
                    alt="Department Achievement at Annual Day"
                    loading="lazy"
                >

                <div class="gallery-caption">

                    <p class="text-xs uppercase tracking-widest text-rose-200 font-bold">
                        DEPARTMENT ACHIEVEMENT
                    </p>

                    <h3 class="text-xl font-black">
                        Annual Day Celebration
                    </h3>

                </div>

            </div>


            <!-- 02 - INDEPENDENCE DAY -->
            <div class="gallery-item group">

                <img
                    src="${independenceDay}"
                    alt="Independence Day Celebration"
                    loading="lazy"
                >

                <div class="gallery-caption">

                    <p class="text-xs uppercase tracking-widest text-rose-200 font-bold">
                        CELEBRATION
                    </p>

                    <h3 class="font-black">
                        Independence Day
                    </h3>

                </div>

            </div>


            <!-- 03 - SALESFORCE SEMINAR -->
            <div class="gallery-item group">

                <img
                    src="${salesforceSeminar}"
                    alt="Salesforce Seminar"
                    loading="lazy"
                >

                <div class="gallery-caption">

                    <p class="text-xs uppercase tracking-widest text-rose-200 font-bold">
                        SEMINAR
                    </p>

                    <h3 class="font-black">
                        Journey to Salesforce 
                    </h3>

                </div>

            </div>


            <!-- 04 - CODECRAFT WORKSHOP -->
            <div class="gallery-item group">

                <img
                    src="${codecraftWorkshop}"
                    alt="CodeCraft Workshop"
                    loading="lazy"
                >

                <div class="gallery-caption">

                    <p class="text-xs uppercase tracking-widest text-rose-200 font-bold">
                        AI DEVCON'26
                    </p>

                    <h3 class="font-black">
                        Conference @Bangalore
                    </h3>

                </div>

            </div>


            <!-- 05 - EXTERNAL COMPETITION -->
            <div class="gallery-item group">

                <img
                    src="${externalCompetition}"
                    alt="Students Winning External Competitions"
                    loading="lazy"
                >

                <div class="gallery-caption">

                    <p class="text-xs uppercase tracking-widest text-rose-200 font-bold">
                        INAGURATION
                    </p>

                    <h3 class="font-black">
                        Unstop Igniters Club ACEW
                    </h3>

                </div>

            </div>

        </div>

    </div>

</section>


<!-- =========================================================
     VENUE
========================================================== -->
`;

export default function Gallery() {
    return (
        <div
            className="contents"
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}