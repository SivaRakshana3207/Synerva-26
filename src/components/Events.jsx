import React from "react";

const markup = String.raw`<section id="events" class="section bg-white">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
        <div class="text-center" data-aos="fade-up">
            <span class="section-label"><i class="bi bi-stars"></i> National Level Events</span>
            <h2 class="mt-6 text-4xl md:text-6xl font-black">Choose Your <span class="gradient-text">Challenge</span></h2>
            <p class="mt-5 max-w-2xl mx-auto text-gray-500">
                Five carefully designed events bringing together technology, creativity, coding, and innovation.
            </p>
        </div>

        <div class="mt-14 flex flex-wrap justify-center gap-6">

            <!-- 01 -->
            <div class="event-card flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" data-aos="fade-up">
                <div class="flex items-start justify-between">
                <div class="event-icon">
                    <i class="bi bi-file-earmark-text-fill"></i>
                </div>
                    <span class="text-5xl font-black text-rose-100">01</span>
                </div>
                <p class="mt-7 text-[10px] uppercase tracking-widest font-black text-rose-600">
                    Paper Presentation
                </p>
                <h3 class="mt-2 text-2xl font-black">THOUGHT SPHERE</h3>
                <p class="mt-1 text-sm font-medium text-gray-400">
                    Technical Paper Presentation
                </p>
                <p class="mt-5 text-sm leading-7 text-gray-500"> 
                    Present your innovative technical ideas through a concise paper presentation and engage with the judges during the interactive query session.
                </p>
                <button data-rule="thought" class="rules-btn btn mt-7 w-full rounded-xl border">
                    <i class="bi bi-journal-text"></i> View Rules
                </button>
            </div>

            <!-- 02 -->
            <div class="event-card flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" data-aos="fade-up" data-aos-delay="100">
                <div class="flex items-start justify-between">
                    <div class="event-icon"><i class="bi bi-code-slash"></i></div>
                    <span class="text-5xl font-black text-rose-100">02</span>
                </div>
                <p class="mt-7 text-[10px] uppercase tracking-widest font-black text-rose-600">Coding Event</p>
                <h3 class="mt-2 text-2xl font-black">CODE RELAY</h3>
                <p class="mt-1 text-sm font-medium text-gray-400">Relay Programming Challenge — Java</p>
                <p class="mt-5 text-sm leading-7 text-gray-500">
                    Pass the baton on a single program — pick up where your teammate left off without seeing the original brief.
                </p>
                <button data-rule="coderelay" class="rules-btn btn mt-7 w-full rounded-xl border">
                    <i class="bi bi-journal-text"></i> View Rules
                </button>
            </div>

            <!-- 03 -->
            <div class="event-card flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" data-aos="fade-up" data-aos-delay="200">
                <div class="flex items-start justify-between">
                    <div class="event-icon"><i class="bi bi-grid-3x3-gap-fill"></i></div>
                    <span class="text-5xl font-black text-rose-100">03</span>
                </div>
                <p class="mt-7 text-[10px] uppercase tracking-widest font-black text-rose-600">Puzzle Event</p>
                <h3 class="mt-2 text-2xl font-black">TECH DOMINO</h3>
                <p class="mt-1 text-sm font-medium text-gray-400">Clue Matching Challenge</p>
                <p class="mt-5 text-sm leading-7 text-gray-500">
                    Match clues to answers and arrange the sequence correctly while spotting the cards that don't belong.
                </p>
                <button data-rule="techdomino" class="rules-btn btn mt-7 w-full rounded-xl border">
                    <i class="bi bi-journal-text"></i> View Rules
                </button>
            </div>

            <!-- 04 -->
            <div class="event-card flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" data-aos="fade-up">
                <div class="flex items-start justify-between">
                    <div class="event-icon"><i class="bi bi-controller"></i></div>
                    <span class="text-5xl font-black text-rose-100">04</span>
                </div>
                <p class="mt-7 text-[10px] uppercase tracking-widest font-black text-rose-600">Media Event</p>
                <h3 class="mt-2 text-2xl font-black">GAME REEL</h3>
                <p class="mt-1 text-sm font-medium text-gray-400">Game Intro Video Editing</p>
                <p class="mt-5 text-sm leading-7 text-gray-500">
                    Turn a handful of game assets into a punchy 30-second to 1-minute introduction or trailer.
                </p>
                <button data-rule="gamereel" class="rules-btn btn mt-7 w-full rounded-xl border">
                    <i class="bi bi-journal-text"></i> View Rules
                </button>
            </div>

            <!-- 05 -->
            <div class="event-card flex flex-col w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]" data-aos="fade-up" data-aos-delay="100">
                <div class="flex items-start justify-between">
                    <div class="event-icon"><i class="bi bi-robot"></i></div>
                    <span class="text-5xl font-black text-rose-100">05</span>
                </div>
                <p class="mt-7 text-[10px] uppercase tracking-widest font-black text-rose-600">Development Event</p>
                <h3 class="mt-2 text-2xl font-black">WEBBOT</h3>
                <p class="mt-1 text-sm font-medium text-gray-400">Web Development & Chatbot Creation</p>
                <p class="mt-5 text-sm leading-7 text-gray-500">
                    Build a working website and chatbot from a surprise topic, on the spot, against the clock.
                </p>
                <button data-rule="webbot" class="rules-btn btn mt-7 w-full rounded-xl border">
                    <i class="bi bi-journal-text"></i> View Rules
                </button>
            </div>

        </div>
    </div>
</section>

<!-- =========================================================
     GALLERY
========================================================== -->`;

export default function Events() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
