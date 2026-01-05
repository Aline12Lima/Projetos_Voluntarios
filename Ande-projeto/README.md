src/
├── assets/  #Tudo que não é código React:
│   ├── images/
│   ├── icons/
│   └── styles/
│       └── globals.css
│
├── components/ #reutilizaveis
│   ├── layout/ #componentes estruturais
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   │
│   ├── ui/ # componentes pequenos e genéricos
│   │   ├── Button.tsx
│   │   └── Section.tsx
│   │
│   └── index.ts
│
├── pages/ # cada rota = uma página mesmo sem react-router
│   ├── Home/
│   │   └── Home.tsx
│   ├── Sobre/
│   │   └── Sobre.tsx
│   ├── Servicos/
│   │   └── Servicos.tsx
│   └── Contato/
│       └── Contato.tsx
│
├── services/ ## relata erros do user
│   └── sentry.ts
│
├── config/ ## variaveis do ambiente e config globais
│   └── env.ts
│
├── tests/ ## para separar testes
│   └── setupTests.ts
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
