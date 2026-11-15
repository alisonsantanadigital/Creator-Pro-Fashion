'use client';

import { useState, type FormEvent } from 'react';
import { ArrowUpRight, CheckCircle2, Mail, MessageCircle } from 'lucide-react';
import { CREATOR_PROFILE, PARTNERSHIP_FORMATS } from '@/data/creatorData';

interface ContactSectionProps {
  selectedFormat: string;
  onSelectFormat: (formatTitle: string) => void;
}

export default function ContactSection({
  selectedFormat,
  onSelectFormat,
}: ContactSectionProps) {
  const [brandName, setBrandName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const activeFormat = selectedFormat || PARTNERSHIP_FORMATS[0].title;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg('');

    if (!brandName.trim()) {
      setErrorMsg('Informe o nome da marca ou contato responsável.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setErrorMsg('Informe um endereço de e-mail válido.');
      return;
    }

    if (!message.trim()) {
      setErrorMsg('Descreva brevemente o objetivo ou período da campanha.');
      return;
    }

    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setBrandName('');
    setEmail('');
    setMessage('');
    setErrorMsg('');
  };

  return (
    <section id="contato" className="bg-white text-[#070708] py-20 lg:py-28">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Demonstrative Channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-medium tracking-[0.14em] uppercase text-zinc-500 mb-3">
                05. Contact &amp; Booking
              </p>
              <h2
                className="font-serif text-[clamp(2rem,4vw,3.25rem)] leading-[1.06] tracking-[-0.015em] font-normal text-[#070708] mb-5"
                style={{ textWrap: 'balance' }}
              >
                Solicite uma proposta comercial.
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed mb-10">
                Atendimento para marcas, assessorias e agências interessadas em projetos editoriais, produções de conteúdo ou presença em eventos.
              </p>

              {/* Direct Operational Demonstrative Channels */}
              <div className="divide-y divide-zinc-200 border-t border-b border-zinc-200">
                <a
                  href={CREATOR_PROFILE.socials.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-5 flex items-center justify-between gap-4 group hover:bg-zinc-50 transition-colors px-1"
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-1">
                      WhatsApp Comercial (Demo)
                    </p>
                    <p className="font-mono text-sm sm:text-base text-[#070708] tabular-nums">
                      {CREATOR_PROFILE.socials.whatsappDisplay}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[#070708] whitespace-nowrap shrink-0">
                    <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
                    <span>Conversar</span>
                  </span>
                </a>

                <a
                  href={CREATOR_PROFILE.socials.emailUrl}
                  className="py-5 flex items-center justify-between gap-4 group hover:bg-zinc-50 transition-colors px-1"
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-1">
                      E-mail Comercial (Demo)
                    </p>
                    <p className="font-mono text-sm sm:text-base text-[#070708]">
                      {CREATOR_PROFILE.socials.emailDisplay}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.08em] text-[#070708] whitespace-nowrap shrink-0">
                    <Mail className="w-4 h-4" strokeWidth={1.5} />
                    <span>Enviar</span>
                  </span>
                </a>

                <a
                  href={CREATOR_PROFILE.socials.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-5 flex items-center justify-between gap-4 group hover:bg-zinc-50 transition-colors px-1"
                >
                  <div>
                    <p className="text-[11px] font-semibold tracking-[0.1em] uppercase text-zinc-500 mb-1">
                      Instagram Oficial (Demo)
                    </p>
                    <p className="font-mono text-sm sm:text-base text-[#070708]">
                      {CREATOR_PROFILE.socials.instagramHandle}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-[0.08em] text-[#070708] whitespace-nowrap shrink-0">
                    <span>Perfil</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </span>
                </a>
              </div>
            </div>

            <div className="pt-8">
              <p className="text-xs text-zinc-500 leading-relaxed">
                {CREATOR_PROFILE.location}. Canais de contato exibidos acima são fictícios para demonstração comercial pela agência {CREATOR_PROFILE.agencyName}.
              </p>
            </div>
          </div>

          {/* Right Column: Minimalist Proposal CTA Form */}
          <div className="lg:col-span-7 bg-[#F4F4F6] border border-zinc-200 p-7 sm:p-10">
            {submitted ? (
              <div className="h-full flex flex-col justify-between py-4">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.1em] uppercase text-[#070708] mb-4">
                    <CheckCircle2 className="w-4 h-4" strokeWidth={1.75} />
                    <span>Solicitação Registrada (Modo Demonstração)</span>
                  </div>
                  <h3 className="font-serif text-3xl text-[#070708] mb-4">
                    Obrigado, {brandName}.
                  </h3>
                  <p className="text-sm text-zinc-700 leading-relaxed mb-6">
                    Esta é uma simulação estática do fluxo comercial do modelo CREATOR PRO. Em uma implantação real, seu briefing para o formato <strong className="font-semibold text-[#070708]">{activeFormat}</strong> seria encaminhado diretamente à equipe da {CREATOR_PROFILE.agencyName}.
                  </p>
                  <div className="border-t border-b border-zinc-300 py-4 space-y-2 text-xs text-zinc-600">
                    <p>
                      <span className="uppercase tracking-[0.08em] text-zinc-500">E-mail informado:</span>{' '}
                      <span className="font-mono text-[#070708]">{email}</span>
                    </p>
                    <p>
                      <span className="uppercase tracking-[0.08em] text-zinc-500">Formato selecionado:</span>{' '}
                      <span className="font-medium text-[#070708]">{activeFormat}</span>
                    </p>
                  </div>
                </div>

                <div className="pt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 bg-[#070708] text-white text-xs font-semibold tracking-[0.08em] uppercase hover:bg-zinc-800 transition-colors"
                  >
                    Nova Simulação
                  </button>
                  <a
                    href={CREATOR_PROFILE.socials.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-zinc-300 text-[#070708] text-xs font-semibold tracking-[0.08em] uppercase hover:border-[#070708] transition-colors"
                  >
                    Abrir WhatsApp Demo
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="pb-4 border-b border-zinc-300 flex items-baseline justify-between gap-4">
                  <h3 className="font-serif text-2xl text-[#070708]">
                    Briefing de Parceria
                  </h3>
                  <span className="text-[11px] tracking-[0.08em] uppercase text-zinc-500">
                    Formulário Demonstrativo
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="brand-name"
                      className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-600 mb-2"
                    >
                      Marca ou Responsável
                    </label>
                    <input
                      id="brand-name"
                      type="text"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      placeholder="Ex: Atelier Contemporâneo"
                      className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm text-[#070708] placeholder:text-zinc-400 focus:outline-none focus:border-[#070708] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-600 mb-2"
                    >
                      E-mail Corporativo
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="contato@empresa.com.br"
                      className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm text-[#070708] placeholder:text-zinc-400 focus:outline-none focus:border-[#070708] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="partnership-format"
                    className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-600 mb-2"
                  >
                    Formato Comercial de Interesse
                  </label>
                  <select
                    id="partnership-format"
                    value={activeFormat}
                    onChange={(e) => onSelectFormat(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm text-[#070708] focus:outline-none focus:border-[#070708] transition-colors"
                  >
                    {PARTNERSHIP_FORMATS.map((item) => (
                      <option key={item.id} value={item.title}>
                        {item.index}. {item.title} — {item.subtitle}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="campaign-message"
                    className="block text-[11px] font-semibold tracking-[0.08em] uppercase text-zinc-600 mb-2"
                  >
                    Resumo da Campanha e Prazo
                  </label>
                  <textarea
                    id="campaign-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Compartilhe detalhes da coleção, entregas desejadas ou janela de veiculação."
                    className="w-full px-4 py-3 bg-white border border-zinc-300 text-sm text-[#070708] placeholder:text-zinc-400 focus:outline-none focus:border-[#070708] transition-colors resize-none"
                  />
                </div>

                {errorMsg && (
                  <p role="alert" className="text-xs font-medium text-red-700 bg-red-50 border border-red-200 px-3.5 py-2.5">
                    {errorMsg}
                  </p>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#070708] text-white text-xs font-semibold tracking-[0.1em] uppercase hover:bg-zinc-800 transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#070708] focus-visible:ring-offset-2"
                  >
                    <span>Solicitar Proposta Comercial</span>
                    <ArrowUpRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>

                  <span className="text-[11px] text-zinc-500">
                    Simulação local · Sem armazenamento em banco de dados
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
