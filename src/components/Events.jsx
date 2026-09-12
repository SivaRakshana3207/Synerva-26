
import React, { useEffect, useState } from "react";

/* =========================================================
   EVENT DATA
========================================================= */

const EVENTS = {
  thought: {
    number: "EVENT 01",
    title: "THOUGHT SPHERE",
    subtitle: "Paper Presentation",
    icon: "📄",
    rules: [
      "Each team can have a maximum of 3 members (1–3 members).",
      "Each team will be given 3 minutes to present their paper.",
      "A maximum of 2 minutes will be provided for the query and discussion session.",
      "The presentation must contain a maximum of 10 slides.",
      "Participants must ensure that their presentation is clear, concise and relevant to the selected technical topic.",
      "The judges' and organizing committee's decision will be final.",
    ],
  },

  coderelay: {
    number: "EVENT 02",
    title: "CODE RELAY",
    subtitle: "Relay Programming Challenge — Java",
    icon: "💻",
    rules: [
      "Each team must have 3 members.",
      "Only the first member will receive the programming question.",
      "Each member must continue the code from where the previous member stopped, without seeing the original question.",
      "The final code will be evaluated based on logic, continuity and code contribution, even if the output is incorrect.",
    ],
  },

  techdomino: {
    number: "EVENT 03",
    title: "TECH DOMINO",
    subtitle: "Clue Matching Challenge",
    icon: "🧩",
    rules: [
      "Each team will receive 12 cards, including 2 duplicate or wrong cards.",
      "Match the question or clue on one card with its correct answer on another card.",
      "Start with the given open card and continue arranging the cards in the correct sequence.",
      "Complete the sequence by identifying and eliminating the 2 incorrect cards.",
    ],
  },

  gamereel: {
    number: "EVENT 04",
    title: "GAME REEL",
    subtitle: "Game Intro Video Editing",
    icon: "🎮",
    rules: [
      "Participants will receive game-related images, characters, titles and other assets.",
      "Create a 30-second to 1-minute game introduction or trailer.",
      "Participants may add music, sound effects, voice-over, transitions and text effects.",
      "Canva is not allowed; any other suitable video-editing software can be used.",
    ],
  },

  webblitz: {
    number: "EVENT 05",
    title: "WEBBLITZ",
    subtitle: "Rapid Static Webpage Development",
    icon: "🌐",
    rules: [
      "Each participant must design and develop a static webpage within 30 minutes.",
      "The webpage must be created using HTML and CSS.",
      "JavaScript may be used optionally to make the webpage slightly more advanced.",
      "The theme or topic will be announced at the beginning of the event.",
      "Participants must complete and submit their webpage within the given 30-minute time limit.",
      "The evaluation will consider creativity, visual design, responsiveness, implementation and effective use of the given theme.",
      "Participants must use the provided resources and follow the instructions given by the event coordinators.",
      "The judges' and organizing committee's decision will be final.",
    ],
  },
};

/* =========================================================
   RULES MODAL
========================================================= */

function EventRulesModal({ event, onClose }) {
  useEffect(() => {
    if (!event) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [event, onClose]);

  if (!event) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onMouseDown={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-[28px] bg-white shadow-[0_30px_100px_rgba(0,0,0,0.35)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {/* =================================================
            HEADER
        ================================================== */}

        <div className="relative flex-none overflow-hidden bg-gradient-to-br from-[#800020] via-[#680019] to-[#43000f] px-6 py-6 text-white sm:px-8 sm:py-7">

          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10" />

          <div className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-white/5" />

          <div className="relative flex items-start justify-between gap-5">

            <div className="min-w-0 flex-1 pr-8">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-rose-200">
                {event.number}
              </p>

              <h2 className="mt-2 font-['Space_Grotesk'] text-2xl font-black leading-tight sm:text-3xl">
                {event.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-rose-100">
                {event.subtitle}
              </p>
            </div>

            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-3xl backdrop-blur-md sm:h-16 sm:w-16">
              {event.icon}
            </div>
          </div>

          {/* Close */}
          <button
            type="button"
            aria-label="Close rules"
            onClick={onClose}
            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <i className="bi bi-x-lg" />
          </button>
        </div>

        {/* =================================================
            BODY
        ================================================== */}

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-6 sm:px-8 sm:py-7">

          <div className="flex items-center gap-3">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#800020]">
              <i className="bi bi-list-check text-xl" />
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-black text-slate-900 sm:text-xl">
                Event Rules & Guidelines
              </h3>

              <p className="mt-1 text-xs text-slate-500">
                Please read all rules carefully.
              </p>
            </div>
          </div>

          {/* Rules */}
          <div className="mt-6 space-y-3">

            {event.rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 transition hover:border-rose-200 hover:bg-rose-50/50"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#800020] text-sm font-bold text-white">
                  {index + 1}
                </div>

                <p className="pt-0.5 text-sm leading-6 text-slate-700">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* Info */}
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4">

            <i className="bi bi-info-circle-fill mt-0.5 shrink-0 text-amber-600" />

            <p className="text-xs leading-6 text-amber-800 sm:text-sm">
              Participants are requested to follow all instructions
              given by the event coordinators. The decision of the
              judges and organizing committee will be final.
            </p>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}

        <div className="flex-none border-t border-slate-100 bg-white px-5 py-4 sm:px-8 sm:py-5">
          <div className="flex justify-end">

            <button
              type="button"
              onClick={onClose}
              className="flex h-11 items-center justify-center gap-2 rounded-xl bg-[#800020] px-7 text-sm font-bold text-white shadow-md transition hover:bg-[#680019] hover:shadow-lg"
            >
              Got It
              <i className="bi bi-check-lg" />
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   EVENT CARD
========================================================= */

function EventCard({
  number,
  title,
  subtitle,
  description,
  icon,
  features,
  eventKey,
  onViewRules,
  className = "",
}) {
  return (
    <article
      className={`group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_10px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-rose-200 hover:shadow-[0_20px_60px_rgba(128,0,32,0.12)] ${className}`}
    >
      <div className="flex-1">

        {/* Top */}
        <div className="flex items-center justify-between">

          <span className="rounded-full bg-rose-50 px-3 py-1 text-xs font-bold tracking-widest text-[#800020]">
            {number}
          </span>

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#800020] text-xl text-white shadow-lg">
            <i className={icon} />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-7 font-['Space_Grotesk'] text-2xl font-extrabold tracking-tight text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm font-bold uppercase tracking-wider text-[#800020]">
          {subtitle}
        </p>

        <p className="mt-5 text-sm leading-7 text-slate-600">
          {description}
        </p>

        {/* Features */}
        <div className="mt-6 space-y-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-sm text-slate-600"
            >
              <i className="bi bi-check-circle-fill text-[#800020]" />
              {feature}
            </div>
          ))}

        </div>
      </div>

      {/* Button */}
      <button
        type="button"
        onClick={() => onViewRules(eventKey)}
        className="mt-8 flex h-12 w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-4 font-semibold text-slate-800 transition-all duration-300 hover:border-[#800020] hover:bg-[#800020] hover:text-white active:scale-[0.98]"
      >
        <i className="bi bi-journal-text" />
        <span>View Rules</span>
      </button>
    </article>
  );
}

/* =========================================================
   EVENTS SECTION
========================================================= */

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleViewRules = (eventKey) => {
    console.log("View Rules clicked:", eventKey);

    const event = EVENTS[eventKey];

    if (!event) {
      console.error("Event not found:", eventKey);
      return;
    }

    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <>
      <section
        id="events"
        className="relative overflow-hidden bg-white py-24 md:py-32"
      >
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-rose-100/50 blur-3xl" />

          <div className="absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-pink-100/50 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

          {/* Header */}
          <div
            className="mx-auto max-w-3xl text-center"
            data-aos="fade-up"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#800020]">
              <i className="bi bi-stars" />
              Technical Events
            </span>

            <h2 className="mt-5 font-['Space_Grotesk'] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
              Explore the{" "}
              <span className="text-[#800020]">
                Events
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 md:text-lg">
              Challenge your technical skills, creativity,
              problem-solving ability and innovation through our
              exciting lineup of events.
            </p>
          </div>

          {/* Participation note */}
          <div
            className="mx-auto mt-10 max-w-4xl rounded-2xl border border-rose-200 bg-rose-50 p-5 shadow-sm md:p-6"
            data-aos="fade-up"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#800020] text-xl text-white">
                <i className="bi bi-info-circle" />
              </div>

              <div>
                <h3 className="font-['Space_Grotesk'] text-lg font-extrabold text-slate-900">
                  Important Participation Note
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-700 md:text-base">
                  <strong>
                    Paper Presentation is mandatory.
                  </strong>{" "}
                  Each participant can participate in a
                  maximum of <strong>two events</strong>:
                  <strong>
                    {" "}
                    Paper Presentation + any ONE of the other
                    four events.
                  </strong>
                </p>
              </div>
            </div>
          </div>

          {/* Events */}
          <div
            className="mt-14 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-6"
            data-aos="fade-up"
          >

            {/* EVENT 01 */}
            <EventCard
              number="EVENT 01"
              title="THOUGHT SPHERE"
              subtitle="Paper Presentation"
              description="Present your innovative ideas, research findings and technical concepts before the judging panel."
              icon="bi bi-file-earmark-text"
              eventKey="thought"
              onViewRules={handleViewRules}
              features={[
                "Technical paper presentation",
                "Individual / team participation",
                "Creativity & technical depth",
              ]}
              className="lg:col-span-2"
            />

            {/* EVENT 02 */}
            <EventCard
              number="EVENT 02"
              title="CODE RELAY"
              subtitle="Relay Programming Challenge — Java"
              description="Test your programming skills through a fast-paced relay programming challenge where teamwork and logic matter."
              icon="bi bi-code-slash"
              eventKey="coderelay"
              onViewRules={handleViewRules}
              features={[
                "Java programming",
                "Relay-based challenge",
                "Logic & problem solving",
              ]}
              className="lg:col-span-2"
            />

            {/* EVENT 03 */}
            <EventCard
              number="EVENT 03"
              title="TECH DOMINO"
              subtitle="Clue Matching Challenge"
              description="Connect technical clues and discover the correct sequence through logic, observation and teamwork."
              icon="bi bi-diagram-3"
              eventKey="techdomino"
              onViewRules={handleViewRules}
              features={[
                "Technical clue matching",
                "Logical thinking",
                "Fast decision making",
              ]}
              className="lg:col-span-2"
            />

            {/* EVENT 04 */}
            <EventCard
              number="EVENT 04"
              title="GAME REEL"
              subtitle="Game Intro Video Editing"
              description="Create an engaging game introduction video using your creativity, storytelling and editing skills."
              icon="bi bi-camera-reels"
              eventKey="gamereel"
              onViewRules={handleViewRules}
              features={[
                "Video editing challenge",
                "Creative storytelling",
                "Visual presentation",
              ]}
              className="lg:col-span-2 lg:col-start-2"
            />

            {/* EVENT 05 */}
            <EventCard
              number="EVENT 05"
              title="WEBBLITZ"
              subtitle="Rapid Static Webpage Development"
              description={
                <>
                  Design and develop a static webpage within just{" "}
                  <strong>30 minutes</strong> based on a surprise
                  theme announced at the beginning of the event.
                </>
              }
              icon="bi bi-globe2"
              eventKey="webblitz"
              onViewRules={handleViewRules}
              features={[
                "HTML & CSS required",
                "JavaScript optional",
                "30-minute challenge",
                "Theme announced at the start",
              ]}
              className="lg:col-span-2"
            />
          </div>

          {/* Bottom */}
          <div
            className="mt-14 text-center"
            data-aos="fade-up"
          >
            <p className="text-sm text-slate-500">
              Choose your challenge wisely and showcase your skills.
            </p>

            <div className="mx-auto mt-4 h-px max-w-xs bg-gradient-to-r from-transparent via-rose-300 to-transparent" />
          </div>
        </div>
      </section>

      {/* =====================================================
          MODAL
      ====================================================== */}

      <EventRulesModal
        event={selectedEvent}
        onClose={closeModal}
      />
    </>
  );
};

export default Events;
