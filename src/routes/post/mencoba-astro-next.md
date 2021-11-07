---
layout: post
judul: Mencoba Astro Next
tanggal: 2021-10-28
kategori: Astro
---

Kali ini kita akan mencoba bermain dengan Astro versi 0.21 yang belum rilis. Apa sih bedanya dengan Astro versi stable? Tentu karena dia menggunakan bundler yang lain yaitu Vite. Nah, dengan adanya perubahan ini, kita akan bisa menambahkan fitur yang kaya bagi website yang kita buat karena Vite berisi dengan banyak plugin. 

Contohnya aja, Uno CSS yang lagi rame sekarang ini.

Jadi, kita coba deh Astro versi next ini walaupun belum stable. Maka, belum direkomendasikan buat project production. Kalau untuk nyoba-nyoba sih nggak papa.

Oh iya, untuk versi next ini, HMRnya belum bisa. Jadi, kita masih perlu reload-reload setelah mengedit file. Ya nggak papa sih. Namanya juga belum matang.

Langsung aja ya...

Pertama, kita buat dulu foldernya. Misalnya aja `coba-astro-next/`:

```bash
mkdir coba-astro-next
cd coba-astro-next
```

Lalu, kita init npm:

```bash
pnpm init -y
```

> Di sini, aku pakai pnpm. Kalau kamu pakai npm, ubah aja pnpm menjadi npm.

Maka, akan terbentuk `package.json`.

Kemudian, kita buat `.npmrc`:

```toml
shamefully-hoist = true
```

Terus, kita buat `astro.config.mjs`:

```javascript
export default ({
	renderers: []
})
```

Terus, kita install Astro next:

```bash
pnpm i -D astro@next--compiler
```

Lalu, kita buat `src/pages/index.astro`:

```html
---
const nama = 'World'
---

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
</head>
<body>
	<h1>Hello {nama}</h1>
</body>
</html>
```

Selesai...

## Menambahkan Svelte

Untuk menambahkan Svelte, install dulu renderer Svelte:

```bash
pnpm i -D @astrojs/renderer-svelte@next--compiler
```

Lalu, edit `astro.config.mjs`:

```diff
export default ({
+	renderers: ['@astrojs/renderer-svelte']
})
```

Kemudian, kita buat `src/pages/_hai.svelte`:

```html
<h2>Hai kamu...</h2>
```

Terus, kita edit `src/pages/index.astro`:

```diff
---
+ import Hai from './_hai.svelte'

const nama = 'World'
---

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Document</title>
</head>
<body>
	<h1>Hello {nama}</h1>
+	<Hai client:load></Hai>
</body>
</html>
```

Oh iya, perlu diingat bahwa **import Sveltenya harus diletakkan paling atas**. Soalnya, tadi aku coba letakkan dia di bawah const, malah 500 error.