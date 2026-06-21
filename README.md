# Conexión Pro — Landing Page Institucional

Stack: **Next.js (App Router) + TypeScript + Tailwind CSS**

## Estrutura

```
app/
  layout.tsx      → fontes (Montserrat + Lato), metadata/SEO
  page.tsx         → monta as seções na ordem da página
  globals.css       → camadas Tailwind
components/
  Navbar.tsx        → menu sticky + menu mobile
  Hero.tsx          → H1, subtítulo, CTAs e painel do Método C.O.N.E.X.
  ValueProposition.tsx → grid de 3 diferenciais
  Method.tsx        → seção institucional do Método C.O.N.E.X. (5 etapas conectadas)
  TrustIndicators.tsx → estatísticas, setores e depoimentos (placeholders)
  Contact.tsx       → formulário de contato (client component)
  Footer.tsx         → rodapé institucional
tailwind.config.ts   → paleta de marca e fontes
```

## Como rodar

```bash
npx create-next-app@latest conexion-pro --typescript --tailwind --app
# copie as pastas app/ e components/ deste pacote para dentro do projeto criado,
# e substitua o tailwind.config.ts gerado pelo deste pacote.

npm install
npm run dev
```

Abra http://localhost:3000.

## Antes de publicar

- **Formulário de contato**: `components/Contact.tsx` apenas simula o envio
  (`// TODO`). Conecte a um endpoint próprio, a um serviço de e-mail (Resend,
  SendGrid) ou a um CRM antes de colocar no ar.
- **Prova social**: estatísticas, depoimentos e setores em `TrustIndicators.tsx`
  são placeholders realistas — substitua pelos números e depoimentos reais da
  Conexión Pro antes da publicação.
- **Links institucionais**: `Footer.tsx` tem links de FAQ e política de
  privacidade apontando para `#` — crie essas páginas ou aponte para as URLs
  corretas.
- **Imagens/logos**: se for adicionar logos de parceiros reais na seção de
  prova social, use `next/image` para otimização automática.

## Paleta de marca

| Token       | Hex       | Uso                                   |
|-------------|-----------|----------------------------------------|
| `azul`      | `#003366` | Títulos, navbar, fundo do painel hero  |
| `azul-deep` | `#001f3f` | Fundo da seção Método, rodapé          |
| `amarelo`   | `#FFC72C` | Destaques, marcadores do método        |
| `vermelho`  | `#D4213D` | CTAs principais                        |
| `cinza`     | `#F4F4F4` | Fundo de seções de conteúdo            |
| `grafite`   | `#333333` | Texto de corpo                         |

Tipografia: **Montserrat** (títulos/destaques) + **Lato** (texto corrido),
carregadas via `next/font/google` em `app/layout.tsx`.

## Acessibilidade (WCAG)

- HTML5 semântico (`header`, `nav`, `main`, `section`, `footer`).
- Skip link para o conteúdo principal.
- `aria-label` em botões de ícone e no menu mobile (`aria-expanded`).
- Estados de foco visíveis em todos os elementos interativos.
- Contraste de texto verificado contra os fundos `azul`, `azul-deep` e `cinza`.
- `prefers-reduced-motion` respeitado em `globals.css`.
