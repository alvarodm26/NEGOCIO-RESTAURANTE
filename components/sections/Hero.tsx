"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-end justify-center overflow-hidden bg-[#171714] text-[#F7F2E8]"
    >
      {/* =========================================================
          VIDEO DE FONDO
      ========================================================= */}
      <motion.div
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1.8,
          ease,
        }}
        className="absolute inset-0"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/images/video1.mp4" type="video/mp4" />
        </video>

        {/* OSCURECIMIENTO DEL VIDEO */}
        <div className="absolute inset-0 bg-black/45" />

        {/* DEGRADADO INFERIOR */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />

        {/* DEGRADADO LATERAL SUTIL */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/10" />
      </motion.div>

      {/* =========================================================
          DESTELLO DECORATIVO
      ========================================================= */}
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[8%] top-[25%] hidden lg:block"
      >
        <Sparkles
          size={32}
          strokeWidth={1}
          className="text-white/40"
        />
      </motion.div>

      {/* =========================================================
          CONTENIDO CENTRADO
      ========================================================= */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 pb-16 pt-32 text-center sm:px-8 lg:px-10 lg:pb-20">
        <div className="flex max-w-5xl flex-col items-center">

          {/* =====================================================
              EYEBROW
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.7,
              ease,
            }}
            className="mb-6 flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-white/65"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                delay: 0.45,
                duration: 0.7,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />

            Cocina peruana contemporánea

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{
                delay: 0.55,
                duration: 0.7,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />
          </motion.div>

          {/* =====================================================
              TITULO
          ===================================================== */}
          <motion.h1
            initial={{ opacity: 0, y: 60, filter: "blur(10px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.42,
              duration: 1,
              ease,
            }}
            className="max-w-5xl font-serif text-6xl leading-[0.92] tracking-[-0.04em] sm:text-7xl lg:text-[7.5rem]"
          >
            Sabores que
            <br />
            cuentan una historia.
          </motion.h1>

          {/* =====================================================
              DESCRIPCIÓN
          ===================================================== */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(6px)" }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              delay: 0.65,
              duration: 0.8,
              ease,
            }}
            className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg"
          >
            {restaurant.description}
          </motion.p>

          {/* =====================================================
              BOTONES
          ===================================================== */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.82,
              duration: 0.7,
              ease,
            }}
            className="mt-9 flex flex-wrap items-center justify-center gap-3"
          >
            {/* EXPLORAR MENÚ → FEATURED DISHES */}
            <motion.a
              href="#destacados"
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center gap-2 rounded-full bg-[#C86B45] px-6 py-3.5 text-sm font-semibold text-white"
            >
              Explorar menú

              <motion.span
                whileHover={{
                  x: 3,
                  y: -3,
                }}
              >
                <ArrowUpRight size={16} />
              </motion.span>
            </motion.a>

            {/* RESERVAR */}
            <motion.a
              href="#reservas"
              whileHover={{
                backgroundColor: "rgba(255,255,255,0.14)",
                y: -2,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="inline-flex items-center rounded-full border border-white/25 px-6 py-3.5 text-sm text-white transition-colors"
            >
              Reservar una mesa
            </motion.a>
          </motion.div>

          {/* =====================================================
              UBICACIÓN
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1.05,
              duration: 0.8,
              ease,
            }}
            className="mt-10 flex items-center justify-center gap-2 text-xs text-white/50"
          >
            <MapPin size={14} />
            {restaurant.address}
          </motion.div>
        </div>
      </div>

      {/* =========================================================
          INDICADOR DESCUBRIR
      ========================================================= */}
      <motion.a
        href="#destacados"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.3,
          duration: 0.8,
        }}
        className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/45 lg:flex"
      >
        Descubrir

        <motion.span
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: 1.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ArrowDown size={15} />
        </motion.span>
      </motion.a>

      {/* =========================================================
          BORDE INFERIOR SUTIL
      ========================================================= */}
      <motion.div
        initial={{
          scaleX: 0,
        }}
        animate={{
          scaleX: 1,
        }}
        transition={{
          delay: 1.1,
          duration: 1.2,
          ease,
        }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-white/10"
      />
    </section>
  );
}