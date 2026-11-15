'use client';

import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import EditorialImage from '@/components/EditorialImage';
import { CAMPAIGN_PORTFOLIO, type CampaignItem } from '@/data/creatorData';

type FilterCategory = 'Todas' | CampaignItem['category'];

const FILTER_CATEGORIES: FilterCategory[] = [
  'Todas',
  'Alfaiataria',
  'Editorial',
  'Acessórios',
  'Resort',
];

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('Todas');
  const [activeCampaign, setActiveCampaign] = useState<CampaignItem | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredCampaigns =
    selectedCategory === 'Todas'
      ? CAMPAIGN_PORTFOLIO
      : CAMPAIGN_PORTFOLIO.filter((item) => item.category === selectedCategory);

  useEffect(() => {
    if (!activeCampaign) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveCampaign(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCampaign]);

  return (
    <section id="portfolio" className="bg-white text-[#070708] py-20 lg:py-28 border-b border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header & Interactive Category Filter */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b border-zinc-200">
          <div>
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-zinc-500 mb-3">
              03. Campaign Portfolio
            </p>
            <h2
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] tracking-[-0.015em] font-normal text-[#070708]"
              style={{ textWrap: 'balance' }}
            >
              Séries conceituais de moda, looks e acessórios.
            </h2>
            <p className="text-sm text-zinc-600 mt-3 max-w-2xl">
              Quatro produções fictícias desenvolvidas para ilustrar direção de arte, versatilidade de styling e enquadramento editorial. Sem vínculo com marcas reais.
            </p>
          </div>

          {/* Interactive Filter Controls */}
          <div
            role="tablist"
            aria-label="Filtrar campanhas por tema"
            className="flex flex-wrap items-center gap-1 p-1 bg-zinc-100 border border-zinc-200 self-start lg:self-auto"
          >
            {FILTER_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] ${
                    isSelected
                      ? 'bg-[#070708] text-white'
                      : 'text-zinc-600 hover:text-[#070708]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Asymmetric Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {filteredCampaigns.map((campaign, idx) => {
            // Asymmetric magazine pacing when viewing all 4 campaigns
            const isWideFeature =
              selectedCategory === 'Todas' && (idx === 0 || idx === 3);
            const colSpanClass =
              selectedCategory === 'Todas'
                ? isWideFeature
                  ? 'md:col-span-7'
                  : 'md:col-span-5'
                : 'md:col-span-6';

            return (
              <motion.article
                key={campaign.id}
                layout={!prefersReducedMotion}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`${colSpanClass} group flex flex-col`}
              >
                <button
                  type="button"
                  onClick={() => setActiveCampaign(campaign)}
                  className="text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-4"
                >
                  <div className="relative w-full aspect-[4/3] bg-zinc-100 border border-zinc-200 overflow-hidden mb-4">
                    <EditorialImage
                      src={campaign.image}
                      alt={campaign.imageAlt}
                      sizes={isWideFeature ? '(max-width: 768px) 100vw, 58vw' : '(max-width: 768px) 100vw, 42vw'}
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      fallbackTitle={campaign.title}
                    />
                  </div>

                  {/* Clean Unboxed Metadata */}
                  <div className="flex items-center justify-between gap-4 text-[11px] tracking-[0.08em] uppercase text-zinc-500 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[#070708]">{campaign.index}</span>
                      <span aria-hidden="true">/</span>
                      <span>{campaign.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{campaign.season}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[#070708] font-medium group-hover:translate-x-0.5 transition-transform duration-200 whitespace-nowrap shrink-0">
                      <span>Expandir</span>
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-[1.75rem] text-[#070708] leading-snug mb-2">
                    {campaign.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed max-w-xl">
                    {campaign.concept}
                  </p>
                </button>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Fullscreen Editorial Lightbox Modal */}
      {activeCampaign && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="lightbox-title"
          className="fixed inset-0 z-50 bg-[#070708]/90 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setActiveCampaign(null)}
        >
          <div
            className="bg-white text-[#070708] w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-zinc-300 grid grid-cols-1 lg:grid-cols-12"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lightbox Visual */}
            <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:min-h-[460px] bg-zinc-100">
              <EditorialImage
                src={activeCampaign.image}
                alt={activeCampaign.imageAlt}
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
                fallbackTitle={activeCampaign.title}
              />
            </div>

            {/* Lightbox Editorial Credits */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 pb-5 border-b border-zinc-200">
                  <div>
                    <p className="text-[11px] tracking-[0.1em] uppercase text-zinc-500">
                      {activeCampaign.index} · {activeCampaign.category}
                    </p>
                    <h3 id="lightbox-title" className="font-serif text-2xl sm:text-3xl text-[#070708] mt-1">
                      {activeCampaign.title}
                    </h3>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveCampaign(null)}
                    aria-label="Fechar visualização da campanha"
                    className="w-10 h-10 inline-flex items-center justify-center border border-zinc-200 text-[#070708] hover:bg-[#070708] hover:text-white transition-colors duration-150 shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708]"
                  >
                    <X className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>

                <div className="space-y-5 py-6 text-sm">
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-500 mb-1">
                      Conceito Editorial
                    </p>
                    <p className="text-zinc-700 leading-relaxed">{activeCampaign.concept}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-500 mb-1">
                      Direção de Arte
                    </p>
                    <p className="text-zinc-700 leading-relaxed">{activeCampaign.direction}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-500 mb-1">
                      Escopo Demonstrativo
                    </p>
                    <p className="text-[#070708] font-medium">{activeCampaign.deliverables}</p>
                  </div>

                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-500 mb-1">
                      Paleta Cromática
                    </p>
                    <p className="text-zinc-600">{activeCampaign.palette}</p>
                  </div>
                </div>
              </div>

              <div className="pt-5 border-t border-zinc-200 flex items-center justify-between gap-4">
                <span className="text-[11px] text-zinc-500">
                  {activeCampaign.season}
                </span>
                <a
                  href="#contato"
                  onClick={() => setActiveCampaign(null)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.08em] uppercase text-[#070708] hover:text-zinc-600 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Solicitar Formato Similar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
