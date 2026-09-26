"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Clock3,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { restaurant } from "@/data/restaurant";

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
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="relative min-h-[500px] overflow-hidden bg-[#090909] px-6 py-14 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-16"
      style={{
        backgroundImage: "url('/images/fondo4.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-black/10" />

      {/* Línea superior */}
      <motion.div
        animate={{
          opacity: [0.35, 0.75, 0.35],
          scaleX: [0.85, 1, 0.85],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-0 h-[2px] w-56 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C86B45] to-transparent"
      />

      <div className="relative z-10 mx-auto flex min-h-[450px] max-w-7xl flex-col">

        {/* COLUMNAS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
          className="grid gap-10 pt-10 md:grid-cols-3 lg:gap-20 lg:pt-12"
        >
          {/* COLUMNA 1 */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C86B45]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#C86B45]">
                Cocina peruana
              </span>
            </div>

            <motion.h2
              whileHover={{ x: 3 }}
              transition={{ duration: 0.3 }}
              className="mt-4 font-serif text-4xl tracking-[-0.04em] text-[#FFF8EA]"
            >
              {restaurant.name}
            </motion.h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
              {restaurant.description}
            </p>

            <motion.a
              href={restaurant.instagram}
              target="_blank"
              rel="noreferrer"
              whileHover={{ x: 4 }}
              className="group mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/75 transition-colors duration-300 hover:text-[#FFF8EA]"
            >
              <FaInstagram
                size={16}
                className="text-[#C86B45]"
              />

              Instagram

              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </motion.a>
          </motion.div>

          {/* COLUMNA 2 */}
          <motion.div variants={itemVariants}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C86B45]" />

              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
                Visítanos
              </h3>
            </div>

            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-3"
              >
                <MapPin
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#C86B45]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Dirección
                  </p>

                  <p className="mt-1 max-w-xs text-sm leading-5 text-white/90">
                    {restaurant.address}
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 3 }}
                className="flex items-start gap-3"
              >
                <Phone
                  size={18}
                  strokeWidth={1.5}
                  className="mt-0.5 shrink-0 text-[#C86B45]"
                />

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Teléfono
                  </p>

                  <p className="mt-1 text-sm text-white/90">
                    {restaurant.phone}
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* COLUMNA 3 */}
          <motion.div variants={itemVariants}>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-7 bg-[#C86B45]" />

              <h3 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
                Horarios
              </h3>
            </div>

            <div className="space-y-4">
              {restaurant.openingHours.map((item, index) => (
                <motion.div
                  key={item.days}
                  initial={{
                    opacity: 0,
                    x: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="flex items-start justify-between gap-5 border-b border-white/20 pb-3 last:border-0 last:pb-0"
                >
                  <div className="flex items-center gap-2.5">
                    <Clock3
                      size={15}
                      strokeWidth={1.5}
                      className="shrink-0 text-[#C86B45]"
                    />

                    <span className="text-xs text-white/85">
                      {item.days}
                    </span>
                  </div>

                  <span className="whitespace-nowrap text-right text-xs text-white/70">
                    {item.hours}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* EMPUJA LA LÍNEA HACIA ABAJO */}
        <div className="flex-1" />

        {/* LÍNEA INFERIOR */}
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative h-[2px] w-full origin-center overflow-hidden bg-white/20"
        >
          <motion.div
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#C86B45] to-transparent"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C86B45]/80 to-transparent" />
        </motion.div>

        {/* COPYRIGHT */}
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
            duration: 0.7,
            delay: 0.15,
          }}
          className="mt-5 flex flex-col items-center justify-between gap-3 pb-1 text-[10px] text-white/60 sm:flex-row"
        >
          <p>
            © {new Date().getFullYear()} {restaurant.name}. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-2 uppercase tracking-[0.18em]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C86B45]" />

            <span>
              Arequipa · Perú
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}