'use client';

import { ArrowUpRight, Check } from 'lucide-react';
import { PARTNERSHIP_FORMATS } from '@/data/creatorData';

interface PartnershipsSectionProps {
  selectedFormat: string;
  onSelectFormat: (formatTitle: string) => void;
}

export default function PartnershipsSection({
  selectedFormat,
  onSelectFormat,
}: PartnershipsSectionProps) {
  const handleChooseFormat = (formatTitle: string) => {
    onSelectFormat(formatTitle);
    const contactEl = document.getElementById('contato');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="parcerias" className="bg-[#070708] text-white py-20 lg:py-28 border-b border-zinc-800">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end pb-12 border-b border-zinc-800">
          <div className="lg:col-span-7">
            <p className="text-xs font-medium tracking-[0.14em] uppercase text-zinc-400 mb-3">
              04. Brand Partnerships
            </p>
            <h2
              className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] tracking-[-0.015em] font-normal text-white"
              style={{ textWrap: 'balance' }}
            >
              Formatos comerciais para marcas e campanhas de moda.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:text-right">
            <p className="text-sm text-zinc-300 leading-relaxed max-w-md lg:ml-auto">
              Estruturas flexíveis de entrega gerenciadas pela agência PRUMO CREATORS, adaptáveis ao objetivo editorial ou de conversão de cada parceiro.
            </p>
          </div>
        </div>

        {/* Formats Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800">
          {PARTNERSHIP_FORMATS.map((format) => {
            const isSelected = selectedFormat === format.title;
            return (
              <div
                key={format.id}
                className="bg-[#0B0B0D] p-7 sm:p-8 flex flex-col justify-between transition-colors duration-200 hover:bg-[#111114]"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 pb-5 border-b border-zinc-800">
                    <span className="font-mono text-xs text-zinc-400 tabular-nums">
                      {format.index}
                    </span>
                    <span className="text-[11px] tracking-[0.08em] uppercase text-zinc-400">
                      Formato Comercial
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl text-white mt-6 mb-1.5">
                    {format.title}
                  </h3>
                  <p className="text-xs font-medium tracking-[0.06em] uppercase text-zinc-400 mb-4">
                    {format.subtitle}
                  </p>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-6">
                    {format.description}
                  </p>

                  <ul className="space-y-2 border-t border-zinc-800/80 pt-5 mb-7">
                    {format.deliverables.map((deliverable) => (
                      <li key={deliverable} className="text-xs text-zinc-300 flex items-baseline gap-2.5">
                        <span aria-hidden="true" className="text-zinc-500">·</span>
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                  <span className="text-[11px] text-zinc-400 line-clamp-1">
                    {format.idealFor}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleChooseFormat(format.title)}
                    className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium tracking-[0.06em] uppercase transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white ${
                      isSelected
                        ? 'bg-white text-[#070708]'
                        : 'border border-zinc-700 text-white hover:border-white'
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check className="w-3.5 h-3.5" strokeWidth={1.75} />
                        <span>Selecionado</span>
                      </>
                    ) : (
                      <>
                        <span>Selecionar</span>
                        <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
