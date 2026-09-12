
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./App.css";

import Intro from "./components/Intro";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Events from "./components/Events";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RulesModal from "./components/RulesModal";

/* =========================================================
   EVENT RULES
========================================================= */

const eventRules = {
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
   COMMON PARTICIPATION RULE
========================================================= */

const participationRule = {
  number: "IMPORTANT",
  title: "PARTICIPATION RULE",
  subtitle: "Mandatory Paper Presentation",
  icon: "📌",

  rules: [
    "Paper Presentation is mandatory for every participant.",
    "A participant can participate in only two events in total.",
    "The two events must be Paper Presentation + any ONE of the other four events.",
    "Participants cannot participate in more than one event apart from Paper Presentation.",
  ],
};

/* =========================================================
   APP
========================================================= */

function App() {
  /* =======================================================
     RULES MODAL STATE
  ======================================================== */

  const [selectedEvent, setSelectedEvent] = useState(null);

  /* =======================================================
     OPEN RULES
  ======================================================== */

  const handleViewRules = (eventKey) => {
    console.log("Opening rules for:", eventKey);

    const selected = eventRules[eventKey];

    if (!selected) {
      console.error(
        `No rules found for event key: "${eventKey}"`
      );
      return;
    }

    setSelectedEvent(selected);
  };

  /* =======================================================
     OPEN PARTICIPATION RULES
  ======================================================== */

  const handleParticipationRules = () => {
    setSelectedEvent(participationRule);
  };

  /* =======================================================
     CLOSE MODAL
  ======================================================== */

  const handleCloseRules = () => {
    setSelectedEvent(null);
  };

  /* =========================================================
     GLOBAL EFFECTS
  ========================================================== */

  useEffect(() => {
    /* -------------------------------------------------------
       AOS
    ------------------------------------------------------- */

    AOS.init({
      once: true,
      offset: 80,
      duration: 800,
      easing: "ease-out-cubic",
    });

    /* -------------------------------------------------------
       INTRO SCROLL LOCK
    ------------------------------------------------------- */

    document.body.style.overflow = "hidden";

    /* -------------------------------------------------------
       INTRO / BOOT ANIMATION
    ------------------------------------------------------- */

    const intro =
      document.getElementById("introScreen");

    const bootPercent =
      document.getElementById("bootPercent");

    const bootBar =
      document.getElementById("bootBar");

    const startTime = performance.now();

    const bootDuration = 3500;

    let rafId;

    const updateBoot = () => {
      const progress = Math.min(
        (performance.now() - startTime) /
          bootDuration,
        1
      );

      const eased =
        1 - Math.pow(1 - progress, 1.7);

      const percentage =
        Math.floor(eased * 100);

      if (bootPercent) {
        bootPercent.textContent =
          `${String(percentage).padStart(2, "0")}%`;
      }

      if (bootBar) {
        bootBar.style.width =
          `${percentage}%`;
      }

      if (progress < 1) {
        rafId =
          requestAnimationFrame(updateBoot);
      }
    };

    rafId =
      requestAnimationFrame(updateBoot);

    /* -------------------------------------------------------
       REMOVE INTRO
    ------------------------------------------------------- */

    const introTimer =
      window.setTimeout(() => {
        intro?.classList.add("hide");

        document.body.style.overflow = "";

        window.setTimeout(() => {
          intro?.remove();
        }, 900);
      }, 5000);

    /* -------------------------------------------------------
       NAVBAR SCROLL
    ------------------------------------------------------- */

    const navbar =
      document.getElementById("navbar");

    const onScroll = () => {
      navbar?.classList.toggle(
        "navbar-scrolled",
        window.scrollY > 40
      );
    };

    window.addEventListener(
      "scroll",
      onScroll,
      {
        passive: true,
      }
    );

    /* -------------------------------------------------------
       COUNTDOWN
    ------------------------------------------------------- */

    const eventDate =
      new Date(
        "October 1, 2026 09:00:00"
      ).getTime();

    const updateCountdown = () => {
      const distance =
        eventDate - Date.now();

      const ids = [
        "days",
        "hours",
        "minutes",
        "seconds",
      ];

      if (distance <= 0) {
        ids.forEach((id) => {
          const element =
            document.getElementById(id);

          if (element) {
            element.textContent = "00";
          }
        });

        return;
      }

      const values = [
        Math.floor(
          distance /
            (1000 * 60 * 60 * 24)
        ),

        Math.floor(
          (distance /
            (1000 * 60 * 60)) %
            24
        ),

        Math.floor(
          (distance /
            (1000 * 60)) %
            60
        ),

        Math.floor(
          (distance / 1000) %
            60
        ),
      ];

      ids.forEach(
        (id, index) => {
          const element =
            document.getElementById(id);

          if (element) {
            element.textContent =
              String(
                values[index]
              ).padStart(2, "0");
          }
        }
      );
    };

    updateCountdown();

    const countdownTimer =
      window.setInterval(
        updateCountdown,
        1000
      );

    /* -------------------------------------------------------
       MOBILE MENU
    ------------------------------------------------------- */

    const onClick = (event) => {
      const target =
        event.target.closest(
          "[data-action]"
        );

      if (!target) {
        return;
      }

      /* OPEN */

      if (
        target.dataset.action ===
        "open-mobile-menu"
      ) {
        document
          .getElementById("mobileMenu")
          ?.showModal();

        return;
      }

      /* CLOSE */

      if (
        target.dataset.action ===
        "close-mobile-menu"
      ) {
        document
          .getElementById("mobileMenu")
          ?.close();

        return;
      }
    };

    document.addEventListener(
      "click",
      onClick
    );

    /* -------------------------------------------------------
       ESCAPE FOR MOBILE MENU
    ------------------------------------------------------- */

    const onKeyDown = (event) => {
      if (
        event.key !== "Escape"
      ) {
        return;
      }

      const mobileMenu =
        document.getElementById(
          "mobileMenu"
        );

      if (mobileMenu?.open) {
        mobileMenu.close();
      }
    };

    document.addEventListener(
      "keydown",
      onKeyDown
    );

    /* -------------------------------------------------------
       CLEANUP
    ------------------------------------------------------- */

    return () => {
      cancelAnimationFrame(
        rafId
      );

      window.clearTimeout(
        introTimer
      );

      window.clearInterval(
        countdownTimer
      );

      window.removeEventListener(
        "scroll",
        onScroll
      );

      document.removeEventListener(
        "click",
        onClick
      );

      document.removeEventListener(
        "keydown",
        onKeyDown
      );

      document.body.style.overflow =
        "";
    };
  }, []);

  /* =========================================================
     RENDER
  ========================================================== */

  return (
    <>
      {/* =====================================================
          INTRO
      ====================================================== */}

      <Intro />

      {/* =====================================================
          NAVIGATION
      ====================================================== */}

      <Navbar />

      <MobileMenu />

      {/* =====================================================
          HERO
      ====================================================== */}

      <Hero />

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <About />

      {/* =====================================================
          TIMELINE
      ====================================================== */}

      <Timeline />

      {/* =====================================================
          EVENTS
      ====================================================== */}

      <Events
        onViewRules={handleViewRules}
      />

      {/* =====================================================
          GALLERY
      ====================================================== */}

      <Gallery />

      {/* =====================================================
          VENUE
      ====================================================== */}

      <Venue />

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <Contact />

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Footer />

      {/* =====================================================
          RULES MODAL
      ====================================================== */}

      <RulesModal
        event={selectedEvent}
        onClose={handleCloseRules}
      />
    </>
  );
}

export default App;
