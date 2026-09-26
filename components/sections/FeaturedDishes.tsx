
"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { dishes } from "@/data/dishes";
import DishCard from "@/components/ui/DishCard";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    scale: 0.92,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturedDishes() {
  const featured = dishes.filter((dish) => dish.featured).slice(0, 4);

  return (
    <section
      id="destacados"
      className="overflow-hidden bg-[#F7F2E8] px-6 py-24 sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* CABECERA CENTRADA */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          {/* EYEBROW */}
          <motion.p
            variants={textVariants}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C86B45]"
          >
            La casa recomienda
          </motion.p>

          {/* TÍTULO */}
          <motion.h2
            variants={textVariants}
            className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#171714] sm:text-6xl lg:text-[4.25rem]"
          >
            Nuestros favoritos
          </motion.h2>

          {/* DESCRIPCIÓN */}
          <motion.p
            variants={textVariants}
            className="mt-6 max-w-xl text-sm leading-7 text-[#171714]/50 sm:text-base"
          >
            Una selección de platos que representan nuestra forma de
            entender la cocina.
          </motion.p>

          {/* BOTÓN */}
          <motion.div
            variants={buttonVariants}
            className="mt-9"
          >
            <motion.a
              href="/carta"
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.97,
              }}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-[#171714]/10 bg-[#171714] px-7 py-3.5 text-sm font-semibold text-[#F7F2E8] shadow-[0_10px_30px_rgba(23,23,20,0.12)] transition-shadow duration-500 hover:shadow-[0_14px_35px_rgba(200,107,69,0.22)]"
            >
              {/* Brillo horizontal */}
              <motion.span
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 left-0 w-1/2 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/15 to-transparent"
              />

              <span className="relative z-10">
                Ver carta completa
              </span>

              {/* Círculo naranja */}
              <motion.span
                whileHover={{
                  rotate: 45,
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#C86B45] text-white"
              >
                <ArrowUpRight
                  size={15}
                  strokeWidth={2.2}
                />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* PLATOS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((dish) => (
            <motion.div
              key={dish.id}
              variants={itemVariants}
            >
              <DishCard dish={dish} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
