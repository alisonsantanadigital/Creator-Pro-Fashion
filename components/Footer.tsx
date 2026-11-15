import { CREATOR_PROFILE } from '@/data/creatorData';

export default function Footer() {
  return (
    <footer className="bg-[#070708] text-white border-t border-zinc-800 py-14">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-zinc-800">
          <div>
            <p className="font-serif text-xl tracking-[0.14em] uppercase text-white">
              {CREATOR_PROFILE.brandSystem}
            </p>
            <p className="text-xs text-zinc-400 mt-1.5">
              Desenvolvido pela agência {CREATOR_PROFILE.agencyName} · Portfólio demonstrativo para {CREATOR_PROFILE.name}
            </p>
          </div>

          <nav aria-label="Links do rodapé" className="flex flex-wrap items-center gap-6 text-xs tracking-[0.08em] uppercase text-zinc-400">
            <a href="#hero" className="hover:text-white transition-colors">
              Início
            </a>
            <a href="#audiencia" className="hover:text-white transition-colors">
              Audiência
            </a>
            <a href="#sobre" className="hover:text-white transition-colors">
              Sobre
            </a>
            <a href="#portfolio" className="hover:text-white transition-colors">
              Portfólio
            </a>
            <a href="#parcerias" className="hover:text-white transition-colors">
              Parcerias
            </a>
            <a href="#contato" className="hover:text-white transition-colors">
              Contato
            </a>
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>{CREATOR_PROFILE.demoDisclaimer}</p>
          <p className="whitespace-nowrap shrink-0">
            {CREATOR_PROFILE.agencyName} · CREATOR PRO
          </p>
        </div>
      </div>
    </footer>
  );
}
