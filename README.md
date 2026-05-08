<div align="center">
  <img src="src/assets/icons/beacon-icon.svg" alt="Beacon" width="60" />
  <h1>Beacon</h1>
  <p>Dashboard de criptomoedas em tempo real com dados da CoinGecko.</p>

  <a href="https://ricardosampaio.dev/beacon/">Ver projeto ao vivo</a>
</div>

<br />

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Recharts-FF6384" />
  <img src="https://img.shields.io/badge/CoinGecko_API-8DC63F" />
</div>

<br />

> ⚠️ A API gratuita da CoinGecko possui limite de requisições. Se os dados não carregarem, aguarde 1 minuto e recarregue.

## Preview

<img width="1900" height="892" alt="Captura de tela 2026-05-08 151919" src="https://github.com/user-attachments/assets/1d8efef8-5c81-4384-91f1-01c2b4a07a86" />


## Features

- **Dados em tempo real** — Preços, variação 24h e market cap via CoinGecko API
- **Gráfico interativo** — Sparkline de 7 dias com Recharts
- **Sistema de favoritos** — Salve e filtre suas moedas preferidas
- **Busca dinâmica** — Filtre por nome ou símbolo instantaneamente
- **Skeleton loading** — Feedback visual durante carregamento
- **Animações de entrada** — Cards com fade-in escalonado
- **Design responsivo** — Adaptado para desktop, tablet e mobile

## Estrutura

```
src/
├── assets/             # Ícones, imagens e glows
├── components/
│   ├── dashboard/      # OverallBalance, OverviewChart, CoinTable, MarketDetails
│   └── layout/         # Sidebar, Topbar
├── services/           # Integração com a API
├── types/              # Interfaces TypeScript
├── utils/              # Formatadores de moeda e porcentagem
├── App.tsx             # Layout principal e estado global
└── index.css           # Design tokens e reset
```

## Rodando localmente

```bash
git clone https://github.com/ricardosampaiodev/beacon-dashboard.git
cd beacon-dashboard
npm install
npm run dev
```
