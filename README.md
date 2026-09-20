# Zenith Agro — Institutional Website

[Português](#português) · [English](#english) · [Español](#español)

## Português

### Sobre o projeto

Este repositório contém o site institucional responsivo da **Zenith Agro**, uma plataforma de agricultura digital voltada ao acompanhamento de lavouras. O site apresenta a proposta do projeto, o fluxo de captura de imagens com drone, os recursos de gestão agrícola e as tecnologias que apoiam a solução.

A interface foi pensada para funcionar bem em desktop e dispositivos móveis, com navegação acessível, animações sutis e suporte a instalação como PWA.

### O que o site apresenta

- Fluxo de operação: planejamento, voo, captura, processamento e análise.
- Diagnóstico de imagens de soja com apoio de inteligência artificial em validação.
- Monitoramento visual, mapas e talhões, clima, estoque, diário de campo, equipe e atividades.
- Visualizações multiespectrais, reconstrução 3D e mapeamento de talhões.
- Prévia da plataforma, gestão de contas e instalação do aplicativo.
- Perguntas frequentes, informações sobre o projeto e canais de contato.

### Tecnologias

- React 18 e Vite 7
- CSS responsivo organizado por componente e seção
- GSAP para animações de interface
- Lucide React para ícones
- PWA com manifest e service worker

### Estrutura principal

```text
src/
├── components/        # Cabeçalho, hero, rodapé e seções da página
├── data/              # Conteúdo e dados exibidos no site
├── hooks/             # Hooks de animação e detecção de dispositivo
├── lib/               # URLs e regras de compatibilidade
└── styles/            # Estilos globais, de componentes e de seções
public/assets/         # Imagens, fontes, ícones e recursos estáticos
```

### Como executar

Requer Node.js 18 ou superior e pnpm.

```bash
pnpm install
pnpm dev
```

Para criar a versão de produção:

```bash
pnpm build
```

Para visualizar o build localmente:

```bash
pnpm preview
```

### Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste os destinos dos botões de acesso quando necessário.

```env
VITE_ZENITH_MOBILE_APP_URL=https://instalacao-mobile.vercel.app/
VITE_ZENITH_DESKTOP_APP_URL=https://zenith-agtech.vercel.app/
```

### Publicação

O projeto está preparado para Vercel como uma SPA:

- **Install command:** `pnpm install`
- **Build command:** `pnpm build`
- **Output directory:** `dist`

### Nota importante

As funcionalidades de IA são apresentadas como suporte à análise e estão sujeitas a validação em condições reais. Elas não substituem a avaliação de um profissional responsável.

---

## English

### About

This repository contains the responsive institutional website for **Zenith Agro**, a digital agriculture platform designed to support crop monitoring. The website introduces the project, its drone-image capture workflow, farm management capabilities, and the technologies behind the solution.

The interface is designed for desktop and mobile use, with accessible navigation, subtle animations, and PWA installation support.

### Website highlights

- Operational workflow: planning, flight, capture, processing, and analysis.
- Soybean image assessment assisted by an AI model under validation.
- Visual monitoring, field maps, weather, inventory, field journal, teams, and tasks.
- Multispectral views, 3D reconstruction, and field mapping.
- Platform preview, account management, and application installation guidance.
- FAQ, project information, and contact channels.

### Technology stack

- React 18 and Vite 7
- Responsive CSS organized by component and section
- GSAP for interface animations
- Lucide React icons
- PWA manifest and service worker

### Main structure

```text
src/
├── components/        # Header, hero, footer, and page sections
├── data/              # Website copy and displayed data
├── hooks/             # Animation and device-detection hooks
├── lib/               # URLs and compatibility rules
└── styles/            # Global, component, and section styles
public/assets/         # Images, fonts, icons, and static assets
```

### Run locally

Node.js 18+ and pnpm are required.

```bash
pnpm install
pnpm dev
```

Create a production build:

```bash
pnpm build
```

Preview the local production build:

```bash
pnpm preview
```

### Environment variables

Copy `.env.example` to `.env` and update the access-button destinations if needed.

```env
VITE_ZENITH_MOBILE_APP_URL=https://instalacao-mobile.vercel.app/
VITE_ZENITH_DESKTOP_APP_URL=https://zenith-agtech.vercel.app/
```

### Deployment

The project is ready for Vercel as a single-page application:

- **Install command:** `pnpm install`
- **Build command:** `pnpm build`
- **Output directory:** `dist`

### Important note

The AI features are presented as decision-support tools and remain subject to validation in real-world conditions. They do not replace an assessment by a qualified agricultural professional.

---

## Español

### Acerca del proyecto

Este repositorio contiene el sitio institucional responsivo de **Zenith Agro**, una plataforma de agricultura digital orientada al seguimiento de cultivos. El sitio presenta el proyecto, el flujo de captura de imágenes con drones, las funciones de gestión agrícola y las tecnologías que sustentan la solución.

La interfaz está diseñada para computadoras y dispositivos móviles, con navegación accesible, animaciones sutiles y soporte para instalación como PWA.

### Contenido del sitio

- Flujo operativo: planificación, vuelo, captura, procesamiento y análisis.
- Evaluación de imágenes de soja con apoyo de un modelo de inteligencia artificial en validación.
- Monitoreo visual, mapas y lotes, clima, inventario, diario de campo, equipos y tareas.
- Vistas multiespectrales, reconstrucción 3D y mapeo de lotes.
- Vista previa de la plataforma, gestión de cuentas e instalación de la aplicación.
- Preguntas frecuentes, información del proyecto y canales de contacto.

### Tecnologías

- React 18 y Vite 7
- CSS responsivo organizado por componente y sección
- GSAP para animaciones de interfaz
- Iconos de Lucide React
- PWA con manifest y service worker

### Estructura principal

```text
src/
├── components/        # Encabezado, hero, pie de página y secciones
├── data/              # Textos y datos mostrados en el sitio
├── hooks/             # Hooks de animación y detección de dispositivos
├── lib/               # URLs y reglas de compatibilidad
└── styles/            # Estilos globales, de componentes y secciones
public/assets/         # Imágenes, fuentes, iconos y recursos estáticos
```

### Ejecución local

Se requiere Node.js 18 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Para generar la versión de producción:

```bash
pnpm build
```

Para previsualizar la compilación local:

```bash
pnpm preview
```

### Variables de entorno

Copie `.env.example` a `.env` y ajuste los destinos de los botones de acceso si es necesario.

```env
VITE_ZENITH_MOBILE_APP_URL=https://instalacao-mobile.vercel.app/
VITE_ZENITH_DESKTOP_APP_URL=https://zenith-agtech.vercel.app/
```

### Publicación

El proyecto está preparado para Vercel como una aplicación de una sola página:

- **Comando de instalación:** `pnpm install`
- **Comando de build:** `pnpm build`
- **Directorio de salida:** `dist`

### Nota importante

Las funciones de IA se presentan como herramientas de apoyo al análisis y están sujetas a validación en condiciones reales. No reemplazan la evaluación de un profesional agrícola calificado.
