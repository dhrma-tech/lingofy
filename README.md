# Lingofy Monorepo Setup

This repository contains the full-stack Lingofy project with Node.js/Express backend, React/TypeScript frontend, Shadcn UI, Tailwind, and Sakura-Tech theme.

## Getting Started

### 1. Install Dependencies
```bash
cd server
npm install
cd ../client
npm install
```

### 2. Start Backend
```bash
cd server
npm start
# Server at http://localhost:3001
```

### 3. Start Frontend
```bash
cd client
npm run dev
# Frontend at http://localhost:5173
```

## Folder Structure
- server/ (Node.js/Express backend)
- client/ (React/TypeScript frontend)

## Customization
- Edit `client/src/App.tsx` for layout, tabs, dashboard logic
- Modify `client/src/lib/data.ts` for flexible JSON model
- Tailwind + Sakura-Tech theme in `client/src/index.css`

## Roadmap
- Add Shadcn UI component initialization
- Complete logic for DashboardTab, ReviewsTab, StudioTab
