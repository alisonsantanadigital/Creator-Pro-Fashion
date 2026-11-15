import type { StaticImageData } from 'next/image';

import heroEditorialImg from '@/src/assets/images/hero_marina_editorial_clean_1794753558143.jpg';
import aboutEditorialImg from '@/src/assets/images/about_marina_lifestyle_1794753539278.jpg';
import campaignTailoringImg from '@/src/assets/images/campaign_tailoring_1794753541204.jpg';
import campaignMonochromeImg from '@/src/assets/images/campaign_monochrome_1794753539628.jpg';
import campaignAccessoriesImg from '@/src/assets/images/campaign_accessories_1794753540310.jpg';
import campaignResortImg from '@/src/assets/images/campaign_resort_1794753540517.jpg';

export interface PlatformMetric {
  id: 'instagram' | 'tiktok';
  platform: string;
  handle: string;
  followers: string;
  followersLabel: string;
  avgReach: string;
  engagementRate: string;
  monthlyViews: string;
  note: string;
}

export interface AudienceDemographic {
  label: string;
  value: string;
  percentage: number;
}

export interface CampaignItem {
  id: string;
  index: string;
  title: string;
  category: 'Alfaiataria' | 'Editorial' | 'Acessórios' | 'Resort';
  season: string;
  concept: string;
  direction: string;
  deliverables: string;
  palette: string;
  image: StaticImageData;
  imageAlt: string;
}

export interface PartnershipFormat {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  idealFor: string;
}

export const CREATOR_PROFILE = {
  brandSystem: 'CREATOR PRO',
  agencyName: 'PRUMO CREATORS',
  name: 'Marina Costa',
  niche: 'Moda, Estilo e Lifestyle Fashion',
  positioning:
    'Criadora de conteúdo especializada em moda feminina contemporânea, tendências, combinações de looks e lifestyle.',
  editorialLead:
    'Curadoria visual de estética internacional que traduz peças contemporâneas em narrativas de desejo, versatilidade e presença digital para marcas exigentes.',
  location: 'São Paulo · Disponível para campanhas nacionais e internacionais',
  demoDisclaimer:
    'Dados, métricas e campanhas apresentados nesta página são inteiramente fictícios e têm finalidade exclusivamente demonstrativa.',
  heroImage: heroEditorialImg,
  heroImageAlt:
    'Marina Costa em retrato fashion editorial usando blazer estruturado preto sobre camiseta branca minimalista e argolas em prata.',
  aboutImage: aboutEditorialImg,
  aboutImageAlt:
    'Marina Costa sentada em banco minimalista de couro preto em estúdio iluminado por luz natural, vestindo camisa branca de alfaiataria e calça grafite.',
  socials: {
    instagramHandle: '@marinacosta.demo',
    instagramUrl: 'https://instagram.com/marinacosta.demo',
    tiktokHandle: '@marinacosta.demo',
    tiktokUrl: 'https://tiktok.com/@marinacosta.demo',
    whatsappDisplay: '+55 (11) 99999-0000',
    whatsappUrl: 'https://wa.me/5511999990000?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20comercial%20para%20Marina%20Costa%20(Demonstra%C3%A7%C3%A3o%20CREATOR%20PRO).',
    emailDisplay: 'parcerias@marinacosta.demo',
    emailUrl: 'mailto:parcerias@marinacosta.demo?subject=Solicita%C3%A7%C3%A3o%20de%20Proposta%20Comercial%20%E2%80%94%20Marina%20Costa',
  },
} as const;

export const PLATFORM_METRICS: PlatformMetric[] = [
  {
    id: 'instagram',
    platform: 'Instagram',
    handle: '@marinacosta.demo',
    followers: '126.000',
    followersLabel: 'seguidores fictícios',
    avgReach: '48.500',
    engagementRate: '4,8%',
    monthlyViews: '1,42M',
    note: 'Conteúdo focado em looks diários, Reels editoriais e provadores comentados.',
  },
  {
    id: 'tiktok',
    platform: 'TikTok',
    handle: '@marinacosta.demo',
    followers: '58.000',
    followersLabel: 'seguidores fictícios',
    avgReach: '34.200',
    engagementRate: '6,2%',
    monthlyViews: '920 mil',
    note: 'Vídeos ágeis de styling, leituras de tendências e combinações versáteis.',
  },
];

export const AUDIENCE_BREAKDOWN = {
  gender: [
    { label: 'Público Feminino', value: '84%', percentage: 84 },
    { label: 'Público Masculino', value: '14%', percentage: 14 },
    { label: 'Outros / Não informado', value: '2%', percentage: 2 },
  ] satisfies AudienceDemographic[],
  ageGroups: [
    { label: '25 a 34 anos', value: '49%', percentage: 49 },
    { label: '18 a 24 anos', value: '27%', percentage: 27 },
    { label: '35 a 44 anos', value: '18%', percentage: 18 },
    { label: '45+ anos', value: '6%', percentage: 6 },
  ] satisfies AudienceDemographic[],
  topCities: [
    { label: 'São Paulo (SP)', value: '38%', percentage: 38 },
    { label: 'Rio de Janeiro (RJ)', value: '19%', percentage: 19 },
    { label: 'Belo Horizonte (MG)', value: '11%', percentage: 11 },
    { label: 'Curitiba & Porto Alegre', value: '14%', percentage: 14 },
  ] satisfies AudienceDemographic[],
  interests: [
    'Moda feminina contemporânea e alfaiataria',
    'Curadoria de cápsulas de guarda-roupa e combinações',
    'Design, acessórios minimalistas e joalheria',
    'Viagens urbanas, arquitetura e lifestyle cultural',
  ],
};

export const ABOUT_CONTENT = {
  biography: [
    'Marina Costa construiu sua presença digital unindo repertório de styling contemporâneo e olhar editorial refinado. Sua abordagem valoriza o caimento, a paleta neutra com intenção e a tradução prática das passarelas para o vestir urbano.',
    'Em cada publicação, equilibra naturalidade e rigor estético: da composição de luz à escolha de locações arquitetônicas, criando um ambiente visual coerente que eleva a percepção de valor das peças apresentadas.',
  ],
  specialty:
    'Moda feminina contemporânea, interpretação de tendências, multiplicação de looks e lifestyle urbano sofisticado.',
  contentStyle:
    'Estética limpa de revista internacional, fotografia de alto contraste, enquadramentos equilibrados e ritmo de vídeo cinematográfico sem excessos visuais.',
  differentials: [
    {
      index: '01.',
      title: 'Direção Estética Consistente',
      description:
        'Cada entrega segue linguagem visual alinhada ao posicionamento da marca parceira, respeitando identidade cromática e acabamento editorial.',
    },
    {
      index: '02.',
      title: 'Styling Aplicado ao Cotidiano',
      description:
        'Em vez de apenas exibir peças isoladas, demonstra múltiplas formas de uso para ampliar desejo e utilidade real para a audiência.',
    },
    {
      index: '03.',
      title: 'Produção Ágil e Profissional',
      description:
        'Fluxo estruturado pela metodologia PRUMO CREATORS, com roteiro, captação em alta resolução e prazos transparentes.',
    },
  ],
};

export const CAMPAIGN_PORTFOLIO: CampaignItem[] = [
  {
    id: 'alfaiataria-urbana',
    index: '01',
    title: 'Alfaiataria Urbana',
    category: 'Alfaiataria',
    season: 'Série Conceitual Fictícia · Outono',
    concept:
      'Exploração de proporções amplas, ombros estruturados e fluidez em movimento diante de arquitetura brutalista contemporânea.',
    direction:
      'Fotografia externa em luz difusa natural com foco na construção das lapelas, caimento das calças de cintura alta e contraste em preto absoluto.',
    deliverables: 'Editorial fotográfico em carrossel · 1 Reels de styling · Sequência de 4 Stories',
    palette: 'Preto intenso · Branco óptico · Concreto frio',
    image: campaignTailoringImg,
    imageAlt:
      'Série conceitual Alfaiataria Urbana com modelo caminhando em passarela de concreto usando sobretudo e conjunto de alfaiataria preta.',
  },
  {
    id: 'essencia-monocromatica',
    index: '02',
    title: 'Essência Monocromática',
    category: 'Editorial',
    season: 'Série Conceitual Fictícia · Inverno',
    concept:
      'Estudo de texturas entre tricô grafite, tricoline branca e lã fria em ambiente de galeria minimalista.',
    direction:
      'Composição assimétrica com contraste acentuado e sombras geométricas, destacando sobreposições atemporais de guarda-roupa cápsula.',
    deliverables: 'Ensaio lookbook · Vídeo vertical de combinações · Guia de estilo nos Stories',
    palette: 'Grafite · Branco · Preto fosco',
    image: campaignMonochromeImg,
    imageAlt:
      'Série conceitual Essência Monocromática em galeria minimalista com camadas de tricô cinza, camisa branca e blazer preto.',
  },
  {
    id: 'curadoria-acessorios',
    index: '03',
    title: 'Curadoria de Acessórios',
    category: 'Acessórios',
    season: 'Série Conceitual Fictícia · Cápsula',
    concept:
      'Objetos de desejo em diálogo com formas esculturais: prata polida, couro geométrico e acetato preto sobre pedra bruta.',
    direction:
      'Direção de arte still-life com iluminação lateral precisa para evidenciar acabamentos metálicos e textura do couro.',
    deliverables: 'Fotografia still de produto · Close-ups de uso em Reels · Links direcionados',
    palette: 'Prata escovada · Preto acetinado · Cinza mineral',
    image: campaignAccessoriesImg,
    imageAlt:
      'Série conceitual Curadoria de Acessórios com bolsa preta geométrica, bracelete e anel em prata escultural e óculos escuros sobre bloco de concreto.',
  },
  {
    id: 'movimento-resort',
    index: '04',
    title: 'Movimento & Resort',
    category: 'Resort',
    season: 'Série Conceitual Fictícia · Alto Verão',
    concept:
      'Leveza arquitetônica em tecidos naturais, combinando linho cru, preto fluido e silhuetas relaxadas em terraço de pedra.',
    direction:
      'Luz suave da manhã com amplo respiro visual, priorizando atmosfera serena e elegância sem esforço para coleções de temporada.',
    deliverables: 'Vídeo lifestyle em locação · Série de looks de viagem · Cobertura em Stories',
    palette: 'Branco natural · Preto suave · Névoa prateada',
    image: campaignResortImg,
    imageAlt:
      'Série conceitual Movimento & Resort com look leve em linho claro e calça ampla preta em terraço minimalista.',
  },
];

export const PARTNERSHIP_FORMATS: PartnershipFormat[] = [
  {
    id: 'stories',
    index: '01',
    title: 'Stories',
    subtitle: 'Narrativa cotidiana e conversão direta',
    description:
      'Sequências estruturadas de 4 a 6 telas com apresentação de peças, detalhes de tecido, provador comentado e link de direcionamento.',
    deliverables: ['Roteiro aprovado previamente', 'Provador e detalhes em close', 'Sticker de link e cupom'],
    idealFor: 'Lançamentos rápidos e campanhas promocionais',
  },
  {
    id: 'reels',
    index: '02',
    title: 'Reels',
    subtitle: 'Editorial em movimento para Instagram',
    description:
      'Produção vertical com ritmo cinematográfico, transições limpas de styling e propostas de múltiplos looks com uma mesma peça-chave.',
    deliverables: ['Captação em 4K vertical', 'Edição com trilha licenciada', 'Capa alinhada ao feed editorial'],
    idealFor: 'Desejo de marca, coleções cápsula e alcance orgânico',
  },
  {
    id: 'tiktok',
    index: '03',
    title: 'TikTok',
    subtitle: 'Leitura de tendências e descoberta',
    description:
      'Vídeos nativos com linguagem fluida e foco em combinações reais, guia de estilo por ocasião e storytelling próximo da audiência.',
    deliverables: ['Conteúdo nativo de alta retenção', 'Adaptação de tendência ao produto', 'Interação nos comentários'],
    idealFor: 'Rejuvenescimento de marca e novos públicos',
  },
  {
    id: 'producao-conteudo',
    index: '04',
    title: 'Produção de Conteúdo',
    subtitle: 'Acervo fotográfico e vídeo para a marca',
    description:
      'Captação dedicada de fotos e vídeos verticais em formato UGC sofisticado ou editorial para utilização em e-commerce, mídia paga e redes próprias.',
    deliverables: ['Seleção de fotos tratadas', 'Vídeos brutos e editados', 'Licenciamento de uso acordado'],
    idealFor: 'Campanhas de performance, lookbooks digitais e e-commerce',
  },
  {
    id: 'eventos',
    index: '05',
    title: 'Eventos & Presença',
    subtitle: 'Cobertura presencial e ativações',
    description:
      'Participação em lançamentos de coleção, jantares, aberturas de loja e desfiles, com produção de conteúdo em tempo real e styling assinado.',
    deliverables: ['Presença VIP alinhada ao dress code', 'Cobertura em Stories ao vivo', 'Recap em Reels pós-evento'],
    idealFor: 'Inaugurações, showrooms e experiências de relacionamento',
  },
  {
    id: 'campanhas-personalizadas',
    index: '06',
    title: 'Campanhas Personalizadas',
    subtitle: 'Direção integrada PRUMO CREATORS',
    description:
      'Combinação estratégica de formatos ao longo de 30 a 90 dias, integrando ensaio editorial, séries de vídeo e presença em datas-chave do calendário.',
    deliverables: ['Planejamento criativo sob medida', 'Combo multiplataforma', 'Acompanhamento dedicado da agência'],
    idealFor: 'Embaixadorias de temporada e posicionamento institucional',
  },
];
