# GST & Tax Compliance Assistant

A full-stack web application to help Indian businesses manage GST compliance, invoices, and tax filings.

## Tech Stack

- **Frontend**: React (TypeScript) + Tailwind CSS + Vite
- **Backend**: Node.js + Express + TypeScript
- **Database**: MongoDB (Mongoose ODM)
- **Authentication**: JWT (JSON Web Tokens)

## Monorepo Structure

```
.
├── backend             # Express API (TypeScript)
│   ├── package.json
│   ├── tsconfig.json
│   └── src
│       ├── config
│       ├── middleware
│       ├── models
│       ├── routes
│       └── server.ts
└── frontend            # React SPA (TypeScript + Vite)
    ├── package.json
    ├── vite.config.ts
    ├── tailwind.config.ts
    ├── postcss.config.cjs
    ├── index.html
    └── src
        ├── main.tsx
        ├── App.tsx
        └── pages
            ├── LoginPage.tsx
            └── RegisterPage.tsx
```

## Getting Started

### Prerequisites

- Node.js >= 18
- MongoDB running locally or Atlas connection string

### Backend

```bash
cd backend
npm install
cp ../.env.example .env # Update variables as needed
npm run dev             # Starts API on http://localhost:5000
```

### Frontend

```bash
cd frontend
npm install
npm run dev             # Starts SPA on http://localhost:3000
```

The Vite dev server proxies API requests (`/api/**`) to `localhost:5000`.

---

This is **Phase 1** of the build: project scaffolding and user authentication. Next up:

1. **Invoice Management Module** – CRUD & PDF generation
2. **GST Calculation Engine** – CGST/SGST/IGST logic with HSN lookup
3. **Compliance Dashboard** – returns tracking & analytics

Happy coding! 🎉