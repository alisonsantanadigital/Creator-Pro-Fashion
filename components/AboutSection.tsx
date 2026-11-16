import EditorialImage from '@/components/EditorialImage';
import { ABOUT_CONTENT, CREATOR_PROFILE } from '@/data/creatorData';

export default function AboutSection() {
  return (
    <section id="sobre" className="bg-[#F4F4F6] text-[#070708] py-20 lg:py-28 border-b border-zinc-200">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Portrait */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="relative w-full max-w-[260px] sm:max-w-[290px] lg:max-w-[400px] aspect-[3/4] bg-zinc-200 border border-zinc-300 overflow-hidden">
              <EditorialImage
                src={CREATOR_PROFILE.aboutImage}
                alt={CREATOR_PROFILE.aboutImageAlt}
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 290px, 400px"
                className="object-cover object-top"
                fallbackTitle="Perfil Editorial · Marina Costa"
              />
            </div>
            <p className="text-[11px] tracking-[0.08em] uppercase text-zinc-500 pt-3 max-w-[260px] sm:max-w-[290px] lg:max-w-[400px]">
              Perfil Demonstrativo · Direção Visual PRUMO CREATORS
            </p>
          </div>

          {/* Right Column: Monograph Biography & Differentiators */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-zinc-500 mb-3">
                02. About &amp; Editorial Vision
              </p>

              <h2
                className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.08] tracking-[-0.015em] font-normal text-[#070708] mb-8"
                style={{ textWrap: 'balance' }}
              >
                Moda feminina contemporânea com rigor estético e leitura prática.
              </h2>

              <div className="space-y-4 text-base leading-relaxed text-zinc-700 max-w-2xl mb-10">
                {ABOUT_CONTENT.biography.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {/* Specialty & Style Two-Column Sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-7 border-t border-b border-zinc-300 mb-10">
                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-2">
                    Especialidade
                  </h3>
                  <p className="text-sm leading-relaxed text-[#070708]">
                    {ABOUT_CONTENT.specialty}
                  </p>
                </div>

                <div>
                  <h3 className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-2">
                    Estilo de Conteúdo
                  </h3>
                  <p className="text-sm leading-relaxed text-[#070708]">
                    {ABOUT_CONTENT.contentStyle}
                  </p>
                </div>
              </div>
            </div>

            {/* Differentiators */}
            <div>
              <h3 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-zinc-500 mb-5">
                Diferenciais Comerciais
              </h3>
              <div className="divide-y divide-zinc-300 border-t border-zinc-300">
                {ABOUT_CONTENT.differentials.map((item) => (
                  <div
                    key={item.index}
                    className="py-5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-6 items-baseline"
                  >
                    <div className="sm:col-span-5 flex items-baseline gap-3">
                      <span className="font-mono text-xs text-zinc-500 tabular-nums">
                        {item.index}
                      </span>
                      <h4 className="text-sm font-semibold text-[#070708]">
                        {item.title}
                      </h4>
                    </div>
                    <p className="sm:col-span-7 text-sm leading-relaxed text-zinc-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
