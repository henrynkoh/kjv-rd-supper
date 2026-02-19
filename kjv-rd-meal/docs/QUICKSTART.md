# Quick Start – 5분 안에 시작하기

## 1. Clone & Install

```bash
git clone <repo>
cd kjv-rd-meal
npm install
```

## 2. Run

```bash
npm run dev
```

## 3. Open

브라우저에서 **http://localhost:3000** 접속

---

## What You Get

- **18 categories** of Lord's Supper (성찬식) related verses
- **KJV + 흠정역** side-by-side table view
- Organized by: Lord's Supper, Passover, Body/Blood, Sin & Curse, Resurrection, etc.

## Commands

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Development server (port 3000) |
| `npm run build`| Production build               |
| `npm run start`| Run production build           |
| `npm run lint` | Run ESLint                     |

## Key Files

- `src/app/page.tsx` – Main UI
- `src/data/verse-refs.ts` – Verse references by category
- `src/lib/bible-api.ts` – KJV fetch logic

---

**Next**: [README](../README.md) | [Manual](./MANUAL.md) | [Tutorial](./TUTORIAL.md)
