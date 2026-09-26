"use client";

import { motion } from "motion/react";
import { Clock3, MapPin, Phone } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Location() {
  return (
    <section
      className="overflow-hidden bg-[#171714] px-6 py-11 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-14"
    >
      <div className="mx-auto max-w-7xl">

        {/* ========================================================= */}
        {/* ENCABEZADO */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(7px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mx-auto flex max-w-2xl flex-col items-center text-center"
        >
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C86B45]">
            Encuéntranos
          </p>

          <h2 className="mt-3 font-serif text-4xl leading-none tracking-[-0.035em] text-[#F7F2E8] sm:text-5xl">
            Ven a visitarnos.
          </h2>

          <p className="mt-3 max-w-lg text-sm leading-6 text-white/40">
            Estamos en el corazón de Arequipa. Ven a compartir nuestra
            cocina y disfrutar de Casa Misti.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CONTENIDO PRINCIPAL */}
        {/* ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={contentVariants}
          className="mt-7 grid overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#20201C] lg:grid-cols-[0.95fr_1.25fr]"
        >
          {/* ======================================================= */}
          {/* INFORMACIÓN */}
          {/* ======================================================= */}

          <motion.div
            variants={contentVariants}
            className="flex flex-col justify-center px-7 py-7 sm:px-9 sm:py-8 lg:px-10 lg:py-8"
          >
            {/* ===================================================== */}
            {/* DIRECCIÓN */}
            {/* ===================================================== */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 border-b border-white/10 pb-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 ring-1 ring-[#C86B45]/20">
                <MapPin
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#C86B45]"
                />
              </div>

              <div className="min-w-0">
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Dirección
                </p>

                <p className="mt-1 text-sm leading-5 text-[#F7F2E8]">
                  {restaurant.address}
                </p>
              </div>
            </motion.div>

            {/* ===================================================== */}
            {/* RESERVAS */}
            {/* ===================================================== */}

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-4 border-b border-white/10 py-4"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 ring-1 ring-[#C86B45]/20">
                <Phone
                  size={18}
                  strokeWidth={1.7}
                  className="text-[#C86B45]"
                />
              </div>

              <div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                  Reservas
                </p>

                <a
                  href={`tel:${restaurant.phone}`}
                  className="mt-1 block text-sm font-medium text-[#F7F2E8] transition-colors hover:text-[#C86B45]"
                >
                  {restaurant.phone}
                </a>
              </div>
            </motion.div>

            {/* ===================================================== */}
            {/* HORARIOS */}
            {/* ===================================================== */}

            <motion.div
              variants={itemVariants}
              className="pt-4"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 ring-1 ring-[#C86B45]/20">
                  <Clock3
                    size={18}
                    strokeWidth={1.7}
                    className="text-[#C86B45]"
                  />
                </div>

                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
                    Horarios
                  </p>

                  <p className="mt-1 text-sm text-[#F7F2E8]">
                    Atención al público
                  </p>
                </div>
              </div>

              {/* TABLA DE HORARIOS */}

              <div className="mt-4 overflow-hidden rounded-xl border border-white/10 bg-black/10">
                <div className="grid grid-cols-[1fr_auto] border-b border-white/10 px-4 py-2.5">
                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Días
                  </span>

                  <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/30">
                    Horario
                  </span>
                </div>

                {restaurant.openingHours.map((item, index) => (
                  <div
                    key={item.days}
                    className={`grid grid-cols-[1fr_auto] items-center px-4 py-2.5 ${
                      index !== restaurant.openingHours.length - 1
                        ? "border-b border-white/5"
                        : ""
                    }`}
                  >
                    <span className="text-xs text-white/70">
                      {item.days}
                    </span>

                    <span className="text-right text-xs text-white/45">
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ======================================================= */}
          {/* MAPA */}
          {/* ======================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 1.035,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="p-3 sm:p-4"
          >
            <div className="group relative h-[260px] overflow-hidden rounded-[1.15rem] border-[4px] border-[#0A0A0A] bg-[#0A0A0A] shadow-[0_15px_40px_rgba(0,0,0,0.35)] lg:h-full lg:min-h-[315px]">
              <iframe
                title="Ubicación del restaurante"
                src="https://www.google.com/maps?q=Arequipa,Peru&output=embed"
                className="h-full w-full border-0 grayscale-[0.1] transition-transform duration-700 group-hover:scale-[1.015]"
                loading="lazy"
              />

              {/* MARCO INTERNO */}

              <div className="pointer-events-none absolute inset-0 rounded-[0.9rem] border border-white/10" />

              {/* INDICADOR */}

              <div className="pointer-events-none absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-white/15 bg-black/60 px-3 py-2 backdrop-blur-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C86B45]" />

                <span className="text-[8px] font-semibold uppercase tracking-[0.18em] text-white/70">
                  Casa Misti · Arequipa
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ========================================================= */}
        {/* DETALLE */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: 0.25,
            duration: 0.55,
          }}
          className="mt-4 flex items-center justify-center gap-3"
        >
          <span className="h-px w-7 bg-[#C86B45]/30" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/20">
            Arequipa · Perú
          </span>

          <span className="h-px w-7 bg-[#C86B45]/30" />
        </motion.div>
      </div>
    </section>
  );
}