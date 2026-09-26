"use client";

import { motion } from "motion/react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Phone,
  Users,
  ArrowUpRight,
  Check,
} from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
    filter: "blur(8px)",
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

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Reservations() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    people: "2",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.date || !formData.time || !formData.people) {
      return;
    }

    setSubmitted(true);

    const message = `Hola, quiero reservar una mesa en Casa Misti.

Fecha: ${formData.date}
Hora: ${formData.time}
Personas: ${formData.people}`;

    const whatsappUrl = `https://wa.me/51999999999?text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <section
      id="reservas"
      className="relative overflow-hidden bg-[#171714] px-6 py-12 text-[#F7F2E8] sm:px-8 lg:px-10 lg:py-14"
    >
      {/* =========================================================
          DECORACIÓN DE FONDO
      ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute -left-32 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-[#C86B45]/10 blur-[100px]"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-[#C86B45]/10 blur-[100px]"
      />

      <div className="relative mx-auto max-w-6xl">
        {/* =========================================================
            CONTENIDO PRINCIPAL — IZQUIERDA / DERECHA
        ========================================================= */}
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* =====================================================
              COLUMNA IZQUIERDA
          ===================================================== */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Eyebrow */}
            <motion.div
              variants={fadeUp}
              className="mb-4 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-[#C86B45]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C86B45]">
                Reservaciones
              </span>

              <span className="h-px w-8 bg-[#C86B45] lg:hidden" />
            </motion.div>

            {/* Título */}
            <motion.h2
              variants={fadeUp}
              className="max-w-xl text-4xl font-light leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]"
            >
              Reserva tu mesa.
              <span className="block text-[#C86B45]">
                Te esperamos.
              </span>
            </motion.h2>

            {/* Descripción */}
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-md text-sm leading-6 text-[#F7F2E8]/60 sm:text-base"
            >
              Vive una experiencia gastronómica diferente en el corazón de
              Arequipa. Reserva tu mesa y déjanos preparar algo especial para
              ti.
            </motion.p>

            {/* Información */}
            <motion.div
              variants={stagger}
              className="mt-6 grid w-full max-w-md gap-3 sm:grid-cols-2 lg:max-w-lg"
            >
              {/* Ubicación */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 text-[#C86B45]">
                  <MapPin size={16} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#F7F2E8]/35">
                    Encuéntranos
                  </p>

                  <p className="mt-0.5 text-xs text-[#F7F2E8]/75">
                    Arequipa, Perú
                  </p>
                </div>
              </motion.div>

              {/* Teléfono */}
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.035] px-4 py-3"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#C86B45]/10 text-[#C86B45]">
                  <Phone size={16} strokeWidth={1.7} />
                </div>

                <div>
                  <p className="text-[9px] uppercase tracking-[0.18em] text-[#F7F2E8]/35">
                    Reservas
                  </p>

                  <p className="mt-0.5 text-xs text-[#F7F2E8]/75">
                    +51 999 999 999
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Línea inferior */}
            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-3"
            >
              <span className="h-px w-10 bg-[#C86B45]" />

              <span className="text-[10px] uppercase tracking-[0.2em] text-[#F7F2E8]/35">
                Casa Misti · Arequipa
              </span>
            </motion.div>
          </motion.div>

          {/* =====================================================
              COLUMNA DERECHA — FORMULARIO
          ===================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: 35,
              scale: 0.97,
              filter: "blur(8px)",
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
              filter: "blur(0px)",
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] as const,
            }}
            className="relative"
          >
            {/* Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#C86B45]/10 blur-3xl" />

            {/* Card */}
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#20201C] p-5 shadow-2xl sm:p-6">
              {/* Línea superior */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1] as const,
                }}
                className="absolute left-0 right-0 top-0 h-[2px] origin-left bg-[#C86B45]"
              />

              {/* Header */}
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-[9px] uppercase tracking-[0.22em] text-[#C86B45]">
                    Reserva online
                  </p>

                  <h3 className="mt-1 text-xl font-medium tracking-tight text-[#F7F2E8] sm:text-2xl">
                    Tu mesa te espera
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C86B45]/20 bg-[#C86B45]/10 text-[#C86B45]">
                  <CalendarDays size={18} strokeWidth={1.6} />
                </div>
              </div>

              {/* Formulario */}
              <form onSubmit={handleSubmit}>
                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Fecha */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <label
                      htmlFor="date"
                      className="mb-1.5 block text-[9px] uppercase tracking-[0.18em] text-[#F7F2E8]/40"
                    >
                      Fecha
                    </label>

                    <div className="relative">
                      <CalendarDays
                        size={15}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                      />

                      <input
                        id="date"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/10 bg-[#171714] pl-9 pr-3 text-xs text-[#F7F2E8] outline-none transition focus:border-[#C86B45]/60 focus:ring-1 focus:ring-[#C86B45]/20 [color-scheme:dark]"
                      />
                    </div>
                  </motion.div>

                  {/* Hora */}
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label
                      htmlFor="time"
                      className="mb-1.5 block text-[9px] uppercase tracking-[0.18em] text-[#F7F2E8]/40"
                    >
                      Hora
                    </label>

                    <div className="relative">
                      <Clock3
                        size={15}
                        strokeWidth={1.6}
                        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                      />

                      <input
                        id="time"
                        name="time"
                        type="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                        className="h-11 w-full rounded-lg border border-white/10 bg-[#171714] pl-9 pr-3 text-xs text-[#F7F2E8] outline-none transition focus:border-[#C86B45]/60 focus:ring-1 focus:ring-[#C86B45]/20 [color-scheme:dark]"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Personas */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-3"
                >
                  <label
                    htmlFor="people"
                    className="mb-1.5 block text-[9px] uppercase tracking-[0.18em] text-[#F7F2E8]/40"
                  >
                    Número de personas
                  </label>

                  <div className="relative">
                    <Users
                      size={15}
                      strokeWidth={1.6}
                      className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[#C86B45]"
                    />

                    <select
                      id="people"
                      name="people"
                      value={formData.people}
                      onChange={handleChange}
                      className="h-11 w-full appearance-none rounded-lg border border-white/10 bg-[#171714] pl-9 pr-3 text-xs text-[#F7F2E8] outline-none transition focus:border-[#C86B45]/60 focus:ring-1 focus:ring-[#C86B45]/20"
                    >
                      <option value="1">1 persona</option>
                      <option value="2">2 personas</option>
                      <option value="3">3 personas</option>
                      <option value="4">4 personas</option>
                      <option value="5">5 personas</option>
                      <option value="6">6 personas</option>
                      <option value="7">7 personas</option>
                      <option value="8">8 personas</option>
                      <option value="9">9 personas</option>
                      <option value="10">10 personas</option>
                    </select>
                  </div>
                </motion.div>

                {/* Botón */}
                <motion.button
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="group relative mt-4 flex h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#C86B45] px-5 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-shadow duration-500 hover:shadow-[0_12px_35px_rgba(200,107,69,0.22)]"
                >
                  {/* Shine */}
                  <motion.span
                    initial={{ x: "-120%" }}
                    whileHover={{ x: "120%" }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="absolute inset-y-0 w-20 -skew-x-12 bg-white/20"
                  />

                  <span className="relative z-10">
                    {submitted ? "Solicitud enviada" : "Reservar mesa"}
                  </span>

                  {submitted ? (
                    <Check
                      size={15}
                      className="relative z-10"
                      strokeWidth={2}
                    />
                  ) : (
                    <ArrowUpRight
                      size={15}
                      className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  )}
                </motion.button>
              </form>

              {/* Texto inferior */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                className="mt-3 text-center text-[9px] leading-4 text-[#F7F2E8]/30"
              >
                Te contactaremos por WhatsApp para confirmar tu reserva.
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* =========================================================
            INDICADOR INFERIOR
        ========================================================= */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mx-auto mt-8 flex max-w-xs items-center justify-center gap-3"
        >
          <span className="h-px flex-1 bg-white/10" />

          <motion.span
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="h-1.5 w-1.5 rounded-full bg-[#C86B45]"
          />

          <span className="h-px flex-1 bg-white/10" />
        </motion.div>
      </div>
    </section>
  );
}