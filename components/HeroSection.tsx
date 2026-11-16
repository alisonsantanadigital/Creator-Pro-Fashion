'use client';

import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import EditorialImage from '@/components/EditorialImage';
import { CREATOR_PROFILE } from '@/data/creatorData';

export default function HeroSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="hero" className="bg-white border-b border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 pt-10 pb-12 lg:pt-14 lg:pb-16">
        {/* Asymmetric Split-Screen Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (Desktop) / Below Image (Mobile): Editorial Typographic Hierarchy */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-between py-2 lg:py-6"
          >
            <div>
              {/* Quiet unboxed agency attribution */}
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium tracking-[0.12em] uppercase text-zinc-500 mb-6">
                <span>{CREATOR_PROFILE.agencyName}</span>
                <span aria-hidden="true" className="text-zinc-300">/</span>
                <span>Media Kit Editorial</span>
                <span aria-hidden="true" className="text-zinc-300">/</span>
                <span>Demonstração Comercial</span>
              </div>

              <h1
                className="font-serif text-[clamp(3rem,6.4vw,5.25rem)] leading-[0.94] tracking-[-0.02em] font-normal text-[#070708] mb-6"
                style={{ textWrap: 'balance' }}
              >
                {CREATOR_PROFILE.name}
              </h1>

              <p className="text-sm font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-4">
                {CREATOR_PROFILE.niche}
              </p>

              <p className="text-lg sm:text-xl leading-relaxed text-[#070708] max-w-xl font-normal mb-5">
                {CREATOR_PROFILE.positioning}
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-zinc-600 max-w-lg mb-9">
                {CREATOR_PROFILE.editorialLead}
              </p>

              {/* Primary CTA + Secondary Anchor */}
              <div className="flex flex-wrap items-center gap-4 mb-10">
                <a
                  href="#contato"
                  className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#070708] text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-zinc-800 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
                >
                  <span>Parcerias Comerciais</span>
                  <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 border border-zinc-300 text-[#070708] text-xs font-semibold tracking-[0.1em] uppercase hover:border-[#070708] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
                >
                  <span>Ver Portfólio</span>
                  <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Social Channels Row */}
            <div className="pt-6 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
                <a
                  href={CREATOR_PROFILE.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-[#070708] hover:text-zinc-600 transition-colors"
                >
                  <span className="font-semibold tracking-tight">Instagram</span>
                  <span className="text-zinc-500 font-mono text-xs tabular-nums">
                    {CREATOR_PROFILE.socials.instagramHandle} · 126 mil*
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#070708] transition-colors"
                    strokeWidth={1.5}
                  />
                </a>

                <a
                  href={CREATOR_PROFILE.socials.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-sm text-[#070708] hover:text-zinc-600 transition-colors"
                >
                  <span className="font-semibold tracking-tight">TikTok</span>
                  <span className="text-zinc-500 font-mono text-xs tabular-nums">
                    {CREATOR_PROFILE.socials.tiktokHandle} · 58 mil*
                  </span>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 text-zinc-400 group-hover:text-[#070708] transition-colors"
                    strokeWidth={1.5}
                  />
                </a>
              </div>

              <span className="text-[11px] text-zinc-500">
                *Dados fictícios demonstrativos
              </span>
            </div>
          </motion.div>

          {/* Right Column (Desktop) / Top Image (Mobile): Editorial Portrait */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 lg:col-span-5 flex flex-col lg:items-end"
          >
            <div className="relative w-full aspect-[16/9] lg:max-w-[420px] lg:aspect-[3/4] bg-white lg:bg-zinc-100 lg:border lg:border-zinc-200 overflow-hidden">
              <EditorialImage
                src={CREATOR_PROFILE.heroImage}
                alt={CREATOR_PROFILE.heroImageAlt}
                priority
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover object-[50%_18%] lg:object-top"
                fallbackTitle="Marina Costa"
              />
              {/* Bottom fade into background on mobile */}
              <div
                aria-hidden="true"
                className="lg:hidden pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/65 to-transparent"
              />
            </div>
            <div className="hidden lg:flex w-full max-w-[420px] items-center justify-between pt-3 text-[11px] tracking-[0.08em] uppercase text-zinc-500">
              <span>Edição 01 · Moda Feminina Contemporânea</span>
              <span>São Paulo · Brasil</span>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Summary Strip Below Hero Split */}
        <div className="mt-12 pt-8 border-t border-zinc-200 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <div>
            <p className="text-[11px] tracking-[0.1em] uppercase text-zinc-500 mb-1.5">
              Instagram (Demo)
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#070708] tabular-nums">
              126.000
            </p>
            <p className="text-xs text-zinc-500 mt-1">seguidores fictícios</p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.1em] uppercase text-zinc-500 mb-1.5">
              TikTok (Demo)
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#070708] tabular-nums">
              58.000
            </p>
            <p className="text-xs text-zinc-500 mt-1">seguidores fictícios</p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.1em] uppercase text-zinc-500 mb-1.5">
              Especialidade
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#070708]">
              Moda &amp; Estilo
            </p>
            <p className="text-xs text-zinc-500 mt-1">looks, tendências e lifestyle</p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.1em] uppercase text-zinc-500 mb-1.5">
              Representação
            </p>
            <p className="font-serif text-2xl sm:text-3xl text-[#070708]">
              PRUMO
            </p>
            <p className="text-xs text-zinc-500 mt-1">apresentação comercial modelo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
