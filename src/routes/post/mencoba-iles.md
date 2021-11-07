---
layout: post
judul: Mencoba Iles
kategori: Iles
tanggal: 2021-10-28
---

Sekarang, kita akan coba Iles.

Emang, ada apa dengan Iles? Kenapa kok aku tertarik untuk mencoba Iles?

Karena, Iles itu adalah Astro versi Vite.

Bukannya Astro nanti ada versi Vite?

Iya. Tapi untuk saat ini masih belum stabil. Jadi, aku mencoba yang stabil dulu aja.

Nah, Iles ini SSG mirip Astro, tapi dia pakai Vite. Langsung aja kita coba ya...

## Mulai Mencoba

Jadi, aku mulai dengan membuat folder `coba-iles`:

```bash
mkdir coba-iles
cd coba-iles
```

Kemudian, kita init npm:

```bash
pnpm init -y
```

Lalu, kita buat `.npmrc` yang isinya:

```toml
shamefully-hoist = true
```

Kita install Iles:

```bash
pnpm i -D iles
```

Lalu, buat `src/pages/index.vue` yang berisi:

```html
<template>
	<h1>Hello World...</h1>
</template>
```

Terus, kita edit `package.json`:

```diff
{
  "name": "coba-iles",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
+    "dev": "iles dev",
+    "build": "iles build"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "iles": "^0.4.4-1"
  }
}
```

Jalankan dengan `pnpm dev`. Hasilnya:

```
Hello World...
```

## Mengganti Judul

Ubah `src/pages/index.vue` menjadi:

```diff
<template>
+	<Head>
+		<title>Hello World</title>
+	</Head>
	
	<h1>Hello World...</h1>
</template>
```

## Menambahkan Svelte

Install dulu dengan:

```bash
pnpm i -D svelte @sveltejs/vite-plugin-svelte
```

Terus, buat `iles.config.ts`:

```typescript
import {defineConfig} from 'iles'

export default defineConfig({
	svelte: true
})
```

Kemudian, kita buat `src/components/Hai.svelte`:

```html
<h2>Hai...</h2>
```

Lalu, di `src/pages/index.vue`:

```diff
<template>
	<Head>
		<title>Hello World</title>
	</Head>
	
	<h1>Hello World...</h1>
+	<Hai client:load></Hai>
</template>
```

## Mencoba Uno CSS

Install dulu dengan:

```bash
pnpm i -D unocss
```

Kemudian, buat `vite.config.ts` yang isinya:

```typescript
import Unocss from 'unocss/vite'

export default {
  plugins: [
    Unocss()
  ]
}
```

Lalu, kita coba edit `src/pages/index.vue`:

```diff
<template>
	<Head>
		<title>Hello World</title>
	</Head>

+	<h1 class="text-center text-green-500">Hello World...</h1>
	<Hai client:load></Hai>
</template>
```