## Maria-Maggiore — Landing Page

Landing page de um novo empreendimento da incorporadora Gazzola Inc., chamada Maria-Maggiore. O objetivo é apresentar o empreendimento, destacar diferenciais, exibir informações essenciais (localização, plantas, amenities) e captar leads por meio de formulários de interesse.

https://mariamaggiore.gazzolainc.com.br

### Tecnologias
- **Astro 4**: arquitetura de ilhas com suporte a SSR/SSG
- **React 18**: componentes interativos (galerias e lightbox)
- **Tailwind CSS 3**: tema customizado (cores de marca e tipografia Inter)
- **Swiper**: carrosséis (hero e seção de plantas)
- **react-photo-album** + **yet-another-react-lightbox**: galeria responsiva com fullscreen e zoom
- **TypeScript**: tipagem e melhor DX
- **Netlify (adapter)**: `@astrojs/netlify` com `output: "server"`
- **Imagens otimizadas**: assets `.webp` e `sharp`
- **SEO/SMO**: metatags Open Graph/Twitter no `Layout`
- **Dev/Build**: pnpm + scripts `astro dev/build/preview`, Prettier + plugin Astro

### Features
- **Hero** com carrossel e CTAs:
  - Baixar material completo (PDF)
  - Fale conosco (WhatsApp)
- **Seções**: Hero, Sobre, Diferenciais, Galeria, Plantas, Localização, CTA, Footer
- **Galeria de fotos** responsiva com lightbox (fullscreen/zoom)
- **Plantas**: carrossel por tipologia com galeria de plantas/fotos
- **Contato**: link direto para plantão no WhatsApp, telefone e links da Gazzola Inc.
- **Botão flutuante do WhatsApp** (desktop/mobile)
- **Progresso da obra**: barra de progresso estilizada
- **Navegação fixa** com rolagem suave
- **Responsivo mobile-first** e foco em performance


