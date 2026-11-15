'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AUDIENCE_BREAKDOWN, PLATFORM_METRICS } from '@/data/creatorData';

type AudienceTab = 'demografia' | 'geografia';

export default function AudienceSection() {
  const [activeTab, setActiveTab] = useState<AudienceTab>('demografia');
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="audiencia" className="bg-[#070708] text-white py-20 lg:py-28 border-b border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 border-b border-zinc-800">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-zinc-400 mb-3">
              01. Audience Insights
            </p>
            <h2
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] tracking-[-0.015em] font-normal text-white"
              style={{ textWrap: 'balance' }}
            >
              Alcance e perfil de audiência em canais estratégicos.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm text-zinc-300 leading-relaxed max-w-md lg:ml-auto">
              Todos os números abaixo são fictícios e apresentados exclusivamente como referência demonstrativa do formato CREATOR PRO.
            </p>
          </div>
        </div>

        {/* Platform Comparison Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {PLATFORM_METRICS.map((item) => (
            <div
              key={item.id}
              className="bg-[#0E0E10] border border-zinc-800 p-7 sm:p-9 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 pb-6 border-b border-zinc-800">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl text-white">
                      {item.platform}
                    </h3>
                    <p className="font-mono text-xs text-zinc-400 mt-1">{item.handle}</p>
                  </div>
                  <span className="text-[11px] tracking-[0.1em] uppercase text-zinc-400">
                    Dados Fictícios
                  </span>
                </div>

                {/* Primary Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-7 border-b border-zinc-800/80">
                  <div>
                    <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-400 mb-1.5">
                      Seguidores
                    </p>
                    <p className="font-mono text-xl sm:text-2xl font-medium text-white tabular-nums">
                      {item.followers}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">{item.followersLabel}</p>
                  </div>

                  <div>
                    <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-400 mb-1.5">
                      Alcance Médio
                    </p>
                    <p className="font-mono text-xl sm:text-2xl font-medium text-white tabular-nums">
                      {item.avgReach}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">por publicação</p>
                  </div>

                  <div>
                    <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-400 mb-1.5">
                      Engajamento
                    </p>
                    <p className="font-mono text-xl sm:text-2xl font-medium text-white tabular-nums">
                      {item.engagementRate}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">taxa média demo</p>
                  </div>

                  <div>
                    <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-400 mb-1.5">
                      Impressões/Mês
                    </p>
                    <p className="font-mono text-xl sm:text-2xl font-medium text-white tabular-nums">
                      {item.monthlyViews}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">estimativa demo</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-zinc-300 leading-relaxed pt-6">
                {item.note}
              </p>
            </div>
          ))}
        </div>

        {/* Audience Profile Interactive Breakdown */}
        <div className="mt-14 pt-12 border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div>
              <h3 className="font-serif text-2xl text-white">
                Perfil Demográfico da Audiência
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                Distribuição ilustrativa para planejamento de mídia de moda e lifestyle
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div
              role="tablist"
              aria-label="Segmentação de audiência"
              className="inline-flex items-center p-1 bg-[#141417] border border-zinc-800 self-start sm:self-auto"
            >
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'demografia'}
                onClick={() => setActiveTab('demografia')}
                className={`px-4 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  activeTab === 'demografia'
                    ? 'bg-white text-[#070708]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Gênero &amp; Idade
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === 'geografia'}
                onClick={() => setActiveTab('geografia')}
                className={`px-4 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                  activeTab === 'geografia'
                    ? 'bg-white text-[#070708]'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Regiões &amp; Interesses
              </button>
            </div>
          </div>

          {activeTab === 'demografia' ? (
            <motion.div
              key="demografia"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
            >
              {/* Gender Split */}
              <div>
                <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-400 mb-6">
                  Distribuição por Gênero (Fictício)
                </h4>
                <div className="space-y-5">
                  {AUDIENCE_BREAKDOWN.gender.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zinc-200">{row.label}</span>
                        <span className="font-mono text-white tabular-nums">{row.value}</span>
                      </div>
                      <div className="h-px w-full bg-zinc-800 relative">
                        <div
                          className="h-[2px] bg-zinc-200 -top-[0.5px] relative"
                          style={{ width: `${row.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Age Groups */}
              <div>
                <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-400 mb-6">
                  Faixa Etária Predominante (Fictício)
                </h4>
                <div className="space-y-5">
                  {AUDIENCE_BREAKDOWN.ageGroups.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zinc-200">{row.label}</span>
                        <span className="font-mono text-white tabular-nums">{row.value}</span>
                      </div>
                      <div className="h-px w-full bg-zinc-800 relative">
                        <div
                          className="h-[2px] bg-zinc-200 -top-[0.5px] relative"
                          style={{ width: `${row.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="geografia"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16"
            >
              {/* Top Cities */}
              <div>
                <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-400 mb-6">
                  Principais Praças (Fictício)
                </h4>
                <div className="space-y-5">
                  {AUDIENCE_BREAKDOWN.topCities.map((row) => (
                    <div key={row.label}>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span className="text-zinc-200">{row.label}</span>
                        <span className="font-mono text-white tabular-nums">{row.value}</span>
                      </div>
                      <div className="h-px w-full bg-zinc-800 relative">
                        <div
                          className="h-[2px] bg-zinc-200 -top-[0.5px] relative"
                          style={{ width: `${row.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div>
                <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-zinc-400 mb-6">
                  Afinidades de Consumo
                </h4>
                <ul className="divide-y divide-zinc-800 border-t border-b border-zinc-800">
                  {AUDIENCE_BREAKDOWN.interests.map((interest, idx) => (
                    <li key={interest} className="py-4 flex items-baseline gap-4 text-sm text-zinc-200">
                      <span className="font-mono text-xs text-zinc-500 tabular-nums">
                        0{idx + 1}.
                      </span>
                      <span>{interest}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
