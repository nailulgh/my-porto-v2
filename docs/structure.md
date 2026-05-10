# structure.md — Arsitektur & Struktur Project

> Panduan struktur folder dan komponen portfolio.
> Forked dari: CodeVinayak/Portfolio-v2

---

## Tech Stack Detail

| Teknologi | Versi | Catatan |
|-----------|-------|---------|
| React | 17.x | Create React App |
| TypeScript | 4.x+ | Strict typing |
| Styled Components | 5.x+ | Semua styling di sini |
| React Router | - | Cek package.json |
| npm | - | Package manager |

---

## Struktur Folder

```
Portfolio-v2/
│
├── public/                  ← Static assets (favicon, index.html)
│   └── index.html
│
├── src/
│   ├── components/          ← Komponen reusable UI
│   │   ├── Header/
│   │   ├── Footer/
│   │   ├── Hero/            ← Section pertama (nama & intro)
│   │   ├── About/           ← Section tentang diri (termasuk skills)
│   │   ├── Project/         ← Section portfolio projects
│   │   ├── Contact/         ← Section kontak
│   │   ├── Form/            ← Sub-komponen form
│   │   └── Main/            ← Wrapper untuk section utama
│   │
│   ├── styles/              ← Global styles
│   │   └── global.ts        ← Global CSS via createGlobalStyle
│   │
│   ├── assets/              ← Gambar, icons, fonts
│   │
│   ├── @types/              ← TypeScript interfaces/types
│   │
│   ├── App.tsx              ← Root component
│   └── index.tsx            ← Entry point
│
├── docs/                    ← Dokumentasi project (folder ini)
│   ├── theme.md
│   ├── structure.md
│   ├── progress.md
│   └── myresume.md
│
├── GEMINI.md                ← Panduan AI agent
├── package.json
├── tsconfig.json
└── package-lock.json
```

> ⚠️ **Catatan**: Struktur di bawah sudah divalidasi dan sesuai dengan project aktual.

---

## Komponen Utama & Fungsinya

### Header
- Navigasi utama
- Logo / nama
- Kemungkinan: sticky, transparent on top, solid on scroll
- **Modifikasi cyberpunk**: border bottom neon, font Orbitron

### Hero Section
- Intro pertama yang dilihat visitor
- Biasanya: nama, title/role, tagline, CTA button
- **Modifikasi cyberpunk**: glitch effect pada nama, scanline background, typing animation

### About Section
- Bio singkat
- Foto profil (opsional)
- **Modifikasi cyberpunk**: card dengan border neon, layout angular

### Skills Section
- Daftar teknologi / skill
- Mungkin ada progress bar atau icon grid
- **Modifikasi cyberpunk**: glow pada icon, badge style dengan border cyan

### Project Section
- Kartu project dengan thumbnail, deskripsi, link
- **Modifikasi cyberpunk**: card hover dengan glow effect, label "// PROJECT_ID"

### Contact Section
- Form kontak atau link sosial media
- **Modifikasi cyberpunk**: input dengan border neon, button angular

### Footer
- Copyright, link sosial
- **Modifikasi cyberpunk**: minimal, scanline subtle

---

## Styled Components Pattern

Project ini menggunakan Styled Components. Pattern umum:

```typescript
// Contoh komponen styled
import styled from 'styled-components';

export const CardWrapper = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  border-radius: 8px;
  padding: 24px;
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.accentCyan};
    box-shadow: 0 0 20px rgba(0, 245, 255, 0.15);
  }
`;
```

### Theme Object (Target setelah modifikasi)

File: `src/styles/theme.ts`

```typescript
export const cyberpunkTheme = {
  colors: {
    bgPrimary: '#0a0014',
    bgSecondary: '#140028',
    bgElevated: '#1e003c',
    accentCyan: '#00f5ff',
    accentMagenta: '#ff00aa',
    accentPurple: '#b92b27',
    textPrimary: '#f0e6fa',
    textSecondary: '#a894c2',
    borderDefault: 'rgba(255, 0, 170, 0.20)',
    borderActive: 'rgba(0, 245, 255, 0.6)',
  },
  fonts: {
    display: "'Orbitron', sans-serif",
    body: "'Share Tech', sans-serif",
    mono: "'Share Tech Mono', monospace",
  },
  // ... extend sesuai kebutuhan
};
```

---

## Data Files

Project asli biasanya punya file data statis, misalnya:

```
src/data/
└── github.ts      ← API GitHub Repo data
```

> Isi data files ini dengan informasi kamu sendiri saat onboarding.

---

## Catatan Penting

- **Jangan ubah** `tsconfig.json` tanpa alasan kuat
- **Selalu** gunakan `npm install` jika ada perubahan package
- **Cek** console browser setelah setiap perubahan besar
- **Backup** file sebelum modifikasi besar (atau pakai git branch)

---

*Update dokumen ini jika menemukan struktur berbeda saat eksplorasi kode.*
