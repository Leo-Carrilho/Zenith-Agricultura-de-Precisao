# Zenith Agro Site

Site institucional premium para o projeto Zenith, criado em React, Vite, GSAP e CSS responsivo.

## Execução

```bash
pnpm install
pnpm dev
```

Build de produção:

```bash
pnpm build
```

## Ambiente

Copie `.env.example` para `.env` e ajuste se necessário:

```bash
VITE_ZENITH_APP_URL=https://zenith-desktop2.vercel.app/
```

Essa variável centraliza o endereço da plataforma Zenith usado nos CTAs.

## Publicação na Vercel

O projeto já inclui `vercel.json` com fallback para SPA. Na Vercel, configure o build como:

- Build command: `pnpm build`
- Output directory: `dist`
- Install command: `pnpm install`

## Imagens

A logo oficial está em `public/assets/zenith-logo.png`.

As fotografias agrícolas atuais usam URLs externas do Unsplash para manter o projeto leve. Para substituir por imagens próprias, atualize as constantes `heroImage`, `fieldImage` e `droneImage` em `src/App.jsx`, ou mova os arquivos para `public/assets` e referencie os caminhos locais.

## Conteúdos que ainda precisam de confirmação

- Fotos oficiais dos integrantes, caso desejem trocar os avatares por imagens reais.
- Contato comercial e domínio final.
- Métricas validadas em campo além dos resultados preliminares do relatório.
- Capturas reais da plataforma para substituir o mockup visual.
- Política de privacidade e termos de uso oficiais.

## Observações

O site evita números de clientes, depoimentos, preços e promessas comerciais não confirmadas. A IA é descrita como ferramenta de apoio, com resultados preliminares sujeitos a validação em condições reais.
