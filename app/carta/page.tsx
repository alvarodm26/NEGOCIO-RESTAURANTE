
"use client";

import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  ChefHat,
  Utensils,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { dishes } from "@/data/dishes";
import { categories } from "@/data/categories";

const ease = [0.22, 1, 0.36, 1];

export default function CartaPage() {
  return (
    <main className="min-h-screen bg-[#F7F2E8] text-[#171714]">
      {/* ========================================================= */}
      {/* HERO CARTA */}
      {/* ========================================================= */}

      <section className="relative flex min-h-[56vh] items-center justify-center overflow-hidden bg-[#171714] text-white">
        {/* VIDEO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
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

          <div className="absolute inset-0 bg-black/25" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15" />
        </motion.div>

        {/* VOLVER */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease,
          }}
          className="absolute left-5 top-5 z-20 sm:left-7 sm:top-6 lg:left-9"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 text-xs text-white/85 backdrop-blur-md transition-all duration-300 hover:border-white/45 hover:bg-black/30 hover:text-white"
          >
            <motion.span
              whileHover={{ x: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ArrowLeft size={15} />
            </motion.span>

            Volver
          </Link>
        </motion.div>

        {/* CONTENIDO CENTRADO */}
        <div className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center sm:px-8">
          {/* EYEBROW */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.7,
              ease,
            }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />

            <span className="text-[10px] uppercase tracking-[0.3em] text-white/80">
              Casa Misti
            </span>

            <motion.span
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{
                delay: 0.5,
                duration: 0.6,
                ease,
              }}
              className="h-px bg-[#C86B45]"
            />
          </motion.div>

          {/* TITULO */}
          <motion.h1
            initial={{
              opacity: 0,
              y: 45,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 1,
              ease,
            }}
            className="font-serif text-5xl leading-[0.92] tracking-[-0.05em] drop-shadow-[0_4px_25px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Nuestra carta
          </motion.h1>

          {/* DESCRIPCION */}
          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.75,
              duration: 0.8,
              ease,
            }}
            className="mx-auto mt-5 max-w-xl text-sm leading-6 text-white/80 drop-shadow-[0_2px_12px_rgba(0,0,0,0.4)] sm:text-base"
          >
            Descubre nuestra selección de platos, preparados con dedicación y
            pensados para disfrutar cada momento.
          </motion.p>

          {/* DECORACION */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.6,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
              ease,
            }}
            className="mx-auto mt-6 flex items-center justify-center gap-2"
          >
            <span className="h-1 w-1 rounded-full bg-[#C86B45]" />
            <span className="h-1 w-1 rounded-full bg-white/60" />
            <span className="h-1 w-1 rounded-full bg-white/30" />
          </motion.div>
        </div>

        {/* INDICADOR */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
            duration: 0.8,
          }}
          className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-white/65 sm:flex"
        >
          <Utensils size={12} />

          Explora nuestra selección

          <motion.span
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            ↓
          </motion.span>
        </motion.div>

        {/* BORDE */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* ========================================================= */}
      {/* INTRO CARTA */}
      {/* ========================================================= */}

      <section className="border-b border-black/10 bg-[#F7F2E8]">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease,
          }}
          className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-6 py-7 sm:px-8 md:flex-row md:items-center lg:px-10"
        >
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              ease,
            }}
            className="flex items-center gap-3"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.7,
                rotate: -15,
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
                delay: 0.15,
                duration: 0.6,
                ease,
              }}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 text-[#C86B45]"
            >
              <ChefHat size={17} strokeWidth={1.5} />
            </motion.div>

            <div>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
                className="text-xs font-medium sm:text-sm"
              >
                Preparaciones hechas con dedicación
              </motion.p>

              <motion.p
                initial={{
                  opacity: 0,
                  y: 8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                  duration: 0.5,
                }}
                className="mt-0.5 text-[10px] text-black/45 sm:text-xs"
              >
                Ingredientes seleccionados · Preparación artesanal
              </motion.p>
            </div>
          </motion.div>

          <motion.p
            initial={{
              opacity: 0,
              x: 30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.15,
              duration: 0.7,
              ease,
            }}
            className="max-w-md text-xs leading-5 text-black/50 md:text-right sm:text-sm"
          >
            Nuestra carta cambia con las estaciones y con los productos que
            encontramos en su mejor momento.
          </motion.p>
        </motion.div>
      </section>

      {/* ========================================================= */}
      {/* CARTA */}
      {/* ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-10 lg:py-16">
        <div className="space-y-20">
          {categories
            .filter((category) => category !== "Todos")
            .map((category, categoryIndex) => {
              const categoryDishes = dishes.filter(
                (dish) => dish.category === category
              );

              if (categoryDishes.length === 0) return null;

              return (
                <motion.section
                  key={category}
                  initial={{
                    opacity: 0,
                  }}
                  whileInView={{
                    opacity: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.08,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  {/* CABECERA CATEGORIA */}

                  <div className="mb-7 flex items-end justify-between border-b border-black/10 pb-4">
                    <div className="flex items-end gap-4">
                      {/* NUMERO */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -20,
                        }}
                        whileInView={{
                          opacity: 1,
                          x: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          duration: 0.6,
                          ease,
                        }}
                        className="mb-1.5 text-[10px] tracking-[0.2em] text-[#C86B45]"
                      >
                        {String(categoryIndex + 1).padStart(2, "0")}
                      </motion.span>

                      {/* TITULO */}
                      <motion.h2
                        initial={{
                          opacity: 0,
                          y: 25,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                        }}
                        viewport={{
                          once: true,
                        }}
                        transition={{
                          delay: 0.08,
                          duration: 0.8,
                          ease,
                        }}
                        className="font-serif text-3xl tracking-[-0.04em] sm:text-4xl md:text-5xl"
                      >
                        {category}
                      </motion.h2>
                    </div>

                    {/* CONTADOR */}
                    <motion.span
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.15,
                        duration: 0.6,
                      }}
                      className="hidden text-[10px] uppercase tracking-[0.16em] text-black/30 sm:block"
                    >
                      {categoryDishes.length}{" "}
                      {categoryDishes.length === 1 ? "opción" : "opciones"}
                    </motion.span>
                  </div>

                  {/* GRID DE PLATOS */}

                  <div className="grid gap-5 md:grid-cols-2">
                    {categoryDishes.map((dish, index) => (
                      <motion.article
                        key={dish.id}
                        initial={{
                          opacity: 0,
                          y: 40,
                          scale: 0.98,
                        }}
                        whileInView={{
                          opacity: 1,
                          y: 0,
                          scale: 1,
                        }}
                        viewport={{
                          once: true,
                          amount: 0.12,
                        }}
                        transition={{
                          duration: 0.7,
                          delay: index * 0.1,
                          ease,
                        }}
                        className="group relative"
                      >
                        {/* CARD */}

                        <motion.div
                          whileHover={{
                            y: -6,
                          }}
                          transition={{
                            duration: 0.45,
                            ease,
                          }}
                          className="relative min-h-[205px] overflow-hidden rounded-[1.5rem] border border-[#C86B45]/10 bg-white shadow-[0_8px_30px_rgba(23,23,20,0.035)] transition-all duration-500 hover:border-[#C86B45]/30 hover:shadow-[0_20px_55px_rgba(23,23,20,0.11)]"
                        >
                          {/* FONDO DECORATIVO */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              scale: 0.8,
                            }}
                            whileInView={{
                              opacity: 1,
                              scale: 1,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              delay: index * 0.1 + 0.15,
                              duration: 0.9,
                              ease,
                            }}
                            className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-[#C86B45]/[0.045] blur-2xl transition-all duration-700 group-hover:scale-150 group-hover:bg-[#C86B45]/[0.08]"
                          />

                          <motion.div
                            animate={{
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 30,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                            className="absolute -bottom-24 -left-24 h-44 w-44 rounded-full border border-[#C86B45]/[0.06]"
                          />

                          {/* CONTENIDO */}

                          <div className="relative z-10 flex h-full gap-5 p-4 sm:p-5">
                            {/* IMAGEN */}

                            <motion.div
                              initial={{
                                opacity: 0,
                                scale: 0.85,
                                x: -15,
                              }}
                              whileInView={{
                                opacity: 1,
                                scale: 1,
                                x: 0,
                              }}
                              viewport={{
                                once: true,
                              }}
                              transition={{
                                delay: index * 0.1 + 0.15,
                                duration: 0.75,
                                ease,
                              }}
                              className="relative h-32 w-32 shrink-0 self-center sm:h-36 sm:w-36"
                            >
                              {/* HALO */}

                              <motion.div
                                animate={{
                                  scale: [1, 1.06, 1],
                                  opacity: [0.35, 0.55, 0.35],
                                }}
                                transition={{
                                  duration: 4,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                                className="absolute -inset-3 rounded-[1.5rem] bg-[#C86B45]/10 blur-xl"
                              />

                              {/* IMAGEN */}

                              <div className="relative h-full w-full overflow-hidden rounded-[1.3rem] bg-[#EEE6D8] shadow-[0_8px_25px_rgba(23,23,20,0.11)]">
                                <motion.img
                                  src={dish.image}
                                  alt={dish.name}
                                  className="h-full w-full object-cover"
                                  whileHover={{
                                    scale: 1.12,
                                  }}
                                  transition={{
                                    duration: 0.8,
                                    ease,
                                  }}
                                />

                                {/* OVERLAY */}

                                <motion.div
                                  className="absolute inset-0 bg-gradient-to-tr from-[#171714]/20 via-transparent to-[#C86B45]/10"
                                  initial={{
                                    opacity: 0.4,
                                  }}
                                  whileHover={{
                                    opacity: 0,
                                  }}
                                  transition={{
                                    duration: 0.5,
                                  }}
                                />

                                {/* BRILLO */}

                                <motion.div
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
                                  className="absolute inset-y-0 w-1/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-20deg]"
                                />
                              </div>

                              {/* NUMERO */}

                              <motion.span
                                initial={{
                                  opacity: 0,
                                  scale: 0,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  scale: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.45,
                                  duration: 0.5,
                                  ease,
                                }}
                                className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-white bg-[#171714] text-[9px] font-semibold tracking-wider text-white shadow-lg"
                              >
                                {String(index + 1).padStart(2, "0")}
                              </motion.span>
                            </motion.div>

                            {/* INFORMACION */}

                            <div className="flex min-w-0 flex-1 flex-col justify-center py-1">
                              {/* TOP */}

                              <div className="flex items-start justify-between gap-3">
                                <motion.h3
                                  initial={{
                                    opacity: 0,
                                    x: 15,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    delay: index * 0.1 + 0.25,
                                    duration: 0.6,
                                    ease,
                                  }}
                                  className="font-serif text-[1.3rem] leading-[1.05] tracking-[-0.03em] transition-colors duration-300 group-hover:text-[#C86B45]"
                                >
                                  {dish.name}
                                </motion.h3>

                                {/* PRECIO */}

                                <motion.span
                                  initial={{
                                    opacity: 0,
                                    scale: 0.7,
                                    x: 10,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    x: 0,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    delay: index * 0.1 + 0.35,
                                    duration: 0.55,
                                    ease,
                                  }}
                                  className="relative shrink-0 overflow-hidden rounded-full border border-[#C86B45]/20 bg-[#C86B45]/10 px-3 py-1 text-[11px] font-bold text-[#B95D3A]"
                                >
                                  <motion.span
                                    animate={{
                                      x: ["-120%", "120%"],
                                    }}
                                    transition={{
                                      duration: 2.8,
                                      repeat: Infinity,
                                      repeatDelay: 4,
                                      ease: "easeInOut",
                                    }}
                                    className="absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                                  />

                                  <span className="relative">
                                    S/ {dish.price}
                                  </span>
                                </motion.span>
                              </div>

                              {/* LINEA */}

                              <motion.div
                                initial={{
                                  width: 0,
                                }}
                                whileInView={{
                                  width: "28px",
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.4,
                                  duration: 0.5,
                                  ease,
                                }}
                                className="mt-3 h-[2px] rounded-full bg-[#C86B45]"
                              />

                              {/* DESCRIPCION */}

                              <motion.p
                                initial={{
                                  opacity: 0,
                                  y: 12,
                                }}
                                whileInView={{
                                  opacity: 1,
                                  y: 0,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.45,
                                  duration: 0.6,
                                }}
                                className="mt-3 text-xs leading-5 text-black/50 sm:text-sm"
                              >
                                {dish.description}
                              </motion.p>

                              {/* DESTACADO */}

                              {dish.featured && (
                                <motion.div
                                  initial={{
                                    opacity: 0,
                                    x: -15,
                                  }}
                                  whileInView={{
                                    opacity: 1,
                                    x: 0,
                                  }}
                                  viewport={{
                                    once: true,
                                  }}
                                  transition={{
                                    delay: index * 0.1 + 0.55,
                                    duration: 0.6,
                                    ease,
                                  }}
                                  className="mt-3 inline-flex w-fit items-center gap-2 rounded-full border border-[#C86B45]/15 bg-[#C86B45]/[0.06] px-2.5 py-1 text-[8px] font-bold uppercase tracking-[0.15em] text-[#C86B45]"
                                >
                                  <motion.span
                                    animate={{
                                      scale: [1, 1.35, 1],
                                      opacity: [0.6, 1, 0.6],
                                    }}
                                    transition={{
                                      duration: 2,
                                      repeat: Infinity,
                                      ease: "easeInOut",
                                    }}
                                    className="h-1.5 w-1.5 rounded-full bg-[#C86B45]"
                                  />

                                  Recomendado por la casa
                                </motion.div>
                              )}

                              {/* DECORACION */}

                              <motion.div
                                initial={{
                                  opacity: 0,
                                }}
                                whileInView={{
                                  opacity: 1,
                                }}
                                viewport={{
                                  once: true,
                                }}
                                transition={{
                                  delay: index * 0.1 + 0.6,
                                  duration: 0.5,
                                }}
                                className="mt-3 flex items-center gap-1.5"
                              >
                                <Sparkles
                                  size={10}
                                  strokeWidth={1.5}
                                  className="text-[#C86B45]/50"
                                />

                                <span className="text-[8px] uppercase tracking-[0.18em] text-black/25">
                                  Casa Misti
                                </span>
                              </motion.div>
                            </div>
                          </div>

                          {/* BORDE INFERIOR */}

                          <motion.div
                            initial={{
                              scaleX: 0,
                              opacity: 0,
                            }}
                            whileHover={{
                              scaleX: 1,
                              opacity: 1,
                            }}
                            transition={{
                              duration: 0.5,
                              ease,
                            }}
                            className="absolute bottom-0 left-5 right-5 h-[2px] origin-left rounded-full bg-gradient-to-r from-[#C86B45] via-[#D98A67] to-transparent"
                          />

                          {/* FLECHA */}

                          <motion.div
                            initial={{
                              opacity: 0,
                              x: -5,
                              y: 5,
                            }}
                            whileHover={{
                              opacity: 1,
                              x: 0,
                              y: 0,
                            }}
                            transition={{
                              duration: 0.3,
                            }}
                            className="absolute bottom-4 right-4 hidden h-7 w-7 items-center justify-center rounded-full bg-[#171714] text-white sm:flex"
                          >
                            <ArrowUpRight size={13} />
                          </motion.div>
                        </motion.div>
                      </motion.article>
                    ))}
                  </div>
                </motion.section>
              );
            })}
        </div>
      </section>

      {/* ========================================================= */}
      {/* CTA FINAL */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-t border-black/10 bg-[#171714] text-white">
        {/* DECORACION DERECHA */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [0, 4, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[10%] top-[20%] hidden lg:block"
        >
          <Utensils
            size={75}
            strokeWidth={0.5}
            className="text-white/[0.04]"
          />
        </motion.div>

        {/* DECORACION IZQUIERDA */}
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -4, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] left-[8%] hidden lg:block"
        >
          <Utensils
            size={50}
            strokeWidth={0.5}
            className="text-white/[0.025]"
          />
        </motion.div>

        <div className="relative mx-auto max-w-4xl px-6 py-16 text-center sm:px-8 lg:py-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
          >
            {/* EYEBROW */}

            <motion.p
              initial={{
                opacity: 0,
                y: 15,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
              }}
              className="text-[10px] uppercase tracking-[0.28em] text-[#C86B45]"
            >
              Una experiencia para compartir
            </motion.p>

            {/* TITULO */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
                duration: 0.8,
                ease,
              }}
              className="mx-auto mt-4 max-w-2xl font-serif text-3xl leading-[1] tracking-[-0.04em] sm:text-4xl md:text-5xl"
            >
              Haz de tu próxima visita un momento especial.
            </motion.h2>

            {/* TEXTO */}

            <motion.p
              initial={{
                opacity: 0,
                y: 20,
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
                duration: 0.7,
              }}
              className="mx-auto mt-4 max-w-xl text-xs leading-5 text-white/50 sm:text-sm"
            >
              Reserva tu mesa y disfruta de una experiencia pensada para
              compartir, celebrar y disfrutar.
            </motion.p>

            {/* BOTON */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.7,
                ease,
              }}
              className="mt-7"
            >
              <Link
                href="/#reservas"
                className="group inline-flex items-center gap-2 rounded-full bg-[#C86B45] px-6 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#b95d3a] hover:shadow-[0_15px_35px_rgba(200,107,69,0.2)]"
              >
                Reservar una mesa

                <motion.span
                  whileHover={{
                    x: 4,
                    y: -3,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                >
                  <ArrowUpRight size={15} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
