---
judul: Belajar Astro dari Dasar
layout: post
tanggal: 2021-10-14
kategori: Astro
---

Pertama, siapkan dulu foldernya. Misalnya aja, namanya itu `latihan/`:

```bash
mkdir latihan
cd latihan
```

Oh iya, aku di sini pakai pnpm karena lebih cepat daripada npm. Kalau mau install pnpm:

```bash
npm i -g pnpm
```

Oke, lanjut ke tutorial tadi. Sekarang jalankan:

```bash
pnpm init -y
```

Sekarang, terbentuk `package.json`.

Buka `package.json` lalu tambahkan ini di dalam `scripts`:

```javascript
"dev": "astro dev",
"build": "astro build"
```

Sekarang, install Astro:

```bash
pnpm i -D astro --shamefully-hoist
```

Lalu buat `src/pages/index.astro`:

```html
---
const nama = "World"
---

<h1>Hello {nama}</h1>
```

Untuk menjalankan mode dev, jalankan:

```bash
pnpm dev
```

Lalu, kalau udah oke, mau dibuild, jalankan:

```bash
pnpm build
```

Maka, akan terbentuk folder `dist/`.
