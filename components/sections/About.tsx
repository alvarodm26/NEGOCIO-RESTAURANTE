"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowUpRight,
  Leaf,
  Utensils,
  Wheat,
} from "lucide-react";

const restaurantImages = [
  "/images/restaurante1.jpg",
  "/images/restaurante2.jpg",
  "/images/restaurante3.jpg",
  "/images/restaurante4.jpg",
];

const contentVariants = {
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

const featureVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.96,
    filter: "blur(5px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function About() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % restaurantImages.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="nosotros"
      className="overflow-hidden bg-[#171714] px-6 py-24 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">

        {/* =====================================================
            GALERÍA
        ===================================================== */}
        <motion.div
          initial={{
            opacity: 0,
            x: -70,
            scale: 0.97,
            filter: "blur(6px)",
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="relative mx-auto w-full max-w-xl lg:mx-0"
        >
          <div className="relative overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[4/5] w-full bg-[#24241F]">

              <AnimatePresence mode="sync">
                <motion.img
                  key={restaurantImages[currentImage]}
                  src={restaurantImages[currentImage]}
                  alt={`Interior de Casa Misti - imagen ${
                    currentImage + 1
                  }`}
                  initial={{
                    opacity: 0,
                    scale: 1.08,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 1.03,
                  }}
                  transition={{
                    opacity: {
                      duration: 1,
                      ease: "easeInOut",
                    },
                    scale: {
                      duration: 4.5,
                      ease: "easeOut",
                    },
                  }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />

              {/* Información inferior */}
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
                  delay: 0.7,
                  duration: 0.6,
                }}
                className="absolute bottom-5 left-5 flex items-center gap-3"
              >
                <span className="text-[10px] font-semibold tracking-[0.2em] text-white/70">
                  0{currentImage + 1}
                </span>

                <div className="h-px w-10 bg-white/30" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-white/50">
                  Casa Misti
                </span>
              </motion.div>

              {/* Indicadores */}
              <div className="absolute bottom-5 right-5 flex items-center gap-1.5">
                {restaurantImages.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Ver imagen ${index + 1}`}
                    onClick={() => setCurrentImage(index)}
                    className="group p-1"
                  >
                    <motion.span
                      animate={{
                        width: currentImage === index ? 22 : 5,
                        opacity:
                          currentImage === index ? 1 : 0.4,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="block h-1 rounded-full bg-white"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
              rotate: -8,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            whileHover={{
              y: -5,
              rotate: -2,
            }}
            className="absolute -bottom-6 -right-3 rounded-2xl bg-[#C86B45] p-6 text-white shadow-[0_15px_40px_rgba(0,0,0,0.25)] sm:-right-6"
          >
            <p className="font-serif text-4xl leading-none">
              Desde
            </p>

            <p className="mt-2 text-xs uppercase tracking-[0.18em] text-white/70">
              Arequipa, Perú
            </p>
          </motion.div>
        </motion.div>

        {/* =====================================================
            CONTENIDO CENTRADO
        ===================================================== */}
        <motion.div
          variants={contentVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="flex flex-col items-center text-center"
        >
          {/* EYEBROW */}
          <motion.p
            variants={textVariants}
            className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C86B45]"
          >
            Nuestra historia
          </motion.p>

          {/* TÍTULO */}
          <motion.h2
            variants={textVariants}
            className="mt-5 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[#F7F2E8] sm:text-6xl lg:text-[4.2rem]"
          >
            Tradición con una
            <br />
            <span className="text-white/90">
              mirada diferente.
            </span>
          </motion.h2>

          {/* DESCRIPCIÓN */}
          <motion.p
            variants={textVariants}
            className="mt-7 max-w-xl text-sm leading-7 text-white/50 sm:text-base"
          >
            Creemos que la cocina peruana puede contar historias
            sin perder sus raíces. Trabajamos con ingredientes
            locales, técnicas contemporáneas y mucho respeto por
            nuestra tradición.
          </motion.p>

          {/* CARACTERÍSTICAS */}
          <motion.div
            variants={contentVariants}
            className="mt-10 grid w-full max-w-2xl gap-5 sm:grid-cols-3"
          >
            {[
              {
                icon: Leaf,
                title: "Producto",
                text: "Ingredientes locales y frescos.",
              },
              {
                icon: Utensils,
                title: "Cocina",
                text: "Técnica y creatividad en cada plato.",
              },
              {
                icon: Wheat,
                title: "Origen",
                text: "Sabores con identidad peruana.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  variants={featureVariants}
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="group border-t border-white/10 pt-5 text-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.12,
                      rotate: 5,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex justify-center"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.7}
                      className="text-[#C86B45]"
                    />
                  </motion.div>

                  <h3 className="mt-4 text-sm font-semibold text-[#F7F2E8]">
                    {item.title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-[150px] text-xs leading-5 text-white/40">
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.a
            variants={textVariants}
            href="#contacto"
            whileHover={{
              y: -3,
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="group mt-10 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-[#F7F2E8] backdrop-blur-sm transition-colors duration-300 hover:border-[#C86B45]/40 hover:bg-[#C86B45]"
          >
            <span>
              Conoce más sobre nosotros
            </span>

            <motion.span
              whileHover={{
                rotate: 45,
              }}
              transition={{
                duration: 0.3,
              }}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C86B45] text-white transition-colors duration-300 group-hover:bg-white group-hover:text-[#C86B45]"
            >
              <ArrowUpRight size={15} />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}