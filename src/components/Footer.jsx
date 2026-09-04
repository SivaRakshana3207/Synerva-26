import React from "react";

const markup = String.raw`<footer class="footer-main text-white">
    <div class="footer-glow left-[-150px] top-[-150px]"></div>
    <div class="footer-glow right-[-150px] bottom-[-150px]"></div>

    <div class="relative z-10 max-w-7xl mx-auto px-5 lg:px-8 py-16">

        <div class="grid gap-12 lg:grid-cols-[1.4fr_.8fr_.8fr]">

            <div>
                <div class="flex items-center gap-4">
                    <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-black text-rose-900 shadow-xl">S</div>
                    <div>
                        <h2 class="text-3xl font-black">SYNERVA <span class="text-rose-300">'26</span></h2>
                        <p class="text-[9px] uppercase tracking-[.3em] text-rose-300">Technical Symposium</p>
                    </div>
                </div>

                <p class="mt-6 max-w-md leading-7 text-sm text-rose-100">
                    National Level Technical Symposium organized by the Department of Computer Science &
                    Engineering at Arunachala College of Engineering for Women.
                </p>

                <div class="mt-7 flex gap-3">
                    <a href="#" class="social-btn" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
                    <a href="#" class="social-btn" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
                    <a href="#" class="social-btn" aria-label="LinkedIn"><i class="bi bi-linkedin"></i></a>
                    <a href="#" class="social-btn" aria-label="Email"><i class="bi bi-envelope-fill"></i></a>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-black uppercase tracking-widest">Explore</h3>
                <div class="mt-6 flex flex-col gap-4 text-sm text-rose-100">
                    <a href="#home" class="hover:text-white transition">Home</a>
                    <a href="#department" class="hover:text-white transition">CSE Department</a>
                    <a href="#timeline" class="hover:text-white transition">Timeline</a>
                    <a href="#events" class="hover:text-white transition">Events</a>
                    <a href="#gallery" class="hover:text-white transition">Gallery</a>
                </div>
            </div>

            <div>
                <h3 class="text-sm font-black uppercase tracking-widest">SYNERVA '26</h3>
                <div class="mt-6 space-y-4 text-sm text-rose-100">
                    <div class="flex gap-3"><i class="bi bi-calendar-event text-rose-300"></i><span>October 1, 2026</span></div>
                    <div class="flex gap-3"><i class="bi bi-clock text-rose-300"></i><span>09:00 AM onwards</span></div>
                    <div class="flex gap-3"><i class="bi bi-geo-alt text-rose-300"></i><span>Arunachala College of Engineering for Women</span></div>
                </div>
            </div>
        </div>

        <div class="my-12 h-px bg-white/10"></div>

        <div class="flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <p class="text-xs text-rose-200">© 2026 SYNERVA '26. All Rights Reserved.</p>
            <p class="text-xs text-rose-200">Designed & Developed with <span class="text-rose-300">♥</span> by <span class="font-black text-white">Siva Rakshana</span></p>
            <a href="#home" class="flex items-center gap-2 text-xs font-bold text-rose-200 hover:text-white transition">
                Back to Top
                <span class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10"><i class="bi bi-arrow-up"></i></span>
            </a>
        </div>
    </div>
</footer>

<!-- =========================================================
     RULES MODAL — medium size, sticky header/footer,
     scrollable middle with hidden scrollbar
========================================================== -->`;

export default function Footer() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
