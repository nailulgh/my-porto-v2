# Panduan Deployment — Portfolio Cyberpunk

Halaman ini berisi langkah-langkah untuk melakukan deployment portfolio ke **Vercel** (rekomendasi) atau platform serupa.

---

## 1. Persiapan Build Lokal

Sebelum deploy, pastikan build production berjalan lancar di mesin lokal Anda.

```bash
# Buat build production
npm run build

# Install server statis untuk test (opsional)
npm install -g serve

# Jalankan build lokal
serve -s build
```

---

## 2. Deployment ke Vercel (Rekomendasi)

Vercel adalah cara termudah untuk mendeploy aplikasi React (CRA).

### Langkah-langkah:
1. **Push ke GitHub**: Pastikan semua perubahan terbaru sudah di-commit dan di-push ke repository GitHub Anda.
2. **Login ke Vercel**: Buka [vercel.com](https://vercel.com) dan login menggunakan akun GitHub.
3. **Import Project**: 
   - Klik **"Add New"** > **"Project"**.
   - Pilih repository `Portfolio-v2` Anda.
4. **Configure Project**:
   - **Framework Preset**: Pilih **"Create React App"**.
   - **Root Directory**: `./`
5. **Environment Variables (SANGAT PENTING)**:
   Agar fitur GitHub Projects tidak terkena rate limit, Anda **WAJIB** menambahkan token GitHub.
   - Di bagian **Environment Variables**, tambahkan:
     - **Key**: `REACT_APP_GITHUB_TOKEN`
     - **Value**: `[Isi dengan Personal Access Token Anda]`
     *(Cara buat token: GitHub Settings > Developer Settings > Personal Access Tokens > Tokens classic)*.
6. **Deploy**: Klik tombol **"Deploy"**.

---

## 3. Optimasi Pasca Deploy

### Custom Domain
1. Di dashboard Vercel, buka tab **"Settings"** > **"Domains"**.
2. Masukkan domain Anda (contoh: `nailulghufron.com`).
3. Ikuti instruksi konfigurasi DNS yang diberikan Vercel.

### Analytics
Project ini sudah terintegrasi dengan `@vercel/analytics`.
1. Di dashboard Vercel, buka tab **"Analytics"**.
2. Klik **"Enable"** untuk mulai memantau pengunjung.

---

## 4. Pemeliharaan (Maintenance)

Setiap kali Anda melakukan `git push` ke branch `main`, Vercel akan otomatis melakukan build ulang dan memperbarui website Anda secara live.

---

## 📝 Troubleshooting

- **Data GitHub tidak muncul?** 
  Cek kembali apakah `REACT_APP_GITHUB_TOKEN` sudah diset dengan benar di dashboard Vercel dan pastikan token tersebut belum expired.
- **Build gagal karena peer dependency?**
  Project ini membutuhkan flag `--legacy-peer-deps`. Pastikan file `.npmrc` sudah ada di root project dengan isi `legacy-peer-deps=true`.
- **Error 404 saat refresh halaman?**
  Aplikasi ini menggunakan `react-router`. Vercel otomatis menangani ini jika menggunakan preset "Create React App". Jika tidak, buat file `vercel.json` di root:
  ```json
  {
    "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
  }
  ```
