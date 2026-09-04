import React, { useEffect, useState } from "react";

const timelineEvents = [
  {
    time: "09:00",
    period: "AM",
    title: "Registration",
    icon: "bi-person-check-fill",
    number: "01",
    description:
      "Check in, collect your event kit and get ready for an unforgettable symposium.",
  },
  {
    time: "09:30",
    period: "AM",
    title: "Inauguration",
    icon: "bi-megaphone-fill",
    number: "02",
    description:
      "Official inauguration and the beginning of the SYNERVA '26 experience.",
  },
  {
    time: "11:00",
    period: "AM",
    title: "Competitions",
    icon: "bi-trophy-fill",
    number: "03",
    description:
      "Technical and creative competitions begin across multiple venues.",
  },
  {
    time: "01:00",
    period: "PM",
    title: "Lunch",
    icon: "bi-cup-hot-fill",
    number: "04",
    description:
      "Refresh, recharge and connect with fellow participants over lunch.",
  },
  {
    time: "02:00",
    period: "PM",
    title: "Final Rounds",
    icon: "bi-stars",
    number: "05",
    description:
      "The most exciting rounds begin as participants compete for the top spots.",
  },
  {
    time: "03:00",
    period: "PM",
    title: "Prize Distribution",
    icon: "bi-award-fill",
    number: "06",
    description:
      "Celebrate the winners, achievements and unforgettable moments of SYNERVA '26.",
  },
];

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const cards = document.querySelectorAll("[data-timeline-card]");

      let closestIndex = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();

        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveEvent(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="timeline"
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-rose-50
        via-white
        to-rose-50
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* Wine glow */}
        <div
          className="
            absolute
            -left-40
            top-20
            h-72
            w-72
            rounded-full
            bg-rose-300/20
            blur-3xl
            sm:h-96
            sm:w-96
          "
        />

        {/* Second glow */}
        <div
          className="
            absolute
            -right-40
            bottom-20
            h-80
            w-80
            rounded-full
            bg-rose-200/30
            blur-3xl
            sm:h-[500px]
            sm:w-[500px]
          "
        />

        {/* Grid — same wine tone as Hero */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: `
              linear-gradient(
                rgba(136,19,55,0.035) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(136,19,55,0.035) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "40px 40px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        {/* Decorative ring */}
        <div
          className="
            absolute
            left-[7%]
            top-[15%]
            h-32
            w-32
            rounded-full
            border
            border-rose-300/20
            sm:h-48
            sm:w-48
          "
        />

        <div
          className="
            absolute
            right-[7%]
            bottom-[15%]
            h-40
            w-40
            rounded-full
            border
            border-rose-300/20
            sm:h-56
            sm:w-56
          "
        />
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-5
          sm:px-8
          lg:px-10
        "
      >

        {/* ===================================================
            HEADER
        ==================================================== */}

        <div
          className="mx-auto max-w-3xl text-center"
          data-aos="fade-up"
        >

          {/* Label */}

          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-rose-200
              bg-white/80
              px-4
              py-2
              text-[10px]
              font-black
              uppercase
              tracking-[0.22em]
              text-rose-800
              shadow-sm
              backdrop-blur-xl
              sm:text-xs
            "
          >
            <span className="relative flex h-2 w-2">

              <span
                className="
                  absolute
                  inline-flex
                  h-full
                  w-full
                  animate-ping
                  rounded-full
                  bg-rose-500
                  opacity-60
                "
              />

              <span
                className="
                  relative
                  inline-flex
                  h-2
                  w-2
                  rounded-full
                  bg-rose-700
                "
              />
            </span>

            <i className="bi bi-clock-history" />

            Event Timeline
          </div>

          {/* Heading */}

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-[1.05]
              tracking-tight
              text-gray-900
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
          >
            A Day Full of{" "}

            <span className="gradient-text">
              Energy
            </span>
          </h2>

          {/* Decorative line */}

          <div className="mx-auto mt-6 flex items-center justify-center gap-2">

            <div className="h-px w-10 bg-rose-200 sm:w-16" />

            <div className="h-2 w-2 rotate-45 bg-rose-700" />

            <div className="h-px w-10 bg-rose-200 sm:w-16" />

          </div>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-gray-500
              sm:text-base
              sm:leading-8
            "
          >
            From the first check-in to the final celebration,
            experience every moment of{" "}

            <span className="font-bold text-rose-800">
              SYNERVA '26
            </span>
            .
          </p>
        </div>

        {/* ===================================================
            TIMELINE
        ==================================================== */}

        <div
          className="
            relative
            mx-auto
            mt-16
            max-w-5xl
            sm:mt-20
          "
        >

          {/* Desktop base line */}

          <div
            className="
              absolute
              bottom-0
              left-1/2
              top-0
              hidden
              w-px
              -translate-x-1/2
              bg-gradient-to-b
              from-transparent
              via-rose-300
              to-transparent
              lg:block
            "
          />

          {/* Desktop active line */}

          <div
            className="
              absolute
              left-1/2
              top-0
              hidden
              w-[3px]
              -translate-x-1/2
              bg-gradient-to-b
              from-rose-800
              via-rose-600
              to-rose-800
              transition-all
              duration-700
              lg:block
            "
            style={{
              height: `${
                ((activeEvent + 1) / timelineEvents.length) * 100
              }%`,
            }}
          />

          {/* Mobile line */}

          <div
            className="
              absolute
              bottom-0
              left-[22px]
              top-0
              w-px
              bg-gradient-to-b
              from-transparent
              via-rose-300
              to-transparent
              lg:hidden
            "
          />

          <div className="space-y-10 sm:space-y-12 lg:space-y-16">

            {timelineEvents.map((event, index) => {

              const isActive = activeEvent === index;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={event.number}
                  className={`
                    relative
                    lg:flex
                    lg:items-center
                    ${
                      isLeft
                        ? "lg:justify-start"
                        : "lg:justify-end"
                    }
                  `}
                >

                  {/* =================================================
                      MOBILE NODE
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      left-0
                      top-8
                      z-20
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full
                      border
                      transition-all
                      duration-500
                      lg:hidden

                      ${
                        isActive
                          ? `
                            border-rose-700
                            bg-rose-800
                            text-white
                            shadow-[0_0_25px_rgba(136,19,55,0.35)]
                          `
                          : `
                            border-rose-200
                            bg-white
                            text-rose-700
                            shadow-md
                          `
                      }
                    `}
                  >
                    <i
                      className={`bi ${event.icon} text-sm`}
                    />
                  </div>

                  {/* =================================================
                      CARD
                  ================================================== */}

                  <div
                    data-timeline-card
                    onMouseEnter={() =>
                      setActiveEvent(index)
                    }
                    onClick={() =>
                      setActiveEvent(index)
                    }
                    className={`
                      group
                      relative
                      ml-16
                      w-[calc(100%-4rem)]
                      cursor-pointer
                      transition-all
                      duration-500

                      lg:ml-0
                      lg:w-[calc(50%-4rem)]

                      ${
                        isActive
                          ? "lg:-translate-y-1"
                          : ""
                      }
                    `}
                  >

                    <div
                      className={`
                        relative
                        overflow-hidden
                        rounded-[1.75rem]
                        border
                        bg-white/75
                        p-5
                        backdrop-blur-xl
                        transition-all
                        duration-500
                        sm:p-6
                        lg:p-7

                        ${
                          isActive
                            ? `
                              border-rose-200
                              shadow-[0_20px_60px_rgba(136,19,55,0.14)]
                            `
                            : `
                              border-white
                              shadow-[0_15px_50px_rgba(136,19,55,0.07)]
                              hover:border-rose-100
                              hover:shadow-[0_20px_60px_rgba(136,19,55,0.12)]
                            `
                        }
                      `}
                    >

                      {/* Card glow */}

                      <div
                        className={`
                          absolute
                          -right-16
                          -top-16
                          h-40
                          w-40
                          rounded-full
                          bg-rose-300/15
                          blur-3xl
                          transition-opacity
                          duration-500

                          ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-100"
                          }
                        `}
                      />

                      {/* Number */}

                      <div
                        className="
                          absolute
                          right-5
                          top-5
                          text-4xl
                          font-black
                          leading-none
                          text-rose-100
                          transition-all
                          duration-500
                          group-hover:text-rose-200
                          sm:right-6
                          sm:top-6
                        "
                      >
                        {event.number}
                      </div>

                      {/* Time */}

                      <div className="relative flex items-center gap-3">

                        <div
                          className={`
                            flex
                            h-11
                            w-11
                            shrink-0
                            items-center
                            justify-center
                            rounded-xl
                            transition-all
                            duration-500

                            ${
                              isActive
                                ? `
                                  bg-rose-800
                                  text-white
                                  shadow-lg
                                  shadow-rose-200
                                `
                                : `
                                  bg-rose-50
                                  text-rose-800
                                  group-hover:bg-rose-800
                                  group-hover:text-white
                                `
                            }
                          `}
                        >
                          <i
                            className={`bi ${event.icon} text-lg`}
                          />
                        </div>

                        <div>

                          <div className="flex items-end gap-1">

                            <span
                              className="
                                text-2xl
                                font-black
                                tracking-tight
                                text-gray-900
                                sm:text-3xl
                              "
                            >
                              {event.time}
                            </span>

                            <span
                              className="
                                mb-1
                                text-[10px]
                                font-black
                                uppercase
                                tracking-widest
                                text-rose-800
                              "
                            >
                              {event.period}
                            </span>

                          </div>

                          <span
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.2em]
                              text-gray-400
                            "
                          >
                            SYNERVA '26
                          </span>

                        </div>
                      </div>

                      {/* Title */}

                      <h3
                        className="
                          relative
                          mt-5
                          text-xl
                          font-black
                          tracking-tight
                          text-gray-900
                          transition-colors
                          duration-300
                          group-hover:text-rose-800
                          sm:text-2xl
                        "
                      >
                        {event.title}
                      </h3>

                      {/* Description */}

                      <p
                        className="
                          relative
                          mt-3
                          text-sm
                          leading-7
                          text-gray-500
                        "
                      >
                        {event.description}
                      </p>

                      {/* Bottom indicator */}

                      <div className="relative mt-5 flex items-center gap-2">

                        <div
                          className={`
                            h-1
                            rounded-full
                            transition-all
                            duration-500

                            ${
                              isActive
                                ? "w-14 bg-rose-800"
                                : `
                                  w-7
                                  bg-rose-200
                                  group-hover:w-14
                                  group-hover:bg-rose-600
                                `
                            }
                          `}
                        />

                        <span
                          className="
                            text-[9px]
                            font-black
                            uppercase
                            tracking-[0.18em]
                            text-gray-400
                          "
                        >
                          Event {event.number}
                        </span>

                      </div>
                    </div>
                  </div>

                  {/* =================================================
                      DESKTOP NODE
                  ================================================== */}

                  <div
                    className={`
                      absolute
                      left-1/2
                      top-1/2
                      z-30
                      hidden
                      h-14
                      w-14
                      -translate-x-1/2
                      -translate-y-1/2
                      items-center
                      justify-center
                      rounded-full
                      border-4
                      border-white
                      transition-all
                      duration-500
                      lg:flex

                      ${
                        isActive
                          ? `
                            scale-110
                            bg-rose-800
                            text-white
                            shadow-[0_0_0_8px_rgba(136,19,55,0.10),0_0_35px_rgba(136,19,55,0.30)]
                          `
                          : `
                            bg-white
                            text-rose-700
                            shadow-[0_5px_25px_rgba(136,19,55,0.12)]
                          `
                      }
                    `}
                  >
                    <i
                      className={`bi ${event.icon} text-lg`}
                    />
                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* ===================================================
            BOTTOM STATUS
        ==================================================== */}

        <div
          className="
            mx-auto
            mt-16
            flex
            max-w-xl
            flex-col
            items-center
            justify-center
            gap-3
            text-center
            sm:mt-20
            sm:flex-row
          "
          data-aos="fade-up"
        >

          <div
            className="
              flex
              items-center
              gap-2
              rounded-full
              border
              border-rose-100
              bg-white/70
              px-4
              py-2
              text-[10px]
              font-bold
              uppercase
              tracking-widest
              text-gray-500
              shadow-sm
              backdrop-blur
            "
          >

            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-rose-700
              "
            />

            One Day. Six Moments.

            <span className="text-rose-800">
              Infinite Memories.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}