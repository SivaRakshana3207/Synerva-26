import React from "react";

const markup = String.raw`<dialog id="mobileMenu" class="modal">
    <div class="modal-box rounded-[30px] p-0 overflow-hidden">
        <div class="wine-gradient p-7 text-white">
            <div class="flex items-center justify-between">
                <div>
                    <div class="text-2xl font-black">SYNERVA <span class="text-rose-200">'26</span></div>
                    <p class="mt-1 text-xs text-rose-200">Technical Symposium</p>
                </div>
                <form method="dialog">
                    <button class="btn btn-circle btn-sm btn-ghost text-white"><i class="bi bi-x-lg"></i></button>
                </form>
            </div>
        </div>

        <div class="p-5">
            <div class="flex flex-col gap-2">
                <a href="#home" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-house mr-3"></i>Home</a>
                <a href="#department" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-cpu mr-3"></i>About</a>
                <a href="#timeline" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-clock-history mr-3"></i>Timeline</a>
                <a href="#events" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-trophy mr-3"></i>Events</a>
                <a href="#gallery" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-images mr-3"></i>Gallery</a>
                <a href="#venue" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-geo-alt mr-3"></i>Venue</a>
                <a href="#contact" data-action="close-mobile-menu" class="rounded-2xl px-5 py-4 font-bold hover:bg-rose-50"><i class="bi bi-envelope mr-3"></i>Contact</a>
            </div>
        </div>
    </div>
    <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>

<!-- =========================================================
     HERO
========================================================== -->`;

export default function MobileMenu() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
