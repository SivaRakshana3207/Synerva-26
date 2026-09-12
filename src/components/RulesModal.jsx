
import React, { useEffect } from "react";

const RulesModal = ({ event, onClose }) => {
  useEffect(() => {
    if (!event) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [event, onClose]);

  // Don't render anything when no event is selected
  if (!event) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 px-4 py-6 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rules-modal-title"
    >
      {/* MODAL */}
      <div
        className="
          relative
          flex
          max-h-[90vh]
          w-full
          max-w-2xl
          flex-col
          overflow-hidden
          rounded-[24px]
          bg-white
          shadow-[0_30px_100px_rgba(0,0,0,0.30)]
          sm:rounded-[30px]
        "
        onClick={(e) => e.stopPropagation()}
      >
        {/* =================================================
            HEADER
        ================================================== */}
        <div
          className="
            relative
            flex-none
            overflow-hidden
            bg-gradient-to-br
            from-[#800020]
            via-[#680019]
            to-[#450010]
            px-5
            py-5
            text-white
            sm:px-7
            sm:py-7
          "
        >
          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10" />

          <div className="pointer-events-none absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-white/5" />

          <div className="relative flex items-start justify-between gap-4">
            {/* TITLE */}
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-rose-200 sm:text-xs">
                {event.number}
              </p>

              <h2
                id="rules-modal-title"
                className="
                  mt-1.5
                  break-words
                  font-['Space_Grotesk']
                  text-2xl
                  font-black
                  leading-tight
                  sm:mt-2
                  sm:text-3xl
                "
              >
                {event.title}
              </h2>

              <p className="mt-2 text-xs leading-5 text-rose-100 sm:text-sm">
                {event.subtitle}
              </p>
            </div>

            {/* ICON */}
            <div
              className="
                flex
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-2xl
                bg-white/10
                text-2xl
                shadow-inner
                backdrop-blur-sm
                sm:h-16
                sm:w-16
                sm:text-3xl
              "
            >
              {event.icon}
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close rules"
            className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/10
              text-white
              transition
              hover:bg-white/20
            "
          >
            <i className="bi bi-x-lg text-sm" />
          </button>
        </div>

        {/* =================================================
            BODY
        ================================================== */}
        <div className="no-scrollbar min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-7">
          {/* SECTION TITLE */}
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-[#800020]">
              <i className="bi bi-list-check text-lg" />
            </div>

            <div>
              <h3 className="font-['Space_Grotesk'] text-lg font-black text-slate-900 sm:text-xl">
                Event Rules & Guidelines
              </h3>

              <p className="mt-0.5 text-xs text-slate-500">
                Please read all rules carefully before participating.
              </p>
            </div>
          </div>

          {/* RULES */}
          <div className="mt-5 space-y-3 sm:mt-6">
            {event.rules.map((rule, index) => (
              <div
                key={`${event.title}-rule-${index}`}
                className="
                  group
                  flex
                  items-start
                  gap-3
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  px-4
                  py-4
                  transition-all
                  duration-200
                  hover:border-rose-200
                  hover:bg-rose-50/60
                "
              >
                {/* NUMBER */}
                <div
                  className="
                    flex
                    h-8
                    w-8
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-[#800020]
                    text-sm
                    font-bold
                    text-white
                    shadow-sm
                  "
                >
                  {index + 1}
                </div>

                {/* RULE TEXT */}
                <p className="pt-0.5 text-xs leading-6 text-slate-700 sm:text-sm">
                  {rule}
                </p>
              </div>
            ))}
          </div>

          {/* INFORMATION BOX */}
          <div className="mt-5 flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-4 py-4 sm:mt-6">
            <i className="bi bi-info-circle-fill mt-0.5 shrink-0 text-amber-600" />

            <p className="text-xs leading-5 text-amber-800 sm:text-sm sm:leading-6">
              Participants are requested to follow all instructions
              given by the event coordinators. The decision of the
              judges and organizing committee will be final.
            </p>
          </div>
        </div>

        {/* =================================================
            FOOTER
        ================================================== */}
        <div className="flex-none border-t border-slate-100 bg-white px-5 py-4 sm:px-7 sm:py-5">
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="
                flex
                h-11
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-[#800020]
                px-6
                text-sm
                font-bold
                text-white
                shadow-md
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-[#680019]
                hover:shadow-lg
                sm:px-7
              "
            >
              Got It
              <i className="bi bi-check-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RulesModal;
