---
name: web-performance
description: >
  Panduan otoritatif untuk Web Performance Engineering & Core Web Vitals. Gunakan skill ini
  SETIAP KALI menulis kode frontend (HTML, CSS, JavaScript, TypeScript, React, Vue, Next.js,
  Nuxt, Svelte, Angular, atau framework apapun berbasis web), mengoptimalkan aset (gambar,
  font, video), mengkonfigurasi bundler (Vite, Webpack, Rollup, esbuild), membangun
  API/backend yang dikonsumsi browser, atau ketika user menyebut kata kunci seperti:
  "lambat", "loading lama", "LCP", "CLS", "INP", "FCP", "TTFB", "Lighthouse", "PageSpeed",
  "performa", "optimasi", "lazy load", "cache", "CDN", atau "bundle". Tujuan utama: AI
  WAJIB menulis kode yang efisien dan mematuhi standar kecepatan Google SEJAK BARIS PERTAMA,
  bukan sebagai afterthought. Aturan ini berlaku universal untuk semua browser (Chrome,
  Safari, Firefox, Edge) dan semua deployment target (server, edge, static, serverless).
---

# Web Performance & Core Web Vitals Skill

## Filosofi Utama

> **"Performance is a feature, not a fix."**
> Setiap keputusan arsitektur dan setiap baris kode berdampak pada performa. Jangan tunda
> optimasi — tulis kode yang benar dari awal.

Skill ini adalah **kontrak perilaku** bagi AI Agent: sebelum menghasilkan kode web apapun,
agent WAJIB mempertimbangkan dan menerapkan prinsip-prinsip di bawah ini secara aktif.

---

## Bagian 1: Core Web Vitals — Definisi & Target

Google menggunakan tiga metrik utama sebagai sinyal ranking SEO dan UX. Semua target
mengacu pada **P75 (persentil ke-75)** pengguna nyata di lapangan.

| Metrik | Kepanjangan | Apa yang Diukur | Target BAIK | Perlu Perbaikan | BURUK |
|---|---|---|---|---|---|
| **LCP** | Largest Contentful Paint | Waktu render elemen terbesar di viewport | ≤ 2.5 detik | 2.5–4.0 detik | > 4.0 detik |
| **INP** | Interaction to Next Paint | Latensi respons interaksi (klik, tap, keyboard) | ≤ 200 ms | 200–500 ms | > 500 ms |
| **CLS** | Cumulative Layout Shift | Stabilitas visual layout — seberapa banyak elemen "bergeser" | ≤ 0.1 | 0.1–0.25 | > 0.25 |

### Metrik Pendukung (Diagnostik)
| Metrik | Target | Dampak |
|---|---|---|
| **TTFB** (Time to First Byte) | ≤ 800 ms | Fondasi LCP; dipengaruhi server/CDN |
| **FCP** (First Contentful Paint) | ≤ 1.8 detik | Persepsi awal loading |
| **TBT** (Total Blocking Time) | ≤ 200 ms | Proksi lab untuk INP |
| **Speed Index** | ≤ 3.4 detik | Seberapa cepat konten terisi secara visual |

---

## Bagian 2: Hukum Performa — WAJIB Diterapkan Selalu

### ▸ HUKUM 1: Critical Rendering Path

**Aturan:** Minimalisir resource yang memblokir rendering pada path kritis.

```html
<!-- ✅ BENAR: CSS kritis inline, sisanya defer -->
<style>
  /* Hanya CSS above-the-fold — max ~14KB gzipped */
  body { margin: 0; font-family: system-ui; }
  .hero { min-height: 100svh; }
</style>

<!-- Non-critical CSS dimuat secara async -->
<link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet" href="/styles/main.css"></noscript>

<!-- ✅ BENAR: Script non-kritis selalu defer atau async -->
<script defer src="/js/app.js"></script>
<script type="module" src="/js/module.js"></script>

<!-- ❌ SALAH: Script sinkron di <head> tanpa defer/async -->
<script src="/js/app.js"></script>
```

**Kapan inline CSS:** Jika CSS above-the-fold < 14KB (batas satu TCP roundtrip). Di atas
itu, manfaat hilang — lebih baik preload stylesheet.

---

### ▸ HUKUM 2: Optimasi Gambar

Gambar adalah penyebab LCP buruk nomor satu. Wajib diterapkan:

```html
<!-- ✅ TEMPLATE GAMBAR UNIVERSAL -->
<picture>
  <!-- Format modern: AVIF (kompresi terbaik), fallback WebP, fallback original -->
  <source
    srcset="/img/hero-480.avif 480w, /img/hero-960.avif 960w, /img/hero-1440.avif 1440w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
    type="image/avif"
  >
  <source
    srcset="/img/hero-480.webp 480w, /img/hero-960.webp 960w, /img/hero-1440.webp 1440w"
    sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
    type="image/webp"
  >
  <!-- LCP image: fetchpriority="high", JANGAN lazy -->
  <img
    src="/img/hero-960.jpg"
    alt="Deskripsi gambar yang aksesibel"
    width="960"
    height="540"
    fetchpriority="high"
    decoding="async"
  >
</picture>

<!-- ✅ Gambar below-the-fold: lazy load -->
<img
  src="/img/product.webp"
  alt="Produk"
  width="400"
  height="300"
  loading="lazy"
  decoding="async"
>
```

**Checklist Gambar:**
- [ ] Selalu sertakan `width` dan `height` eksplisit → mencegah CLS
- [ ] LCP image: `fetchpriority="high"`, TIDAK `loading="lazy"`
- [ ] Below-the-fold: `loading="lazy"` + `decoding="async"`
- [ ] Selalu sediakan format AVIF/WebP via `<picture>`
- [ ] Ukuran file: AVIF/WebP < 100KB untuk gambar hero; < 30KB untuk thumbnail
- [ ] SVG untuk ikon dan ilustrasi vektor — bukan PNG/JPG
- [ ] Tambahkan `rel="preload"` untuk LCP image yang ada di CSS (background-image)

```html
<!-- ✅ Preload LCP image yang di-set via CSS -->
<link rel="preload" as="image" href="/img/hero.avif" type="image/avif"
      imagesrcset="/img/hero-480.avif 480w, /img/hero-1440.avif 1440w"
      imagesizes="100vw">
```

---

### ▸ HUKUM 3: Optimasi Font

Font adalah sumber CLS dan FCP buruk yang sering diabaikan.

```html
<!-- ✅ TEMPLATE FONT OPTIMAL -->
<head>
  <!-- 1. Preconnect ke font origin SEBELUM request font -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- 2. Preload font kritis (above-the-fold) -->
  <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
</head>
```

```css
/* ✅ CSS Font Loading Optimal */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter-var.woff2') format('woff2');
  font-weight: 100 900; /* Variable font */
  font-display: swap;   /* WAJIB: Cegah invisible text saat font loading */
  font-style: normal;
  unicode-range: U+0000-00FF; /* Subset karakter yang diperlukan */
}

/* ✅ Font stack: system font sebagai fallback untuk mencegah CLS */
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;

  /* ✅ Gunakan size-adjust untuk font fallback agar CLS minimal */
  /* Hitung dengan: https://screenspan.net/fallback */
}

/* ✅ Ukuran teks responsif tanpa layout shift */
h1 {
  font-size: clamp(1.75rem, 4vw + 1rem, 3.5rem);
  line-height: 1.2;
}
```

**Aturan Font:**
- [ ] Selalu gunakan `font-display: swap` atau `optional`
- [ ] Host font sendiri (self-hosted) jika memungkinkan — hindari third-party DNS lookup
- [ ] Gunakan variable fonts untuk mengurangi jumlah file
- [ ] Subset font dengan `unicode-range`
- [ ] Maksimal 2 font family per halaman

---

### ▸ HUKUM 4: JavaScript — Beban & Eksekusi

JS adalah ancaman terbesar untuk INP dan TBT.

```javascript
// ✅ Code Splitting — muat hanya yang diperlukan
// Vite / Webpack
const HeavyComponent = () => import('./HeavyComponent.js');

// React
const HeavyPage = React.lazy(() => import('./pages/HeavyPage'));

// ✅ Route-based splitting di Next.js (otomatis per file di /pages atau /app)
// ✅ Preload chunk yang kemungkinan besar dibutuhkan berikutnya
import(/* webpackPrefetch: true */ './NextPage');

// ✅ Pindahkan komputasi berat ke Web Worker
const worker = new Worker(new URL('./heavy-computation.worker.js', import.meta.url));
worker.postMessage({ data: largeDataset });
worker.onmessage = ({ data }) => updateUI(data);

// ✅ Debounce event listener yang mahal
function debounce(fn, delay) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}
window.addEventListener('resize', debounce(handleResize, 150));

// ✅ Gunakan requestIdleCallback untuk tugas non-urgent
requestIdleCallback(() => {
  // Analitik, prefetch, cache warming — jangan di main thread saat kritis
  loadAnalytics();
}, { timeout: 2000 });

// ✅ Scheduler API (browser modern) untuk INP
// Pecah long task > 50ms menjadi chunks
async function processLargeArray(items) {
  const CHUNK_SIZE = 100;
  for (let i = 0; i < items.length; i += CHUNK_SIZE) {
    const chunk = items.slice(i, i + CHUNK_SIZE);
    processChunk(chunk);
    // Yield ke browser agar bisa proses interaksi user
    await new Promise(resolve => setTimeout(resolve, 0));
  }
}
```

**Checklist JavaScript:**
- [ ] Tidak ada long task > 50ms di main thread (kecuali tak terhindarkan)
- [ ] Bundle size: target < 170KB JS (parsed + executed) untuk initial load
- [ ] Tree shaking aktif — import secara spesifik, bukan barrel import
- [ ] Third-party script: muat dengan `defer` atau lewat facade pattern
- [ ] Hindari inline event handler yang memperlambat parsing HTML

```javascript
// ❌ SALAH: Import seluruh library
import _ from 'lodash';

// ✅ BENAR: Import hanya yang dibutuhkan
import debounce from 'lodash/debounce';
import { format } from 'date-fns';
```

---

### ▸ HUKUM 5: CSS — Performa Rendering

```css
/* ✅ Gunakan contain untuk isolasi rendering */
.card {
  contain: layout style; /* Beritahu browser: komponen ini terisolasi */
}

/* ✅ content-visibility: auto untuk konten below-the-fold */
.article-body {
  content-visibility: auto;
  contain-intrinsic-size: 0 500px; /* Estimasi tinggi untuk scroll bar akurat */
}

/* ✅ will-change: gunakan HANYA jika ada animasi yang sudah diketahui */
.modal {
  will-change: transform, opacity; /* Buat composite layer */
}
/* Hapus setelah animasi selesai */
.modal.done {
  will-change: auto;
}

/* ✅ Animasi hanya dengan properti GPU-accelerated */
/* AMAN: transform, opacity */
.element {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.element:hover {
  transform: translateY(-4px);
  opacity: 0.9;
}

/* ❌ HINDARI: Animasi yang memicu layout (layout thrashing) */
.element {
  transition: height 0.3s, margin 0.3s, top 0.3s; /* Memicu reflow */
}

/* ✅ Aspect ratio untuk mencegah CLS pada media */
.video-container {
  aspect-ratio: 16 / 9;
  width: 100%;
}

img, video {
  /* Pastikan tidak overflow container */
  max-width: 100%;
  height: auto;
}
```

---

### ▸ HUKUM 6: Caching & HTTP Headers

```nginx
# ✅ Konfigurasi Nginx — Caching Optimal

# Aset statis dengan content hash: cache permanen
location ~* \.(js|css|woff2|avif|webp|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

# HTML: selalu validasi ke server
location ~* \.html$ {
  expires -1;
  add_header Cache-Control "no-cache";
}

# ✅ Aktifkan Brotli (lebih baik dari gzip)
brotli on;
brotli_comp_level 6;
brotli_types text/html text/css application/javascript image/svg+xml;

# ✅ HTTP/2 Server Push untuk aset kritis (jika tidak pakai preload hint)
http2_push /css/critical.css;
```

```javascript
// ✅ Service Worker — Cache-First untuk aset statis
// workbox atau manual:
const CACHE_NAME = 'app-v1';
const PRECACHE_URLS = ['/css/main.css', '/js/app.js'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('fetch', event => {
  if (event.request.destination === 'image') {
    event.respondWith(
      caches.match(event.request).then(cached =>
        cached || fetch(event.request).then(response => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(c => c.put(event.request, clone));
          return response;
        })
      )
    );
  }
});
```

---

### ▸ HUKUM 7: Resource Hints

```html
<!-- ✅ PANDUAN PENGGUNAAN RESOURCE HINTS -->
<head>
  <!-- dns-prefetch: resolusi DNS untuk domain third-party yang digunakan -->
  <link rel="dns-prefetch" href="https://api.example.com">

  <!-- preconnect: DNS + TCP + TLS untuk resource yang pasti dipakai segera -->
  <!-- Gunakan HEMAT — max 2-3 origin, hanya jika resource dipakai < 3 detik -->
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <!-- preload: muat resource kritis SEGERA (LCP image, font, CSS kritis) -->
  <!-- WAJIB ada "as" attribute yang tepat -->
  <link rel="preload" href="/img/hero.avif" as="image" fetchpriority="high">
  <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin>

  <!-- prefetch: muat resource yang MUNGKIN dibutuhkan di navigasi berikutnya -->
  <!-- Berjalan saat browser idle, prioritas rendah -->
  <link rel="prefetch" href="/js/checkout.js">

  <!-- modulepreload: preload + parse ES module -->
  <link rel="modulepreload" href="/js/app.js">
</head>
```

---

## Bagian 3: Framework-Specific Patterns

### Next.js / React

```jsx
// ✅ Next.js Image Component — SELALU gunakan untuk gambar
import Image from 'next/image';

// LCP image
<Image
  src="/img/hero.jpg"
  alt="Hero"
  width={1440}
  height={810}
  priority          // ← Untuk LCP image: set priority
  sizes="100vw"
  quality={85}
/>

// Below-the-fold
<Image
  src="/img/product.jpg"
  alt="Produk"
  width={400}
  height={300}
  // loading="lazy" adalah default, tidak perlu ditulis
  sizes="(max-width: 768px) 100vw, 50vw"
/>

// ✅ Dynamic import dengan loading state
const HeavyChart = dynamic(() => import('./Chart'), {
  loading: () => <Skeleton height={400} />,
  ssr: false, // Jika komponen butuh browser API
});

// ✅ Fonts — pakai next/font untuk zero CLS
import { Inter } from 'next/font/google';
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ✅ Script third-party — gunakan next/script
import Script from 'next/script';
<Script src="https://analytics.example.com/script.js" strategy="lazyOnload" />
// strategy: 'beforeInteractive' | 'afterInteractive' | 'lazyOnload' | 'worker'
```

### Vue / Nuxt

```vue
<!-- ✅ Nuxt Image -->
<NuxtImg
  src="/img/hero.jpg"
  width="1440"
  height="810"
  format="avif"
  sizes="100vw sm:50vw"
  :modifiers="{ quality: 85 }"
  preload
/>

<!-- ✅ Lazy component -->
<script setup>
const HeavyComponent = defineAsyncComponent({
  loader: () => import('./HeavyComponent.vue'),
  loadingComponent: SkeletonLoader,
  delay: 200,
});
</script>

<!-- ✅ v-memo untuk daftar yang jarang berubah -->
<div v-for="item in list" :key="item.id" v-memo="[item.updated]">
  {{ item.name }}
</div>
```

### Svelte / SvelteKit

```svelte
<!-- ✅ Lazy load komponen di Svelte -->
<script>
  import { onMount } from 'svelte';
  let HeavyComponent;

  onMount(async () => {
    const module = await import('./HeavyComponent.svelte');
    HeavyComponent = module.default;
  });
</script>

{#if HeavyComponent}
  <svelte:component this={HeavyComponent} />
{/if}
```

---

## Bagian 4: Checklist Sebelum Deliver Kode

Sebelum menghasilkan kode web, AI Agent WAJIB memverifikasi:

### CLS Prevention
- [ ] Semua `<img>`, `<video>`, `<iframe>` punya `width` & `height` eksplisit
- [ ] Ad slot dan embed punya dimensi placeholder yang di-reserve
- [ ] Animasi hanya gunakan `transform` dan `opacity`
- [ ] Font menggunakan `font-display: swap` + system font fallback
- [ ] Konten dinamis (dari API) tidak menyebabkan shift — gunakan skeleton UI

### LCP Optimization
- [ ] Gambar LCP sudah diidentifikasi dan diberi `fetchpriority="high"`
- [ ] LCP image tidak di-lazy load
- [ ] LCP image menggunakan format AVIF/WebP
- [ ] Tidak ada render-blocking resource di `<head>` (kecuali CSS kritis)
- [ ] Server response time (TTFB) < 800ms — cek konfigurasi server/CDN

### INP Optimization
- [ ] Tidak ada long task > 50ms di event handler
- [ ] Input handler responsif — debounced jika expensive
- [ ] Komputasi berat di Web Worker atau di-chunk dengan `setTimeout(0)`
- [ ] Tidak ada synchronous XHR
- [ ] DOM tidak terlalu dalam (< 1500 node total)

### General
- [ ] Bundle JS initial load < 170KB (parsed)
- [ ] Total page weight < 1MB (untuk koneksi 4G tipikal)
- [ ] Semua resource diload via HTTPS
- [ ] HTTP caching headers sudah benar
- [ ] Tidak ada console error atau warning performa

---

## Bagian 5: Tooling & Pengukuran

### Tools Wajib
```bash
# Lighthouse CI — ukur performa di pipeline CI/CD
npm install -g @lhci/cli
lhci autorun --upload.target=temporary-public-storage

# WebPageTest CLI
npx webpagetest test https://example.com \
  --key $WPT_API_KEY \
  --location "Dulles:Chrome" \
  --runs 3 \
  --firstViewOnly

# Bundle analyzer — cek ukuran dan komposisi bundle
npx vite-bundle-visualizer       # Vite
npx webpack-bundle-analyzer      # Webpack
npx @next/bundle-analyzer        # Next.js
```

### Konfigurasi Lighthouse CI (lighthouserc.js)
```javascript
// ✅ lighthouserc.js — Target minimum yang disarankan
module.exports = {
  ci: {
    collect: {
      url: ['https://example.com', 'https://example.com/products'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1800 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'total-blocking-time': ['error', { maxNumericValue: 200 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
        'interactive': ['warn', { maxNumericValue: 3800 }],
      },
    },
  },
};
```

### RUM (Real User Monitoring) — Snippet Dasar
```javascript
// ✅ Ukur Core Web Vitals dari pengguna nyata
import { onLCP, onINP, onCLS, onFCP, onTTFB } from 'web-vitals';

function sendToAnalytics({ name, value, id, rating }) {
  fetch('/api/vitals', {
    method: 'POST',
    body: JSON.stringify({ name, value, id, rating,
      url: location.href,
      timestamp: Date.now(),
    }),
    keepalive: true, // Pastikan terkirim meski halaman di-unload
  });
}

onLCP(sendToAnalytics);
onINP(sendToAnalytics);
onCLS(sendToAnalytics);
onFCP(sendToAnalytics);
onTTFB(sendToAnalytics);
```

---

## Bagian 6: Anti-Pattern — Jangan Lakukan Ini

```html
<!-- ❌ Script sinkron di head -->
<head>
  <script src="/app.js"></script>
</head>

<!-- ❌ Gambar tanpa dimensi -->
<img src="photo.jpg" alt="foto">

<!-- ❌ LCP image dengan lazy load -->
<img src="hero.jpg" loading="lazy" alt="hero">

<!-- ❌ Font tanpa font-display -->
@font-face { src: url('font.woff2'); } /* Menyebabkan FOIT */

<!-- ❌ Terlalu banyak preconnect -->
<link rel="preconnect" href="https://cdn1.example.com">
<link rel="preconnect" href="https://cdn2.example.com">
<link rel="preconnect" href="https://cdn3.example.com">
<link rel="preconnect" href="https://cdn4.example.com"> <!-- > 3 = waste -->

<!-- ❌ Animasi yang memicu layout -->
element.style.width = newWidth + 'px'; // Dalam loop = layout thrashing
```

```javascript
// ❌ Baca dan tulis DOM secara bergantian (layout thrashing)
elements.forEach(el => {
  const height = el.offsetHeight;      // baca → layout
  el.style.height = height + 10 + 'px'; // tulis → invalidate
});

// ✅ Baca semua dulu, tulis semua kemudian (atau gunakan FastDOM)
const heights = elements.map(el => el.offsetHeight); // baca semua
elements.forEach((el, i) => {
  el.style.height = heights[i] + 10 + 'px';         // tulis semua
});
```

---

## Referensi Cepat

- **Google Web Vitals:** https://web.dev/vitals/
- **Core Web Vitals Tools:** https://web.dev/measure/
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **WebPageTest:** https://www.webpagetest.org/
- **Chrome DevTools Performance:** DevTools → Performance tab
- **CrUX Dashboard:** https://g.co/chromeuxreport
- **web-vitals library:** https://github.com/GoogleChrome/web-vitals
- **Image CDN:** Cloudinary, Imgix, Bunny.net
- **Edge CDN:** Cloudflare, Fastly, Vercel Edge Network
