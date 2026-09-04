import React from "react";

const markup = String.raw`<section id="contact" class="contact-section section">
    <div class="max-w-7xl mx-auto px-5 lg:px-8">
        <div class="text-center" data-aos="fade-up">
            <span class="section-label bg-white"><i class="bi bi-chat-dots-fill"></i> Get In Touch</span>
            <h2 class="mt-6 text-4xl md:text-6xl font-black">Let's Make <span class="gradient-text">Something Epic</span></h2>
            <p class="mt-5 max-w-2xl mx-auto text-gray-500 leading-7">
                Have a question about an event, registration, venue or anything related to SYNERVA '26?
                Reach out to the organizing team.
            </p>
        </div>

        <div class="mt-14 grid gap-6 md:grid-cols-3" data-aos="fade-up">

            <div class="contact-card">
                <div class="contact-icon"><i class="bi bi-envelope-fill"></i></div>
                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">Email</p>
                <h3 class="mt-2 text-xl font-black">Write to Us</h3>
                <p class="mt-3 text-sm text-gray-500">symposium@example.com</p>
                <a href="mailto:symposium@example.com" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">Send Email <i class="bi bi-arrow-up-right"></i></a>
            </div>

            <div class="contact-card">
                <div class="contact-icon"><i class="bi bi-telephone-fill"></i></div>
                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">Contact</p>
                <h3 class="mt-2 text-xl font-black">Talk to Us</h3>
                <p class="mt-3 text-sm text-gray-500">+91 XXXXX XXXXX</p>
                <a href="tel:+91XXXXXXXXXX" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">Call Now <i class="bi bi-arrow-up-right"></i></a>
            </div>

            <div class="contact-card">
                <div class="contact-icon"><i class="bi bi-instagram"></i></div>
                <p class="mt-6 text-xs font-black uppercase tracking-widest text-rose-600">Social</p>
                <h3 class="mt-2 text-xl font-black">Follow SYNERVA</h3>
                <p class="mt-3 text-sm text-gray-500">Follow us for announcements, updates and event moments.</p>
                <a href="#" class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-rose-700">Follow Us <i class="bi bi-arrow-up-right"></i></a>
            </div>
        </div>

        <div class="mt-10 rounded-[35px] wine-gradient p-8 md:p-12 text-white shadow-2xl" data-aos="zoom-in">
            <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                    <p class="text-xs font-black uppercase tracking-[.25em] text-rose-200">SYNERVA '26</p>
                    <h3 class="mt-3 text-3xl md:text-4xl font-black">Ready to experience the next level?</h3>
                    <p class="mt-3 max-w-xl text-sm leading-6 text-rose-100">Explore the events, gather your team and prepare to make your mark.</p>
                </div>
                <a href="#events" class="shine btn btn-lg rounded-full border-0 bg-white px-8 text-rose-900 hover:bg-rose-50">Explore Events <i class="bi bi-arrow-right"></i></a>
            </div>
        </div>
    </div>
</section>

<!-- =========================================================
     FOOTER
========================================================== -->`;

export default function Contact() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
