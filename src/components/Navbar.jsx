import React from "react";

const markup = String.raw`<header id="navbar" class="main-navbar fixed top-0 left-0 z-50 w-full">
    <div class="navbar max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex-1">
            <a href="#home" class="flex items-center gap-3">
                <div class="brand-s">S</div>
                <div>
                    <div class="text-xl font-black gradient-text">
                        SYNERVA <span class="text-xs">'26</span>
                    </div>
                    <div class="hidden sm:block text-[8px] font-bold uppercase tracking-[.25em] text-gray-400">
                        Technical Symposium
                    </div>
                </div>
            </a>
        </div>

        <nav class="hidden lg:flex items-center gap-7">
            <a href="#home" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Home</a>
            <a href="#department" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">About</a>
            <a href="#timeline" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Timeline</a>
            <a href="#events" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Events</a>
            <a href="#gallery" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Gallery</a>
            <a href="#venue" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Venue</a>
            <a href="#contact" class="text-sm font-semibold text-gray-600 hover:text-rose-700 transition">Contact</a>
        </nav>

        <div class="hidden lg:flex flex-none ml-6">
            <a href="#events" class="shine btn border-0 rounded-full px-6 text-white wine-gradient">
                Explore Events <i class="bi bi-arrow-up-right"></i>
            </a>
        </div>

        <div class="flex-none lg:hidden">
            <button class="btn btn-ghost text-2xl text-rose-800" data-action="open-mobile-menu">
                <i class="bi bi-list"></i>
            </button>
        </div>
    </div>
</header>

<!-- MOBILE MENU -->`;

export default function Navbar() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
