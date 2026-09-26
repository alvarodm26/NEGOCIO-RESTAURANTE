"use client";

import { motion } from "motion/react";

const videos = [
  "/images/cocina1.mp4",
  "/images/cocina2.mp4",
  "/images/cocina2.mp4",
  "/images/cocina1.mp4",
];

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
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const descriptionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Gallery() {
  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#F7F2E8] px-6 py-24 text-[#171714] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">

        {/* ========================================================= */}
        {/* TITULO CENTRADO */}
        {/* ========================================================= */}

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
          {/* ETIQUETA */}

          <motion.p
            variants={textVariants}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C86B45]"
          >
            Una mirada a Casa Misti
          </motion.p>

          {/* TITULO */}

          <motion.h2
            variants={textVariants}
            className="mt-4 font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#171714] sm:text-6xl lg:text-[4.25rem]"
          >
            Momentos que
            <br />
            se disfrutan.
          </motion.h2>

          {/* DESCRIPCION */}

          <motion.p
            variants={descriptionVariants}
            className="mt-6 max-w-xl text-sm leading-7 text-[#171714]/50 sm:text-base"
          >
            Porque una buena experiencia empieza mucho antes del primer
            bocado.
          </motion.p>

          {/* DECORACION */}

          <motion.div
            variants={textVariants}
            className="mt-8 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 32,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="h-px bg-[#C86B45]/50"
            />

            <motion.span
              initial={{
                opacity: 0,
                scale: 0.6,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.55,
                duration: 0.5,
              }}
              className="h-1.5 w-1.5 rounded-full bg-[#C86B45]"
            />

            <motion.span
              initial={{
                width: 0,
                opacity: 0,
              }}
              whileInView={{
                width: 32,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.45,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1] as const,
              }}
              className="h-px bg-[#C86B45]/50"
            />
          </motion.div>
        </motion.div>

        {/* ========================================================= */}
        {/* GALERIA DE VIDEOS */}
        {/* ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.15,
              },
            },
          }}
          className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4"
        >
          {videos.map((video, index) => (
            <motion.div
              key={`${video}-${index}`}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 50,
                  scale: 0.96,
                  filter: "blur(5px)",
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: "blur(0px)",
                  transition: {
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] as const,
                  },
                },
              }}
              whileHover={{
                y: -6,
              }}
              className={`group relative overflow-hidden rounded-[1.25rem] bg-[#E8E0D2] shadow-[0_10px_35px_rgba(23,23,20,0.06)] ${
                index === 0 || index === 3
                  ? "aspect-[3/4]"
                  : "aspect-square"
              }`}
            >
              {/* ===================================================== */}
              {/* VIDEO */}
              {/* ===================================================== */}

              <motion.video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                whileHover={{
                  scale: 1.08,
                }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="h-full w-full object-cover"
              >
                <source src={video} type="video/mp4" />
              </motion.video>

              {/* ===================================================== */}
              {/* OVERLAY */}
              {/* ===================================================== */}

              <div className="absolute inset-0 bg-black/5 transition-all duration-500 group-hover:bg-black/10" />

              {/* ===================================================== */}
              {/* DEGRADADO */}
              {/* ===================================================== */}

              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-90" />

              {/* ===================================================== */}
              {/* NUMERO */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                whileHover={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute bottom-4 left-4 text-xs font-medium uppercase tracking-[0.18em] text-white"
              >
                0{index + 1}
              </motion.div>

              {/* ===================================================== */}
              {/* INDICADOR SUPERIOR */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.7,
                }}
                whileHover={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 backdrop-blur-md"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C86B45]" />
              </motion.div>

              {/* ===================================================== */}
              {/* BORDE HOVER */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                whileHover={{
                  opacity: 1,
                }}
                transition={{
                  duration: 0.4,
                }}
                className="pointer-events-none absolute inset-0 rounded-[1.25rem] border border-[#C86B45]/60"
              />

              {/* ===================================================== */}
              {/* BRILLO */}
              {/* ===================================================== */}

              <motion.div
                initial={{
                  x: "-120%",
                }}
                whileHover={{
                  x: "120%",
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="pointer-events-none absolute inset-y-0 w-1/3 skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* ========================================================= */}
        {/* INDICADOR INFERIOR */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 15,
            filter: "blur(5px)",
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
            delay: 0.4,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 32,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="h-px bg-[#C86B45]/40"
          />

          <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#171714]/30">
            Casa Misti · Arequipa
          </span>

          <motion.span
            initial={{
              width: 0,
            }}
            whileInView={{
              width: 32,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.55,
              duration: 0.6,
            }}
            className="h-px bg-[#C86B45]/40"
          />
        </motion.div>
      </div>
    </section>
  );
}