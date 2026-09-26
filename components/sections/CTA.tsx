"use client";

import { motion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { restaurant } from "@/data/restaurant";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    filter: "blur(7px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#C86B45] px-6 py-12 text-white sm:px-8 lg:px-10 lg:py-14">
      {/* ========================================================= */}
      {/* DECORACIÓN */}
      {/* ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.7,
          rotate: -20,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1] as const,
        }}
        className="pointer-events-none absolute -right-20 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full border border-white/15 lg:block"
      />

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-28 top-1/2 hidden h-80 w-80 -translate-y-1/2 rounded-full border border-dashed border-white/10 lg:block"
      />

      {/* ========================================================= */}
      {/* CONTENIDO */}
      {/* ========================================================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.25,
        }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
      >
        {/* ETIQUETA */}

        <motion.p
          variants={textVariants}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/60"
        >
          ¿Nos vemos?
        </motion.p>

        {/* TITULO */}

        <motion.h2
          variants={textVariants}
          className="mt-3 font-serif text-4xl leading-[0.95] tracking-[-0.035em] sm:text-5xl lg:text-[4rem]"
        >
          Hagamos de hoy
          <br />
          algo especial.
        </motion.h2>

        {/* DESCRIPCION */}

        <motion.p
          variants={textVariants}
          className="mt-4 max-w-lg text-sm leading-6 text-white/65"
        >
          Reserva una mesa y disfruta una experiencia creada alrededor
          de nuestra cocina.
        </motion.p>

        {/* ========================================================= */}
        {/* BOTONES */}
        {/* ========================================================= */}

        <motion.div
          variants={containerVariants}
          className="mt-6 flex flex-wrap items-center justify-center gap-3"
        >
          {/* RESERVAR */}

          <motion.a
            variants={buttonVariants}
            href="#reservas"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-2.5 rounded-full bg-[#171714] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(23,23,20,0.18)]"
          >
            <span>Reservar una mesa</span>

            <motion.span
              whileHover={{
                rotate: 45,
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#C86B45]"
            >
              <ArrowUpRight size={14} />
            </motion.span>
          </motion.a>

          {/* WHATSAPP */}

          <motion.a
            variants={buttonVariants}
            href={`https://wa.me/${restaurant.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group inline-flex items-center gap-2.5 rounded-full border border-[#25D366]/60 bg-[#25D366] px-5 py-3 text-xs font-semibold text-white shadow-[0_8px_25px_rgba(37,211,102,0.18)] transition-colors duration-300 hover:bg-[#20bd5a]"
          >
            <motion.span
              whileHover={{
                scale: 1.12,
                rotate: 5,
              }}
              transition={{
                duration: 0.3,
              }}
            >
              <MessageCircle size={16} />
            </motion.span>

            <span>¿Tienes alguna duda? Escríbenos</span>
          </motion.a>
        </motion.div>

        {/* DETALLE */}

        <motion.div
          variants={textVariants}
          className="mt-5 flex items-center gap-3"
        >
          <span className="h-px w-6 bg-white/20" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-white/35">
            Casa Misti · Arequipa
          </span>

          <span className="h-px w-6 bg-white/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}