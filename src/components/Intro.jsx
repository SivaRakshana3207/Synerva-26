import React from "react";

const markup = String.raw`<div id="introScreen">

    <div class="intro-grid"></div>
    <div class="intro-scanlines"></div>
    <div class="intro-vignette"></div>
    <div class="intro-core"></div>

    <div class="intro-ring r1"></div>
    <div class="intro-ring r2"></div>
    <div class="intro-ring r3"></div>
    <div class="intro-ring r4"></div>

    <div class="intro-particles">
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
        <span class="particle"></span>
    </div>

    <div class="hud hud-top-left">
        <strong>CSE // SYSTEM</strong><br>
        <span class="hud-red">CORE_01</span>
    </div>

    <div class="hud hud-top-right">
        <strong>SYNERVA OS</strong><br>
        BUILD <span class="hud-red">26.10</span>
    </div>

    <div class="hud hud-bottom-left">
        STATUS: <span class="hud-red">BOOTING</span>
    </div>

    <div class="hud hud-bottom-right">
        ACCESS LEVEL: <strong>TECH</strong>
    </div>

    <div class="intro-bracket top-left"></div>
    <div class="intro-bracket top-right"></div>
    <div class="intro-bracket bottom-left"></div>
    <div class="intro-bracket bottom-right"></div>

    <div class="intro-content">

        <div class="intro-system">CSE CORE INITIALIZATION</div>

        <div class="intro-logo-wrap">
            <div class="intro-logo-hex"></div>
            <div class="intro-s">S</div>
            <div class="logo-glitch"></div>
        </div>

        <div class="intro-brand">
            <h1>SYNERVA <span>'26</span></h1>
            <p>National Level Technical Symposium</p>
        </div>

        <div class="intro-progress-wrap">
            <div class="progress-top">
                <span>SYSTEM BOOT</span>
                <span id="bootPercent">00%</span>
            </div>

            <div class="intro-loader">
                <span id="bootBar"></span>
            </div>

            <div class="intro-status">
                <i class="bi bi-cpu"></i>&nbsp;INITIALIZING EXPERIENCE...
            </div>
        </div>
    </div>

    <div class="boot-messages">
        <span class="boot-message">[ CSE CORE ONLINE // LOADING SYNERVA EXPERIENCE ]</span>
    </div>
</div>

<!-- =========================================================
     NAVBAR
========================================================== -->`;

export default function Intro() {
  return <div className="contents" dangerouslySetInnerHTML={{ __html: markup }} />;
}
