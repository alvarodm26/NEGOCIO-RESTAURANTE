"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import {
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Mariana R.",
    city: "Arequipa",
    text: "Una de esas experiencias que quieres repetir. Todo estuvo increíble, desde la atención hasta el último detalle del plato.",
    date: "Hace 2 días",
  },
  {
    id: 2,
    name: "Carlos M.",
    city: "Lima",
    text: "La comida estuvo espectacular. Los sabores se sienten muy bien equilibrados y la presentación es impecable.",
    date: "Hace 4 días",
  },
  {
    id: 3,
    name: "Lucía P.",
    city: "Arequipa",
    text: "Fuimos a celebrar un cumpleaños y la experiencia fue excelente. El ambiente es precioso y la atención muy cercana.",
    date: "Hace 1 semana",
  },
  {
    id: 4,
    name: "Diego A.",
    city: "Cusco",
    text: "Me encantó la propuesta. Se siente como cocina peruana, pero con una presentación y ejecución mucho más contemporánea.",
    date: "Hace 1 semana",
  },
  {
    id: 5,
    name: "Andrea V.",
    city: "Arequipa",
    text: "El lugar tiene muchísimo encanto. Pedimos varios platos para compartir y absolutamente todos nos sorprendieron.",
    date: "Hace 8 días",
  },
  {
    id: 6,
    name: "Fernando C.",
    city: "Lima",
    text: "Excelente experiencia gastronómica. Los ingredientes se sienten frescos y la atención fue rápida y muy amable.",
    date: "Hace 10 días",
  },
  {
    id: 7,
    name: "Sofía T.",
    city: "Arequipa",
    text: "Un restaurante al que definitivamente volvería. El ambiente es elegante sin sentirse demasiado formal.",
    date: "Hace 12 días",
  },
  {
    id: 8,
    name: "Mateo R.",
    city: "Moquegua",
    text: "Probamos varios platos y quedamos encantados. Muy buena combinación entre tradición y creatividad.",
    date: "Hace 2 semanas",
  },
  {
    id: 9,
    name: "Valeria S.",
    city: "Arequipa",
    text: "La atención fue excelente desde que llegamos. Todo estuvo muy cuidado y la comida realmente deliciosa.",
    date: "Hace 2 semanas",
  },
  {
    id: 10,
    name: "Javier L.",
    city: "Tacna",
    text: "El lomo saltado fue de los mejores que he probado. Buen sabor, buena porción y una presentación increíble.",
    date: "Hace 17 días",
  },
  {
    id: 11,
    name: "Camila G.",
    city: "Arequipa",
    text: "Me encantó cada detalle del lugar. Es perfecto para una cena tranquila y para disfrutar sin apuro.",
    date: "Hace 3 semanas",
  },
  {
    id: 12,
    name: "Rodrigo F.",
    city: "Lima",
    text: "Una propuesta muy bien pensada. Se nota el cuidado detrás de cada plato y la calidad de los ingredientes.",
    date: "Hace 3 semanas",
  },
  {
    id: 13,
    name: "Daniela N.",
    city: "Arequipa",
    text: "Pedimos entradas para compartir y luego algunos platos de fondo. Todo llegó perfecto y con muchísimo sabor.",
    date: "Hace 24 días",
  },
  {
    id: 14,
    name: "Sebastián P.",
    city: "Cusco",
    text: "Muy buena experiencia. El ambiente, la música y la comida hacen que realmente disfrutes la visita.",
    date: "Hace 1 mes",
  },
  {
    id: 15,
    name: "Paula E.",
    city: "Arequipa",
    text: "La atención merece una mención especial. Fueron atentos en todo momento y nos recomendaron muy buenos platos.",
    date: "Hace 1 mes",
  },
  {
    id: 16,
    name: "Nicolás D.",
    city: "Lima",
    text: "Un sitio muy bonito y con una carta interesante. Definitivamente una buena opción para una ocasión especial.",
    date: "Hace 1 mes",
  },
  {
    id: 17,
    name: "Gabriela H.",
    city: "Arequipa",
    text: "El ceviche estuvo espectacular. Fresco, equilibrado y con una presentación muy bonita.",
    date: "Hace 5 semanas",
  },
  {
    id: 18,
    name: "Alejandro V.",
    city: "Arequipa",
    text: "Nos sorprendió muchísimo la calidad de la comida. Todo se sintió fresco, bien preparado y servido a tiempo.",
    date: "Hace 5 semanas",
  },
  {
    id: 19,
    name: "Renata C.",
    city: "Puno",
    text: "Un restaurante con mucha personalidad. Me gustó que cada plato tuviera algo diferente sin perder la esencia peruana.",
    date: "Hace 6 semanas",
  },
  {
    id: 20,
    name: "Martín S.",
    city: "Arequipa",
    text: "Excelente lugar para ir con amigos. Pedimos diferentes platos y compartir fue parte de la experiencia.",
    date: "Hace 6 semanas",
  },
  {
    id: 21,
    name: "Isabella M.",
    city: "Lima",
    text: "Todo estuvo muy bien. Desde la reserva hasta el momento de salir, la experiencia fue bastante agradable.",
    date: "Hace 2 meses",
  },
  {
    id: 22,
    name: "Luis A.",
    city: "Arequipa",
    text: "La carta tiene opciones para todos y los platos están muy bien ejecutados. Sin duda volveremos.",
    date: "Hace 2 meses",
  },
  {
    id: 23,
    name: "Carolina B.",
    city: "Tacna",
    text: "Me encantó el concepto del restaurante. Se siente moderno, acogedor y con mucha atención al detalle.",
    date: "Hace 2 meses",
  },
  {
    id: 24,
    name: "Tomás J.",
    city: "Arequipa",
    text: "Una experiencia muy completa. La comida estuvo excelente y el servicio hizo que la noche fuera todavía mejor.",
    date: "Hace 2 meses",
  },
  {
    id: 25,
    name: "Natalia K.",
    city: "Cusco",
    text: "Vinimos recomendados y definitivamente valió la pena. Los sabores son increíbles y el ambiente es muy agradable.",
    date: "Hace 3 meses",
  },
  {
    id: 26,
    name: "Álvaro R.",
    city: "Arequipa",
    text: "Muy buena atención y platos bastante bien presentados. Se nota que hay mucho cuidado en la cocina.",
    date: "Hace 3 meses",
  },
  {
    id: 27,
    name: "Patricia W.",
    city: "Lima",
    text: "Un lugar perfecto para una cena especial. Nos gustó mucho la experiencia y seguramente regresaremos.",
    date: "Hace 3 meses",
  },
  {
    id: 28,
    name: "Mauricio Z.",
    city: "Arequipa",
    text: "La comida fue lo mejor de la noche. Sabores intensos pero muy bien balanceados y una presentación excelente.",
    date: "Hace 4 meses",
  },
  {
    id: 29,
    name: "Fiorella Q.",
    city: "Arequipa",
    text: "Me gustó muchísimo el ambiente. Es elegante, pero al mismo tiempo se siente cálido y cómodo.",
    date: "Hace 4 meses",
  },
  {
    id: 30,
    name: "Gonzalo T.",
    city: "Lima",
    text: "Una experiencia que recomiendo totalmente. Buena comida, excelente servicio y un ambiente muy bonito.",
    date: "Hace 4 meses",
  },
];

function getRandomReviews(items: typeof reviews) {
  const shuffled = [...items];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[i],
    ];
  }

  return shuffled;
}

export default function Reviews() {
  const shuffledReviews = useMemo(() => getRandomReviews(reviews), []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [cardWidth, setCardWidth] = useState(0);

  const viewportRef = useRef<HTMLDivElement>(null);

  /* ========================================================= */
  /* RESPONSIVE / ANCHO DE TARJETA */
  /* ========================================================= */

  useEffect(() => {
    const updateLayout = () => {
      if (!viewportRef.current) return;

      const width = viewportRef.current.offsetWidth;

      const perView = window.innerWidth < 768 ? 1 : 3;

      setCardsPerView(perView);

      const gap = perView === 1 ? 0 : 16;

      const calculatedWidth =
        perView === 1
          ? width
          : (width - gap * (perView - 1)) / perView;

      setCardWidth(calculatedWidth);
    };

    updateLayout();

    window.addEventListener("resize", updateLayout);

    return () => {
      window.removeEventListener("resize", updateLayout);
    };
  }, []);

  /* ========================================================= */
  /* CARRUSEL AUTOMÁTICO */
  /* ========================================================= */

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((previous) => {
        const maxIndex = shuffledReviews.length - cardsPerView;

        if (previous >= maxIndex) {
          return 0;
        }

        return previous + 1;
      });
    }, 5500);

    return () => clearInterval(interval);
  }, [cardsPerView, shuffledReviews.length]);

  /* ========================================================= */
  /* DESPLAZAMIENTO */
  /* ========================================================= */

  const gap = cardsPerView === 1 ? 0 : 16;

  const translateX =
    currentIndex * (cardWidth + gap);

  return (
    <section
      id="resenas"
      className="relative overflow-hidden bg-[#F7F2E8] px-6 py-14 sm:px-8 lg:px-10 lg:py-16"
    >
      {/* ========================================================= */}
      {/* FONDO DECORATIVO */}
      {/* ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 45, 0],
            y: [0, -25, 0],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-[#C86B45]/[0.055] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -35, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-[#C86B45]/[0.045] blur-3xl"
        />

        <div className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C86B45]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* ========================================================= */}
        {/* ENCABEZADO */}
        {/* ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(6px)",
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
          className="mx-auto max-w-2xl text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.85,
              y: 10,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="mx-auto mb-4 flex w-fit items-center gap-2 rounded-full border border-[#C86B45]/25 bg-white/60 px-3.5 py-1.5 shadow-[0_5px_25px_rgba(23,23,20,0.04)] backdrop-blur-sm"
          >
            <Sparkles
              size={12}
              className="text-[#C86B45]"
              strokeWidth={1.8}
            />

            <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[#C86B45]">
              Lo que dicen de nosotros
            </span>
          </motion.div>

          <h2 className="font-serif text-4xl leading-[0.95] tracking-[-0.04em] text-[#171714] sm:text-5xl lg:text-[4rem]">
            Experiencias que{" "}
            <span className="text-[#C86B45]">se quedan.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-black/45">
            Cada visita deja una historia. Descubre lo que nuestros visitantes
            han vivido en Casa Misti.
          </p>
        </motion.div>

        {/* ========================================================= */}
        {/* CARRUSEL */}
        {/* ========================================================= */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.75,
            ease: [0.22, 1, 0.36, 1] as const,
          }}
          className="mt-9 overflow-hidden"
          ref={viewportRef}
        >
          <motion.div
            animate={{
              x: -translateX,
            }}
            transition={{
              duration: 1.35,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="flex"
            style={{
              gap: `${gap}px`,
            }}
          >
            {shuffledReviews.map((review, index) => (
              <motion.article
                key={review.id}
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="group relative shrink-0"
                style={{
                  width: cardWidth
                    ? `${cardWidth}px`
                    : cardsPerView === 1
                      ? "100%"
                      : "calc((100% - 32px) / 3)",
                }}
              >
                {/* ================================================= */}
                {/* BORDE ANIMADO EXTERIOR */}
                {/* ================================================= */}

                <div className="absolute -inset-[2px] overflow-hidden rounded-[1.55rem] opacity-90 transition-opacity duration-500 group-hover:opacity-100">
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 8 + (index % 3) * 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute -left-1/2 -top-1/2 h-[200%] w-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_185deg,#C86B45_230deg,#E09A7B_265deg,#C86B45_300deg,transparent_345deg)]"
                  />
                </div>

                {/* ================================================= */}
                {/* TARJETA */}
                {/* ================================================= */}

                <div className="relative flex min-h-[275px] flex-col overflow-hidden rounded-[1.4rem] border border-[#C86B45]/25 bg-[#FFFDF8] p-6 shadow-[0_12px_35px_rgba(23,23,20,0.06)] transition-all duration-500 group-hover:border-[#C86B45]/55 group-hover:shadow-[0_25px_60px_rgba(200,107,69,0.14)] sm:p-7">
                  {/* Brillo */}

                  <motion.div
                    initial={{
                      x: "-130%",
                      opacity: 0,
                    }}
                    whileHover={{
                      x: "130%",
                      opacity: 0.8,
                    }}
                    transition={{
                      duration: 0.8,
                      ease: "easeInOut",
                    }}
                    className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 rotate-[12deg] bg-gradient-to-r from-transparent via-white/80 to-transparent blur-md"
                  />

                  {/* Decoración esquina */}

                  <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 overflow-hidden">
                    <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border border-[#C86B45]/15" />
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full border border-[#C86B45]/15" />
                  </div>

                  {/* Quote */}

                  <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#C86B45]/25 bg-[#F7F2E8]">
                    <Quote
                      size={17}
                      className="text-[#C86B45]"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Estrellas */}

                  <div className="relative z-10 flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
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
                          delay: (index % 3) * 0.08 + star * 0.05,
                          duration: 0.3,
                        }}
                      >
                        <Star
                          size={13}
                          fill="#C86B45"
                          className="text-[#C86B45]"
                          strokeWidth={1.4}
                        />
                      </motion.div>
                    ))}
                  </div>

                  {/* Número */}

                  <div className="mt-3 flex items-center gap-2">
                    <span className="h-px w-5 bg-[#C86B45]/50" />

                    <span className="text-[8px] font-semibold uppercase tracking-[0.22em] text-[#171714]/30">
                      Opinión · {String((index % 9) + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Texto */}

                  <p className="relative z-10 mt-5 flex-1 font-serif text-[1.15rem] leading-[1.42] tracking-[-0.02em] text-[#171714] sm:text-[1.2rem]">
                    “{review.text}”
                  </p>

                  {/* Separador */}

                  <div className="relative my-5 h-px w-full overflow-hidden bg-[#171714]/[0.08]">
                    <motion.div
                      initial={{
                        scaleX: 0,
                      }}
                      whileInView={{
                        scaleX: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] as const,
                      }}
                      className="absolute inset-y-0 left-0 w-1/3 origin-left bg-[#C86B45]/60"
                    />
                  </div>

                  {/* Usuario */}

                  <div className="relative z-10 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#171714] text-xs font-semibold text-[#F7F2E8] shadow-[0_5px_15px_rgba(23,23,20,0.12)]">
                        {review.name.charAt(0)}

                        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#FFFDF8] bg-[#C86B45]" />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-[#171714]">
                          {review.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-black/35">
                          {review.city}
                        </p>
                      </div>
                    </div>

                    <span className="text-[9px] uppercase tracking-[0.12em] text-black/25">
                      {review.date}
                    </span>
                  </div>

                  {/* ================================================= */}
                  {/* LED INFERIOR */}
                  {/* ================================================= */}

                  <div className="absolute bottom-0 left-6 right-6 h-[2px] overflow-hidden rounded-full bg-[#C86B45]/15">
                    <motion.div
                      animate={{
                        x: ["-120%", "220%"],
                      }}
                      transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        repeatDelay: 1.5,
                        ease: "easeInOut",
                        delay: (index % 3) * 0.4,
                      }}
                      className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#C86B45] to-transparent shadow-[0_0_12px_rgba(200,107,69,0.9)]"
                    />
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.div>

        {/* ========================================================= */}
        {/* RATING CENTRADO */}
        {/* ========================================================= */}

        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-7 flex flex-col items-center justify-center"
        >
          <div className="flex items-center gap-1.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.div
                key={star}
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
                  delay: star * 0.06,
                  duration: 0.3,
                }}
              >
                <Star
                  size={15}
                  fill="#C86B45"
                  className="text-[#C86B45]"
                  strokeWidth={1.4}
                />
              </motion.div>
            ))}
          </div>

          <div className="mt-2 flex items-center gap-2">
            <span className="text-sm font-semibold text-[#171714]">
              5.0
            </span>

            <span className="h-1 w-1 rounded-full bg-black/20" />

            <span className="text-[10px] uppercase tracking-[0.14em] text-black/40">
              Opiniones de nuestros visitantes
            </span>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* DETALLE FINAL */}
        {/* ========================================================= */}

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
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-5 flex items-center justify-center gap-3"
        >
          <span className="h-px w-8 bg-[#C86B45]/30" />

          <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-black/20">
            Casa Misti · Arequipa
          </span>

          <span className="h-px w-8 bg-[#C86B45]/30" />
        </motion.div>
      </div>
    </section>
  );
}