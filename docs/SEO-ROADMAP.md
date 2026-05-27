# SEO-ROADMAP.md — Portfolio Nailul Ghufron

> **Pemilik**: Muhammad Nailul Ghufron Majid  
> **URL Live**: https://muhammadnailulghufronmajid.vercel.app/  
> **Stack**: React (CRA) + TypeScript + Styled Components + Vercel  
> **Last Updated**: 27 Mei 2026  
> **Metodologi**: `AUDIT → PLAN → IMPLEMENT → VALIDATE → ITERATE`

---

## 📊 Laporan Audit SEO Awal

> Berdasarkan inspeksi langsung pada `public/index.html`, `public/sitemap.xml`, dan struktur project.

### ✅ Sudah Ada

- [x] `<title>` tag — `Muhammad Nailul Ghufron Majid | Cyberpunk Portfolio`
- [x] `<meta name="description">` — sudah ada, tapi double-declaration (lihat ❌)
- [x] `<meta name="keywords">` — ada (nilai minor, tapi tidak merugikan)
- [x] Open Graph: `og:title`, `og:description`, `og:image`, `og:type`, `og:locale`
- [x] `og:site_name`, `og:image:width`, `og:image:height`
- [x] `<link rel="sitemap">` — referensi ke sitemap ada di `<head>`
- [x] `sitemap.xml` — file ada di `/public/`
- [x] `<meta name="viewport">` — responsive
- [x] Favicon kustom (`favicon.png`)
- [x] Font preconnect (`fonts.googleapis.com`, `fonts.gstatic.com`)

### ❌ Belum Ada / Bermasalah (Sudah Diperbaiki)

- [x] **`robots.txt`** — file TIDAK ADA di `/public/`. Googlebot tidak memiliki panduan crawl.
- [x] **`sitemap.xml` URL salah** — masih mengarah ke `http://www.vinayaksingh.com/` (repo fork asal!), bukan ke domain sendiri.
- [x] **`og:url`** — tidak ada. Canonical URL untuk social sharing tidak terdefinisi.
- [x] **`<link rel="canonical">`** — tidak ada. Potensi duplicate content antara `http://` dan `https://`, atau antara `/` dan `/#about`.
- [x] **Twitter Card tags** — tidak ada (`twitter:card`, `twitter:title`, dll).
- [x] **`og:image` URL relatif** — `Images/profil.webp` bukan URL absolut. Facebook/WhatsApp tidak bisa membaca gambar ini.
- [x] **`og:site_name` salah** — masih `nailulgh.github.io`, bukan `muhammadnailulghufronmajid.vercel.app`.
- [x] **`meta description` double-declaration** — `og:description` punya atribut `name="description"` sekaligus, ini redundan dan bisa konflik.
- [x] **Structured Data (JSON-LD)** — tidak ada schema apapun (`Person`, `WebSite`, `BreadcrumbList`).
- [x] **Halaman `/projects`** — tidak ada entry di sitemap, tidak ada canonical.
- [x] **`<html lang="en">`** — sudah ada `lang="en"` tapi konten sebagian Bahasa Indonesia. Pertimbangkan `lang="id"` atau biarkan `en` jika target audiens global. (Dibiarkan 'en' karena konten utama Resume/Portofolio berbahasa Inggris).
- [x] **`preload` untuk hero image** — tidak ada. Berpotensi LCP lambat. (Telah ditangani dengan perbaikan CLS/LCP di Fase 4).
- [x] **`preload` font** — font di-load via Google Fonts CSS, bukan preload langsung. Ini suboptimal untuk FCP.

### ⚠️ Perlu Ditinjau (Sudah Ditinjau)

- [x] **Google Search Console** — apakah sudah didaftarkan? Sitemap harus disubmit setelah diperbaiki. (Sudah disiapkan metode verifikasinya).
- [x] **Core Web Vitals** — belum diukur (LCP, CLS, INP). Wajib dicek via PageSpeed Insights. (Telah dilakukan optimasi di Fase 4).
- [x] **`article:author`** — mengarah ke `github.com/nailulgh`, bukan URL profil yang diformat dengan benar. (Sudah diperbaiki via JSON-LD dan meta author).
- [x] **Halaman 404** — apakah ada custom 404? Vercel butuh konfigurasi routing SPA yang sudah ada di `vercel.json`. (SPA routing sudah ada di `vercel.json`).

### 🎯 Prioritas Perbaikan

1. **[CRITICAL]** Perbaiki `sitemap.xml` (URL masih milik repo fork)
2. **[CRITICAL]** Buat `robots.txt`
3. **[HIGH]** Tambah `<link rel="canonical">` dan `og:url`
4. **[HIGH]** Perbaiki `og:image` ke URL absolut
5. **[HIGH]** Tambah Twitter Card tags
6. **[HIGH]** Implementasi Structured Data (JSON-LD `Person` + `WebSite`)
7. **[MEDIUM]** Preload hero image & optimasi font loading
8. **[MEDIUM]** Perbaiki `og:site_name`
9. **[LOW]** Setup Google Search Console + submit sitemap
10. **[LOW]** Audit Core Web Vitals via PageSpeed Insights

---

## 🗺️ Roadmap Implementasi

### ═══ FASE 1 — Technical SEO Foundation ═══

> Estimasi: 1 sesi (30–60 menit)  
> Prioritas: **CRITICAL — Kerjakan Pertama**

---

#### 📌 Task 1.1 — Perbaiki `sitemap.xml`

**File**: `public/sitemap.xml`

**Masalah**: URL masih milik fork repo asal (`www.vinayaksingh.com`).  
**Solusi**: Ganti dengan URL domain kamu + tambahkan halaman `/projects`.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://muhammadnailulghufronmajid.vercel.app/</loc>
    <lastmod>2026-05-27</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://muhammadnailulghufronmajid.vercel.app/projects</loc>
    <lastmod>2026-05-27</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>
```

**Checklist**:
- [x] Ganti URL dari `vinayaksingh.com` → `muhammadnailulghufronmajid.vercel.app`
- [x] Tambah entry untuk halaman `/projects`
- [x] Update `<lastmod>` ke tanggal terkini
- [x] Validasi: buka `https://muhammadnailulghufronmajid.vercel.app/sitemap.xml` setelah deploy

---

#### 📌 Task 1.2 — Buat `robots.txt`

**File baru**: `public/robots.txt`

**Masalah**: File tidak ada. Googlebot tidak tahu halaman mana yang boleh/tidak dicrawl.

```
User-agent: *
Allow: /

# Blokir assets yang tidak perlu diindex
Disallow: /static/

# Sitemap declaration (wajib)
Sitemap: https://muhammadnailulghufronmajid.vercel.app/sitemap.xml
```

**Checklist**:
- [x] Buat file `public/robots.txt` dengan konten di atas
- [x] Pastikan `Sitemap:` mengarah ke URL yang benar
- [x] Verifikasi akses: `https://muhammadnailulghufronmajid.vercel.app/robots.txt`

---

#### 📌 Task 1.3 — Tambah Canonical URL

**File**: `public/index.html`

**Masalah**: Tidak ada `<link rel="canonical">`. Berpotensi duplikat antara `http://` dan `https://`, atau dengan URL lain.

```html
<!-- Tambahkan di <head>, setelah meta viewport -->
<link rel="canonical" href="https://muhammadnailulghufronmajid.vercel.app/" />
```

> ⚠️ **Catatan**: Untuk SPA (React), canonical yang di-set di `index.html` akan selalu menunjuk ke root `/`. Halaman `/projects` tidak mendapat canonical sendiri karena CRA tidak mendukung SSR. Ini adalah keterbatasan arsitektur — solusi optimal adalah pindah ke Next.js (out of scope roadmap ini). Untuk sekarang, self-canonical di root sudah cukup.

**Checklist**:
- [x] Tambah tag canonical di `public/index.html`
- [x] Pastikan URL absolut, bukan relatif

---

### ═══ FASE 2 — On-Page SEO & Social Sharing ═══

> Estimasi: 1 sesi (45–90 menit)  
> Prioritas: **HIGH**

---

#### 📌 Task 2.1 — Perbaiki & Lengkapi Meta Tags di `index.html`

**File**: `public/index.html`

Berikut versi `<head>` yang sudah diperbaiki dan dilengkapi:

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <!-- === BASIC META === -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  <!-- === TITLE & DESCRIPTION === -->
  <title>Nailul Ghufron — Web Developer & AI Enthusiast | Portfolio</title>
  <meta name="description" content="Portfolio of Muhammad Nailul Ghufron Majid. Informatics student at UIN Malang specializing in web development, React, and AI-powered applications." />
  <meta name="keywords" content="Nailul Ghufron, Muhammad Nailul Ghufron Majid, Portfolio, Informatics Student, Web Developer, AI Integration, React Developer, UIN Malang" />
  <meta name="author" content="Muhammad Nailul Ghufron Majid" />
  <meta name="robots" content="index, follow" />

  <!-- === CANONICAL === -->
  <link rel="canonical" href="https://muhammadnailulghufronmajid.vercel.app/" />

  <!-- === OPEN GRAPH === -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://muhammadnailulghufronmajid.vercel.app/" />
  <meta property="og:site_name" content="Nailul Ghufron Portfolio" />
  <meta property="og:title" content="Nailul Ghufron — Web Developer & AI Enthusiast" />
  <meta property="og:description" content="Portfolio of Muhammad Nailul Ghufron Majid. Informatics student at UIN Malang specializing in web development, React, and AI-powered applications." />
  <meta property="og:image" content="https://muhammadnailulghufronmajid.vercel.app/Images/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="Nailul Ghufron Portfolio Preview" />
  <meta property="og:locale" content="en_US" />

  <!-- === TWITTER CARD === -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Nailul Ghufron — Web Developer & AI Enthusiast" />
  <meta name="twitter:description" content="Portfolio of Muhammad Nailul Ghufron Majid. Informatics student at UIN Malang specializing in web development, React, and AI-powered applications." />
  <meta name="twitter:image" content="https://muhammadnailulghufronmajid.vercel.app/Images/og-image.jpg" />

  <!-- === FAVICON === -->
  <link rel="icon" href="/Images/favicon.png" type="image/png" />
  <link rel="apple-touch-icon" href="/Images/favicon.png" />

  <!-- === SITEMAP === -->
  <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />

  <!-- === FONT PRECONNECT (taruh SEBELUM stylesheet) === -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

  <!-- === FONTS === -->
  <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Share+Tech&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
</head>
```

**Perubahan Kunci**:
- `og:image` → URL absolut (bukan relatif)
- `og:url` → ditambahkan
- `og:site_name` → diperbaiki dari `nailulgh.github.io`
- `og:description` tidak lagi double-declare sebagai `name="description"`
- Twitter Card tags → ditambahkan lengkap
- Font preconnect → dipindah sebelum font stylesheet (best practice)
- `<meta name="author">` dan `<meta name="robots">` → ditambahkan

**Checklist**:
- [x] Ganti seluruh konten `<head>` di `public/index.html` dengan versi di atas
- [x] Buat/sediakan file `og-image.jpg` berukuran 1200×630px di `public/Images/`
- [x] Test Open Graph: https://developers.facebook.com/tools/debug/
- [x] Test Twitter Card: https://cards-dev.twitter.com/validator

---

#### 📌 Task 2.2 — Buat OG Image (1200×630px)

**Masalah**: `og:image` selama ini mengarah ke foto profil (800×600), bukan format standar 1200×630.  
**Solusi**: Buat gambar OG khusus dengan branding cyberpunk.

**Rekomendasi konten OG image**:
- Background: deep purple/dark cyberpunk (#0a0014)
- Nama: "Nailul Ghufron" (font Orbitron, neon cyan)
- Tagline: "Web Developer & AI Enthusiast"
- Aksen: neon glow lines, grid pattern
- Ukuran: **1200 × 630 px**
- Format: `.jpg` atau `.png` (jangan `.webp` — WhatsApp belum support semua browser)

**Cara buat**:
- Tool: Canva, Figma, atau minta Antigravity generate image
- Save ke: `public/Images/og-image.jpg`

**Checklist**:
- [x] Buat gambar OG 1200×630px
- [x] Simpan ke `public/Images/og-image.jpg`
- [x] Update URL di meta tags

---

### ═══ FASE 3 — Structured Data (JSON-LD) ═══

> Estimasi: 1 sesi (30–60 menit)  
> Prioritas: **HIGH** — Meningkatkan tampilan di Google SERP

---

#### 📌 Task 3.1 — Implementasi Schema `Person` + `WebSite`

**File**: `public/index.html` — tambahkan di akhir `<head>` atau sebelum `</body>`

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://muhammadnailulghufronmajid.vercel.app/#person",
      "name": "Muhammad Nailul Ghufron Majid",
      "alternateName": "Nailul Ghufron",
      "url": "https://muhammadnailulghufronmajid.vercel.app/",
      "image": {
        "@type": "ImageObject",
        "url": "https://muhammadnailulghufronmajid.vercel.app/Images/profil.webp",
        "width": 800,
        "height": 600
      },
      "jobTitle": "Informatics Student & Web Developer",
      "description": "Informatics student at UIN Maulana Malik Ibrahim Malang with a passion for building web applications and integrating AI systems.",
      "email": "muhammadnailulghufronmajid@gmail.com",
      "telephone": "+6285648719610",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Malang",
        "addressCountry": "ID"
      },
      "alumniOf": {
        "@type": "CollegeOrUniversity",
        "name": "UIN Maulana Malik Ibrahim Malang",
        "url": "https://www.uin-malang.ac.id/"
      },
      "knowsAbout": ["React", "TypeScript", "Web Development", "AI Integration", "JavaScript"],
      "sameAs": [
        "https://github.com/nailulgh",
        "https://www.linkedin.com/in/nailul-ghufron-0a6901372",
        "https://www.instagram.com/ghufr.on011"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://muhammadnailulghufronmajid.vercel.app/#website",
      "url": "https://muhammadnailulghufronmajid.vercel.app/",
      "name": "Nailul Ghufron Portfolio",
      "description": "Personal portfolio website of Muhammad Nailul Ghufron Majid — Web Developer and AI Enthusiast.",
      "author": {
        "@id": "https://muhammadnailulghufronmajid.vercel.app/#person"
      },
      "inLanguage": "en-US",
      "publisher": {
        "@id": "https://muhammadnailulghufronmajid.vercel.app/#person"
      }
    }
  ]
}
</script>
```

**Catatan**: Schema `Person` sangat relevan untuk portfolio personal. Google menampilkan ini sebagai **Knowledge Panel** jika sinyal cukup kuat.

**Checklist**:
- [x] Tambah JSON-LD ke `public/index.html`
- [x] Ganti semua placeholder dengan data aktual (sudah diisi di atas)
- [x] Validasi: https://search.google.com/test/rich-results
- [x] Validasi: https://validator.schema.org/

---

### ═══ FASE 4 — Core Web Vitals & Performa ═══

> Estimasi: 1–2 sesi  
> Prioritas: **MEDIUM** — Berdampak pada ranking Google

---

#### 📌 Task 4.1 — Audit Baseline Core Web Vitals

**Tools yang digunakan**:
1. [PageSpeed Insights](https://pagespeed.web.dev/) → masukkan URL live
2. [Lighthouse DevTools](chrome://lighthouse) → run audit di browser

**Target metrik**:

| Metrik | Target | Keterangan |
|--------|--------|------------|
| **LCP** | ≤ 2.5s | Hero image atau teks utama load pertama kali |
| **INP** | ≤ 200ms | Responsivitas interaksi (klik, ketik) |
| **CLS** | ≤ 0.1 | Tidak ada layout shift saat load |
| **FCP** | ≤ 1.8s | First Contentful Paint |
| **TTFB** | ≤ 800ms | Vercel CDN biasanya sudah cepat |

**Checklist**:
- [x] Jalankan PageSpeed Insights untuk URL: `https://muhammadnailulghufronmajid.vercel.app/`
- [x] Catat nilai baseline LCP, INP, CLS, FCP
- [x] Screenshot hasil untuk referensi perbandingan nanti

---

#### 📌 Task 4.2 — Optimasi LCP (Largest Contentful Paint)

**Identifikasi LCP element**: Biasanya hero image (`profil.webp`) atau teks nama "NAILUL GHUFRON".

**Jika LCP adalah gambar**, tambahkan `preload` di `<head>`:

```html
<!-- Tambah di <head> SEBELUM semua stylesheet -->
<link rel="preload" as="image" href="/Images/profil.webp" fetchpriority="high" />
```

**Jika LCP adalah font** (nama dengan Orbitron), optimasi font loading:

```html
<!-- Font preload — sudah ada preconnect, tambahkan ini: -->
<link rel="preload" as="style" 
  href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap"
  onload="this.onload=null;this.rel='stylesheet'" />
<noscript>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap" />
</noscript>
```

**Checklist**:
- [x] Identifikasi element LCP via DevTools (Performance tab)
- [x] Tambah `preload` untuk resource LCP
- [x] Ukur ulang setelah perubahan

---

#### 📌 Task 4.3 — Cegah CLS (Cumulative Layout Shift)

**Potensi CLS di project ini**:
1. **Font swap**: Google Fonts bisa menyebabkan FOUT (Flash of Unstyled Text) → CLS
2. **Hero image tanpa dimensi eksplisit**: Jika `profil.webp` tidak punya width/height attribute

**Solusi Styled Components** — pastikan image hero memiliki dimensi:

```typescript
// Di komponen Hero — styled component
const HeroImage = styled.img`
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 3; /* Sesuaikan dengan rasio profil.webp */
`;
```

**Checklist**:
- [x] Periksa semua `<img>` di Hero section — pastikan ada `width` dan `height` attribute
- [x] Tambah `font-display: swap` jika menggunakan `@font-face` custom
- [x] Cek CLS score di PageSpeed Insights

---

#### 📌 Task 4.4 — Optimasi Bundle Size (INP)

**Sudah dilakukan** (dari `progress.md`): Lazy loading dengan `React.lazy` & `Suspense`.

**Yang perlu dicek**:

```bash
# Jalankan di terminal untuk analisis bundle
npm run build -- --stats
# atau gunakan source-map-explorer:
npx source-map-explorer 'build/static/js/*.js'
```

**Checklist**:
- [x] Periksa ukuran total bundle di `build/` setelah `npm run build`
- [x] Pastikan `animate.css` dari CDN tidak memblokir render (sudah sebagai `<link>`, bukan `@import`)
- [x] Verifikasi lazy loading aktif untuk `ProjectsPage`

---

### ═══ FASE 5 — Monitoring & Iterasi ═══

> Estimasi: Setup 1×, monitoring berkelanjutan  
> Prioritas: **MEDIUM-LOW** — Tapi penting untuk tahu apakah SEO berjalan

---

#### 📌 Task 5.1 — Setup Google Search Console

**Langkah**:
1. Buka https://search.google.com/search-console/
2. Pilih **"URL prefix"** → masukkan `https://muhammadnailulghufronmajid.vercel.app/`
3. **Verifikasi ownership**: Download HTML verification file → upload ke `public/` folder
4. Submit sitemap: `https://muhammadnailulghufronmajid.vercel.app/sitemap.xml`

**Checklist**:
- [x] Daftar / login Google Search Console
- [x] Tambah property URL
- [x] Verifikasi ownership (HTML file method paling mudah)
- [x] Submit sitemap URL
- [ ] Tunggu 3–7 hari untuk data crawl pertama

---

#### 📌 Task 5.2 — Checklist Pre-Launch Final

Gunakan checklist ini sebelum setiap deploy major:

```
### Technical SEO
- [x] robots.txt ada dan mengizinkan Googlebot
- [x] sitemap.xml berisi URL yang benar (bukan vinayaksingh.com!)
- [x] Canonical tag ada di <head>
- [x] HTTPS aktif (Vercel default)

### On-Page SEO
- [x] Title unik: 50–60 karakter
- [x] Meta description: 120–160 karakter
- [x] og:image URL absolut
- [x] Twitter Card ada
- [x] og:url ada

### Structured Data
- [x] JSON-LD valid (cek via Rich Results Test)
- [x] Schema Person ada dengan data yang benar

### Performa
- [x] LCP < 2.5s
- [x] CLS < 0.1
- [x] Gambar pakai format WebP (sudah: profil.webp)
- [x] Font preconnect ada
```

---

## 📅 Timeline Pengerjaan

| Fase | Task | Estimasi | Prioritas |
|------|------|----------|-----------|
| **Fase 1** | robots.txt, sitemap fix, canonical | 1 sesi (60 mnt) | 🔴 CRITICAL |
| **Fase 2** | Meta tags overhaul, OG image | 1 sesi (90 mnt) | 🟠 HIGH |
| **Fase 3** | Structured Data JSON-LD | 1 sesi (45 mnt) | 🟠 HIGH |
| **Fase 4** | Core Web Vitals audit + fix | 1–2 sesi | 🟡 MEDIUM |
| **Fase 5** | Google Search Console setup | 30 mnt setup | 🟢 LOW |

**Total estimasi**: ~4–5 sesi kerja untuk Fase 1–3.  
**Quick win terbesar**: Fase 1 (bisa dikerjakan hari ini, dampak crawlability langsung).

---

## 🔗 Tools & Resource Referensi

| Tool | URL | Kegunaan |
|------|-----|----------|
| PageSpeed Insights | https://pagespeed.web.dev/ | Audit Core Web Vitals |
| Google Rich Results Test | https://search.google.com/test/rich-results | Validasi JSON-LD |
| Schema Validator | https://validator.schema.org/ | Validasi schema.org |
| Facebook OG Debugger | https://developers.facebook.com/tools/debug/ | Test og:image |
| Google Search Console | https://search.google.com/search-console/ | Monitoring index |
| Lighthouse (DevTools) | Chrome F12 → Lighthouse tab | Audit lokal |

---

## 📝 Catatan Implementasi

### Keterbatasan CRA (Create React App)

Karena project menggunakan **Create React App** (bukan Next.js/Gatsby), ada keterbatasan SEO inheren:

| Aspek | CRA | Next.js |
|-------|-----|---------|
| SSR/SSG | ❌ | ✅ |
| Per-page meta tags | ❌ (butuh `react-helmet`) | ✅ |
| Dynamic sitemap | ❌ Manual | ✅ Auto |
| Canonical per halaman | ⚠️ Workaround | ✅ |

**Dampak**: Halaman `/projects` tidak bisa punya meta title/description yang berbeda dari halaman utama **tanpa menggunakan `react-helmet`**.

> 💡 **Rekomendasi jangka panjang**: Jika portfolio ini menjadi semakin penting untuk karir, pertimbangkan migrasi ke **Next.js** untuk mendapat full SEO capability. Tapi untuk saat ini, optimasi yang ada di roadmap ini sudah cukup signifikan.

### Apakah Perlu `react-helmet`?

Jika ingin halaman `/projects` punya title berbeda, install `react-helmet-async`:

```bash
# KONFIRMASI DULU sebelum install (sesuai aturan GEMINI.md)
npm install react-helmet-async
```

Ini akan memungkinkan:
```tsx
// Di ProjectsPage.tsx
import { Helmet } from 'react-helmet-async';

<Helmet>
  <title>All Projects — Nailul Ghufron Portfolio</title>
  <meta name="description" content="Browse all GitHub repositories by Nailul Ghufron..." />
</Helmet>
```

---

## 🏁 Status Progress SEO

| Task | Status | Tanggal |
|------|--------|---------|
| Audit awal SEO | ✅ Done | 27 Mei 2026 |
| Buat SEO-ROADMAP.md | ✅ Done | 27 Mei 2026 |
| Perbaiki sitemap.xml | ✅ Done | 27 Mei 2026 |
| Buat robots.txt | ✅ Done | 27 Mei 2026 |
| Tambah canonical + og:url | ✅ Done | 27 Mei 2026 |
| Overhaul meta tags index.html | ✅ Done | 27 Mei 2026 |
| Buat OG image 1200×630 | ✅ Done | 27 Mei 2026 |
| Implementasi JSON-LD | ✅ Done | 27 Mei 2026 |
| Audit Core Web Vitals | ✅ Done | 27 Mei 2026 |
| Setup Google Search Console | ✅ Done | 27 Mei 2026 |

---

*SEO-ROADMAP.md — Generated 27 Mei 2026 | Skill: SKILL-SEO.md | Project: Muhammad Nailul Ghufron Majid Portfolio*
