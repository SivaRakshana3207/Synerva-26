import React, { useEffect, useState } from "react";
import collegeImage from "../assets/clg.png";

export default function Hero() {
  // ============================================================
  // COUNTDOWN
  // Event: October 1, 2026 — 12:00 AM IST
  // ============================================================

  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const targetDate = new Date(
      "2026-10-01T00:00:00+05:30"
    ).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = targetDate - now;

      // Event has started
      if (difference <= 0) {
        setTimeLeft({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });

        return;
      }

      const days = Math.floor(
        difference / (1000 * 60 * 60 * 24)
      );

      const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
      );

      const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
      );

      const seconds = Math.floor(
        (difference / 1000) % 60
      );

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    // Run immediately
    updateCountdown();

    // Update every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="hero pt-24 overflow-hidden"
    >
      {/* ============================================================
          BACKGROUND
      ============================================================ */}

      <div className="hero-grid"></div>

      <div className="hero-orb orb-1"></div>

      <div className="hero-orb orb-2"></div>

      {/* ============================================================
          MAIN CONTAINER
      ============================================================ */}

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-14 xl:px-20 2xl:px-24 w-full">

        <div className="grid items-center gap-14 xl:gap-20 lg:grid-cols-[1.08fr_.92fr]">

          {/* ========================================================
              LEFT CONTENT
          ======================================================== */}

          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full max-w-3xl"
          >

            {/* ======================================================
                COLLEGE NAME — LARGE & HIGHLIGHTED
            ====================================================== */}

            <div
              className="
                mb-5
                inline-flex
                max-w-full
                items-center
                gap-2
                rounded-full
                border
                border-rose-200
                bg-white/90
                px-4
                py-2.5
                shadow-md
                backdrop-blur-md
              "
            >

              <span className="relative flex h-2.5 w-2.5 shrink-0">

                <span
                  className="
                    absolute
                    inline-flex
                    h-full
                    w-full
                    animate-ping
                    rounded-full
                    bg-rose-500
                    opacity-75
                  "
                ></span>

                <span
                  className="
                    relative
                    inline-flex
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-rose-600
                  "
                ></span>

              </span>

              <span
                className="
                  whitespace-nowrap
                  text-xs
                  sm:text-sm
                  md:text-base
                  lg:text-lg
                  font-black
                  tracking-tight
                  text-rose-900
                "
              >
                Arunachala College of Engineering for Women
              </span>

            </div>


            {/* ======================================================
                DEPARTMENT
            ====================================================== */}

            <p
              className="
                text-[10px]
                sm:text-xs
                md:text-sm
                font-black
                uppercase
                tracking-[.22em]
                sm:tracking-[.28em]
                text-rose-700
              "
            >
              Department of Computer Science & Engineering
            </p>


            {/* ======================================================
                SYNERVA BRAND
            ====================================================== */}

            <h1
              className="
                hero-brandline
                mt-5
                text-5xl
                sm:text-7xl
                lg:text-8xl
                font-black
                tracking-tight
                leading-none
                whitespace-nowrap
              "
            >

              <span className="gradient-text">
                SYNERVA
              </span>

              <span
                className="
                  text-3xl
                  sm:text-5xl
                  lg:text-6xl
                  text-gray-500
                "
              >
                '26
              </span>

            </h1>


            {/* ======================================================
                MAIN TITLE
                ONE LINE — RESPONSIVE
            ====================================================== */}

            <h2
              className="
                mt-6
                w-full
                whitespace-nowrap
                text-left
                text-[14px]
                sm:text-sm
                md:text-xl
                lg:text-[2rem]
                xl:text-[2.15rem]
                font-black
                leading-tight
                tracking-tight
              "
            >

              <span className="text-gray-900">
                National Level
              </span>{" "}

              <span className="gradient-text">
                Technical Symposium
              </span>

            </h2>


            {/* ======================================================
                DESCRIPTION
            ====================================================== */}

            <p
              className="
                mt-6
                max-w-2xl
                text-sm
                md:text-lg
                leading-8
                text-gray-500
              "
            >
              Where technology meets creativity, competition
              and innovation. Step into an experience designed
              for the next generation of problem solvers.
            </p>


            {/* ======================================================
                BUTTONS
            ====================================================== */}

            <div className="mt-9 flex flex-col sm:flex-row gap-4">

              {/* EXPLORE EVENTS */}

              <a
                href="#events"
                className="
                  shine
                  btn
                  btn-lg
                  border-0
                  rounded-full
                  px-8
                  text-white
                  wine-gradient
                  shadow-xl
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              >
                Explore Events

                <i className="bi bi-arrow-right"></i>
              </a>


              {/* REGISTER NOW */}

              <a
                href="#register"
                className="
                  btn
                  btn-lg
                  rounded-full
                  border
                  border-rose-200
                  bg-white
                  px-8
                  text-rose-800
                  shadow-sm
                  hover:shadow-lg
                  hover:scale-[1.03]
                  transition-all
                  duration-300
                "
              >
                Register Now

                <i className="bi bi-person-plus"></i>
              </a>

            </div>


            {/* ======================================================
                COUNTDOWN
            ====================================================== */}

            <div className="mt-12 mb-20">

              <p
                className="
                  mb-4
                  text-[10px]
                  font-black
                  uppercase
                  tracking-[.3em]
                  text-gray-400
                "
              >
                Event Begins In
              </p>


              <div className="grid grid-cols-4 gap-2 sm:gap-3 max-w-xl">

                {/* ==================================================
                    DAYS
                ================================================== */}

                <div
                  className="
                    stat
                    bg-white
                    rounded-2xl
                    shadow-sm
                    border
                    border-rose-100
                    px-3
                    py-4
                    text-center
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="stat-value text-2xl sm:text-4xl gradient-text">
                    {timeLeft.days}
                  </div>

                  <div className="stat-desc text-[9px] font-bold uppercase tracking-widest">
                    Days
                  </div>

                </div>


                {/* ==================================================
                    HOURS
                ================================================== */}

                <div
                  className="
                    stat
                    bg-white
                    rounded-2xl
                    shadow-sm
                    border
                    border-rose-100
                    px-3
                    py-4
                    text-center
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="stat-value text-2xl sm:text-4xl gradient-text">
                    {timeLeft.hours}
                  </div>

                  <div className="stat-desc text-[9px] font-bold uppercase tracking-widest">
                    Hours
                  </div>

                </div>


                {/* ==================================================
                    MINUTES
                ================================================== */}

                <div
                  className="
                    stat
                    bg-white
                    rounded-2xl
                    shadow-sm
                    border
                    border-rose-100
                    px-3
                    py-4
                    text-center
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="stat-value text-2xl sm:text-4xl gradient-text">
                    {timeLeft.minutes}
                  </div>

                  <div className="stat-desc text-[9px] font-bold uppercase tracking-widest">
                    Minutes
                  </div>

                </div>


                {/* ==================================================
                    SECONDS
                ================================================== */}

                <div
                  className="
                    stat
                    bg-white
                    rounded-2xl
                    shadow-sm
                    border
                    border-rose-100
                    px-3
                    py-4
                    text-center
                    hover:-translate-y-1
                    hover:shadow-md
                    transition-all
                    duration-300
                  "
                >

                  <div className="stat-value text-2xl sm:text-4xl gradient-text">
                    {timeLeft.seconds}
                  </div>

                  <div className="stat-desc text-[9px] font-bold uppercase tracking-widest">
                    Seconds
                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* ========================================================
              RIGHT — COLLEGE IMAGE
              DESKTOP ONLY
          ======================================================== */}

          <div
            data-aos="zoom-in"
            data-aos-duration="1200"
            className="
              hidden
              lg:flex
              justify-center
              items-center
              relative
              min-h-[600px]
              -translate-y-12
              xl:-translate-y-16
            "
          >

            {/* ======================================================
                OUTER ROSE GLOW
            ====================================================== */}

            <div
              className="
                absolute
                w-[440px]
                h-[440px]
                rounded-full
                bg-rose-300/20
                blur-3xl
                animate-pulse
              "
            ></div>


            {/* ======================================================
                SECOND SOFT GLOW
            ====================================================== */}

            <div
              className="
                absolute
                w-[340px]
                h-[340px]
                rounded-full
                bg-pink-200/30
                blur-3xl
              "
            ></div>


            {/* ======================================================
                IMAGE COMPOSITION
            ====================================================== */}

            <div
              className="
                relative
                w-[460px]
                xl:w-[500px]
                2xl:w-[530px]
              "
            >

              {/* ==================================================
                  DECORATIVE ROTATING BORDER
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-5
                  rounded-[3rem]
                  border
                  border-rose-200/60
                  rotate-3
                  animate-[spin_20s_linear_infinite]
                "
              ></div>


              {/* ==================================================
                  BACKGROUND CARD
              ================================================== */}

              <div
                className="
                  absolute
                  -inset-3
                  rounded-[2.5rem]
                  bg-gradient-to-br
                  from-rose-100
                  to-pink-50
                  rotate-[-3deg]
                  shadow-xl
                "
              ></div>


              {/* ==================================================
                  MAIN GLASS CARD
              ================================================== */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[2.5rem]
                  border
                  border-white/80
                  bg-white/70
                  p-2
                  shadow-[0_25px_80px_rgba(136,19,55,0.18)]
                  backdrop-blur-xl
                "
              >

                {/* ==================================================
                    COLLEGE PHOTO
                ================================================== */}

                <img
                  src={collegeImage}
                  alt="Arunachala College of Engineering for Women"
                  className="
                    w-full
                    h-[450px]
                    xl:h-[480px]
                    2xl:h-[510px]
                    object-cover
                    rounded-[2rem]
                    transition-transform
                    duration-700
                    hover:scale-[1.03]
                  "
                />


                {/* ==================================================
                    IMAGE GRADIENT OVERLAY
                ================================================== */}

                <div
                  className="
                    absolute
                    inset-2
                    rounded-[2rem]
                    bg-gradient-to-t
                    from-rose-950/50
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                ></div>


                {/* ==================================================
                    SYNERVA IMAGE LABEL
                ================================================== */}

                <div className="absolute bottom-7 left-7 right-7">

                  <div
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      bg-white/90
                      backdrop-blur-md
                      px-4
                      py-2
                      text-xs
                      font-black
                      uppercase
                      tracking-wider
                      text-rose-800
                      shadow-lg
                    "
                  >

                    <span className="h-2 w-2 rounded-full bg-rose-600 animate-pulse"></span>

                    SYNERVA '26

                  </div>

                </div>

              </div>


              {/* ======================================================
                  INNOVATE BADGE
              ====================================================== */}

              <div className="absolute -top-5 -right-10">

                <div
                  className="
                    badge
                    badge-lg
                    border-rose-200
                    bg-white/95
                    text-rose-800
                    shadow-xl
                    backdrop-blur-md
                    animate-[bounce_4s_ease-in-out_infinite]
                  "
                >

                  <i className="bi bi-lightbulb-fill mr-1"></i>

                  INNOVATE

                </div>

              </div>


              {/* ======================================================
                  CREATE BADGE
              ====================================================== */}

              <div className="absolute top-[43%] -left-16">

                <div
                  className="
                    badge
                    badge-lg
                    border-rose-200
                    bg-white/95
                    text-rose-800
                    shadow-xl
                    backdrop-blur-md
                    animate-[bounce_5s_ease-in-out_infinite]
                  "
                >

                  <i className="bi bi-stars mr-1"></i>

                  CREATE

                </div>

              </div>


              {/* ======================================================
                  COMPETE BADGE
              ====================================================== */}

              <div className="absolute -bottom-5 right-8">

                <div
                  className="
                    badge
                    badge-lg
                    border-rose-200
                    bg-white/95
                    text-rose-800
                    shadow-xl
                    backdrop-blur-md
                    animate-[bounce_4.5s_ease-in-out_infinite]
                  "
                >

                  <i className="bi bi-trophy-fill mr-1"></i>

                  COMPETE

                </div>

              </div>


              {/* ======================================================
                  DECORATIVE DOT GRID
              ====================================================== */}

              <div
                className="
                  absolute
                  -top-10
                  left-10
                  grid
                  grid-cols-4
                  gap-2
                  opacity-50
                "
              >

                {Array.from({ length: 16 }).map((_, index) => (

                  <span
                    key={index}
                    className="h-1.5 w-1.5 rounded-full bg-rose-400"
                  ></span>

                ))}

              </div>


              {/* ======================================================
                  DECORATIVE BOTTOM ORB
              ====================================================== */}

              <div
                className="
                  absolute
                  -bottom-12
                  -left-10
                  h-24
                  w-24
                  rounded-full
                  bg-rose-200/40
                  blur-xl
                "
              ></div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}