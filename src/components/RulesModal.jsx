
import React from "react";

const markup = String.raw`
<dialog
    id="rulesModal"
    class="modal modal-middle"
>
    <div
        class="modal-box
        w-[calc(100%-2rem)]
        sm:w-[calc(100%-3rem)]
        max-w-2xl
        max-h-[calc(100vh-2rem)]
        sm:max-h-[calc(100vh-3rem)]
        p-0
        overflow-hidden
        rounded-[24px]
        sm:rounded-[30px]
        shadow-2xl
        flex
        flex-col"
    >

        <!-- HEADER -->
        <div class="wine-gradient flex-none px-5 py-5 sm:px-7 sm:py-7 text-white">

            <div class="flex items-center justify-between gap-4 sm:gap-5">

                <div class="min-w-0 flex-1">

                    <p
                        id="modalEventNumber"
                        class="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] text-rose-200"
                    >
                        EVENT 01
                    </p>

                    <h3
                        id="modalEventTitle"
                        class="mt-1.5 sm:mt-2 text-2xl sm:text-3xl font-black leading-tight break-words"
                    >
                        THOUGHT SPHERE
                    </h3>

                    <p
                        id="modalEventSubtitle"
                        class="mt-1.5 sm:mt-2 text-xs sm:text-sm text-rose-100 leading-5"
                    >
                        Technical Quiz Challenge
                    </p>

                </div>

                <!-- EVENT ICON -->
                <div
                    id="modalEventIcon"
                    class="flex h-12 w-12 sm:h-16 sm:w-16 shrink-0 items-center justify-center rounded-xl sm:rounded-2xl bg-white/10 text-2xl sm:text-3xl backdrop-blur-sm"
                >
                    💡
                </div>

            </div>
        </div>


        <!-- SCROLLABLE BODY -->
        <div
            class="no-scrollbar flex-1 min-h-0 overflow-y-auto px-5 py-5 sm:px-7 sm:py-7"
        >

            <!-- SECTION TITLE -->
            <div class="flex items-center gap-3">

                <div
                    class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-rose-700"
                >
                    <i class="bi bi-list-check text-lg"></i>
                </div>

                <h4
                    class="text-lg sm:text-xl font-black leading-tight text-gray-900"
                >
                    Event Rules & Guidelines
                </h4>

            </div>


            <!-- RULES -->
            <div
                id="rulesContainer"
                class="mt-5 sm:mt-6 space-y-3"
            ></div>


            <!-- INFORMATION ALERT -->
            <div
                class="mt-5 sm:mt-6 flex items-start gap-3 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-4 text-amber-800"
            >

                <i class="bi bi-info-circle-fill mt-0.5 shrink-0 text-base"></i>

                <span class="text-xs sm:text-sm leading-5 sm:leading-6">
                    Participants are requested to follow all instructions
                    given by the event coordinators. The decision of the
                    judges and organizing committee will be final.
                </span>

            </div>

        </div>


        <!-- FOOTER -->
        <div
            class="flex-none border-t border-rose-100 bg-white px-5 py-4 sm:px-7 sm:py-5"
        >

            <div class="flex justify-end">

                <form method="dialog">

                    <button
                        class="btn h-11 min-h-11 rounded-xl border-0 px-6 sm:px-7 text-sm sm:text-base font-bold text-white shadow-md wine-gradient hover:scale-[1.02] transition-transform duration-200"
                    >
                        Got It
                        <i class="bi bi-check-lg ml-1"></i>
                    </button>

                </form>

            </div>

        </div>

    </div>


    <!-- BACKDROP -->
    <form
        method="dialog"
        class="modal-backdrop bg-black/50 backdrop-blur-[2px]"
    >
        <button>close</button>
    </form>

</dialog>
`;

export default function RulesModal() {
    return (
        <div
            className="contents"
            dangerouslySetInnerHTML={{ __html: markup }}
        />
    );
}