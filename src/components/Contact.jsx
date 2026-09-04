import React from "react";

const markup = String.raw`<section id="contact" class="contact-section section">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">

        <!-- SECTION HEADER -->
        <div class="text-center" data-aos="fade-up">

            <span class="section-label bg-white">
                <i class="bi bi-chat-dots-fill"></i>
                Get In Touch
            </span>

            <h2 class="mt-6 text-4xl md:text-6xl font-black">
                Let's Make
                <span class="gradient-text">Something Epic</span>
            </h2>

            <p class="mt-5 max-w-2xl mx-auto text-gray-500 leading-7">
                Have a question about an event, registration, venue or anything
                related to SYNERVA '26? Reach out to the organizing team.
            </p>

        </div>


        <!-- CONTACT CARDS -->
        <div class="mt-14 grid gap-6 md:grid-cols-3" data-aos="fade-up">

            <!-- EMAIL -->
            <div class="contact-card">

                <div class="contact-icon">
                    <i class="bi bi-envelope-fill"></i>
                </div>

                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">
                    Email
                </p>

                <h3 class="mt-2 text-xl font-black">
                    Write to Us
                </h3>

                <p class="mt-3 text-sm text-gray-500 break-all">
                    synerva2026@gmail.com
                </p>

                <a
                    href="mailto:synerva2026@gmail.com"
                    class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700"
                >
                    Send Email
                    <i class="bi bi-arrow-up-right"></i>
                </a>

            </div>


            <!-- JOSHNA CONTACT -->
            <div class="contact-card">

                <div class="contact-icon">
                    <i class="bi bi-telephone-fill"></i>
                </div>

                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">
                    Contact Us
                </p>

                <h3 class="mt-2 text-xl font-black">
                    Joshna
                </h3>

                <p class="mt-3 text-sm text-gray-500">
                    Student Coordinator · Final Year CSE
                </p>

                <p class="mt-2 text-sm font-bold text-gray-700">
                    +91 8270393550
                </p>

                <a
                    href="tel:+91 8270393550"
                    class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700"
                >
                    Call Joshna
                    <i class="bi bi-arrow-up-right"></i>
                </a>

            </div>


            <!-- ORGANIZING TEAM -->
            <div class="contact-card">

                <div class="contact-icon">
                    <i class="bi bi-people-fill"></i>
                </div>

                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">
                    Organizing Team
                </p>

                <h3 class="mt-2 text-xl font-black">
                    Coordinators
                </h3>

                <div class="mt-4 space-y-3 text-sm">

                    <!-- HOD -->
                    <div>
                        <p class="font-bold text-gray-700">
                            Dr. T.V. Chithra
                        </p>

                        <p class="text-gray-500">
                            Head of the Department · CSE
                        </p>
                    </div>


                    <!-- COORDINATOR -->
                    <div>
                        <p class="font-bold text-gray-700">
                            Mrs. N. Visalatchi
                        </p>

                        <p class="text-gray-500">
                            Assistant Professor · CSE
                        </p>
                    </div>

                </div>

            </div>

        </div>


        <!-- CALL TO ACTION -->
        <div
            class="mt-10 rounded-[35px] wine-gradient p-8 md:p-12 text-white shadow-2xl"
            data-aos="zoom-in"
        >

            <div class="flex flex-col md:flex-row items-center justify-between gap-8">

                <div>

                    <p class="text-xs font-black uppercase tracking-[.25em] text-rose-200">
                        SYNERVA '26
                    </p>

                    <h3 class="mt-3 text-3xl md:text-4xl font-black">
                        Ready to experience the next level?
                    </h3>

                    <p class="mt-3 max-w-xl text-sm leading-6 text-rose-100">
                        Explore the events, gather your team and prepare to make
                        your mark.
                    </p>

                </div>


                <a
                    href="#events"
                    class="shine btn btn-lg rounded-full border-0 bg-white px-8 text-rose-900 hover:bg-rose-50"
                >
                    Explore Events
                    <i class="bi bi-arrow-right"></i>
                </a>

            </div>

        </div>

    </div>
</section>


<!-- =========================================================
     FOOTER
========================================================== -->`;

export default function Contact() {
    return (
        <div
            className="contents"
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}