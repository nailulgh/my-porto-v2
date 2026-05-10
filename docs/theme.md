# theme.md — Cyberpunk Futuristic Design System

> Panduan visual utama project portfolio. Semua perubahan styling harus mengacu ke dokumen ini.
> Tech: React + Styled Components
> Mode: **Dark Mode (default)** + **Light Mode "Holographic Day"**

---

## 🌗 Konsep Dua Mode

| | Dark Mode | Light Mode |
|---|---|---|
| **Nama** | `Neon Night` | `Holographic Day` |
| **Vibe** | Kota cyberpunk malam hari, neon menyala di kegelapan | Cockpit futuristic siang hari, hologram di bawah sinar terang |
| **Background** | Hitam pekat | Putih kebiruan / abu holografik |
| **Accent** | Cyan & magenta terang | Cyan & magenta lebih gelap agar tetap kontras |
| **Glow** | Kuat & dramatis | Subtle, lebih tipis |
| **Tetap sama** | Typography, spacing, border-radius, animasi, layout |

> ⚠️ Light mode bukan "mode biasa". Ia tetap cyberpunk — hanya paletnya dibalik.
> Jangan pernah pakai warna pastel atau rounded corners besar di light mode.

---

## 🎨 Color Palette

### Dark Mode — \`Neon Night\` (Default)
**Inspirasi**: Pemandangan kota cyberpunk malam hari dengan dominasi warna ungu, pink, dan biru neon terang.

#### Background & Surface
\`\`\`
bg-primary:     #0a0014             /* Background utama — Deep Purple/Violet gelap */
bg-secondary:   #140028             /* Surface / card background */
bg-elevated:    #1e003c             /* Elevated element (modal, tooltip) */
bg-overlay:     rgba(10, 0, 20, 0.85) /* Overlay / backdrop */
\`\`\`

#### Accent Colors
\`\`\`
accent-cyan:    #00f5ff             /* Primary neon — terang & tajam */
accent-magenta: #ff00aa             /* Secondary neon — hot pink/magenta menyala */
accent-purple:  #b92b27             /* Tertiary neon — vibrant purple/pink mix */
accent-yellow:  #f5e642             /* Warning / highlight — neon yellow */
accent-green:   #00ff88             /* Success / online — neon green */
\`\`\`

#### Text
\`\`\`
text-primary:   #f0e6fa             /* Teks utama (putih keunguan agar harmonis) */
text-secondary: #a894c2             /* Teks muted / subheading */
text-disabled:  #5c4d70             /* Teks tidak aktif */
text-accent:    #00f5ff             /* Teks dengan aksen cyan */
\`\`\`

#### Border & Divider
\`\`\`
border-default: rgba(255, 0, 170, 0.20)   /* Border halus dengan hint magenta/purple */
border-active:  rgba(0, 245, 255, 0.60)   /* Border aktif / hover (cyan dominan) */
border-glow:    rgba(255, 0, 170, 0.90)   /* Border dengan glow efek */
\`\`\`

---

### Light Mode — \`Holographic Day\`
**Fokus Utama**: Menjaga estetika techy/cyberpunk TANPA mengorbankan keterbacaan (readability). Warna tidak boleh bertabrakan dengan teks.

#### Background & Surface
\`\`\`
bg-primary:     #f4f5f8             /* Background utama — putih terang keabu-abuan/biru */
bg-secondary:   #e8ebf2             /* Surface / card — abu holografik terang */
bg-elevated:    #ffffff             /* Elevated element — putih murni untuk kontras */
bg-overlay:     rgba(244, 245, 248, 0.90) /* Overlay */
\`\`\`

#### Accent Colors (Digelapkan agar tidak "menyilaukan" / bertabrakan)
\`\`\`
accent-cyan:    #0059b3             /* Biru tech yang jelas terbaca */
accent-magenta: #c2006b             /* Magenta yang lebih dalam/gelap */
accent-purple:  #6a0dad             /* Ungu gelap yang solid */
accent-yellow:  #a68a00             /* Kuning keemasan gelap */
accent-green:   #006633             /* Hijau gelap */
\`\`\`

#### Text
\`\`\`
text-primary:   #1a1525             /* Teks utama — sangat gelap (hampir hitam/ungu sangat tua) */
text-secondary: #4a4059             /* Teks muted yang masih mudah dibaca */
text-disabled:  #9e94ab             /* Teks tidak aktif */
text-accent:    #c2006b             /* Teks aksen yang menggunakan warna gelap agar terbaca jelas */
\`\`\`

#### Border & Divider
\`\`\`
border-default: rgba(106, 13, 173, 0.15) /* Border halus dengan nuansa ungu */
border-active:  rgba(0, 89, 179, 0.50)   /* Border aktif / hover */
border-glow:    rgba(194, 0, 107, 0.60)  /* Border glow yang tidak terlalu silau */
\`\`\`

---

## ✨ Visual Effects

### Neon Glow — Dark Mode (Kuat)
```css
/* Teks */
text-shadow: 0 0 8px rgba(0, 245, 255, 0.6);

/* Box sedang */
box-shadow: 0 0 10px rgba(0, 245, 255, 0.4),
            0 0 20px rgba(0, 245, 255, 0.2);

/* Box aktif/hover */
box-shadow: 0 0 15px rgba(0, 245, 255, 0.7),
            0 0 30px rgba(0, 245, 255, 0.4),
            inset 0 0 10px rgba(0, 245, 255, 0.1);

/* Magenta */
box-shadow: 0 0 10px rgba(255, 0, 170, 0.4),
            0 0 20px rgba(255, 0, 170, 0.2);
```

### Neon Glow — Light Mode (Subtle)
```css
/* Teks */
text-shadow: 0 0 6px rgba(0, 122, 204, 0.4);

/* Box sedang */
box-shadow: 0 0 8px rgba(0, 122, 204, 0.25),
            0 0 16px rgba(0, 122, 204, 0.12);

/* Box aktif/hover */
box-shadow: 0 0 12px rgba(0, 122, 204, 0.45),
            0 0 24px rgba(0, 122, 204, 0.2),
            inset 0 0 8px rgba(0, 122, 204, 0.08);
```

### Scanline Effect
```css
/* Dark mode */
background-image: repeating-linear-gradient(
  0deg,
  transparent, transparent 2px,
  rgba(0, 245, 255, 0.02) 2px,
  rgba(0, 245, 255, 0.02) 4px
);

/* Light mode */
background-image: repeating-linear-gradient(
  0deg,
  transparent, transparent 2px,
  rgba(0, 122, 204, 0.015) 2px,
  rgba(0, 122, 204, 0.015) 4px
);
```

### Grid Pattern
```css
/* Dark mode */
background-image:
  linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px);
background-size: 30px 30px;

/* Light mode */
background-image:
  linear-gradient(rgba(0, 122, 204, 0.07) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 122, 204, 0.07) 1px, transparent 1px);
background-size: 30px 30px;
```

### Glitch Effect (Sama di Dua Mode)
```css
@keyframes glitch {
  0%, 100% { transform: translate(0); }
  20%       { transform: translate(-2px, 1px); }
  40%       { transform: translate(2px, -1px); }
  60%       { transform: translate(-1px, 2px); }
  80%       { transform: translate(1px, -2px); }
}
/* Gunakan hemat — hanya pada elemen hero/focal */
animation: glitch 0.3s ease-in-out;
```

---

## ✍️ Typography (Sama di Dua Mode)

### Font Families
```css
/* Display / Heading */
font-family: 'Orbitron', 'Rajdhani', sans-serif;

/* Body */
font-family: 'Share Tech', 'Exo 2', sans-serif;

/* Monospace / label */
font-family: 'Share Tech Mono', 'JetBrains Mono', monospace;
```

> Google Fonts:
> `@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech&family=Share+Tech+Mono&display=swap');`

### Font Scale & Weight
```
text-xs:   0.75rem  |  text-sm: 0.875rem  |  text-base: 1rem
text-lg:   1.125rem |  text-xl: 1.25rem   |  text-2xl:  1.5rem
text-3xl:  2rem     |  text-4xl: 2.5rem   |  text-5xl:  3.5rem

Weight: 400 (body) | 600 (subheading) | 700 (heading) | 900 (display)
```

---

## 📐 Spacing & Layout (Sama di Dua Mode)

```
Spacing scale : 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128 px

Border Radius :
  sm: 2px  |  md: 4px  |  lg: 8px (MAX!)  |  none: 0px

Container     : max-width 1200px, padding 0 24px
```

> ⚠️ Jangan pakai border-radius lebih dari 8px di mode apapun. Cyberpunk = angular.

---

## 💻 Implementasi Styled Components

### 1. `src/styles/theme.ts`

```typescript
export const darkTheme = {
  mode: 'dark' as const,
  colors: {
    bgPrimary:     '#0a0014',
    bgSecondary:   '#140028',
    bgElevated:    '#1e003c',
    bgOverlay:     'rgba(10,0,20,0.85)',
    accentCyan:    '#00f5ff',
    accentMagenta: '#ff00aa',
    accentYellow:  '#f5e642',
    accentGreen:   '#00ff88',
    accentPurple:  '#9d00ff',
    textPrimary:   '#e8e8f0',
    textSecondary: '#8888aa',
    textDisabled:  '#44445a',
    textAccent:    '#00f5ff',
    borderDefault: 'rgba(0, 245, 255, 0.15)',
    borderActive:  'rgba(0, 245, 255, 0.60)',
    borderGlow:    'rgba(0, 245, 255, 0.90)',
  },
  glow: {
    textSm:  '0 0 8px rgba(0, 245, 255, 0.6)',
    boxMd:   '0 0 10px rgba(0, 245, 255, 0.4), 0 0 20px rgba(0, 245, 255, 0.2)',
    boxLg:   '0 0 15px rgba(0, 245, 255, 0.7), 0 0 30px rgba(0, 245, 255, 0.4)',
    magenta: '0 0 10px rgba(255, 0, 170, 0.4), 0 0 20px rgba(255, 0, 170, 0.2)',
  },
  fonts: {
    display: "'Orbitron', sans-serif",
    body:    "'Share Tech', sans-serif",
    mono:    "'Share Tech Mono', monospace",
  },
};

export const lightTheme = {
  mode: 'light' as const,
  colors: {
    bgPrimary:     '#eef1f8',
    bgSecondary:   '#e0e5f2',
    bgElevated:    '#d4daf0',
    bgOverlay:     'rgba(238,241,248,0.90)',
    accentCyan:    '#007acc',
    accentMagenta: '#cc0077',
    accentYellow:  '#b8a800',
    accentGreen:   '#007a44',
    accentPurple:  '#6600cc',
    textPrimary:   '#080812',
    textSecondary: '#44446a',
    textDisabled:  '#9999bb',
    textAccent:    '#007acc',
    borderDefault: 'rgba(0, 122, 204, 0.20)',
    borderActive:  'rgba(0, 122, 204, 0.60)',
    borderGlow:    'rgba(0, 122, 204, 0.90)',
  },
  glow: {
    textSm:  '0 0 6px rgba(0, 122, 204, 0.4)',
    boxMd:   '0 0 8px rgba(0, 122, 204, 0.25), 0 0 16px rgba(0, 122, 204, 0.12)',
    boxLg:   '0 0 12px rgba(0, 122, 204, 0.45), 0 0 24px rgba(0, 122, 204, 0.2)',
    magenta: '0 0 8px rgba(204, 0, 119, 0.3), 0 0 16px rgba(204, 0, 119, 0.15)',
  },
  fonts: {
    display: "'Orbitron', sans-serif",
    body:    "'Share Tech', sans-serif",
    mono:    "'Share Tech Mono', monospace",
  },
};

export type AppTheme = typeof darkTheme;
```

---

### 2. `src/styles/GlobalStyle.ts`

```typescript
import { createGlobalStyle } from 'styled-components';
import { AppTheme } from './theme';

export const GlobalStyle = createGlobalStyle<{ theme: AppTheme }>`
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Share+Tech&family=Share+Tech+Mono&display=swap');

  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: ${({ theme }) => theme.colors.bgPrimary};
    color: ${({ theme }) => theme.colors.textPrimary};
    font-family: ${({ theme }) => theme.fonts.body};
    transition: background-color 0.3s ease, color 0.3s ease;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.display};
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  a {
    color: ${({ theme }) => theme.colors.accentCyan};
    text-decoration: none;
    transition: all 0.2s ease;
    &:hover { text-shadow: ${({ theme }) => theme.glow.textSm}; }
  }

  ::selection {
    background: ${({ theme }) => theme.colors.accentCyan};
    color: ${({ theme }) => theme.colors.bgPrimary};
  }
`;
```

---

### 3. `src/context/ThemeContext.tsx`

```typescript
import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme, AppTheme } from '../styles/theme';
import { GlobalStyle } from '../styles/GlobalStyle';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  isDark: true,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('cyberpunk-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      localStorage.setItem('cyberpunk-theme', next ? 'dark' : 'light');
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
```

---

### 4. Pasang di `src/App.tsx`

```typescript
import { AppThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <AppThemeProvider>
      {/* semua komponen kamu */}
    </AppThemeProvider>
  );
}
```

---

### 5. Toggle Button Component

```typescript
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const ToggleBtn = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  color: ${({ theme }) => theme.colors.accentCyan};
  font-family: ${({ theme }) => theme.fonts.mono};
  font-size: 0.75rem;
  padding: 6px 14px;
  cursor: pointer;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: ${({ theme }) => theme.glow.boxMd};
  }
`;

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  return (
    <ToggleBtn onClick={toggleTheme}>
      {isDark ? '[ DAY_MODE ]' : '[ NIGHT_MODE ]'}
    </ToggleBtn>
  );
};
```

---

### 6. Cara Pakai di Komponen Manapun

```typescript
import styled from 'styled-components';

// Theme aktif otomatis masuk via ThemeProvider
const Card = styled.div`
  background: ${({ theme }) => theme.colors.bgSecondary};
  border: 1px solid ${({ theme }) => theme.colors.borderDefault};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme }) => theme.colors.borderActive};
    box-shadow: ${({ theme }) => theme.glow.boxMd};
  }
`;

// Akses isDark untuk kondisi spesifik
import { useTheme } from '../context/ThemeContext';
const { isDark } = useTheme();
```

---

## 🚦 Aturan Penggunaan

1. **Selalu pakai `theme.colors.*`** — jangan hardcode hex di komponen manapun
2. **Glow hemat** — tidak semua elemen perlu glow, pilih focal point
3. **Angular** — border-radius max 8px di mode apapun
4. **Light mode tetap cyberpunk** — tidak ada pastel, tidak ada rounded besar
5. **Transisi smooth** — `transition: all 0.3s ease` saat toggle mode
6. **Label toggle techy** — gunakan `[DAY_MODE]` / `[NIGHT_MODE]`, bukan icon matahari/bulan biasa

---

*Dokumen ini adalah sumber kebenaran untuk semua keputusan visual.*
*Setiap perubahan design system harus dicatat di sini.*