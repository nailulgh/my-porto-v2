# progress.md — Task Tracker & Progress

> Update file ini setiap kali selesai mengerjakan sesuatu.
> Format status: `[ ]` Todo | `[~]` In Progress | `[x]` Done

---

## 🚀 Phase 0 — Setup & Onboarding

- [x] Fork & clone repo ke lokal
- [x] Jalankan `npm install`
- [x] Jalankan `npm start` — pastikan bisa jalan
- [x] Eksplorasi struktur folder `src/` dan update `docs/structure.md`
- [x] Baca semua file .md di folder `docs/`
- [x] Install Google Fonts (Orbitron, Share Tech, Share Tech Mono)

---

## 🎨 Phase 1 — Theme & Visual Overhaul

### 1.1 Global Foundation
- [x] Update atau buat `src/styles/theme.ts` dengan cyberpunk color palette
- [x] Update `src/styles/global.ts` — background gelap, font default
- [x] Import Google Fonts ke project
- [x] Test: tampilan dasar sudah dark & cyberpunk

### 1.2 Header
- [x] Ganti background header ke `bg-primary`
- [x] Update font navigasi ke Orbitron
- [x] Tambah border bottom dengan neon glow cyan
- [x] Update warna link & hover state

### 1.3 Hero Section
- [x] Update background dengan scanline / grid pattern
- [x] Ganti typography nama ke Orbitron + glow effect
- [x] Update CTA button ke style cyberpunk (border, hover glow)
- [x] (Opsional) Tambah glitch animation pada nama

### 1.4 About Section
- [x] Update card/container ke dark background + neon border
- [x] Update typography ke Share Tech

### 1.5 Skills Section
- [x] Update skill cards/badges ke cyberpunk style
- [x] Tambah neon glow pada icon atau badge
- [x] Update warna progress bar (jika ada)

### 1.6 Projects Section
- [x] Update project card dengan dark background + border neon
- [x] Tambah hover effect: glow + border brighten
- [x] Update button/link style
- [x] (Opsional) Tambah label "// PROJECT_ID" style

### 1.7 Contact Section
- [x] Update form input ke cyberpunk style
- [x] Update submit button
- [x] Update link sosial media

### 1.8 Footer
- [x] Update background & typography

---

## 📝 Phase 2 — Konten Pribadi

- [x] Ganti nama, title, dan bio di Hero
- [x] Update About section dengan info pribadi
- [x] Update daftar Skills sesuai kemampuan
- [x] Isi Projects dengan project-project kamu
- [x] Update info kontak (email, LinkedIn, GitHub, dll)
- [x] Ganti foto profil (jika ada) (Teks Alt diganti, foto bisa disesuaikan nanti)
- [x] Update meta tags di `public/index.html`

---

## ✨ Phase 3 — Animasi & Polish

- [x] Tambah fade-in animation saat scroll
- [x] Tambah hover animations yang konsisten
- [x] Review seluruh halaman untuk konsistensi visual
- [x] Test di mobile (responsive check)
- [x] Test di browser lain (Chrome, Firefox, Safari)
- [x] Fix any visual bug

---

## 🔧 Phase 4 — Tambahan (Opsional)

- [ ] Tambah cursor custom cyberpunk
- [ ] Tambah loading screen / splash screen
- [x] Tambah dark/light mode toggle (atau hapus mode terang)
- [ ] Optimasi performa (lazy loading, dll)
- [ ] Setup analytics

---

## 🐙 Phase 6 — GitHub Live Projects Integration ← FOKUS SEKARANG

> Tujuan: Menampilkan repositori GitHub milik sendiri (bukan fork) secara live via GitHub API.
> Tampilan awal: 6 project di halaman utama. Tombol "Lihat Semua" mengarah ke halaman `/projects` khusus.

---

### 6.1 — Setup GitHub API & Data Layer

- [ ] **Buat file `src/data/github.ts`**
  - Definisikan fungsi `fetchMyRepos()` menggunakan GitHub REST API:
    ```
    GET https://api.github.com/users/nailulgh/repos?per_page=100&sort=updated&type=owner
    ```
  - Filter: `fork === false` (hanya repo milik sendiri)
  - Urutkan: berdasarkan `stargazers_count` desc, lalu `updated_at` desc
  - Kembalikan tipe `GitHubRepo[]`

- [ ] **Buat TypeScript interface `GitHubRepo`** di `src/@types/github.ts`:
  ```typescript
  interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;       // link live demo jika ada
    topics: string[];              // dipakai sebagai filter tag
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    fork: boolean;
    visibility: string;
  }
  ```

- [ ] **Buat custom hook `src/hooks/useGitHubRepos.ts`**:
  - State: `repos`, `loading`, `error`
  - Fetch otomatis saat hook dipanggil
  - Cache hasil di `sessionStorage` agar tidak fetch ulang tiap render
  - Export: `{ repos, loading, error }`

- [ ] **Opsional: Setup GitHub Personal Access Token (PAT)**
  - Buat file `.env` di root project
  - Tambahkan: `REACT_APP_GITHUB_TOKEN=ghp_xxxxx`
  - Gunakan di header fetch untuk rate limit lebih tinggi (60 → 5000 req/jam)
  - Pastikan `.env` masuk ke `.gitignore`

---

### 6.2 — Komponen Filter & Sort

> File: `src/components/Project/ProjectFilter.tsx`

- [ ] **Buat komponen `ProjectFilter`** yang menampilkan tombol filter berdasarkan:
  - **Bahasa**: ambil dari `repo.language` (JavaScript, TypeScript, Python, dll)
  - **Topik/Tag**: ambil dari `repo.topics` (contoh: `react`, `api`, `fullstack`)
  - Tombol **"ALL"** untuk reset filter

- [ ] **Logika filter di parent component**:
  - State: `activeLanguage`, `activeTopic`
  - Filter repos: `repos.filter(r => r.language === activeLanguage || ...)`
  - Filter tidak mengubah urutan — hanya menyembunyikan yang tidak cocok

- [ ] **Styling filter buttons** — sesuai cyberpunk theme:
  - Default: `border: 1px solid borderDefault`, font mono
  - Active: `border-color: accentCyan`, `box-shadow: glow.boxMd`, `color: accentCyan`
  - Tambah label prefix: `[ JS ]`, `[ TS ]`, `[ PY ]` dst

---

### 6.3 — Project Card Component

> File: `src/components/Project/ProjectCard.tsx`

- [ ] **Buat komponen `ProjectCard`** yang menerima props `repo: GitHubRepo`:
  - Header: nama repo dengan prefix `// ` (contoh: `// portfolio-v2`)
  - Body: deskripsi repo (atau fallback `"No description provided."`)
  - Footer kiri: badge bahasa (`language`) + jumlah bintang (`⭐ stargazers_count`)
  - Footer kanan: link ke GitHub repo, dan link live demo jika `homepage` ada
  - Tag/topics: tampilkan sebagai badge kecil, max 3 tag (sisanya disembunyikan)

- [ ] **Styling sesuai cyberpunk theme**:
  - Background: `theme.colors.bgSecondary`
  - Border: `1px solid theme.colors.borderDefault`
  - Hover: `borderColor → borderActive`, `boxShadow → glow.boxMd`
  - Nama repo: font `mono`, warna `accentCyan`
  - Bahasa badge: warna sesuai bahasa (JS=yellow, TS=cyan, Python=green, dll)
  - Transisi: `transition: all 0.2s ease`

- [ ] **Loading state**: tampilkan skeleton card (shimmer effect) saat data belum ada
- [ ] **Error state**: tampilkan pesan error dengan style cyberpunk jika fetch gagal

---

### 6.4 — Section Projects di Halaman Utama (Preview 6 Repo)

> File: `src/components/Project/index.tsx` (atau `ProjectSection.tsx`)

- [ ] **Modifikasi section Projects yang sudah ada**:
  - Ganti data statis dengan data dari `useGitHubRepos()`
  - Tampilkan hanya **6 repo pertama** (setelah difilter & diurutkan)
  - Grid layout: 3 kolom di desktop, 2 di tablet, 1 di mobile

- [ ] **Tambah tombol "VIEW ALL PROJECTS"**:
  - Styling: tombol cyberpunk besar, border cyan, hover glow
  - Label: `[ VIEW ALL PROJECTS →  ]`
  - Arahkan ke route `/projects` menggunakan `react-router-dom`
  - Posisi: di bawah grid 6 kartu, center-aligned

- [ ] **Tambah loading skeleton** saat data sedang di-fetch (6 placeholder cards)

---

### 6.5 — Halaman `/projects` (All Projects Page)

> File baru: `src/pages/ProjectsPage.tsx`

- [ ] **Buat file `src/pages/ProjectsPage.tsx`**:
  - Layout: halaman penuh dengan header section dan grid project
  - Gunakan hook `useGitHubRepos()` yang sama (data sudah ter-cache)

- [ ] **Header halaman**:
  - Judul: `// MY_PROJECTS` (font Orbitron, glow cyan)
  - Subtitle: `"All repositories — non-fork, owned by @nailulgh"`
  - Jumlah total repo yang ditampilkan: `[XX REPOSITORIES FOUND]`

- [ ] **Komponen filter terintegrasi** di atas grid:
  - Filter bahasa + topik (dari `ProjectFilter.tsx`)
  - Tampilkan jumlah hasil setelah difilter: `[XX RESULTS]`

- [ ] **Grid semua repo** (tanpa batasan 6):
  - Gunakan `ProjectCard.tsx` yang sama
  - Grid: 3 kolom desktop, 2 tablet, 1 mobile
  - Tambah animasi fade-in staggered saat card muncul

- [ ] **Tombol kembali ke halaman utama**:
  - Di bagian atas halaman: `[ ← BACK TO MAIN ]`
  - Styling: lebih kecil, subtle, tapi tetap cyberpunk

- [ ] **Setup routing di `src/App.tsx`**:
  ```typescript
  import { BrowserRouter, Routes, Route } from 'react-router-dom';
  // Tambah route:
  <Route path="/projects" element={<ProjectsPage />} />
  ```

- [ ] **Tambah link `/projects` di navigasi Header** (opsional tapi disarankan)

---

### 6.6 — Polish & Edge Cases

- [ ] **Handle repo tanpa deskripsi**: fallback text `"— no description —"`
- [ ] **Handle repo tanpa language**: tampilkan badge `OTHER` atau sembunyikan badge
- [ ] **Handle repo private**: API public hanya return repo public — tidak perlu khusus ditangani
- [ ] **Rate limit GitHub API**: tampilkan pesan khusus jika terkena rate limit (403/429):
  - Pesan: `"// RATE_LIMIT_EXCEEDED — try again in 60 minutes"`
- [ ] **Empty state saat filter**: tampilkan pesan `"// NO_REPOS_FOUND — reset filter"` dengan tombol reset
- [ ] **Responsiveness**: pastikan filter button wrap dengan baik di mobile
- [ ] **Accessibility**: tambah `aria-label` pada tombol filter dan link repo

---

### 6.7 — Testing & Verifikasi

- [ ] Verifikasi: hanya repo non-fork yang tampil (cek `fork === false`)
- [ ] Verifikasi: tampilan awal di homepage hanya 6 repo
- [ ] Verifikasi: tombol "VIEW ALL" berfungsi dan membuka `/projects`
- [ ] Verifikasi: filter bahasa bekerja dengan benar
- [ ] Verifikasi: filter topik bekerja dengan benar
- [ ] Verifikasi: reset filter ("ALL") mengembalikan semua repo
- [ ] Verifikasi: link ke GitHub repo terbuka di tab baru
- [ ] Verifikasi: link live demo (homepage) muncul hanya jika ada
- [ ] Verifikasi: loading skeleton tampil saat fetch berlangsung
- [ ] Verifikasi: error state tampil jika API gagal
- [ ] Test di mobile (iOS Safari & Android Chrome)

---

## 🚢 Phase 5 — Deploy

- [ ] Build production: `npm run build`
- [ ] Test build lokal
- [ ] Deploy ke [Vercel]
- [ ] Setup custom domain (jika ada)
- [ ] Update sitemap.xml
- [ ] Share link!

---

## 📋 Catatan Sesi

Gunakan bagian ini untuk mencatat progress per sesi:

```
[10 Mei 2026] — Sesi Visual Polish & Theming
- Selesai: 
  - Perbaikan arsitektur Dark/Light mode menggunakan AppThemeProvider dan Context.
  - Penyesuaian skema warna Light Mode ("Holographic Day") agar kontras dan terbaca.
  - Penyesuaian skema warna Dark Mode ("Neon Night") kembali ke ungu/violet pekat (Cyberpunk asli).
  - Update foto profil ke profil.webp dan favicon kustom huruf 'N'.
  - Perbaikan bug kontras warna (tombol Resume, ikon GitHub di Light Mode, visibilitas Toggle Switch).
- Masalah: -
- Selanjutnya: Phase 6 — GitHub Live Projects Integration.
```

---

## 🐛 Known Issues

*Catat bug atau masalah yang ditemukan di sini:*

| Issue | Status | Catatan |
|-------|--------|---------|
| - | - | - |

---

## 📌 Urutan Pengerjaan Phase 6 (Disarankan)

```
6.1 → Setup types & hook dulu (fondasi data)
6.2 → Buat ProjectCard (komponen terkecil)
6.3 → Buat ProjectFilter (komponen UI)
6.4 → Integrasikan ke section homepage (preview 6)
6.5 → Buat halaman /projects (full page)
6.6 → Polish edge cases
6.7 → Testing menyeluruh
```

---

*File ini wajib di-update setiap akhir sesi kerja.*