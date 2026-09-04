import { useEffect } from "react";
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
          "The judges' and organizing committee's decision will be final."
      ]
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
      "The final code will be evaluated based on logic, continuity and code contribution, even if the output is incorrect."
    ]
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
      "Complete the sequence by identifying and eliminating the 2 incorrect cards."
    ]
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
      "Canva is not allowed; any other suitable video-editing software can be used."
    ]
  },
  webbot: {
    number: "EVENT 05",
    title: "WEBBOT",
    subtitle: "Web Development & Chatbot Creation",
    icon: "🤖",
    rules: [
      "Participants will receive a topic on the spot for both tasks.",
      "The website must be developed using React, including front-end and back-end implementation.",
      "For the chatbot, participants can use Dialogflow with suitable questions and responses.",
      "Evaluation will be based on creativity, functionality, design and implementation within the given time."
    ]
  }
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 80,
      duration: 800,
      easing: "ease-out-cubic"
    });

    document.body.style.overflow = "hidden";

    const intro = document.getElementById("introScreen");
    const bootPercent = document.getElementById("bootPercent");
    const bootBar = document.getElementById("bootBar");
    const startTime = performance.now();
    const bootDuration = 3500;
    let rafId;

    const updateBoot = () => {
      const progress = Math.min((performance.now() - startTime) / bootDuration, 1);
      const eased = 1 - Math.pow(1 - progress, 1.7);
      const percentage = Math.floor(eased * 100);

      if (bootPercent) bootPercent.textContent = `${String(percentage).padStart(2, "0")}%`;
      if (bootBar) bootBar.style.width = `${percentage}%`;

      if (progress < 1) rafId = requestAnimationFrame(updateBoot);
    };

    rafId = requestAnimationFrame(updateBoot);

    const introTimer = window.setTimeout(() => {
      intro?.classList.add("hide");
      document.body.style.overflow = "";
      window.setTimeout(() => intro?.remove(), 900);
    }, 5000);

    const navbar = document.getElementById("navbar");
    const onScroll = () => {
      navbar?.classList.toggle("navbar-scrolled", window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const eventDate = new Date("October 1, 2026 09:00:00").getTime();
    const updateCountdown = () => {
      const distance = eventDate - Date.now();
      const ids = ["days", "hours", "minutes", "seconds"];

      if (distance <= 0) {
        ids.forEach((id) => {
          const el = document.getElementById(id);
          if (el) el.textContent = "00";
        });
        return;
      }

      const values = [
        Math.floor(distance / (1000 * 60 * 60 * 24)),
        Math.floor((distance / (1000 * 60 * 60)) % 24),
        Math.floor((distance / (1000 * 60)) % 60),
        Math.floor((distance / 1000) % 60)
      ];

      ids.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el) el.textContent = String(values[i]).padStart(2, "0");
      });
    };

    updateCountdown();
    const countdownTimer = window.setInterval(updateCountdown, 1000);

    const onClick = (event) => {
      const target = event.target.closest("[data-action], [data-rule]");
      if (!target) return;

      if (target.dataset.action === "open-mobile-menu") {
        document.getElementById("mobileMenu")?.showModal();
      }

      if (target.dataset.action === "close-mobile-menu") {
        document.getElementById("mobileMenu")?.close();
      }

      const ruleKey = target.dataset.rule;
      if (ruleKey && eventRules[ruleKey]) {
        const selected = eventRules[ruleKey];
        document.getElementById("modalEventNumber").textContent = selected.number;
        document.getElementById("modalEventTitle").textContent = selected.title;
        document.getElementById("modalEventSubtitle").textContent = selected.subtitle;
        document.getElementById("modalEventIcon").textContent = selected.icon;

        const container = document.getElementById("rulesContainer");
        if (container) {
          container.innerHTML = selected.rules.map((rule, index) => `
            <div class="flex gap-4 items-start rounded-2xl bg-rose-50 p-4">
              <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full wine-gradient text-sm font-bold text-white">
                ${index + 1}
              </div>
              <p class="text-sm leading-6 text-gray-600">${rule}</p>
            </div>
          `).join("");
        }

        document.getElementById("rulesModal")?.showModal();
      }
    };

    document.addEventListener("click", onClick);

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        const mobileMenu = document.getElementById("mobileMenu");
        if (mobileMenu?.open) mobileMenu.close();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(rafId);
      window.clearTimeout(introTimer);
      window.clearInterval(countdownTimer);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <>
      <Intro />
      <Navbar />
      <MobileMenu />
      <Hero />
      <About />
      <Timeline />
      <Events />
      <Gallery />
      <Venue />
      <Contact />
      <Footer />
      <RulesModal />
    </>
  );
}

export default App;
