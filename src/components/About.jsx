import React from "react";
import deptImage from "../assets/dept.jpg";

const markup = String.raw`<section id="department" class="section bg-white">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-14 items-center">

            <div data-aos="fade-right" class="department-image">
                <img
                    src="${deptImage}"
                    alt="Computer Science and Engineering Department"
                />

                <div class="image-overlay"></div>

                <div class="accreditation-card">
                    <div class="flex items-center gap-3">
                        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-50 text-rose-700">
                            <i class="bi bi-award-fill"></i>
                        </div>

                        <div>
                            <p class="text-[9px] font-black uppercase tracking-widest text-gray-400">
                                Accreditation
                            </p>

                            <p class="text-sm font-black text-gray-800">
                                Accredited Institution
                            </p>
                        </div>
                    </div>
                </div>

                <div class="rank-card">
                    <div class="flex items-center gap-3">
                        <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-xl">
                            <i class="bi bi-mortarboard-fill"></i>
                        </div>

                        <div>
                            <p class="text-[9px] uppercase tracking-widest text-rose-200 font-bold">
                                Anna University
                            </p>

                            <p class="font-black text-white">
                                Top Ranked Institution
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div data-aos="fade-left">

                <span class="section-label">
                    <i class="bi bi-cpu-fill"></i>
                    About CSE Department
                </span>

                <h2 class="mt-6 text-4xl md:text-6xl font-black leading-tight">
                    Empowering the
                    <span class="gradient-text">
                        Next Generation
                    </span>
                    of Technologists
                </h2>

                <div class="section-line mt-7"></div>

                <p class="mt-7 text-gray-600 leading-8">
                    The Department of Computer Science & Engineering at
                    Arunachala College of Engineering for Women focuses on
                    developing strong technical knowledge, creativity,
                    innovation and industry-ready skills.
                </p>

                <p class="mt-4 text-gray-500 leading-8">
                    Through hands-on learning, technical events, workshops,
                    projects and collaborative experiences, students are
                    encouraged to become confident problem solvers and future
                    technology leaders.
                </p>

                <a
                    href="#gallery"
                    class="shine btn mt-9 rounded-full border-0 px-7 text-white wine-gradient"
                >
                    Event Gallery
                    <i class="bi bi-images"></i>
                </a>

            </div>

        </div>
    </div>
</section>

<!-- =========================================================
     TIMELINE
========================================================== -->`;

export default function About() {
  return (
    <div
      className="contents"
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}