# CLAUDE.md — Panduan AI Agent: Portfolio Cyberpunk

## Identitas Project

- **Nama Project**: Personal Portfolio (fork dari CodeVinayak/Portfolio-v2)
- **Pemilik**: MUHAMMAD NAILUL GHUFRON MAJID
- **Tujuan**: Portfolio pribadi dengan tema Cyberpunk Futuristic
- **Repo Asal**: https://github.com/CodeVinayak/Portfolio-v2
- **Status**: Modifikasi aktif — tema dan konten sedang diubah

---

## Tech Stack

| Layer | Teknologi |
|-------|-----------|
| Framework | React (Create React App) |
| Language | TypeScript |
| Styling | **Styled Components** |
| Package Manager | npm |
| Deploy | **Vercel** |

---

## Aturan Wajib (JANGAN DILANGGAR)

### ✅ Yang Boleh Dilakukan
- Mengubah warna, typography, spacing di Styled Components
- Menambah animasi dan efek visual cyberpunk
- Mengubah teks/konten (nama, bio, deskripsi proyek, dll)
- Menambah komponen baru yang mengikuti design system
- Memodifikasi layout selama struktur komponen tetap sama

### ❌ Yang TIDAK Boleh Dilakukan
- Jangan hapus atau rename komponen yang sudah ada tanpa konfirmasi
- Jangan ubah struktur folder `src/` secara drastis
- Jangan ganti Styled Components ke library lain (Tailwind, dll)
- Jangan ubah TypeScript interface/type yang sudah ada kecuali diminta
- Jangan install package baru tanpa konfirmasi dulu

---

## Cara Kerja di Setiap Sesi

1. **Baca** `docs/theme.md` sebelum menyentuh styling apapun
2. **Baca** `docs/structure.md` sebelum menyentuh komponen
3. **Cek** `docs/progress.md` untuk tahu task yang sedang dikerjakan
4. **Kerjakan satu task** per sesi — jangan sekaligus banyak
5. **Update** `docs/progress.md` setelah task selesai
6. **Commit git** setelah setiap task berhasil

---

## Konteks Desain

Project ini menggunakan **Styled Components**, artinya:
- Semua perubahan warna harus di file tema atau di styled component terkait
- Gunakan CSS variables / theme object yang sudah ada kalau tersedia
- Tambahkan props dinamis kalau perlu variasi komponen
- Efek cyberpunk (glow, glitch, scanline) dibuat sebagai styled component terpisah

**Visual Aesthetic (SANGAT PENTING):**
- Tema visual utama adalah **Kota Cyberpunk** dengan dominasi **Deep Purple, Neon Pink/Magenta, dan Cyan**.
- **Dark Mode**: Gunakan warna latar belakang ungu gelap/hitam (`bgPrimary`, `bgSecondary`) dengan aksen neon menyala.
- **Light Mode**: Harus menyesuaikan agar **TETAP TERBACA**. Warna tidak boleh bertabrakan. Gunakan aksen yang lebih gelap (bukan pastel) pada latar belakang yang terang.

Detail lengkap design system ada di `docs/theme.md`.

---

## Referensi File Penting

```
src/
├── components/     ← Komponen UI utama
├── pages/          ← Halaman (jika ada routing)
├── styles/         ← Global styles (global.ts)
├── assets/         ← Gambar, icon, dll
└── App.tsx         ← Root component

docs/
├── theme.md        ← Design system cyberpunk (BACA DULU)
├── structure.md    ← Peta komponen & arsitektur
├── myresume.md     ← bidata dan identitas saya
└── progress.md     ← Status task & progress
```

---

## Tone & Gaya Kode

- Kode TypeScript harus tetap typed dengan benar — hindari `any`
- Styled Components: gunakan naming yang deskriptif (bukan `Div1`, `Wrapper2`)
- Komentar dalam bahasa Indonesia atau Inggris, konsisten
- Jika ragu antara dua pendekatan, pilih yang lebih mudah di-maintain

---

*Last updated: 10 Mei 2026*
